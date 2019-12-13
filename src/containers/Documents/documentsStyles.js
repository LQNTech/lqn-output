import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 22px;
  line-height: 2.27;
  letter-spacing: -0.29px;
  color: #262d5e;
  margin-bottom: 40px;
`;

export const SubTitle = styled.span`
  font-size: 24px;
  font-weight: 300;
  line-height: 0.83;
  letter-spacing: -0.31px;
  color: #7e7e7e;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  border-radius: 18px;
  background-color: #ff2e63;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  border: none;

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: none;
  }
`;
