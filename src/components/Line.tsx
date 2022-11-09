import React from 'react'
import styled from 'styled-components'

interface LineProps {
  color?: string,
  children?: React.ReactNode;
}

const StyledLine = styled.div`
font-size: 24px;
color: ${props => props.color || props.theme.colors.primary};
`

export const Line = (props: LineProps) => {
  return (
    <StyledLine {...props} />
  )
}