import React from 'react';
import { Link } from 'react-router-dom';
import { useDrag, useDrop } from 'react-dnd';
import Page2 from './Page2';
import './Page2List.css';
import B4_1 from './page2image/B4_1.PNG';
import B4_2 from './page2image/B4_2.PNG';
import B4_3 from './page2image/B4_3.PNG';
import B4_4 from './page2image/B4_4.PNG';

const ITEM_TYPE = 'word';

const DraggableItem = ({ text }) => {
  const [, drag] = useDrag(() => ({
    type: ITEM_TYPE,
    item: { text },
  }));

  return (
    <div ref={drag} className="draggable-item4">
      {text}
    </div>
  );
};

const DroppableItem = ({ index, onDrop, text, correctAnswer }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPE,
    drop: (item) => onDrop(item.text, index),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const isCorrect = text === correctAnswer; 

  return (
    <div
      ref={drop}
      className={`droppable-item4 ${isOver ? 'hovered4' : ''}`}
      style={{ color: isCorrect ? 'green' : 'red' }} 
    >
      {text ? text : "_______"}
    </div>
  );
};

const Page2List = () => {
  const [answers, setAnswers] = React.useState(Array(6).fill(''));

  const handleDrop = (text, index) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[index] = text;
      return newAnswers;
    });
  };

  const data = [{
    problum: (
      <>
        <div>
          <img src={B4_1} alt="B4_1" />
          <p>앞서 기억해둔 고지혈증과 식사요법에 대한 설명입니다. &lt;보기&gt; 에<br />
            서 단어를 찾아 빈칸에 알맞은 내용을 적어보세요.
          </p>
        </div>
      </>
    )
  }, {
    problum: (
      <>
        <div className="border-box4">
          <div className="small-box4">
            <div className="header4">&lt;보기&gt;</div>
            
            <div className="inner-box4">
              <div className="upper-box4">
                <DraggableItem text="불포화지방" />
                <DraggableItem text="포화지방산" />
                <DraggableItem text="규칙적" />
              </div>
              <div className="lower-box4">
                <DraggableItem text="채소, 과일, 잡곡" />
                <DraggableItem text="정상체중" />
                <DraggableItem text="적절한 열량" />
              </div>
            </div>
          </div>
          <div className="content4">
            <img src={B4_2} alt="B4_2" />
            <ol>
              <li><DroppableItem key={0} index={0} onDrop={handleDrop} text={answers[0]} correctAnswer="정상체중" />을 유지하고, <DroppableItem key={1} index={1} onDrop={handleDrop} text={answers[1]} correctAnswer="적절한 열량" />을 섭취합니다.</li>
              <li>식사는 <DroppableItem key={2} index={2} onDrop={handleDrop} text={answers[2]} correctAnswer="규칙적" />으로 하고 식품은 골고루 먹습니다.</li>
              <li><DroppableItem key={3} index={3} onDrop={handleDrop} text={answers[3]} correctAnswer="포화지방산" />을 섭취합니다.</li>
              <li><DroppableItem key={4} index={4} onDrop={handleDrop} text={answers[4]} correctAnswer="불포화지방" /> 콜레스테롤 고함량 식품의 섭취를 줄입니다.</li>
              <li><DroppableItem key={5} index={5} onDrop={handleDrop} text={answers[5]} correctAnswer="채소, 과일, 잡곡" />을 충분히 섭취합니다.</li>
            </ol>
          </div>
          <div>
            <img src={B4_3} alt="B4_3" />
          </div>
        </div>
      </>
    )
  },{
    image : B4_4
  }];

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <Page2 problum={item.problum} image={item.image} image2={item.image2} />
        </div>
      ))}
    </div>
  );
}

export default Page2List;
