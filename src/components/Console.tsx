import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex } from './Flex';
import { Line } from './Line';

interface ConsoleProps {
  color?: string,
  autofocus?: boolean,
  children?: React.ReactNode;
}

const StyledConsole = styled.textarea`
width: 100%;
height: 70vh;
background: black;
font-size: 24px;
border: none;
resize: none;
color: ${props => props.color || props.theme.colors.primary};
&:focus {
  outline: none;
}
`

export const Console = (props: ConsoleProps) => {

  const [lines, setLines] = useState(['C:/users/tyradire>']);

  const onKeyPress = (e: any) => {
    if (e.charCode == 13) {
      setLines([...lines, 'C:/users/tyradire>'])
    }
  }

  return (
    <Flex>
      <Flex direction='column' margin='0 10px'>
        {lines.map((line, i) => 
            <Line key={i}>{line}</Line>
          )}
      </Flex>
      <StyledConsole autofocus={'true'} onKeyPress={onKeyPress} {...props} />
    </Flex>
  )
}