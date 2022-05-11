import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import signupBacground from '../../assets/sign-up-background.png';


export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromRight = keyframes`
  from{
    opacity: 0;
    transform: translateX(50px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }

  > a {
    color: #f4ede8;
    display: flex;
    margin-top: 16px;
    text-decoration: none;
    transition: color 0.2s;
    align-items: center;

    &:hover{
      color: ${shade(0.2, '#f4ede8')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

const backgroundAppear = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signupBacground}) no-repeat center;
  background-size: cover;

  animation: ${backgroundAppear} 1.5s;
`;
