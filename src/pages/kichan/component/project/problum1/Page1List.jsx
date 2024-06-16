import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트 추가
import Page1 from './Page1';
import './Page1List.css';

import A4_1 from './page1image/A4_1.PNG';
import A4_2 from './page1image/A4_2.PNG';
import A4_3 from './page1image/A4_3.PNG';
import A4_4 from './page1image/A4_4.PNG';
import A4_5 from './page1image/A4_5.PNG';
import Sunny from './page1image/Sunny.PNG';
import Cloud from './page1image/Cloud.PNG';
import Rain from './page1image/Rain.PNG';
import Snow from './page1image/Snow.PNG';


class Page1List extends Component {
    constructor(props) {
      super(props);
      this.state = {
        year: '',
        month: '',
        day: '',
        activeButton: null
      };
    }

    handleClick = () => {
    this.setState(prevState => ({
    clicked: !prevState.clicked
        }));
      }

    handleButtonClick = (index) => {
    this.setState({ activeButton: index });
    }

    handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    }

  render() {
    const { year, month, day , wday ,activeButton } = this.state;

    const data = [
        {
           problum: (
        <>
        <div className="right-align">
        <img src={A4_1} alt="A4_1" />
        </div>
        </>
           )
        },
      {
        problum: (
          <>
          <div className="right-align"></div>
            <div>
                <div>
              <img src={A4_4} />
              <span style={{ display: 'inline-block' ,marginRight: '10px' }}>
              <p>오늘의 날짜를 적고, 날씨에 동그라미 하세요</p>
              </span>
              </div>


              <div>
              <span style={{ backgroundColor: '#f0f0f0' ,marginRight: '10px' }}>
              <select name="year" value={year} onChange={this.handleChange}>
              {Array.from({ length: 31 }, (_, i) => 2000 + i).map((yearOption) => (
              <option key={yearOption} value={yearOption}>{yearOption}</option>
              ))}
              </select>

              <label>년</label>
              </span>
              <span style={{ backgroundColor: '#f0f0f0' ,marginRight: '10px' }}>
              <select name="month" value={month} onChange={this.handleChange}>
                {Array.from({ length: 12 }, (_, i) => 1 + i).map((monthOption) => (
              <option key={monthOption} value={monthOption}>{monthOption}</option>
              ))}
              </select>
                                         
              <label>월</label>
              </span>
              <span style={{ backgroundColor: '#f0f0f0' ,marginRight: '10px' }}>
              <select name="day" value={day} onChange={this.handleChange}>
                {Array.from({ length: 31 }, (_, i) => 1 + i).map((dayOption) => (
              <option key={dayOption} value={dayOption}>{dayOption}</option>
              ))}
              </select>
              
              <label>일</label>
              </span>
              <span style={{ backgroundColor: '#f0f0f0' ,marginRight: '10px' }}>

              <select name="wday" value={wday} onChange={this.handleChange}>
                <option value="Monday">월</option>
                <option value="Tuesday">화</option>
                <option value="Wednesday">수</option>
                <option value="Thursday">목</option>
                <option value="Friday">금</option>
                <option value="Saturday">토</option>
                <option value="Sunday">일</option>
              </select>
              
              <label>요일</label>
              </span>
            
            <span style={{ backgroundColor: '#f0f0f0' ,marginRight: '10px' }}>
            <label>날씨</label>
            
            <button
            className={`circle ${activeButton === 1 ? 'active' : ''}`}
            onClick={() => this.handleButtonClick(1)}>
            <img src={Sunny} alt="Sunny" />
            </button>
            
            <button
            className={`circle ${activeButton === 2 ? 'active' : ''}`}
            onClick={() => this.handleButtonClick(2)}>
            <img src={Cloud} alt="Cloud" />
            </button>
            
            <button
            className={`circle ${activeButton === 3 ? 'active' : ''}`}
            onClick={() => this.handleButtonClick(3)}>
            <img src={Rain} alt="Rain" />
            </button>
            
            <button
            className={`circle ${activeButton === 4 ? 'active' : ''}`}
            onClick={() => this.handleButtonClick(4)}>
            <img src={Snow} alt="Snow" />
            </button>

            </span>
            </div>
            </div>
          </>
        )
      },
      {
        image2: A4_2,
        problum: "다음은 고지혈증과 식사요법에 대한 설명입니다. 소리 내어 읽어보세요.",
        image: A4_3
      },
      {
        image: A4_5
      }
    ];

    return (
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <Page1 problum={item.problum} image={item.image} image2={item.image2}/>
           
          </div>
        ))}
      </div>
    );
  }
}

export default Page1List;