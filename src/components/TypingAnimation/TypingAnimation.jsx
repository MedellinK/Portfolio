import { useState, useEffect } from 'react';
import './TypingAnimation.css';

const dynamicWords = ["Full Stack Web Developer.", "U.S. Army Veteran.", "Foodie.", "Video Game Enthusiast."];

const TypingAnimation = () => {
    const [index, setIndex] = useState(0);
    const [dynamicWord, setDynamicWord] = useState(dynamicWords[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setDynamicWord(dynamicWords[index]);
            setIndex((index + 1) % dynamicWords.length);
        }, 4000); // Change word every 2 seconds (adjust as needed)
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="column typing-animation-daddy">
            <div className="row set-text">
                Hello, My name is Kelvyn Medellin,
            </div>
            <div className="typing-animation row dynamic-word">
                I'm a<span className="palabra">{dynamicWord}</span>
            </div>
        </div>
    );
};

export default TypingAnimation;
