import {useState} from "react";
import React from "react";


const LessonStyleThree = ({words}) => {

    const [showDogContent, setShowDogContent] = useState(false);
    const [showCatContent, setShowCatContent] = useState(false);
    const [showFishContent, setShowFishContent] = useState(false);
    const [showDuckContent, setShowDuckContent] = useState(false);
    const [showPenguinContent, setShowPenguinContent] = useState(false);
    const [showDinoContent, setShowDinoContent] = useState(false);
    const [showPigContent, setShowPigContent] = useState(false);
    const [showFrogContent, setShowFrogContent] = useState(false);


    return (
        <>
        <h2>Animals Lesson</h2>
        <p>The <span onMouseEnter={() => setShowDogContent(true)}
                     onMouseLeave={() => setShowDogContent(false)}>
                       {showDogContent ? (words.dog.english) : (words.dog.translation)}
                     </span> chases a ball
        </p>
        
        <p>The <span
                    onMouseEnter={() => setShowCatContent(true)}
                    onMouseLeave={() => setShowCatContent(false)}>
                      {showCatContent ? (words.cat.english) : (words.cat.translation)}
                </span> is asleep
        </p>
        
        <p>The <span
                    onMouseEnter={() => setShowFishContent(true)}
                    onMouseLeave={() => setShowFishContent(false)}>
                      {showFishContent ? (words.fish.english) : (words.fish.translation)}
                </span> swims in the sea
        </p>
        
        <p>The <span
                    onMouseEnter={() => setShowDuckContent(true)}
                    onMouseLeave={() => setShowDuckContent(false)}>
                      {showDuckContent ? (words.duck.english) : (words.duck.translation)}
                </span> swims on the pond
        </p>
        
        <p>The <span
                    onMouseEnter={() => setShowPenguinContent(true)}
                    onMouseLeave={() => setShowPenguinContent(false)}>
                      {showPenguinContent ? (words.penguin.english) : (words.penguin.translation)}
                </span> is eating fish
        </p>
        
        <p>The <span
                    onMouseEnter={() => setShowDinoContent(true)}
                    onMouseLeave={() => setShowDinoContent(false)}>
                      {showDinoContent ? (words.dinosaur.english) : (words.dinosaur.translation)}
                </span> is frightening
        </p>
        
        <p>The <span
                    onMouseEnter={() => setShowPigContent(true)}
                    onMouseLeave={() => setShowPigContent(false)}>
                      {showPigContent ? (words.pig.english) : (words.pig.translation)}
                </span> lives on the farm
        </p>
        
        
        <p>The <span
                    onMouseEnter={() => setShowFrogContent(true)}
                    onMouseLeave={() => setShowFrogContent(false)}>
                      {showFrogContent ? (words.frog.english) : (words.frog.translation)}
                </span> goes "Croak"
        </p>
        </>

    );

}

export default LessonStyleThree;