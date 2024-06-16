import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
import Text from './Text';
import Finger from './Img/Finger.png';
import Fire from './Img/Fire.png';
import Pear from './Img/Pear.png';
import Rock from './Img/Rock.png';
import Direction from './Direction';
import './textImageProblem.css';

const Images = [
  { id: 1, src: Finger },
  { id: 2, src: Fire },
  { id: 3, src: Pear },
  { id: 4, src: Rock }
];

const Texts = [
  { id: 3, text: '까마귀 날자 배 떨어진다' },
  { id: 1, text: '열 손가락 깨물어 안 아픈 손가락 없다' },
  { id: 4, text: '계란으로 바위치기' },
  { id: 2, text: '불난 집에 부채질하다' },
];

const Answers = {
  1: 1,
  2: 2,
  3: 3,
  4: 4
};

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export default function TextImageProblem() {
  const [images, setImages] = useState([]);
  const [texts, setTexts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedText, setSelectedText] = useState(null);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [usedImages, setUsedImages] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setImages(shuffleArray(Images));
    setTexts(shuffleArray(Texts));
  }, []);

  useEffect(() => {
    if (usedImages.length === Images.length) {
      setIsComplete(true);
    }
  }, [usedImages]);

  const handleImageClick = (id) => {
    if (!usedImages.includes(id)) {
      setSelectedImage(id);
      checkAnswer(id, selectedText);
    }
  };

  const handleTextClick = (id) => {
    setSelectedText(id);
    checkAnswer(selectedImage, id);
  };

  const checkAnswer = (imageId, textId) => {
    if (imageId && textId) {
      if (Answers[imageId] === textId) {
        setTotalCorrect(prevTotal => prevTotal + 1);
        alert('정답입니다!');
      } else {
        alert('오답입니다.');
      }
      setUsedImages(prevUsedImages => [...prevUsedImages, imageId]);
      setSelectedImage(null);
      setSelectedText(null);
    }
  };

  return (
    <div className = 'jeong-app'>

    <div className = "problem-container-jeong">
      <h1><Direction title = "다음 그림과 알맞은 속담을 선택해보세요" /></h1>
      <div className = "image-text-container-jeong">
        <div className = "images-container-jeong">
          {images.map(image => (
            <div key = {image.id}>
              {usedImages.includes(image.id) && (<span>사용</span>)}
              <Image
                id = {image.id}
                src = {image.src}
                onClick = {() => handleImageClick(image.id)}
                isSelected = {image.id === selectedImage}
                />
            </div>
          ))}
        </div>
        <div className = "proverbs-container-jeong">
          {texts.map(text => (
            <Text
            key = {text.id}
            id = {text.id}
            text = {text.text}
            onClick = {() => handleTextClick(text.id)}
            isSelected = {text.id === selectedText}
            />
          ))}
        </div>
      </div>
      <div className = "result-container-jeong">
        <p>총 정답 개수: {totalCorrect}</p>
        {isComplete && <Link to = "/mingi/2">다음문제</Link>}
      </div>
    </div>
    </div>
    
  );
}
