
import logo from '../assets/logo.jpg';
import { Link, useLocation } from 'react-router-dom';


export default function Header() {
    const location = useLocation();
    return (
            <header className="site-header" style={{ borderBottom: '2px solid #e0e4f6', padding: '0.5rem 0', width: '100%', background: '#fff' }}>
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2.5rem', boxSizing: 'border-box' }}>
                    {/* Logo and Nav */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2.2rem', flex: 1 }}>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', marginRight: '1.2rem' }}>
                            <img src={logo} alt="Logo" style={{ height: '36px', width: 'auto', marginRight: '0.5rem' }} />
                        </Link>
                        <nav className="main-nav" style={{ display: 'flex', gap: '1.2rem' }}>
                            <Link to="/" className="nav-link" style={{ color: location.pathname === '/' ? '#1976d2' : undefined, fontWeight: location.pathname === '/' ? 600 : 400 }}>Home</Link>
                            <Link to="/services" className="nav-link" style={{ color: location.pathname === '/services' ? '#1976d2' : undefined, fontWeight: location.pathname === '/services' ? 600 : 400 }}>Services</Link>
                            <Link to="/about" className="nav-link" style={{ fontWeight: 400 }}>About</Link>
                            <Link to="/contact" className="nav-link" style={{ fontWeight: 400 }}>Contact</Link>
                        </nav>
                    </div>
                    {/* Contact Us Button */}
                    <Link to="/contact" className="btn small" style={{ background: '#1976d2', color: '#fff', borderRadius: '7px', padding: '0.5rem 1.5rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 8px #1976d230' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.3rem' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.75C3 4.784 3.784 4 4.75 4h14.5c.966 0 1.75.784 1.75 1.75v12.5c0 .966-.784 1.75-1.75 1.75H4.75A1.75 1.75 0 013 18.25V5.75z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 6l-9 6-9-6" />
                        </svg>
                        Contact Us
                    </Link>
                </div>
            </header>
    );
}

