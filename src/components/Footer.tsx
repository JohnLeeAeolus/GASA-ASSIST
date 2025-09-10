

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <nav className="footer-nav">
                    <a href="#">Company</a>
                    <a href="#">Resources</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div className="socials" aria-label="social links">
                    <a href="#" aria-label="Twitter">T</a>
                    <a href="#" aria-label="Instagram">I</a>
                    <a href="#" aria-label="LinkedIn">L</a>
                </div>
                <p className="tiny">© {year} GASA ASSIST. All rights reserved.</p>
            </div>
        </footer>
    )
}


