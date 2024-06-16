import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './QuestionAnswer.css';

function QuestionAnswer({ problemSetKey, onAnswersChange, onSubmit, itemType}) {
    const [answers, setAnswers] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        const newAnswers = {
            ...answers,
            [name]: value
        };
        setAnswers(newAnswers);
        onAnswersChange(newAnswers);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
    };

    return (
        <form className="question-answer" onSubmit={handleSubmit}>
            <table className={`question-table-${itemType}`}>
                <tbody>
                    {problemSetKey.map((q, index) => (
                        <tr className={`question-item-${itemType}`} key={index}>
                            <td className={`question-${itemType}`}>{q.question}</td>
                            <td className={`answer-${itemType}`}>
                                <input
                                    type="text"
                                    name={q.name}
                                    value={answers[q.name] || ''}
                                    onChange={handleChange}
                                    className={`input-text-${itemType}`}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
            <Button type="submit" variant="outline-primary">제출</Button>
        </form>
    );
}

export default QuestionAnswer;