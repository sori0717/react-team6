import React, { useEffect, useRef, useState } from 'react';
import './RandomCanvas.css';

const RandomCanvas = ({ items, imageSrc, canvasWidth = 600, canvasHeight = 400, itemType }) => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [context, setContext] = useState(null);
    const [shuffledItems, setShuffledItems] = useState([]);

    useEffect(() => {
        const generateRandomItems = (num) => {
            const shuffled = [];
            for (let i = 0; i < num; i++) {
                const randomIndex = Math.floor(Math.random() * items.length);
                shuffled.push(items[randomIndex]);
            }
            return shuffled;
        };

        const shuffleArray = (array) => {
            let shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        };

        if (itemType === 'consonant') {
            const shuffled = generateRandomItems(24);
            setShuffledItems(shuffled);
        } else if (itemType === 'words') {
            const shuffled = shuffleArray(items);
            setShuffledItems(shuffled);
        }

    }, [items, itemType]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => {
            ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
        };

        setContext(ctx);
    }, [imageSrc, canvasWidth, canvasHeight]);

    const handleMouseDown = () => {
        setIsDrawing(true);
    };

    const handleMouseUp = () => {
        setIsDrawing(false);
        context.beginPath();
    };

    const handleMouseMove = (event) => {
        if (!isDrawing) return;

        context.lineWidth = 5;
        context.lineCap = 'round';
        context.strokeStyle = 'red';

        const rect = canvasRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    };

    return (
        <div className="random-canvas">
            <canvas
                ref={canvasRef}
                className="drawing-canvas"
                width={canvasWidth}
                height={canvasHeight}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            />
            <div className={`items-${itemType}`}>
                {shuffledItems.map((item, index) => (
                    <span key={index} className={`item ${itemType}`}>
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default RandomCanvas;
