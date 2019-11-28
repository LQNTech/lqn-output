import styled from 'styled-components';

export const Container = styled.div``;

export const SubTitle = styled.span`
  font-size: 20px;
  line-height: 1.3;
  letter-spacing: -0.47px;
  color: #000000;
`;

export const File = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px dashed #acaaaa;
  background-color: #f7f8fb;
  padding: 22px 28px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  > img {
    margin-right: 20px;
  }

  > span {
    font-size: 18px;
    line-height: 1;
    letter-spacing: -0.4px;
    color: #969696;
  }
`;

export const Button = styled.button`
  width: 39px;
  height: 39px;
  border: solid 1px #eaeaea;
  background-color: #ffffff;
  border-radius: 50%;

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: none;
  }
`;
