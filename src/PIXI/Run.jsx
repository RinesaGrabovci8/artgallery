import React, { useEffect } from 'react';
import { Application, Assets, Sprite, Transform } from 'pixi.js';

const PixiApp = () => {
    useEffect(() => {
        const initPixi = async () => {
            // Create a new application
            const app = new Application();

            // Initialize the application
            await app.init({
                width: window.innerWidth, // Set the width to the window width
                height: window.innerHeight,
                backgroundAlpha: 0,
                resizeTo:window
            });

            const canvas = app.view;
            // Append the application canvas to the document body
            document.body.appendChild(app.view);
            canvas.style.display = 'block';
            canvas.style.position = 'absolute';
            canvas.style.top = '0';
            canvas.style.left = '0';
            canvas.style.overflowX = 'hidden';

            // CSS style for icons
            const defaultIcon = 'url(\'https://pixijs.com/assets/bunny.png\'), auto';

            // Load textures


            // Add custom cursor styles
            app.renderer.events.cursorStyles.default = defaultIcon;
        };

        initPixi();

        // Clean up function
        return () => {
            // Remove Pixi application from the document body
            document.body.removeChild(document.body.lastChild);
        };
    }, []);

    return null;
};

export default PixiApp;
