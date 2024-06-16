import React, { useState } from 'react';
import MathComponent from './MathComponent';
import Direction from './Direction';
import { Link } from 'react-router-dom';
import './mathProblem.css';  // 추가된 부분

const equations = [
  { a: 13, b: 24, c: 17, result: 20 },
  { a: 48, b: 15, c: 22, result: 55 },
  { a: 35, b: 14, c: 7, result: 56 },
  { a: 78, b: 46, c: 12, result: 20 },
  { a: 23, b: 65, c: 24, result: 64 },
];

export default function MathProblem() {
  const [results, setResults] = useState(Array(equations.length).fill(null));
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handleResultChange = (index, isCorrect) => {
    const newResults = [...results];
    newResults[index] = isCorrect;
    setResults(newResults);
    const correctCount = newResults.filter(result => result === true).length;
    setTotalCorrect(correctCount);

    if (newResults.every(result => result !== null)) {
      setIsComplete(true);
    }
  };

  return (
    <div className = "math-app">
    <div className = "math-equation-solver">
      <h1>
        <Direction title = "보기를 보고 빈칸에 알맞은 부호를 넣어보세요" />
      </h1>
      <h2>보기</h2>
      <div className = "math-equation-header">
        <span>+</span>
        <span>-</span>
      </div>
      {equations.map((eq, index) => (
        <MathComponent
        key = {index}
        equation = {eq}
        index = {index}
        onResultChange = {handleResultChange}
        result = {results[index]}
        />
      ))}
      {isComplete && (
        <div>
          <div className = "math-total-correct">총 정답 개수: {totalCorrect}</div>
          <Link to = "/">처음으로</Link>
        </div>
      )}
    </div>
    </div>
  );
}
