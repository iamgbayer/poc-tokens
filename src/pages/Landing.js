import React, { memo, useContext, useState } from 'react'
import { Container, Col, Hidden } from 'react-grid-system'
import styled, { ThemeContext, css } from 'styled-components'
import { theme, ifProp } from 'styled-tools'

import peoples from '../assets/images/peoples.svg'

import { Text, Input, Icon } from '../components'
import { breakpoints } from '../helpers'

const Description = styled(Text)`
  max-width: 500px;

  ${breakpoints.lessThan('sm')`
    text-align: center;
  `}
`

const Email = styled.div`
  width: 100%;
  max-width: 300px;

  ${breakpoints.lessThan('sm')`
    margin: auto;
    max-width: 400px;
  `}
`

const Title = styled(Text)`
  max-width: 630px;
  font-size: ${theme('font.size.fortyFive')};

  ${breakpoints.greaterThan('sm')`
    font-size: ${theme('font.size.sixty')};
  `}

  ${breakpoints.lessThan('sm')`
    text-align: center;
  `}
`

const Header = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  ${breakpoints.lessThan('sm')`
    display: flex;
    align-items: center;
    height: 70vh;
  `}
`

Header.Content = styled(Col)`
  height: 100%;
  padding-top: 10%;

  ${breakpoints.lessThan('sm')`
    padding-top: 0;
    text-align: center;
  `}
`

const Peoples = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 75%;
  z-index: ${theme('zindex.behind')};

  ${breakpoints.lessThan('x1')`
    width: 85%;
  `}
`

const Subtitle = styled(Text)`
  font-size: ${theme('font.size.fortyFive')};
  text-align: center;
  padding-top: 60px;

  ${breakpoints.greaterThan('sm')`
    font-size: ${theme('font.size.sixty')};
  `}
`

const About = styled.div`
  width: 100%;
  height: 80vh;
  background-color: ${theme('colors.quartiary')};
`

const Point = styled.div`
  width: 300px;
  height: 300px;
  padding: 45px;
  border-radius: ${theme('border.radius.five')};

  background-color: ${ifProp(
    { variant: 'primary' },
    theme('colors.sixtiary'),
    theme('colors.secondary')
  )};

  ${ifProp(
    { variant: 'primary' },
    css`
      border: 1px solid ${theme('colors.support.secondary')};
    `
  )}

  .title {
    margin-bottom: 30px;
  }

  ${breakpoints.lessThan('lg')`
    width: 100%;
    height: 120px;
    margin-bottom: 30px;
    padding: 15px;

    .title {
      margin-bottom: 10px;
    }
  `}

  ${breakpoints.lessThan('sm')`
    height: 150px;
  `}
`

About.Content = styled(Container)`
  display: flex;
  justify-content: space-between;

  ${breakpoints.lessThan('lg')`
    flex-direction: column;
  `}
`

const Explanation = styled(Text)`
  text-align: center;
`

export const Landing = memo(() => {
  const { colors } = useContext(ThemeContext)
  const [email, setEmail] = useState('')

  return (
    <>
      <Header>
        <Container>
          <Header.Content>
            <Title color={colors.seventiary} weight="bold">
              Traga seus usuários para o cíclo de decisão.
            </Title>

            <Description
              color={colors.support.quintiary}
              size="eighteen"
              weight="light"
              height={22}
              top={30}
              bottom={40}
            >
              Que tal aproximar mais o usuário da construção do seu produto ou
              serviço? Receba requisições de novas funcionalidades ou correções,
              transpareça mais o que é entregue, cadastre se abaixo.
            </Description>

            <Email>
              <Input
                iconAlign="right"
                full={true}
                placeholder="Seu email aqui"
                onChange={({ target }) => setEmail(target.value)}
                value={email}
                icon={({ width, height, color }) => (
                  <Icon
                    name="right"
                    width={width}
                    height={height}
                    color={color}
                  />
                )}
              />
            </Email>
          </Header.Content>
        </Container>

        <Hidden xs>
          <Peoples src={peoples} />
        </Hidden>
      </Header>

      <About>
        <Subtitle color={colors.seventiary} weight="bold" bottom={20}>
          Como funciona?
        </Subtitle>

        <Explanation
          color={colors.support.quintiary}
          size="eighteen"
          weight="light"
          height={22}
          bottom={80}
        >
          Some explanation here as it work, unde omnis iste natus error sit
          voluptatem.
        </Explanation>

        <About.Content>
          <Point variant="primary">
            <Text
              className="title"
              color={colors.support.quintiary}
              weight="bold"
            >
              Grow your business
            </Text>

            <Text weight="light" color={colors.support.quintiary}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </Text>
          </Point>

          <Point variant="secondary">
            <Text className="title" weight="bold" color={colors.quartiary}>
              Grow your business
            </Text>

            <Text weight="light" color={colors.quartiary}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </Text>
          </Point>

          <Point variant="primary">
            <Text
              className="title"
              color={colors.support.quintiary}
              weight="bold"
            >
              Grow your business
            </Text>

            <Text weight="light" color={colors.support.quintiary}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </Text>
          </Point>
        </About.Content>
      </About>
    </>
  )
})
