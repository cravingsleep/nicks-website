import React from 'react';
import design from 'Design';
import Purchased from 'Components/purchased';

function Inventory() {
    return <article className={design['box-border']}>
        <h3>Purchased</h3>
        <Purchased />
    </article>;
}

export default Inventory;
