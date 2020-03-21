import React, { memo, useContext, useState } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styled, { ThemeContext } from 'styled-components'
import { theme } from 'styled-tools'
import media from 'styled-media-query'

import { Text, Input, Icon } from '../components'

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

const Email = styled.div`
  width: 100%;
  max-width: 320px;
`

const Title = styled(Text)`
  max-width: 630px;
  font-size: ${theme('font.size.thirty')};

  ${media.greaterThan('small')`
    font-size: ${theme('font.size.sixty')};
  `}
`

const Header = styled(Row)``

export const Landing = memo(() => {
  const { colors } = useContext(ThemeContext)
  const [email, setEmail] = useState('')

  return (
    <Grid>
      <Row>
        <Col lg={3}>
          <Logo />
        </Col>

        <Col lg={9}>
          <Nav>Home</Nav>
        </Col>
      </Row>

      <Header>
        <Title color={colors.tertiary} weight="bold">
          We want to match people with projects in a different way.
        </Title>

        <Description
          color={colors.tertiary}
          size="eighteen"
          weight="light"
          top={30}
          bottom={40}
        >
          If you need to find a partner for your project or if you are really
          trying to join a project, you've come to the right place. Enter you
          email below to be notified when we'll be ready.
        </Description>

        <Email>
          <Input
            iconAlign="right"
            full={true}
            placeholder="Enter here your email"
            onChange={setEmail}
            value={email}
            icon={({ width, height, color }) => (
              <Icon name="right" width={width} height={height} color={color} />
            )}
          />
        </Email>
      </Header>
    </Grid>
  )
})
