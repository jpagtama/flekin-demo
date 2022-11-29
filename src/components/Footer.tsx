import React from 'react';
import { IconContext } from 'react-icons/lib';
import { FaGithub, FaNpm, FaReact, FaJsSquare } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <IconContext.Provider value={{ color: "var(--primary-color)", size: "2rem" }}>
                <div style={{ "display": "flex", "gap": "1rem" }}>
                    <FaGithub />
                    <FaReact />
                    <FaJsSquare />
                    <FaNpm />
                </div>
            </IconContext.Provider>
            <a className={styles.link} href="https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests" target="_blank" rel="noopener noreferrer">About Flesch-Kincaid</a>
            <a className={styles.link} href="https://github.com/jpagtama/flekin" target="_blank" rel="noopener noreferrer" >View the code on GitHub</a>
            <span><a className={styles.link} href="https://julianpagtama.com" target="_blank" rel="noopener noreferrer" >Julian Pagtama</a> &copy; {new Date().getFullYear()}</span>
        </footer>
    )
}

export default Footer;