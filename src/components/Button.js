import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { ifProp, switchProp, theme } from 'styled-tools'
import { space, color } from 'styled-system'

import { Text as Texteable } from './Text'

const Container = styled.button`
  ${space}
  ${color}

  width: ${ifProp({ full: true }, '100%', 'max-content')};
  height: ${switchProp('size', {
    default: '40px',
    large: '48px'
  })};
  cursor: pointer;
  border: none;
  background-color: ${switchProp('variant', {
    primary: theme('colors.three'),
    secondary: theme('colors.four')
  })};

  padding: ${switchProp('size', {
    default: '0 15px',
    large: '0 25px'
  })};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${theme('border.radius.five')};
  position: relative;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: ${switchProp('variant', {
      primary: theme('colors.eight'),
      secondary: theme('colors.nine')
    })};
  }
`

const Text = styled(Texteable)`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const Icon = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`

export const Button = ({
  size,
  full,
  variant,
  children,
  icon,
  onClick,
  href,
  ...props
}) => {
  const onClickWithHref = () =>
    href ? window.open(href, '_blank') : onClick && onClick()

  return (
    <Container
      {...props}
      onClick={onClickWithHref}
      size={size}
      icon={icon}
      full={full}
      variant={variant}
    >
      <Text color="one" fontSize={[14, 18, 23]} fontWeight="bold">
        {children}

        {icon && (
          <Icon>
            {icon({
              width: 12,
              height: 12,
              color: 'one'
            })}
          </Icon>
        )}
      </Text>
    </Container>
  )
}

Button.defaultProps = {
  variant: 'primary',
  size: 'default',
  full: false
}
