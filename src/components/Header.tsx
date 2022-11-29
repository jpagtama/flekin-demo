import React, { useState } from 'react';
import { useEffect } from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, [])

    const animateHandler = () => {
        setAnimate(true);
    }

    const animationEndHandler = () => {
        setAnimate(false);
    }

    return (
        <header className={styles.header}>
            <h1 onClick={animateHandler} >
                {animate ?
                    <>
                        <span>F</span>
                        <span>l</span>
                        <span>e</span>
                        <span>k</span>
                        <span>i</span>
                        <span onAnimationEnd={animationEndHandler}>n</span>
                    </>
                    :
                    "Flekin"
                }
            </h1>
        </header>
    )
}

export default Header