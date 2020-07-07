import React, { useState } from 'react';
import '../styles/pagination.css';

const Pagination = (props) => {
    const [disable__btn, setDisable__btn] = useState(false);

    const handleClick = (action) => {
        switch (action) {
            case 'first':
                props.actions(action);
                break;

            case 'previous':
                props.actions(action);
                break;

            case 'next':
                props.actions(action);
                break;

            case 'last':
                props.actions(action);
                break;

            default:
                break;
        }
        setDisable__btn(true);
        setTimeout(() => {
            setDisable__btn(false);
        }, 500);
    };

    return (
        <div className="pagination__btns">
            <button
                type="button"
                className="page__btn"
                onClick={() => {
                    if (disable__btn) {
                        return;
                    }
                    handleClick('first');
                }}
                disabled={disable__btn}
            >
                <i className="fas fa-angle-double-left"></i>
            </button>
            <button
                type="button"
                className="page__btn"
                onClick={() => {
                    if (disable__btn) {
                        return;
                    }
                    handleClick('previous');
                }}
                disabled={disable__btn}
            >
                <i className="fas fa-chevron-left"></i>
            </button>
            {renderItems(props.actions, props.numOfItems)}
            <button
                type="button"
                className="page__btn"
                onClick={() => {
                    if (disable__btn) {
                        return;
                    }
                    handleClick('next');
                }}
                disabled={disable__btn}
            >
                <i className="fas fa-chevron-right"></i>
            </button>
            <button
                type="button"
                className="page__btn"
                onClick={() => {
                    if (disable__btn) {
                        return;
                    }
                    handleClick('last');
                }}
                disabled={disable__btn}
            >
                <i className="fas fa-angle-double-right"></i>
            </button>
        </div>
    );
};

const renderItems = (actions, numItems) => {
    let items = [];
    let item;

    for (let index = 0; index < numItems; index++) {
        // Check if loop has reached the 5th item and if the number of items is greater than 10
        if (numItems > 10 && index === 5) {
            // If loop has reached the 5th item then add a skip button
            item = (
                <button type="button" className="page__btn" key={index + 1}>
                    {' '}
                    ...{' '}
                </button>
            );
            // Skip the loop to the last 5 items to render only the last 5 buttons
            index = numItems - 6;
        } else {
            // Rendering of buttons
            item = (
                <button
                    type="button"
                    className="page__btn"
                    key={index + 1}
                    onClick={() => actions(index)}
                >
                    {' '}
                    {index + 1}{' '}
                </button>
            );
        }
        items.push(item);
    }
    return items;
};

export default Pagination;
