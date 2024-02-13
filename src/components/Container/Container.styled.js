import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
  min-width: 500px;
  height: 100%;
  background-color: ${(p) => p.theme.colors.white};
  padding: 45px;
  align-items: center;
`;

export const Title = styled.h1`
  letter-spacing: 0.2rem;
  max-width: 480px;
`;
