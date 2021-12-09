import React from 'react';
import styles from './index.module.scss';

type CarouselProps = {
    children: React.ReactNode
}

function Carousel(props: CarouselProps) {
    return <section className={styles.carousel}>
        {React.Children.map(props.children, child => {
            return <div className={styles['carousel-item']}>
                {child}
            </div>;
        })}
    </section>;
}


export default Carousel;
