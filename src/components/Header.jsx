import './Header.css';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const navLinks = [
    { title: 'About', href: '/' },
    { title: 'Skills', href: '/' },
    { title: 'Experience', href: '/' },
    { title: 'Blog', href: '/' },
    { title: 'Contact', href: '/' },
  ];

  // For framer motion animation
  const mobileMenuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.4,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const handleMenuClick = () => {
    setMobileMenuActive((prevState) => !prevState);
  };

  return (
    <header className="section-header">
      <div className="icons">
        {!mobileMenuActive && (
          <i
            className="bx bx-menu"
            id="menu-icon"
            onClick={handleMenuClick}
          ></i>
        )}
        {mobileMenuActive && (
          <i className="bx bx-x" id="close-icon" onClick={handleMenuClick}></i>
        )}
      </div>
      <nav className="main-nav">
        <ul className="main-nav-list">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a className="main-nav-link" href={link.href}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <AnimatePresence>
        {mobileMenuActive && (
          <motion.nav
            className="mobile-nav"
            variants={mobileMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <ul className="mobile-nav-list">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a className="mobile-nav-link" href={link.href}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
