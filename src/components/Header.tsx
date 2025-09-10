import logo from '../assets/logo.jpg'
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    return (
        <header className="site-header" style={{ borderBottom: '2px solid #e0e4f6', padding: '0.5rem 0' }}>
            <div className="container header-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="logo-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <Link to="/">
                        <img src={logo} alt="GASA ASSIST Logo" className="logo" style={{ height: '40px', width: 'auto', marginRight: '1.5rem' }} />
                    </Link>
                    <nav className="main-nav" style={{ display: 'flex', gap: '1.5rem' }}>
                        <Link to="/" className="nav-link" style={{ color: location.pathname === '/' ? '#1976d2' : undefined, fontWeight: location.pathname === '/' ? 500 : undefined }}>Home</Link>
                        <Link to="/about" className="nav-link" style={{ color: location.pathname === '/about' ? '#1976d2' : undefined, fontWeight: location.pathname === '/about' ? 500 : undefined }}>About Us</Link>
                        <Link to="/services" className="nav-link" style={{ color: location.pathname === '/services' ? '#1976d2' : undefined, fontWeight: location.pathname === '/services' ? 500 : undefined }}>Services</Link>
                        <Link to="/contact" className="nav-link" style={{ color: location.pathname === '/contact' ? '#1976d2' : undefined, fontWeight: location.pathname === '/contact' ? 500 : undefined }}>Contact</Link>
                    </nav>
                </div>
                <Link to="/contact" className="btn small" style={{ background: '#1976d2', color: '#fff', borderRadius: '7px', padding: '0.5rem 1.2rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.3rem' }}><path strokeLinecap="round" strokeLinejoin="round" d="M2 5.5A2.5 2.5 0 014.5 3h15A2.5 2.5 0 0122 5.5v13a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 18.5v-13z" /><path strokeLinecap="round" strokeLinejoin="round" d="M22 5.5L12 13 2 5.5" /></svg>
                    Get a Quote
                </Link>
            </div>
        </header>
    )
}

