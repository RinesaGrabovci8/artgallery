import React, { useState, useEffect } from 'react';
import Flower from '../Assets/flower.svg';

const Loader = ({ setShowLoader }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 5000);

        const fadeOutTimer = setTimeout(() => {
            setShowLoaderOpacity(0);
        }, 4000);

        return () => {
            clearTimeout(timer);
            clearTimeout(fadeOutTimer);
        };
    }, [setShowLoader]);

    const [showLoaderOpacity, setShowLoaderOpacity] = useState(1);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                opacity: showLoaderOpacity,
                transition: 'opacity 1s ease-in-out',
            }}
        >
            <img src={Flower} alt="Flower" style={{ animation: 'spin 2s linear infinite' }} />
        </div>
    );
};

export default Loader;
