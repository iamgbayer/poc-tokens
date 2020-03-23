import React, { memo, useContext, useState } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styled, { ThemeContext } from 'styled-components'
import { theme } from 'styled-tools'
import media from 'styled-media-query'

import peoples from '../assets/images/peoples.svg'

import { Text, Input, Icon, Button } from '../components'

const Nav = styled.nav`
  width: 100%;
  background-color: blue;
`

const Logo = styled.div`
  width: 100%;
  background-color: red;
`

const Description = styled(Text)`
  max-width: 500px;
`

const Email = styled(Row)`
  width: 100%;
  max-width: 300px;
`

const Title = styled(Text)`
  max-width: 630px;
  font-size: ${theme('font.size.fortyFive')};

  ${media.greaterThan('small')`
    font-size: ${theme('font.size.sixty')};
  `}
`

const Header = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`

Header.Content = styled(Col)`
  height: 100%;
  padding-top: 10%;
`

const Peoples = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 75%;
  z-index: ${theme('zindex.behind')};

  ${media.lessThan('large')`
    width: 85%;
  `}
`

export const Landing = memo(() => {
  const { colors } = useContext(ThemeContext)
  const [email, setEmail] = useState('')

  return (
    <>
      <Header>
        <Grid>
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
        </Grid>

        <Peoples src={peoples} />
      </Header>
    </>
  )
})
