import React from 'react';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ paddingLeft: '2rem' }}>
            <a className="navbar-brand" href="#">
                {/* <img src="/logo.png" width="30" height="30" className="d-inline-block align-top" alt="" /> */}
                My Logo
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav" style={{ margin: '0 auto' }}>
                <ul className="navbar-nav mx-auto" style={{transform:"translateX(-5em)"}}>
                    <li className="nav-item">
                        <a className={`nav-link ${props.activeLink === 'home' ? 'active' : ''}`} href="#" onClick={() => props.handleLinkClick('home')}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${props.activeLink === 'products' ? 'active' : ''}`} href="#" onClick={() => props.handleLinkClick('products')}>Products</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${props.activeLink === 'services' ? 'active' : ''}`} href="#" onClick={() => props.handleLinkClick('services')}>Services</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${props.activeLink === 'contact' ? 'active' : ''}`} href="#" onClick={() => props.handleLinkClick('contact')}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
