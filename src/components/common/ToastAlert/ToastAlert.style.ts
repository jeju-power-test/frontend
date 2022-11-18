import styled from 'styled-components';

export const ToastModalContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 4rem;
  width: 100%;
`;

export const ToastModalWrapper = styled.div`
  display: inline-block;
  margin: 0 auto;
  padding: 1.4rem 3.6rem;
  border-radius: 8.4rem;
  background-color: ${({ theme }) => theme.color.black};
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color.white};
`;
