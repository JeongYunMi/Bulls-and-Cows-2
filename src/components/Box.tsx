import React from 'react'
import styled from "styled-components";
import type { boxComponentProps } from '../types/content';


const Box = ({children, direction='row', justifyContent='center', alignItems='flex-start', width='456px', height='100%', padding='0'}: boxComponentProps) => {
  return (
    <Wrap direction={direction} justifyContent={justifyContent} alignItems={alignItems} width={width} height={height} padding={padding}>
      {children}
    </Wrap>
  )
}

export default Box;

const Wrap = styled.div<{ direction: string; justifyContent: string; alignItems:string, width:string, height:string, padding:string }>`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`;