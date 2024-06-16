import React, { useState, useEffect } from 'react';
import style from '../../../component/Component.css';
import './price.css';
import { Link } from 'react-router-dom';

const img = [{
    img1: "assets/Sqrout_pot.png",
}];



const Butcher = () => {
    const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '' });
    const [results, setResults] = useState({ q1: null, q2: null, q3: null, q4: null, q5: null });

    const [foods, setfoods] = useState({
        삼겹살구이: 2,
        돼지김치찜: 2,
        제육볶음: 2,
        소고기미역국: 2,
        안심스테이크: 2,
        등심스테이크: 2
    });
    const [prices, setPrices] = useState({
        삼겹살: 2700,
        목살: 2800,
        앞다리살: 1300,
        등심: 7000,
        안심: 13000,
        양지: 6000
    });

    useEffect(() => {
        const randomPrice = () => [0, 500, 1000][Math.floor(Math.random() * 3)];
        setPrices({
            삼겹살: 2700 + randomPrice(),
            목살: 2800 + randomPrice(),
            앞다리살: 1300 + randomPrice(),
            등심: 7000 + randomPrice(),
            안심: 13000 + randomPrice(),
            양지: 6000 + randomPrice(),
        });
        const randomfood = () => [-1, 0, 1][Math.floor(Math.random() * 3)];
        setfoods({
            삼겹살구이: 2 + randomfood(),
            돼지김치찜: 2 + randomfood(),
            제육볶음: 2 + randomfood(),
            소고기미역국: 2 + randomfood(),
            안심스테이크: 2 + randomfood(),
            등심스테이크: 2 + randomfood(),
        });
    }, []);

    const handleSubmit = (e, questionNumber) => {
        e.preventDefault();
        const correctPrices = {
            q1: (foods.소고기미역국) * (prices.양지 * 0.5),
            q2: (foods.돼지김치찜) * (prices.목살 * 2),
            q3: (foods.등심스테이크) * (prices.등심 * 2) + (foods.안심스테이크) * (prices.안심 * 2),
            q4: (foods.삼겹살구이) * (prices.삼겹살 * 1.5),
            q5: (foods.제육볶음) * (prices.앞다리살 * 2)
        };

        setResults({
            ...results,
            [questionNumber]: parseInt(answers[questionNumber]) === correctPrices[questionNumber]
        });
    };

    const handleChange = (e, questionNumber) => {
        setAnswers({
            ...answers,
            [questionNumber]: e.target.value
        });
    };

    return (
        <div className={style.wrapper}>
            <div className='sg_container' style={style.container}>
                <div className='sg_a2'>
                    <ul>정육점 계산하기</ul>
                    <img src={img[0].img1} alt="Sqrout_Pot" />
                </div>

                <h2 className='sg_a3'>
                    <div>다음은 정육점의 가격표와 요리별 재료입니다. 아래의 문제를 풀어보세요(1~5).</div>
                </h2>

                <div className="sg_table-left">
                    <table className='sg_table'>
                        <thead>
                            <tr>
                                <th className="sg_th">부위(100g)</th>
                                <th className="sg_th">가격</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='sg_td'>삼겹살</td>
                                <td className='sg_td'>{prices.삼겹살}원</td>
                            </tr>
                            <tr>
                                <td className='sg_td'>목살</td>
                                <td className='sg_td'>{prices.목살}원</td>
                            </tr>
                            <tr>
                                <td className='sg_td'>앞다리살</td>
                                <td className='sg_td'>{prices.앞다리살}원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="sg_table-right">
                    <table className='sg_table'>
                        <thead>
                            <tr>
                                <th className="sg_th">부위(100g)</th>
                                <th className="sg_th">가격</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='sg_td'>등심</td>
                                <td className='sg_td'>{prices.등심}원</td>
                            </tr>
                            <tr>
                                <td className='sg_td'>안심</td>
                                <td className='sg_td'>{prices.안심}원</td>
                            </tr>
                            <tr>
                                <td className='sg_td'>양지</td>
                                <td className='sg_td'>{prices.양지}원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="sg_table-down">
                    <table className="sg_box1 sg_table">
                        <thead>
                            <tr>
                                <th className='sg_jb1 sg_th'>요리</th>
                                <th className='sg_th'>재료(1인분 기준)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='sg_td'>삼겹살구이</td>
                                <td className='sg_td'>삼겹살 150g</td>
                            </tr>
                            <tr>
                                <td className='sg_td'>돼지김치찜</td>
                                <td className='sg_td'>목살 200g</td>
                            </tr>
                            <tr>
                                <td className='sg_td'>제육볶음</td>
                                <td className='sg_td'>앞다리살 200g</td>
                            </tr>
                            <tr>
                                <td className='sg_td'>소고기미역국</td>
                                <td className='sg_td'>양지 50g</td>
                            </tr>
                            <tr>
                                <td className='sg_td'>안심스테이크</td>
                                <td className='sg_td'>안심 200g</td>
                            </tr>
                            <tr>
                                <td className='sg_td'>등심스테이크</td>
                                <td className='sg_td'>등심 200g</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='sg_Quiz'>
                    <h2 >1. 범수 씨의 아내의 생일을 맞아 소고기미역국 {foods.소고기미역국}인분을 만들 계획입니다. 구매할 고기의 가격을 얼마인가요?</h2>
                    <form onSubmit={(e) => handleSubmit(e, 'q1')}>
                        <input
                            type="text"
                            value={answers.q1}
                            onChange={(e) => handleChange(e, 'q1')}
                            placeholder="가격을 입력하세요"
                        />
                        <button type="submit">제출</button>
                        {results.q1 === null ? null : results.q1 ? (
                            <span className="correct">정답입니다!</span>
                        ) : (
                            <span className="incorrect">오답입니다. 다시 시도해보세요.</span>
                        )}
                    </form>

                    <h2 >2. 소민 씨는 집들이 음식으로 돼지김치찜 {foods.돼지김치찜}인분을 준비하려고 합니다. 구매할 고기의 가격은 얼마인가요?</h2>
                    <form onSubmit={(e) => handleSubmit(e, 'q2')}>
                        <input
                            type="text"
                            value={answers.q2}
                            onChange={(e) => handleChange(e, 'q2')}
                            placeholder="가격을 입력하세요"
                        />
                        <button type="submit">제출</button>
                        {results.q2 === null ? null : results.q2 ? (
                            <span className="correct">정답입니다!</span>
                        ) : (
                            <span className="incorrect">오답입니다. 다시 시도해보세요.</span>
                        )}
                    </form>

                    <h2 >3. 나진 씨는 가족을 위해 등심스테이크 {foods.등심스테이크}인분과 안심스테이크 {foods.안심스테이크}인분을 준비하려 합니다. 구매할 고기의 가격은 얼마인가요?</h2>
                    <form onSubmit={(e) => handleSubmit(e, 'q3')}>
                        <input
                            type="text"
                            value={answers.q3}
                            onChange={(e) => handleChange(e, 'q3')}
                            placeholder="가격을 입력하세요"
                        />
                        <button type="submit">제출</button>
                        {results.q3 === null ? null : results.q3 ? (
                            <span className="correct">정답입니다!</span>
                        ) : (
                            <span className="incorrect">오답입니다. 다시 시도해보세요.</span>
                        )}
                    </form>

                    <h2 >4. 나진 씨는 가족을 위해 삼겹살구이 {foods.삼겹살구이}인분을 준비하려 합니다. 구매할 고기의 가격은 얼마인가요?</h2>
                    <form onSubmit={(e) => handleSubmit(e, 'q4')}>
                        <input
                            type="text"
                            value={answers.q4}
                            onChange={(e) => handleChange(e, 'q4')}
                            placeholder="가격을 입력하세요"
                        />
                        <button type="submit">제출</button>
                        {results.q4 === null ? null : results.q4 ? (
                            <span className="correct">정답입니다!</span>
                        ) : (
                            <span className="incorrect">오답입니다. 다시 시도해보세요.</span>
                        )}
                    </form>

                    <h2 >5. 나진 씨는 가족을 위해 제육볶음 {foods.제육볶음}인분을 준비하려 합니다. 구매할 고기의 가격은 얼마인가요?</h2>
                    <form onSubmit={(e) => handleSubmit(e, 'q5')}>
                        <input
                            type="text"
                            value={answers.q5}
                            onChange={(e) => handleChange(e, 'q5')}
                            placeholder="가격을 입력하세요"
                        />
                        <button type="submit">제출</button>
                        {results.q5 === null ? null : results.q5 ? (
                            <span className="correct">정답입니다!</span>
                        ) : (
                            <span className="incorrect">오답입니다. 다시 시도해보세요.</span>
                        )}
                    </form>
                    <div style={{display:"flex",flexDirection:"row-reverse"}}>
                        <Link to={"/seongyu/2"} className='nextQuizLink'>다음문제</Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Butcher;