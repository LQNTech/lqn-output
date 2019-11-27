import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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

export const Card = styled.div`
  width: 600px;
  max-width: 600px;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.09);
  background-color: #fafafa;
  padding: 25px 20px;
  margin-top: 20px;
`;

export const Description = styled.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  letter-spacing: 0.24px;
  color: #8c8c8c;
  text-transform: uppercase;
`;

export const Name = styled.div`
  font-size: 20px;
  line-height: 1.5;
  color: #0f0f10;
`;

export const Call = styled.a`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  color: #ff2e63;
  text-decoration: none;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
