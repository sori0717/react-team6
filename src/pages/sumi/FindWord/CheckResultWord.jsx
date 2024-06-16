import React, {useEffect } from 'react';

const CheckResultWord = ({ answers, setResult }) => {
    const words = {
        '사랑': ['연애', '애정', '연정', '사모', '친애'],
        '친구': ['동무', '벗', '지인', '교우', '붕우'],
        '선생': ['교사', '스승', '은사', '사부', '교원'],
        '소식': ['뉴스', '편지', '신문', '기별', '안부']
    };

    useEffect(() => {
        const handleSubmit = () => {
            const normalize = (str) => str.replace(/\s+/g,'').replace(/,/g,'').toLowerCase();

            const checkAnswer = (input, valid) => {
                const inputWords = input.split(/[, ]+/).map(word => normalize(word));
                const missingWords = valid.filter(word => !inputWords.includes(word));
                const extraWords = inputWords.filter(word => !valid.includes(word));
                return { isCorrect: missingWords.length === 0 && extraWords.length === 0, missingWords, extraWords };
            };

            const result1 = checkAnswer(answers['사랑'], words['사랑'].map(normalize));
            const result2 = checkAnswer(answers['친구'], words['친구'].map(normalize));
            const result3 = checkAnswer(answers['선생'], words['선생'].map(normalize));
            const result4 = checkAnswer(answers['소식'], words['소식'].map(normalize));
            const isCorrect = result1.isCorrect && result2.isCorrect && result3.isCorrect && result4.isCorrect;

            let resultMessage = '';
            if (isCorrect) {
                resultMessage = '정답입니다!';
            } else {
                resultMessage = `다시 풀어보세요.\n`;
                if (!result1.isCorrect) {
                    resultMessage += `사랑 - 부족한 단어: ${result1.missingWords.join(', ')} 잘못된 단어: ${result1.extraWords.join(', ')}\n`;
                }
                if (!result2.isCorrect) {
                    resultMessage += `친구 - 부족한 단어: ${result2.missingWords.join(', ')} 잘못된 단어: ${result2.extraWords.join(', ')}\n`;
                }
                if (!result3.isCorrect) {
                    resultMessage += `선생 - 부족한 단어: ${result3.missingWords.join(', ')} 잘못된 단어: ${result3.extraWords.join(', ')}\n`;
                }
                if (!result4.isCorrect) {
                    resultMessage += `소식 - 부족한 단어: ${result4.missingWords.join(', ')}  잘못된 단어: ${result4.extraWords.join(', ')}\n`;
                }
            }
            setResult(resultMessage);
        };

        handleSubmit();
    }, [answers, setResult]);

    return null;
};

export default CheckResultWord;