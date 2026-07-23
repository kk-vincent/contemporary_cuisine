import React from 'react';
import Nav_link from '../../components/header/Nav';
import Title from '../../components/header/Title';


const Nav_Link = ({ className = '', onHomeOpen,onMenuOpen,onAboutOpen }) => {
    return (
        <div className={`row row-col-2 mx-0 px-4 py-2 ${className}`} style={{ background: 'var(--nav-background)' }}>
            <div className='col'><Title /></div>
            <div className='col'><Nav_link onHomeOpen={onHomeOpen} onMenuOpen={onMenuOpen} onAboutOpen={onAboutOpen} /></div>
        </div>
    );
};

export default Nav_Link;