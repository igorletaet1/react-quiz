import React, { useState } from "react";
const Quiz = () => {




    const questions = [
        {
            title: '2 + 2',
            variants: ['3', '4', '5'],
            correct: 1,
        },
        {
            title: '3*3',
            variants: ['9', '12', '10'],
            correct: 0,
        },
        {
            title: '8/2',
            variants: ['6','2','4'],
            correct: 2,
        },
    ];



    function Result({ correct }) {
        return (
            <div className="result">
                <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
                <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
               <a href="/"><button>Попробовать снова</button></a>
            </div>
        );
    }

    function Game({ question, onClickVariant, step }) {
        const percent = Math.round((step / questions.length) * 100)
        console.log(percent);
        return (
            <>
                <div className="progress">
                    <div style={{ width: `${percent}%` }} className="progress__inner"></div>
                </div>
                <h1>{question.title}</h1>
                <ul>
                    {question.variants.map((text, index) => (<li onClick={() => onClickVariant(index)} key={text}>{text}</li>))}
                </ul>
            </>
        );
    }
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
    const question = questions[step];
    const onClickVariant = (index) => {
        console.log(step, index)
        setStep(step + 1)

        if (index === question.correct) {
            setCorrect(correct + 1)
        }
    }

    return (

        <div className="quiz">
            {step !== questions.length ? (<Game step={step} question={question} onClickVariant={onClickVariant} />)
                :
                (<Result correct={correct} />)}
        </div>
    );

}

export default Quiz;