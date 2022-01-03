import { Image } from 'Components/image';
import React from 'react';
import styles from './index.module.scss';
import design from 'Design';
import classnames from 'Utils/classnames';

function Footer() {
    return <footer className={classnames([design['box-border'], styles.footer])}>
        <Image className={styles.img} src="/face.jpg" alt="A picture of me" circle />
        <h3>A creation of Nick Barker</h3>
        <p className={styles.disclaimer}>
            All work is mine except for the icons which come from <a href="https://www.svgrepo.com/">SVG Repo</a>
            &nbsp;and the logos which are from <a href="https://wikipedia.com">Wikipedia</a>.
        </p>
        <p>Made using React, NextJS, SCSS and Typescript.</p>
        <p className={styles['platform-message-desktop']}>You should try it on Desktop too!</p>
        <p className={styles['platform-message-mobile']}>You should try it on Mobile too!</p>
        <p>Contact: <a href="mailto:cravingsleep@gmail.com">cravingsleep@gmail.com</a></p>
    </footer>;
}

export default Footer;
