import { CircleImage } from 'Components/image';
import React from 'react';
import styles from './index.module.scss';

function Footer() {
    return <footer className={styles.footer}>
        <CircleImage className={styles.img} src="/face.jpg" alt="A picture of me" />
        <h3>A creation of Nick Barker</h3>
        <p className={styles.disclaimer}>
            All work is mine except for the icons which come from <a href="https://www.svgrepo.com/">SVG Repo</a>
            &nbsp;and the logos which are from <a href="https://wikipedia.com">Wikipedia</a>.
        </p>
        <p>Made using React, NextJS, SCSS and Typescript.</p>
        {/* {isMobile && <p>You should try it on Desktop too!</p>}
        {!isMobile && <p>You should try it on Mobile too!</p>} */}
        <p>Contact: <a href="mailto:cravingsleep@gmail.com">cravingsleep@gmail.com</a></p>
    </footer>;
}

export default Footer;
