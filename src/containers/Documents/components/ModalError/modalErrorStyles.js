import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(38, 45, 94, 0.4);
`;

export const Content = styled.div`
  border-radius: 18px;
  box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  margin: auto;
  padding: 60px;
  width: 60%;
`;

export const Text = styled.h2`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.31px;
  color: #262d5e;
  padding-top: 20px;
`;

export const Pink = styled.span`
  color: #ff2e63;
  font-size: inherit;
  font-family: inherit;
`;

export const Button = styled.button`
  border-radius: 18px;
  background-color: #ff2e63;
  padding: 20px 40px;
  color: #ffffff;
  border: none;
  margin-top: 20px;

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: none;
  }
`;
