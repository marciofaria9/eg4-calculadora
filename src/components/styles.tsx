import styled from "styled-components";


export const Input = styled.div`
  width: 100%;
  height: 50px;
  padding: 25px;
  font-size: 1.5rem;
  color: '#9C9C9C';
  background-color: gray;
  text-align: right;
  margin: 0px 0px 10px 0px;
  border-radius: 0.5rem;
`

export const ButtonContainer = styled.div`
  width: 100%;
  padding: 80px 50px 20px 0px;
  background-color: black;
  min-height: 300px;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 65px));
  grid-auto-rows: 70px;
  gap: 1.2rem 0.9rem;
  align-items: center;

  @media screen and (min-width: 450px) {
    grid-template-columns: repeat(auto-fill, minmax(65px, 67px));
  }
`