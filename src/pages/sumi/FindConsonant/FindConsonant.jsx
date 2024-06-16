import React, { useState } from 'react';
import ProblemHeader from '../component/ProblemHeader';
import problemList from '../component/problemList'; // 문제 리스트 임포트
import style from '../../../component/Component.css';

import ProblemInfo from '../component/ProblemInfo';
import QuestionAnswer from '../component/QuestionAnswer';
import questionList from '../component/QuestionList';
import CheckResult from './CheckResult';
import ModalComponent from '../component/ModalComponent'

const consonant = [
    'ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];


function FindConsonant() {
    const [answers, setAnswers] = useState({ 'ㄷ': '', 'ㄹ': '', 'ㅂ': '', 'ㅍ': '' });
    const [result, setResult] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleAnswersChange = (newAnswers) => {
        setAnswers(newAnswers);
    };
    
    const handleResult = (result) => {
        setResult(result);
        setShowModal(true);
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };


    const handleCloseModal = () => {
        setShowModal(false);
        setSubmitted(false);
    };

    const itemType = 'consonant';

    return (
        <div className={style.wrapper}>
            <div className='container' style={style.container}>
                <ProblemHeader number={problemList.problem1.number} description={problemList.problem1.description} />
                <ProblemInfo imageSrc={problemList.problem1.imageSrc} items={consonant} itemType ={itemType}/>
                <QuestionAnswer 
                    problemSetKey={questionList.problem1.questions} 
                    onAnswersChange={handleAnswersChange} 
                    onSubmit={handleSubmit}
                    itemType ={itemType}
                />
                {submitted && <CheckResult answers={answers} setResult={handleResult}/>}
                <ModalComponent show={showModal} handleClose={handleCloseModal} result={result} next={"/sumi/2"}/>

            </div>
        </div>
    );
}

export default FindConsonant;
