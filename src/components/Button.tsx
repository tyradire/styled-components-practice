import React from 'react'
import styled, {css, keyframes} from 'styled-components'

interface ButtonProps {
  align?: string,
  primary?: boolean,
  outlined?: boolean,
  color?: string,
  btnTextColor?: string,
  background?: string,
  children?: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
border: none;
padding: 10px 15px;
font-size: 18px;
cursor: pointer;
&:focus {
  outline: none
}
&:hover {
  color: ${(props: ButtonProps) => props.color || 'black'};
  background: ${props => props.background || 'green'};
}
align-self: ${props => props.align || 'stretch'};
${props => props.primary && css`
  color: ${(props: ButtonProps) => props.color || 'white'};
  background: ${props => props.background || 'white'};
`}
${props => props.outlined && css`
  color: ${(props: ButtonProps) => props.color || 'white'};
  border: 1px solid ${props => props.color || 'white'};
  background: transparent;
`}
`

const LargeButton = styled(StyledButton)`
  font-size: 24px;
`

export const Button = (props: ButtonProps) => {
  return (
    <LargeButton {...props} />
  )
}