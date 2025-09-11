

import logo from '../assets/logo.jpg';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

export default function Header() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = React.useState(false);

    // Close menu on route change
    React.useEffect(() => { setMenuOpen(false); }, [location.pathname]);

    return (
        <header className="site-header" style={{ borderBottom: '2px solid #e0e4f6', padding: '0.5rem 0', width: '100%', background: '#fff', position: 'relative', zIndex: 20 }}>
            <div className="header-inner" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2.5rem', boxSizing: 'border-box', position: 'relative' }}>
                {/* Logo */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', marginRight: '2.2rem', textDecoration: 'none' }}>
                    <img src={logo} alt="Logo" style={{ height: '36px', width: 'auto', marginRight: '0.5rem' }} />
                    <span style={{ fontWeight: 800, fontSize: '1.35rem', color: '#222', letterSpacing: '0.5px' }}>GASA ASSIST</span>
                </Link>
                {/* Hamburger for mobile */}
                <button
                    className="nav-toggle"
                    aria-label="Open navigation menu"
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 8,
                        marginLeft: 'auto',
                    }}
                    onClick={() => setMenuOpen((v) => !v)}
                >
                    <span style={{ display: 'block', width: 28, height: 3, background: '#1976d2', borderRadius: 2, marginBottom: 5 }} />
                    <span style={{ display: 'block', width: 28, height: 3, background: '#1976d2', borderRadius: 2, marginBottom: 5 }} />
                    <span style={{ display: 'block', width: 18, height: 3, background: '#1976d2', borderRadius: 2 }} />
                </button>
                {/* Nav and Button together */}
                <div
                    className={`nav-group${menuOpen ? ' open' : ''}`}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.2rem',
                        position: 'relative',
                    }}
                >
                    <nav className="main-nav" style={{ display: 'flex', gap: '1.2rem' }}>
                        <Link to="/" className="nav-link" style={{ color: location.pathname === '/' ? '#1976d2' : undefined, fontWeight: location.pathname === '/' ? 600 : 400 }}>Home</Link>
                        <Link to="/services" className="nav-link" style={{ color: location.pathname === '/services' ? '#1976d2' : undefined, fontWeight: location.pathname === '/services' ? 600 : 400 }}>Services</Link>
                        <Link to="/about" className="nav-link" style={{ fontWeight: 400 }}>About</Link>
                        <Link to="/contact" className="nav-link" style={{ fontWeight: 400 }}>Contact</Link>
                    </nav>
                    <Link to="/contact" className="btn small" style={{ background: '#1976d2', color: '#fff', borderRadius: '7px', padding: '0.5rem 1.5rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 8px #1976d230', marginLeft: '1.2rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.3rem' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.75C3 4.784 3.784 4 4.75 4h14.5c.966 0 1.75.784 1.75 1.75v12.5c0 .966-.784 1.75-1.75 1.75H4.75A1.75 1.75 0 013 18.25V5.75z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 6l-9 6-9-6" />
                        </svg>
                        Contact Us
                    </Link>
                </div>
            </div>
            {/* Mobile nav overlay */}
                        <style>{`
                                @media (max-width: 900px) {
                                    .nav-toggle {
                                        display: block !important;
                                    }
                                    .nav-group {
                                        display: none !important;
                                    }
                                    .nav-group.open {
                                        display: flex !important;
                                        flex-direction: column;
                                        position: fixed;
                                        top: 64px;
                                        left: 0;
                                        width: 100vw;
                                        background: #fff;
                                        box-shadow: 0 8px 32px #1976d230;
                                        z-index: 100;
                                        padding: 1.2rem 0 1.5rem 0;
                                        align-items: flex-start;
                                        gap: 1.2rem;
                                        animation: slideDown 0.2s cubic-bezier(0.23, 1, 0.32, 1);
                                    }
                                    @keyframes slideDown {
                                        from { opacity: 0; transform: translateY(-16px); }
                                        to { opacity: 1; transform: none; }
                                    }
                                    .main-nav {
                                        flex-direction: column !important;
                                        gap: 1.2rem !important;
                                        width: 100%;
                                    }
                                    .btn.small {
                                        width: 90vw;
                                        margin-left: 0 !important;
                                    }
                                }
                        `}</style>
        </header>
    );
}

