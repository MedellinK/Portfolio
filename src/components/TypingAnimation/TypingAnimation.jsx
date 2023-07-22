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
        }, 5000); // Change word every 2 seconds (adjust as needed)
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="column">
            <div className="row">
                Hello, My name is Kelvyn Medellin, I'm a
            </div>
            <div className="typing-animation row dynamic-word">
                {dynamicWord}
            </div>
        </div>
    );
};

export default TypingAnimation;
