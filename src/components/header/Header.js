import React, { useState } from 'react';
import './Header.css';
import MobileMenu from './mobile-menu/MobileMenu';
import WebMenu from './web-menu/WebMenu';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSideBar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className='header'>

      <div className='menu'>
        <div className='web-menu'>
          <WebMenu />
        </div>

        <div className='mobile-menu'>
          {!isSidebarOpen &&
            <div onClick={toggleSideBar} className='mobile-menu-open'>
              <i className="fi fi-rr-apps menu-icon"></i>
            </div>
          } 

          
          <MobileMenu 
            isOpen={isSidebarOpen} 
            close={toggleSideBar} 
          />
        </div>
      </div>
    </div>
  )
}

export default Header
