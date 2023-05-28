// We never installed React, but when we enqueued the js on the front end, we unclouded
// wp-element as a dependency. This has a WordPress version of React in it. When it sees
// that we are trying to load react or reactDOM, it loads its own, and we never have to
// download it separately. Witch is cool.

import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import "./frontend.scss";

const divsToUpdate = document.querySelectorAll(".paying-attention-update-me");

divsToUpdate.forEach(function (div) {
    // Grab the json that we hid with css in index.php
    // JSON.parse() is a method that all browsers have. Feed it a string and the browser will turn it into usable JSON.
    // Get the JSON string from the current div's innerHTML of the pre tag.
    const data = JSON.parse(div.querySelector("pre").innerHTML);
    // Use that json in our component we made.
    // the ... syntax deconstructs the array given and grabs every element.
    ReactDOM.render(<Quiz {...data}/>, div);
    div.classList.remove("paying-attention-update-me");
})

// props is industry standard naming convention.
// It's just anything we are passing into the component.
function Quiz(props) {
    // State is used to indicate the current state of the app.
    // We never directly mutate it.
    // We just give it a new value.
    // When ever the state changes, React re-runs your function.
    // useState function returns an array with two items.
    // 1st one (in our case isCorrect) gives you easy access to that piece of state and value.
    // 2nd one (in our case setIsCorrect) is a function you can call that lets us change the state.
    const [isCorrect, setIsCorrect] = useState(undefined);

    // 1st argument is a function we want to run at a certain time.
    // 2nd argument is WHEN we want the 1st argument function to run. What properties or piece of state are we watching
    // for changes? In our case, when isCorrect changes, we want to set a time-out and wait for the animation to end,
    // then change isCorrect back to undefined so that the state will change when we get a new wrong answer.
    const [isCorrectDelayed, setIsCorrectDelayed] = useState(undefined);
    useEffect(() => {
        if (isCorrect === false) {
            setTimeout(() => {
                setIsCorrect(undefined);
            }, 2600)
        }

        if (isCorrect === true) {
            setTimeout(() => {
                setIsCorrectDelayed(true);
            }, 1000)
        }
    }, [isCorrect])
    function handleAnswer(index) {
        // Never search through and change the DOM directly in React.
        // You need to use the "internal state" to let the JSX "REACT" to that state.
        if (index === props.correctAnswer) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    }

    return (
        <div className="paying-attention-frontend" >
           <p>{props.question}</p>
            <ul>
                {props.answers.map(function(answer, index) {
                    // If they got it right, then we want to stop reacting to button pushes and change the css.
                    return (
                    <li className={(isCorrectDelayed === true && index === props.correctAnswer ? "no-click" : "") + (isCorrectDelayed === true && index !== props.correctAnswer ? "fade-incorrect" : "")} onClick={isCorrect === true ? undefined : () => handleAnswer(index)}>
                        {isCorrectDelayed === true && index === props.correctAnswer && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                <path
                                    d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                <path
                                    d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                            </svg>
                        )}
                        {isCorrectDelayed === true && index !== props.correctAnswer && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        )}
                        {answer}
                    </li>)
                })}
            </ul>
            <div className={"correct-message" + ( isCorrect === true ? " correct-message--visible" : "" )}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="bi bi-emoji-smile" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path
                        d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                </svg>
                <p>That is correct!</p>
            </div>
            <div className={"incorrect-message" + ( isCorrect === false ? " correct-message--visible" : "" )}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="bi bi-emoji-frown" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path
                        d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                </svg>
                <p>Sorry! Try again.</p>
            </div>
        </div>
    )
}