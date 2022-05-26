// 리액트 패키지를 불러옵니다.
import React, { useState } from "react"; 
// styled-components
import styled from "styled-components";
import { useHistory } from "react-router-dom";



const Main = (props) => {
  const history = useHistory();
  
  const week = props.week; 

  const [rate, setRate] = useState(Array.from({length : 7}, (value) => value = Math.floor(Math.random() * 5) + 1));
  const [circle, setCircle] = useState([1, 2, 3, 4, 5]);

  const rateAverage = rate => {
    if(rate.length === 0) return 0;
    const sum = rate.reduce((a,b) => a+b) / rate.length;
    return sum.toFixed(1);
  }
  
  const removeRate = () => {
    setRate(rate.filter((x) => x === 0));
  }

return (
    <Container>
    <Title >내 일주일은?</Title>

    {week.map((week, index) => {
  return ( 
    <Date key={index}> {week} 
        {circle.map((num,i) =>
        <Circle key={i} style={{backgroundColor : rate[index] > i ?  ('#FFD24C') : ('#FFE69A')}}></Circle>
      )}
    <Button onClick={ () => {
        history.push("/detail/" + index);
        }}>
    </Button>
    </Date>
    )})}

  <InputWrap>
    <h3>평균평점</h3>
    <p>{rateAverage(rate)}</p>
    <button onClick={removeRate}>Reset</button>
  </InputWrap> 
  </Container>
  );
  };

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  width: 80vw;
  height: 100vh;
  margin: 5vh auto;
  padding: 5vh 0px;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  `;


const Title = styled.div`
  font-weight : bold;
  text-align: center;
  margin: 10px;
  padding: 10px;
`;


const Date = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight : bold;
  margin-bottom : 5px;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 10px 5px;
`;

const Button = styled.div`
  border-left: 25px solid	#880bd7;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  cursor : pointer;
  margin-left : 5px;
`;

const InputWrap = styled.div`
  width: 50vw;
  max-width: 350px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    margin-bottom: 5px;
    font-weight : bold;
  }
  p {
    margin: 5px;
    color: black;
    font-weight : bold;
    font-size : 20px;
  }
  button {
    color : white;
    font-size : 15px;
    font-weight : bold;
    background : #d38adb;
    border-radius: 5px;    
    border : 1px solid #d38adb;
    cursor : pointer;
    width: 100px;
    height: 50px;
    margin: 5px;
  }
`;

export default Main;