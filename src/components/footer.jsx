function Footer() {
    return (
        <footer className="page-footer blue accent-1">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()}
                    &nbsp;Vadim Danilov
                    <a className="grey-text text-lighten-4 right" href="https://github.com/catlabs1/React-SPA-Meal-App">
                        Repository
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
