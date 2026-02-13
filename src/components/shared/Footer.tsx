const Footer = () => {
    return (
            <footer className="bg-dark text-light">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-12">
                            <p className="mb-0">
                                &copy; {new Date().getFullYear()} Employee Management System. All rights reserved.
                            </p>
                            <p className="small mt-2">
                                Developed by Kuldeep Rathore
                            </p>
                        </div>
                    </div></div>
            </footer>
    );
};

export default Footer;