import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 22px;
  line-height: 2.27;
  letter-spacing: -0.29px;
  color: #262d5e;
  margin-bottom: 40px;
`;

export const SubTitle = styled.span`
  font-size: 20px;
  line-height: 1.3;
  letter-spacing: -0.47px;
  color: #000000;
  padding-top: 30px;
  padding-bottom: 10px;
`;

export const Document = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px dashed #acaaaa;
  background-color: #f7f8fb;
  padding: 22px 28px;
  margin-bottom: 20px;

  > div {
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
  }

  > button {
    width: 39px;
    height: 39px;
    border: solid 1px #eaeaea;
    background-color: #ffffff;
    border-radius: 50%;

    :focus {
      outline: none;
    }
  }
`;
