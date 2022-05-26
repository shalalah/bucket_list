// 리액트 패키지를 불러옵니다.
import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';



const Detail = (props) => {
    const week = props.week

    const { id } = useParams();
    let history = useHistory();

    const [circle, setCircle] = React.useState([0, 1, 2, 3, 4]);
    const [index, index_change] = React.useState();
    
    const onClick = () => {
        history.push('/')
    } 

    return (
        <Container>
          <h3>
            <span>{week[id] + "요일"}</span> 평점 남기기
          </h3>
          <CircleWrap>
            {circle.map((e, i) => {
              return (
                <Circle key={i} onClick={ () => index_change(i)} 
                style={{backgroundColor : index >= i ?  ('yellow') : ('grey')}}>
                </Circle>
            )
        })}
          </CircleWrap>
          <Button onClick={onClick}>평점 남기기</Button>
        </Container>
    )
};

const Container = styled.div`
    max-width: 350px;
    min-height: 80vh;
    width: 80vw;
    height: 90vh;
    margin: 5vh auto;
    padding: 5vh 0px;
    border-radius: 5px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    h3 {
        text-align: center;
    }
    span {
        background : #e4ee9d;
        color : white;
        border-radius: 5px;
        font-weight: 900;
        padding : 3px;
    }
    `;

const CircleWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    `;

const Circle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: 10px 5px;
    cursor : pointer;
    `;

const Button = styled.div`
    color : white;
    font-weight : bold;
    background : #f5e9e4;
    border-radius: 5px;    
    border : 1px solid #f5e9e4;
    cursor : pointer;
    padding : 13px;
    margin : 15px 60px;
    text-align: center;
    `;

export default Detail;