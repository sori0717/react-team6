import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Page3 from './Page3';
import C4_1 from './page3image/C4_1.PNG';
import C4_2 from './page3image/C4_2.PNG';

const initialData = [
  {
    image2: C4_1,
    image: C4_2,
    problumtext: '다음 속담의 틀린 부분을 바르게 고친 후 따라 읽어보세요'
  },
  {
    problum: '오는말이 고와야 가는 말이 곱다.',
    answer: "오는 말이 고와야 가는 말이 곱다."
  },
  {
    problum: '고래는 게 편.',
    answer: "가재는 게 편."
  },
  {
    problum: '소똥도 약에 쓰려면 없다.',
    answer: "소 똥도 약에 쓰려면 없다."
  },
  {
    problum: '노력 끝에 낙이 온다.',
    answer: "고생 끝에 낙이 온다."
  },
  {
    problum: '소나기에 옷 젖는 줄 모른다.',
    answer: "가랑비에 옷 젖는 줄 모른다."
  },
];

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function Page3List() {
  const [data, setData] = useState([]);
  const [answers, setAnswers] = useState(new Array(initialData.length).fill(""));

  useEffect(() => {
    const shuffledData = shuffleArray(initialData.slice(1));
    setData([initialData[0], ...shuffledData]);
  }, []);

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const isCorrectAnswer = (index) => {
    if (data[index] && data[index].answer) {
      return answers[index] === data[index].answer;
    }
    return false;
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <Page3 problum={item.problum} image={item.image} image2={item.image2} problumtext={item.problumtext} />
          {typeof item.problum === 'string' && (
            <div style={{ marginBottom: '20px' }}>
              <span style={{ marginRight: '10px' }}>{index}.</span>
              <input
                type="text"
                value={answers[index]}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                style={{ width: '300px' }}
              />
              {isCorrectAnswer(index) && (
                <span style={{ marginLeft: '10px', color: 'green' }}>정답</span>
              )}
            </div>
          )}
          {index === data.length - 1 && (
            <div style={{ marginTop: '20px' }}>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Page3List;
