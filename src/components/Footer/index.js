import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './footer.css';

export default function Footer() {
    return(
        <footer className='footer'>
            
            <hr className='hr-footer'></hr>

            <div className='div-footer'>

                <span className='title-footer'>Designed by Walter Fabri</span>
                
                <div className='div-icons'>
                    <Link to="https://github.com/fabriwalter" className='github-icon'><FaGithub /></Link>
                    <Link to="https://www.linkedin.com/in/walter-fabri-3426638a/" className='linkedin-icon'><FaLinkedin /></Link>
                </div>
            </div>
            
        </footer>
    );
}