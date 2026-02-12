const Footer = () => {
    return (
        <footer className="bg-gray-900 py-4 mt-8">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <p className="text-muted mb-0">
                            &copy; {new Date().getFullYear()} Employee Management System. All rights reserved.
                        </p>
                        <p className="text-muted small mt-2">
                            Developed by Kuldeep Rathore
                        </p>
                    </div>
                </div></div>
        </footer>
    );
};

export default Footer;