import React, { useState } from 'react';

export default function MathProblem({ equation, index, onResultChange, result }) {
  const [operator1, setOperator1] = useState('');
  const [operator2, setOperator2] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (value, setOperator) => {
    const operator = value === '+' || value === '-' ? value : '';
    setOperator(operator);
  };

  const checkAnswer = () => {
    const { a, b, c, result } = equation;
    let isCorrect = false;

    if ((operator1 === '+' && operator2 === '-' && a + b - c === result) ||
        (operator1 === '-' && operator2 === '+' && a - b + c === result) ||
        (operator1 === '+' && operator2 === '+' && a + b + c === result) ||
        (operator1 === '-' && operator2 === '-' && a - b - c === result) 
      ) {
      isCorrect = true;
    }
    
    onResultChange(index, isCorrect);
    alert(isCorrect ? '정답입니다!' : '오답입니다.');
    setIsDisabled(true); 
  };

  return (
    <div className = "math-equation-row">
      <span>{equation.a}</span>
      <input
        type = "text"
        value = {operator1}
        onChange = {(e) => handleChange(e.target.value, setOperator1)}
        maxLength = "1"
        disabled = {isDisabled} 
      />
      <span>{equation.b}</span>
      <input
        type = "text"
        value = {operator2}
        onChange = {(e) => handleChange(e.target.value, setOperator2)}
        maxLength = "1"
        disabled = {isDisabled} 
      />
      <span>{equation.c}</span>
      <span>=</span>
      <span>{equation.result}</span>
      <button onClick = {checkAnswer} disabled = {isDisabled}>확인</button>
      <span className = "math-result">{result === null ? '' : result ? 'V' : 'X'}</span>
    </div>
  );
}
