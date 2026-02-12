import { useEffect, useRef, useState } from "react";
import apiClient from "../api/apiClient";

export type ApiHealth = {
  isApiUp: boolean;
  lastCheckedAt: number | null;
  errorMessage?: string;
};

type UseApiHealthOptions = {
  /**
   * Endpoint to ping, relative to API baseURL.
   * Default: "/employees" (already used by the app).
   */
  path?: string;
  /** Request timeout in ms. Default: 2500 */
  timeoutMs?: number;
  /** Poll interval in ms. Default: 30000 */
  pollIntervalMs?: number;
};

export function useApiHealthCheck(options: UseApiHealthOptions = {}): ApiHealth {
  const {
    path = "/",
    timeoutMs = 2500,
    pollIntervalMs = 30_000,
  } = options;

  const [status, setStatus] = useState<ApiHealth>({
    isApiUp: true,
    lastCheckedAt: null,
  });

  const inFlightRef = useRef(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    let intervalId: number | undefined;

    const checkOnce = async () => {
      if (inFlightRef.current) return;
      inFlightRef.current = true;

      try {
        await apiClient.get(path, { timeout: timeoutMs });
        if (!mountedRef.current) return;
        setStatus({
          isApiUp: true,
          lastCheckedAt: Date.now(),
        });
      } catch (err: unknown) {
        if (!mountedRef.current) return;
        const message =
          err instanceof Error ? err.message : "API is unreachable";
        setStatus({
          isApiUp: false,
          lastCheckedAt: Date.now(),
          errorMessage: message,
        });
      } finally {
        inFlightRef.current = false;
      }
    };

    // initial check
    void checkOnce();

    // poll
    intervalId = window.setInterval(() => {
      void checkOnce();
    }, pollIntervalMs);

    return () => {
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
  }, [path, pollIntervalMs, timeoutMs]);

  return status;
}

