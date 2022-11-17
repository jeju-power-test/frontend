import styled, { css } from 'styled-components';

export const Temp = styled.div`
  font-size: 2.4rem;
`;

export const TempChildren = styled.span``;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32rem;
  height: 20rem;
`;

export const Img = styled.img`
  width: 30rem;
  height: 20rem;
`;

export const ImgBox = styled.div`
  ${({ theme }) => {
    const { white } = theme.color;

    return css`
      color: ${white};
      display: flex;
      justify-content: center;
      align-items: center;
      width: 14.8rem;
      height: 18.6rem;
      margin: 0.5rem;
      background: #ffffff;
      border: 2px solid #303030;
      border-radius: 10px;
    `;
  }}
`;
