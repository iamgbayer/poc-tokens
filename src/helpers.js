import { generateMedia } from 'styled-media-query'

export const breakpoints = generateMedia({
  sm: '576px',
  md: '768px',
  lg: '992px',
  x1: '1200px'
})
