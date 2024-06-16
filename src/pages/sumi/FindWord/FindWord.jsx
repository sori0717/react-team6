import React, { useState } from 'react';
import ProblemHeader from '../component/ProblemHeader';
import problemList from '../component/problemList'; // 문제 리스트 임포트
import style from '../../../component/Component.css';
import ProblemInfo from '../component/ProblemInfo';
import QuestionAnswer from '../component/QuestionAnswer';
import questionList from '../component/QuestionList';
import ModalComponent from '../component/ModalComponent'
import CheckResultWord from './CheckResultWord';

const words = [
    '동료', '스승', '뉴스', '편지', '동무', '안부', '교우', '연애', '사모', '은사', '애정', '사부','교원', '기별',
    '교사', '연정', '붕우', '친애', '신문', '벗'
];

function FindWord() {
    const [submitted, setSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [result, setResult] = useState('');
    const [answers, setAnswers] = useState({ '사랑': '', '친구': '', '선생': '', '소식': '' });
    const handleAnswersChange = (newAnswers) => {
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };

    const handleResult = (result) => {
        setResult(result);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSubmitted(false);
    };


    const itemType = 'words';
    return (
        <div className={style.wrapper}>
            <div className='container' style={style.container}>
                <ProblemHeader number={problemList.problem2.number} description={problemList.problem2.description} />
                <ProblemInfo imageSrc={problemList.problem2.imageSrc} items={words} itemType ={itemType}/>
                <QuestionAnswer 
                    problemSetKey={questionList.problem2.questions} 
                    onAnswersChange={handleAnswersChange} 
                    onSubmit={handleSubmit}
                    itemType ={itemType}
                />
                {submitted && <CheckResultWord answers={answers} setResult={handleResult}/>}
                <ModalComponent show={showModal} handleClose={handleCloseModal} result={result} next={"/kichan"}/>

            </div>
        </div>
    );
}

export default FindWord;