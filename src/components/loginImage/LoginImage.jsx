import React from 'react';
import ManWithCoffee from 'assets/images/ManWithCoffee.png';
import SmiledWoman from 'assets/images/SmiledWoman.png';
import WomanWithGlasses from 'assets/images/WomanWithGlasses.png';
import WorkingWoman from 'assets/images/WorkingWoman.png';
import WorkTable from 'assets/images/WorkTable.png';

function LoginImage() {
    const images = [ManWithCoffee, SmiledWoman, WomanWithGlasses, WorkingWoman, WorkTable];
    const randomImage = Math.floor(Math.random() * images.length);

    return (
        <>
            <img src={images[randomImage]} alt="login" height="500" />
        </>
    );
}

export default LoginImage;
