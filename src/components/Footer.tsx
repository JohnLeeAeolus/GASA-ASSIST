

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
                    <a href="#" aria-label="Twitter" style={{ display: 'inline-block', marginRight: 12 }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M22.46 5.924c-.793.352-1.646.59-2.542.698a4.48 4.48 0 0 0 1.965-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.014-4.49 4.495 0 .352.04.695.116 1.022C7.728 9.37 4.1 7.6 1.67 4.905a4.49 4.49 0 0 0-.607 2.262c0 1.56.793 2.936 2.003 3.744a4.48 4.48 0 0 1-2.034-.563v.057c0 2.18 1.55 4.002 3.604 4.417a4.51 4.51 0 0 1-2.027.077c.572 1.785 2.23 3.084 4.195 3.12A8.99 8.99 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.77 0-.195-.004-.39-.013-.583A9.13 9.13 0 0 0 24 4.59a8.98 8.98 0 0 1-2.54.697z" fill="#1976d2"/>
                        </svg>
                    </a>
                    <a href="#" aria-label="Instagram" style={{ display: 'inline-block', marginRight: 12 }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="#1976d2" strokeWidth="2"/>
                            <circle cx="12" cy="12" r="5" stroke="#1976d2" strokeWidth="2"/>
                            <circle cx="17.5" cy="6.5" r="1.5" fill="#1976d2"/>
                        </svg>
                    </a>
                    <a href="#" aria-label="LinkedIn" style={{ display: 'inline-block' }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <rect x="2" y="2" width="20" height="20" rx="5" stroke="#1976d2" strokeWidth="2"/>
                            <path d="M7 10v6" stroke="#1976d2" strokeWidth="2" strokeLinecap="round"/>
                            <circle cx="7" cy="8" r="1" fill="#1976d2"/>
                            <path d="M11 16v-3a2 2 0 1 1 4 0v3" stroke="#1976d2" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M13 13h0" stroke="#1976d2" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </a>
                </div>
                <p className="tiny">© {year} GASA ASSIST. All rights reserved.</p>
            </div>
        </footer>
    )
}


