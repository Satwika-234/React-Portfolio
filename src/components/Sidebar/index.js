import { Link, NavLink } from "react-router-dom";
import logoS from '../../assets/images/logo-s.png';
import logoSubtitle from '../../assets/images/logo_sub.png';
import { useState } from "react";
import './index.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome,faUser,faClose, faEnvelope,faTrophy, faBook, faBars} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Sidebar() {
  const [showNav,setShowNav] = useState(false);

  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={logoS} alt = 'logo'></img>
        </Link>
        <nav className={showNav===true ? 'mobile-show' : ''}>
          <NavLink onClick={() =>setShowNav(false)} exact='true' activeclassname='active' to='/'>
             <FontAwesomeIcon icon={faHome} color='#fff'></FontAwesomeIcon>
          </NavLink>

          <NavLink onClick={() =>setShowNav(false)} exact='true' activeclassname='active' className='about-link' to='/about'>
             <FontAwesomeIcon icon={faUser} color='#fff'></FontAwesomeIcon>
          </NavLink>

          <NavLink onClick={() =>setShowNav(false)} exact='true' activeclassname='active' className='skills-link' to='/skills'>
             <FontAwesomeIcon icon={faTrophy} color='#fff'></FontAwesomeIcon>
          </NavLink>

          <NavLink onClick={() =>setShowNav(false)} exact='true' activeclassname='active' className='projects-link' to='/projects'>
             <FontAwesomeIcon icon={faBook} color='#fff'></FontAwesomeIcon>
          </NavLink>

          <NavLink onClick={() =>setShowNav(false)} exact='true' activeclassname='active' className='contact-link' to='/contact'>
             <FontAwesomeIcon icon={faEnvelope} color='#fff'></FontAwesomeIcon>
          </NavLink>
          <FontAwesomeIcon onClick={() => setShowNav(false)} size="3x" icon={faClose} color="#ffd700" className="close-icon"/>
        </nav>

        <ul>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.google.com'>
              <FontAwesomeIcon icon={faLinkedin} color='#fff' />
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.github.com'>
              <FontAwesomeIcon icon={faGithub} color='#fff' />
            </a>
          </li>
        </ul>
        <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color='#ffd700' size="3x" className="hamburger-icon"/>
    </div>
  )
}

export default Sidebar;
