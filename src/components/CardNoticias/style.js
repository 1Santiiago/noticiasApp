import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1em;
  border: 50px solid transparent;
  overflow: hidden;
`;

export const Title = styled.h1`
  text-align: ${(props) => props.textAlign || "center"};
  margin: 19px 0;
  font-size: ${(props) => props.fontSize || "29px"};
  font-weight: ${(props) => props.fontWeight || "300"};
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const Paragraph = styled.p`
  margin: 20px 0;
  text-align: justify;
  font-size: 23px;
`;

export const Button = styled.button`
  font-size: 18px;
  border: 0;
  width: 120px;
  border-radius: 20px;
  background-color: skyblue;
  color: #fff;
  cursor: pointer;

  &:hover{
    color: black;
  }
`;
