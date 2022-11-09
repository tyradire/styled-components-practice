import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  color?: string,
  children: React.ReactNode;
}

const StyledTitle = styled.h1`
color: ${props => props.color || props.theme.colors.primary};
`

export const Title = (props: TitleProps) => {
  return (
    <StyledTitle {...props} />
  )
}
