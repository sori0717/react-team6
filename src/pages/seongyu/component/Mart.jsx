
import React, { useState, useEffect } from 'react';
import style from '../../../component/Component.css';
import './Dailysupplies.css';

const img = [{
    img1: "/assets/Sqrout_pot.png",
}];

const Mart = () => {
    const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '' });
    const [results, setResults] = useState({ q1: null, q2: null, q3: null });
    const [supplies, setSupplies] = useState({
        두루마리_휴지: 1,
        물티슈: 1,
        샴푸: 1,
        린스: 1,
        바디로션: 1,
    });
    const [prices, setPrices] = useState({
        두루마리_휴지: [10000, 15000, 13000],
        물티슈: [20000, 21000, 23000],
        샴푸: [7000, 8000, 6000],
        린스: [8000, 7000, 5000],
        바디로션: [10000, 7000, 5000],
    });

    useEffect(() => {
        const randomPrice = () => [0, 1000, 2000][Math.floor(Math.random() * 3)];
        setPrices({
            두루마리_휴지: [10000 + randomPrice(), 15000 + randomPrice(), 13000 + randomPrice()],
            물티슈: [20000 + randomPrice(), 21000 + randomPrice(), 23000 + randomPrice()],
            샴푸: [7000 + randomPrice(), 8000 + randomPrice(), 6000 + randomPrice()],
            린스: [8000 + randomPrice(), 7000 + randomPrice(), 5000 + randomPrice()],
            바디로션: [10000 + randomPrice(), 7000 + randomPrice(), 5000 + randomPrice()],
        });
        const randomSupplies = () => [-1, 0, 1][Math.floor(Math.random() * 3)];
        setSupplies({
            두루마리_휴지: 2 + randomSupplies(),
            물티슈: 2 + randomSupplies(),
            샴푸: 2 + randomSupplies(),
            린스: 2 + randomSupplies(),
            바디로션: 2 + randomSupplies(),
        });
    }, []);

    const handleSubmit = (e, questionNumber) => {
        e.preventDefault();

        switch (questionNumber) {
            case 'q1': {
                const minPriceQ1 = Math.min(
                    supplies.두루마리_휴지 * prices.두루마리_휴지[0] + supplies.샴푸 * prices.샴푸[0] + supplies.린스 * prices.린스[0],
                    supplies.두루마리_휴지 * prices.두루마리_휴지[1] + supplies.샴푸 * prices.샴푸[1] + supplies.린스 * prices.린스[1],
                    supplies.두루마리_휴지 * prices.두루마리_휴지[2] + supplies.샴푸 * prices.샴푸[2] + supplies.린스 * prices.린스[2]
                );
                setResults({
                    ...results,
                    [questionNumber]: parseInt(answers[questionNumber]) === minPriceQ1
                });
                break;
            }
            case 'q2': {
                const totalPrices = {
                    하나마트: prices.두루마리_휴지[0] + prices.물티슈[0] + prices.샴푸[0] + prices.린스[0] + prices.바디로션[0],
                };
                const totalCostQ2 = totalPrices.하나마트 - 5000;
                console.log(totalCostQ2);
                setResults({
                    ...results,
                    [questionNumber]: parseInt(answers[questionNumber]) === totalCostQ2
                });
                break;
            }
            case 'q3': {
                const totalPrices = [
                    { name: "하나마트", price: prices.두루마리_휴지[0] + prices.물티슈[0] + prices.샴푸[0] + prices.린스[0] + prices.바디로션[0] },
                    { name: "소망마트", price: prices.두루마리_휴지[1] + prices.물티슈[1] + prices.샴푸[1] + prices.린스[1] + prices.바디로션[1] },
                    { name: "싱싱마트", price: prices.두루마리_휴지[2] + prices.물티슈[2] + prices.샴푸[2] + prices.린스[2] + prices.바디로션[2] }
                ];

                const minTotalPriceQ3 = Math.min(totalPrices[0].price, totalPrices[1].price, totalPrices[2].price);

                const minPriceMart = totalPrices.find((mart) => mart.price === minTotalPriceQ3);

                console.log(minPriceMart.name)
                setResults({
                    ...results,
                    [questionNumber]: answers[questionNumber] === minPriceMart.name
                });

                console.log(minPriceMart.name)
                break;
            }
            default:
                break;
        }
    };

    const handleChange = (e, questionNumber) => {
        setAnswers({
            ...answers,
            [questionNumber]: e.target.value
        });
    };
    return (
        <div className={style.wrapper}>
            <div className="sg2_container" style={style.container}>
                <div className="sg2_a2">
                    <ul>물건 사기</ul>
                    <img src={img[0].img1} alt="Sqrout_Pot" />
                </div>

                <h2 className="sg2_a3">
                    <div>민지는 필요한 생활용품을 구매하려고 합니다. 각 매장의 가격을 비교하여 문제를 풀어보세요(1~3).</div>
                </h2>

                <div className="sg2_table-down">
                    <table className="sg2_box1">
                        <thead>
                            <tr>
                                <th className="sg2_jb1 sg2_th">물건</th>
                                <th>하나마트</th>
                                <th>소망마트</th>
                                <th>싱싱마트</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='sg2_td'>두루마리 휴지 (1팩)</td>
                                <td className='sg2_td'>{prices.두루마리_휴지[0]}</td>
                                <td className='sg2_td'>{prices.두루마리_휴지[1]}</td>
                                <td className='sg2_td'>{prices.두루마리_휴지[2]}</td>
                            </tr>
                            <tr>
                                <td className='sg2_td'>물티슈 (1팩)</td>
                                <td className='sg2_td'>{prices.물티슈[0]}</td>
                                <td className='sg2_td'>{prices.물티슈[1]}</td>
                                <td className='sg2_td'>{prices.물티슈[2]}</td>
                            </tr>
                            <tr>
                                <td className='sg2_td'>샴푸 (1병)</td>
                                <td className='sg2_td'>{prices.샴푸[0]}</td>
                                <td className='sg2_td'>{prices.샴푸[1]}</td>
                                <td className='sg2_td'>{prices.샴푸[2]}</td>
                            </tr>
                            <tr>
                                <td className='sg2_td'>린스 (1병)</td>
                                <td className='sg2_td'>{prices.린스[0]}</td>
                                <td className='sg2_td'>{prices.린스[1]}</td>
                                <td className='sg2_td'>{prices.린스[2]}</td>
                            </tr>
                            <tr>
                                <td className='sg2_td'>바디로션 (1병)</td>
                                <td className='sg2_td'>{prices.바디로션[0]}</td>
                                <td className='sg2_td'>{prices.바디로션[1]}</td>
                                <td className='sg2_td'>{prices.바디로션[2]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="sg2_Quiz">
                    <h2>1. 민지는 두루마리 휴지 {supplies.두루마리_휴지}팩과 샴푸 {supplies.샴푸}통과, 린스 {supplies.린스}통을 구매하려고 합니다. 가격이 가장 저렴한 마트의 가격은 얼마인가요?</h2>
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

                    <h2>2. 민지는 하나마트에 적립금이 5,000원 있습니다. 물건을 종류별로 모두 구입하고 적립금을 사용했을 때 지불해야 할 가격은 총 얼마인가요?</h2>
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

                    <h2>3. 물건들의 가격을 비교하면 어떤 마트를 이용해야 가장 저렴하게 구입할 수 있나요?</h2>
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
                </div>
            </div>
        </div>
    );
}

export default Mart;