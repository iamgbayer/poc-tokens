import React from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'

const Container = styled.div`
  .st0 {
    fill: ${theme('colors.secondary')};
  }

  .st1 {
    opacity: 0.8;
    fill: ${theme('colors.support.tertiary')};
    enable-background: new;
  }

  .st2 {
    fill: #344356;
  }

  .st3 {
    font-family: ${theme('font.family.primary')};
    font-weight: ${theme('font.weight.bold')};
  }

  .st4 {
    font-size: 80px;
  }
`

export function Logo({ color, width, height }) {
  return (
    <Container>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        viewBox="-59.1 359.8 295.4 81.8"
      >
        <g>
          <path
            className="st0"
            d="M-41.5,381.4c0-1.9,1.5-3.4,3.4-3.4l48.8,0.1c3,0,4.5,3.6,2.4,5.8l-48.6,48.6c-2.1,2.1-5.8,0.6-5.8-2.4
          L-41.5,381.4z"
          />
          <path
            className="st1"
            d="M-59.1,363.2c0-1.9,1.5-3.4,3.4-3.4l67.5,0.2c3,0,4.5,3.6,2.4,5.8L-53.1,433c-2.1,2.1-5.8,0.6-5.8-2.4
          L-59.1,363.2z"
          />
        </g>

        <text transform="matrix(1 0 0 1 29.333 440.741)" class="st2 st3 st4">
          Feedl
        </text>
      </svg>
    </Container>
  )
}
