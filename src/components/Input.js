import React, { useContext } from 'react'
import styled, { css, ThemeContext } from 'styled-components'
import { ifProp, switchProp, theme } from 'styled-tools'
import { space } from 'styled-system'

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

const Container = styled.div`
  ${space}

  width: ${ifProp({ full: true }, '100%', 'max-content')};
  display: flex;
  flex-direction: column;
  position: relative;
`

const Inputable = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-weight: ${theme('font.weight.regular')};
  font-family: ${theme('font.family.one')};
  font-size: ${theme('fontSizes.15')};
  cursor: ${ifProp('disabled', 'not-allowed', 'initial')};

  height: ${switchProp('size', {
    default: '40px',
    large: '48px'
  })};

  color: ${ifProp(
    'hasError',
    theme('colors.fourteen'),
    theme('colors.eleven')
  )};

  ${ifProp(
    { disabled: true },
    css`
      background-color: ${theme('colors.quartiary')};
    `
  )}

  padding: 0 10px;
  border-radius: ${theme('border.radius.five')};

  border: 1px solid
    ${ifProp('hasError', theme('colors.fourteen'), theme('colors.twelve'))};

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
  }

  &::placeholder {
    font-weight: ${theme('font.weight.regular')};
    color: ${ifProp(
      'hasError',
      theme('colors.fourteen'),
      theme('colors.eleven')
    )};
  }
`

const Message = styled.span`
  margin-top: 5px;
  font-family: ${theme('font.family.one')};
  font-size: ${theme('fontSizes.14')};
  color: ${theme('colors.fourteen')};
`

const Label = styled.label`
  font-family: ${theme('font.family.one')};
  font-size: ${theme('fontSizes.14')};
  color: ${theme('colors.eleven')};
  margin-bottom: 5px;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 28px;
  height: 28px;
  background-color: ${theme('colors.three')};
  border-radius: ${theme('border.radius.five')};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 6px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  ${switchProp('iconAlign', {
    left: css`
      left: 10px;
    `,
    right: css`
      right: 10px;
    `
  })};

  &:hover {
    background-color: ${theme('colors.eight')};
  }
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
            width: 11,
            height: 11,
            color: colors.one
          })}
        </Content>
      )}

      <Inputable
        {...props}
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
