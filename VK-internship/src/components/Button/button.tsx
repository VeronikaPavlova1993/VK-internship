import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import { Loader } from '../Loader';

interface IButtonProps {
 theme: 'primary' | 'secondary';
 size?: 28 | 36 | 56;
 onClick?: () => void;
 isDisabled: boolean;
 isFocus?: boolean;
 isLoading?: boolean;
 isCounter?: boolean;
}

const ButtonContext = React.createContext<IButtonProps | undefined>(undefined);

const ButtonStyleContainer = styled.button<IButtonProps>`
 display: flex;
 align-items: center;
 justify-content: center;
 height: ${(props) => `${props.size}px`};
 width: ${(props) =>
  props.size === 28 ? '96px' : props.size === 36 ? '112px' : '131px'};
 background-color: ${(props) =>
  props.theme === 'primary'
   ? 'var(--colors-bg-primary)'
   : 'var(--colors-bg-secondary)'};
 color: ${(props) =>
  props.theme === 'primary'
   ? 'var(--colors-text-primary)'
   : 'var(--colors-text-secondary)'};
 border: none;
 border-radius: var(--radii);
 padding: 16px;
 gap: 8px;
 cursor: ${(props) => (props.isDisabled === true ? 'not-allowed' : 'pointer')};
 opacity: ${(props) => (props.isDisabled === true ? 0.6 : 1)};
 outline: ${(props) =>
  props.isFocus ? '3px solid var(--colors-ui-border)' : 'none'};
 outline-offset: ${(props) => (props.isFocus ? '1px' : 'none')};

 ${(props) =>
  props.isLoading === true &&
  css`
   justify-content: center;
   gap: 0;
  `}

 &:hover {
  background-color: ${(props) =>
   props.theme === 'primary'
    ? 'var(--colors-bg-primary-hover)'
    : 'var(--colors-bg-secondary-hover)'};
 }
`;


export default function Button(props: IButtonProps){
    return (
      <ButtonStyleContainer
        size={props.size}
       theme={props.theme}
       isLoading={props.isLoading}
        isFocus={props.isFocus}
        isCounter={true}
       isDisabled={false}
      >
        {props.isLoading === true  &&
          <Loader theme={props.theme} />}
      </ButtonStyleContainer>
    );
  };

export function useButtonContext() {
 const context = React.useContext(ButtonContext);

 if (!context) {
  throw new Error('This component must be used within a <Button /> component.');
 }

 return context;
}
