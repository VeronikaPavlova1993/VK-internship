import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoading = styled.div<{ theme: 'primary' | 'secondary' }>`
 width: 24px;
 height: 24px;
 border: 4px solid
  ${(props) =>
   props.theme === 'primary'
    ? 'rgba(255, 255, 255, 0.3)'
    : 'rgba(0, 0, 0, 0.3)'};
 border-top: 4px solid
  ${(props) => (props.theme === 'primary' ? '#ffffff' : '#000000')};
 border-radius: 50%;
 animation: ${spin} 1s linear infinite;
`;

interface LoadingProps {
 theme: 'primary' | 'secondary';
}

export const Loader: React.FC<LoadingProps> = ({ theme }) => {
 return <StyledLoading theme={theme} />;
};
