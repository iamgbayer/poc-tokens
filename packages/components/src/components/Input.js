import React, { useContext } from 'react'
import styled, { css, ThemeContext } from 'styled-components'
import { ifProp, switchProp, theme } from 'styled-tools'

import { Box } from './Box'

const iconAlign = {
  left: 'left',
  right: 'right'
}

const typing = {
  text: 'text',
  password: 'password',
  time: 'time',
  email: 'email'
}

const Container = styled(Box)`
  width: ${ifProp({ full: true }, '100%', 'max-content')};
  display: flex;
  flex-direction: column;
  position: relative;
`

const Inputable = styled.input`
  height: ${switchProp('size', {
    default: '40px',
    large: '48px'
  })};
  font-family: ${theme('font.family.primary')};
  font-size: ${theme('font.size.fifteen')};
  cursor: ${ifProp('disabled', 'not-allowed', 'initial')};

  color: ${ifProp(
    'hasError',
    theme('colors.support.sixtiary'),
    theme('colors.support.quintiary')
  )};

  background-color: ${switchProp('variant', {
    primary: theme('colors.quartiary'),
    secondary: theme('colors.secondary')
  })};

  ${ifProp(
    { disabled: true },
    css`
      background-color: ${theme('colors.quartiary')};
    `
  )}

  padding: 0 10px;
  border-radius: ${theme('border.radius.five')};

  border: 1px solid
    ${ifProp(
      'hasError',
      theme('colors.support.sixtiary'),
      theme('colors.support.secondary')
    )};

  ${ifProp(
    'icon',
    switchProp('iconAlign', {
      [iconAlign.left]: css`
        padding-left: 36px;
      `,
      [iconAlign.right]: css`
        padding-right: 36px;
      `
    }),
    null
  )}

  &:focus {
    outline: none;
    border: 1px solid
      ${ifProp(
        'hasError',
        theme('colors.support.sixtiary'),
        theme('colors.support.quintiary')
      )};
  }

  &::placeholder {
    font-weight: ${theme('font.weight.regular')};
    color: ${ifProp(
      'hasError',
      theme('colors.support.sixtiary'),
      theme('colors.support.quintiary')
    )};
  }
`

const Message = styled.span`
  margin-top: 5px;
  font-family: ${theme('font.family.primary')};
  font-size: ${theme('font.size.fourteen')};
  color: ${theme('colors.support.sixtiary')};
`

const Label = styled.label`
  font-family: ${theme('font.family.primary')};
  font-size: ${theme('font.size.fourteen')};
  color: ${theme('colors.support.quintiary')};
  margin-bottom: 5px;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 45px;
  height: 45px;
  background-color: ${theme('colors.support.secondary')};
  box-shadow: ${theme('shadow.secondary')};
  border-radius: ${theme('border.radius.nine')};
  display: flex;
  justify-content: center;
  align-items: center;
  top: 7px;
  cursor: pointer;

  ${switchProp('iconAlign', {
    left: css`
      left: 10px;
    `,
    right: css`
      right: 10px;
    `
  })};
`

export function Input({
  value,
  typing,
  onChange,
  placeholder,
  icon,
  onClickIcon,
  iconAlign,
  error,
  success,
  required,
  disabled,
  size,
  id,
  label,
  ...props
}) {
  const { colors } = useContext(ThemeContext)

  return (
    <Container {...props}>
      {label && <Label htmlFor={id}>{label}</Label>}

      {icon && (
        <Content onClick={onClickIcon} iconAlign={iconAlign}>
          {icon({
            width: 18,
            height: 18,
            color: colors.tertiary
          })}
        </Content>
      )}

      <Inputable
        id={id}
        type={typing}
        value={value}
        size={size}
        hasError={error.has}
        icon={icon}
        iconAlign={iconAlign}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        {...props}
      />

      {error.has && <Message>{error.message}</Message>}
    </Container>
  )
}

Input.defaultProps = {
  value: '',
  size: 'default',
  placeholder: '',
  iconAlign: iconAlign.left,
  typing: typing.text,
  onChange: () => {},
  error: {
    has: false
  },
  success: {
    has: false
  },
  disabled: false,
  required: false,
  full: false
}
