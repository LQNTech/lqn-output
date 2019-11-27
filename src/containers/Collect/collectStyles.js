import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: -0.48px;
  color: #252c61;
`;

export const Address = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  padding: 15px 30px;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.09);
  border: solid 1px #ededed;
  background-color: #ffffff;

  img {
    margin-right: 10px;
  }

  p {
    margin: 0;
  }
`;
