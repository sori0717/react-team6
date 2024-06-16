import React, {useEffect } from 'react';

const CheckResult = ({ answers, setResult }) => {

    useEffect(() => {
        const handleSubmit = () => {
            const counts = {
                'ㄷ': 0,
                'ㄹ': 0,
                'ㅂ': 0,
                'ㅍ': 0
            };

            document.querySelectorAll('.consonant').forEach(consonant => {
                const char = consonant.textContent;
                if (counts.hasOwnProperty(char)) {
                    counts[char] += 1;
                }
            });

            const isCorrect = 
                counts['ㄷ'] === parseInt(answers['ㄷ']) &&
                counts['ㄹ'] === parseInt(answers['ㄹ']) &&
                counts['ㅂ'] === parseInt(answers['ㅂ']) &&
                counts['ㅍ'] === parseInt(answers['ㅍ']);
            
            let resultMessage = '';
            if (isCorrect) {
                resultMessage = '정답입니다!'
            } else {
                resultMessage = `다시 풀어보세요.\n정답: ㄷ=${counts['ㄷ']}, ㄹ=${counts['ㄹ']}, ㅂ=${counts['ㅂ']}, ㅍ=${counts['ㅍ']}`;
            }
            setResult(resultMessage);
        };

        handleSubmit();
    }, [answers, setResult]);

    return null;
};

export default CheckResult;