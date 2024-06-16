import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Page4 from './Page4';
import D4_1 from './page4image/D4_1.PNG';
import D4_2 from './page4image/D4_2.PNG';
import D4_3 from './page4image/D4_3.PNG';
import D4_4 from './page4image/D4_4.PNG';
import D_X from './page4image/D_X.PNG';
import D_O from './page4image/D_O.PNG';
import './Page4List.css';

function Page4List() {
  const [answers, setAnswers] = useState(['', '', '', '']);
  const [textInputs, setTextInputs] = useState(['', '', '', '', '']);

  const correctTextInputs = [
    '적절한 운동을 합니다.',
    '다양한 식품',
    '식이섬유',
    '포화지방 고함량 식품',
    '비타민과 무기질',
  ];

  const handleAnswerClick = (answer, index) => {
    const newAnswers = [...answers];
    newAnswers[index - 1] = answer;
    setAnswers(newAnswers);

    const correctAnswers = ['X', 'O', 'O', 'X'];

    if (answer === correctAnswers[index - 1]) {
      alert('정답입니다!');
    } else {
      alert('오답입니다!');
    }
  };

  const handleInputChange = (e, index) => {
    const newTextInputs = [...textInputs];
    newTextInputs[index] = e.target.value;
    setTextInputs(newTextInputs);
  };

  const isCorrectTextInput = (index) => {
    return textInputs[index] === correctTextInputs[index];
  };

  const data = [
    {
      problum: (
        <>
          <div className="right-align">
            <img src={D4_1} alt="image1" />
          </div>
          <div>
            <img src={D4_2} alt="image2" />
            <p>앞서 기억해 둔 고지혈증과 식사요법을 떠올리며 O,X 문제를 풀어보세요(1~4).</p>
            <table className="quiz-table">
              <thead>
              </thead>
              <tbody>
                <tr>
                  <td className="quiz-cell">1.</td>
                  <td className="quiz-cell">고지혈증은 혈관 속 혈액이 잘 흐르는 현상이다.</td>
                  <td className="quiz-cell">
                    <button className={answers[0] === 'O' ? 'selected' : ''} onClick={() => handleAnswerClick('O', 1)}>
                      <img src={D_O} alt="O" />
                    </button>
                    <button className={answers[0] === 'X' ? 'selected' : ''} onClick={() => handleAnswerClick('X', 1)}>
                      <img src={D_X} alt="X" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="quiz-cell">2.</td>
                  <td className="quiz-cell">고지혈증은 혈액에 콜레스테롤이 필요 이상으로 많이 함유되어 있다.</td>
                  <td className="quiz-cell">
                    <button className={answers[1] === 'O' ? 'selected' : ''} onClick={() => handleAnswerClick('O', 2)}>
                      <img src={D_O} alt="O" />
                    </button>
                    <button className={answers[1] === 'X' ? 'selected' : ''} onClick={() => handleAnswerClick('X', 2)}>
                      <img src={D_X} alt="X" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="quiz-cell">3.</td>
                  <td className="quiz-cell">콜레스테롤이 혈액 내에 과다하게 많아지면 혈관 벽에 침착되어 동맥경화를 일으킨다.</td>
                  <td className="quiz-cell">
                    <button className={answers[2] === 'O' ? 'selected' : ''} onClick={() => handleAnswerClick('O', 3)}>
                      <img src={D_O} alt="O" />
                    </button>
                    <button className={answers[2] === 'X' ? 'selected' : ''} onClick={() => handleAnswerClick('X', 3)}>
                      <img src={D_X} alt="X" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="quiz-cell">4.</td>
                  <td className="quiz-cell">총 콜레스테롤의 정상범위는 300mg 이하이다.</td>
                  <td className="quiz-cell">
                    <button className={answers[3] === 'O' ? 'selected' : ''} onClick={() => handleAnswerClick('O', 4)}>
                      <img src={D_O} alt="O" />
                    </button>
                    <button className={answers[3] === 'X' ? 'selected' : ''} onClick={() => handleAnswerClick('X', 4)}>
                      <img src={D_X} alt="X" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )
    },
    {
      problum: (
        <>
          <div>
            <img src={D4_3} alt="image3" />
            <p>앞서 기억해 둔 식사요법을 적어보세요(1~5)</p>
            <p>1. 정상체중을 유지하고, <input type="text" value={textInputs[0]} onChange={(e) => handleInputChange(e, 0)} /> {isCorrectTextInput(0) && <span style={{ color: 'green' }}>정답</span>}</p>
            <p>2. <input type="text" value={textInputs[1]} onChange={(e) => handleInputChange(e, 1)} />을 골고루 먹습니다.{isCorrectTextInput(1) && <span style={{ color: 'green' }}>정답</span>}</p>
            <p>3. <input type="text" value={textInputs[2]} onChange={(e) => handleInputChange(e, 2)} />를 충분히 섭취합니다.{isCorrectTextInput(2) && <span style={{ color: 'green' }}>정답</span>}</p>
            <p>4. <input type="text" value={textInputs[3]} onChange={(e) => handleInputChange(e, 3)} />의 섭취를 줄입니다.{isCorrectTextInput(3) && <span style={{ color: 'green' }}>정답</span>}</p>
            <p>5. <input type="text" value={textInputs[4]} onChange={(e) => handleInputChange(e, 4)} />을 충분히 섭취합니다.{isCorrectTextInput(4) && <span style={{ color: 'green' }}>정답</span>}</p>
          </div>
        </>
      )
    },
    {
      problum: (
        <>
          <img src={D4_4} alt="image4" />
        </>
      )
    }
  ];

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <Page4 problum={item.problum} />
        </div>
      ))}
    </div>
  );
}

export default Page4List;
