import React, { useState, useRef } from 'react';
import StackedCards from './components/StackedCards';

import './styles/app.css';

const App = () => {
    const [direction, setDirection] = useState('right');
    const [paginationValue, setpaginationValue] = useState(true);
    const [visibleCards, setvisibleCards] = useState(3);
    const base3Card = useRef(null);

    const triggerIntroAnimation = (direction) => {
        let element = base3Card.current;
        let moveX = 0;
        let moveY = 0;
        let rotationValue = 0;

        switch (direction) {
            case 'left':
                moveX = -60;
                moveY = -5;
                rotationValue = -10;
                break;
            case 'right':
                moveX = 60;
                moveY = -5;
                rotationValue = 10;
                break;
            case 'up':
                moveY = -65;
                break;
            case 'down':
                moveY = 55;
                break;
            default:
                break;
        }
        element.style.transform =
            'scale(1) translateX(' +
            moveX +
            'px) translateY(' +
            moveY +
            'px) translateZ(0px) rotate(' +
            rotationValue +
            'deg)';
    };

    const triggerOutroAnimation = () => {
        let element = base3Card.current;
        element.style.transform =
            'scale(1) translateX(0px) translateY(0px) translateZ(0) rotate(0deg)';
    };

    return (
        <>
            <h1 className="header">React Stacked Cards</h1>
            <div className="container">
                <div className="stackoptions">
                    <div className="swipeDirection">
                        <p>Change Swipe direction</p>
                        <div className="directions__container">
                            <div className="baseCard">
                                <div className="base1 card"></div>
                                <div className="base2 card"></div>
                                <div
                                    className="base3 card"
                                    ref={base3Card}
                                ></div>
                            </div>
                            <div className="leftDirection">
                                <label>
                                    <input type="radio" name="radio" />
                                    <div
                                        className="left card"
                                        onMouseEnter={() => {
                                            triggerIntroAnimation('left');
                                        }}
                                        onMouseLeave={() => {
                                            triggerOutroAnimation();
                                        }}
                                        onClick={() => setDirection('left')}
                                    ></div>
                                </label>
                            </div>
                            <div className="rightDirection">
                                <label>
                                    <input
                                        type="radio"
                                        name="radio"
                                        defaultChecked={direction === 'right'}
                                    />
                                    <div
                                        className="right card"
                                        onMouseEnter={() => {
                                            triggerIntroAnimation('right');
                                        }}
                                        onMouseLeave={() => {
                                            triggerOutroAnimation();
                                        }}
                                        onClick={() => setDirection('right')}
                                    ></div>
                                </label>
                            </div>
                            <div className="upDirection">
                                <label>
                                    <input type="radio" name="radio" />
                                    <div
                                        className="up card"
                                        onMouseEnter={() => {
                                            triggerIntroAnimation('up');
                                        }}
                                        onMouseLeave={() => {
                                            triggerOutroAnimation();
                                        }}
                                        onClick={() => setDirection('up')}
                                    ></div>
                                </label>
                            </div>
                            <div className="downDirection">
                                <label>
                                    <input type="radio" name="radio" />
                                    <div
                                        className="down card"
                                        onMouseEnter={() => {
                                            triggerIntroAnimation('down');
                                        }}
                                        onMouseLeave={() => {
                                            triggerOutroAnimation();
                                        }}
                                        onClick={() => setDirection('down')}
                                    ></div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="paginationToggle">
                        <p>Pagination</p>
                        <label className="toggleswitch">
                            <input
                                type="checkbox"
                                onClick={() =>
                                    setpaginationValue(!paginationValue)
                                }
                                defaultChecked={paginationValue}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="visibleCardsInput">
                        <label htmlFor="visiblecards">
                            <p>Visible Cards (3 - 5):</p>
                        </label>

                        <div className="input__container">
                            <button
                                className="dec__btn"
                                onClick={() => {
                                    if (visibleCards > 3) {
                                        setvisibleCards(visibleCards - 1);
                                    }
                                }}
                            >
                                -
                            </button>
                            <input
                                type="text"
                                className="visiblecards__inputfield"
                                name="visiblecards"
                                maxLength={2}
                                value={visibleCards}
                                onChange={(e) => this.inputChangedHandler(e)}
                            />
                            <button
                                className="inc__btn"
                                onClick={() => {
                                    if (visibleCards < 5) {
                                        setvisibleCards(visibleCards + 1);
                                    }
                                }}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mainstack__container">
                    <StackedCards
                        swipeAnimationDirection={direction}
                        pagination={paginationValue}
                        carousel={true}
                        visibleCards={visibleCards}
                    >
                        <div className="1 content" key={0}>
                            <div className="placeholder">
                                <h1>1</h1>
                            </div>
                        </div>
                        <div className="2 content" key={1}>
                            <div className="placeholder">
                                <h1>2</h1>
                            </div>
                        </div>
                        <div className="3 content" key={2}>
                            <div className="placeholder">
                                <h1>3</h1>
                            </div>
                        </div>
                        <div className="4 content" key={3}>
                            <div className="placeholder">
                                <h1>4</h1>
                            </div>
                        </div>
                        <div className="5 content" key={4}>
                            <div className="placeholder">
                                <h1>5</h1>
                            </div>
                        </div>
                        <div className="6 content" key={5}>
                            <div className="placeholder">
                                <h1>6</h1>
                            </div>
                        </div>
                    </StackedCards>
                </div>
            </div>
        </>
    );
};

export default App;
