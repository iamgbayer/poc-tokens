import React, { memo, useContext, useState } from 'react'
import { Container, Col, Hidden } from 'react-grid-system'
import styled, { ThemeContext } from 'styled-components'
import { theme } from 'styled-tools'
import { motion } from 'framer-motion'

import peoples from '../../assets/images/peoples.svg'

import { Text, Input, Icon, Modal, Button } from '../../components'
import { breakpoints, enterWithY } from '../../helpers'

import { About } from './About'

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

Header.Content = styled(motion.div)`
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

  ${breakpoints.greaterThan('sm')`
    font-size: ${theme('font.size.sixty')};
  `}
`

const Subscribe = styled(Container)`
  padding: 80px 0;
`

Subscribe.Content = styled(Container)`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  ${breakpoints.lessThan('md')`
    flex-direction: column;
  `}
`

const Send = styled(Button)`
  ${breakpoints.lessThan('md')`
    margin-top: 20px;
  `}
`

export const Landing = memo(() => {
  const { colors } = useContext(ThemeContext)
  const [email, setEmail] = useState('')
  const [modal, setModal] = useState(false)

  return (
    <>
      <Modal isOpen={modal} close={() => setModal(false)}>
        <Description
          color={colors.support.quintiary}
          size="eighteen"
          weight="light"
          height={22}
          bottom={40}
        >
          Tudo certo!
        </Description>
      </Modal>

      <Header>
        <Container>
          <Header.Content
            exit="exit"
            initial="initial"
            animate="enter"
            variants={{
              initial: { y: -200 },
              enter: { transition: { staggerChildren: 0.4 } }
            }}
          >
            <motion.div variants={enterWithY(200)}>
              <Title color={colors.seventiary} weight="bold">
                Traga seus usuários para o cíclo de decisão.
              </Title>
            </motion.div>

            <motion.div variants={enterWithY(200)}>
              <Description
                color={colors.support.quintiary}
                size="eighteen"
                weight="light"
                height={22}
                top={30}
                bottom={40}
              >
                Que tal aproximar mais o usuário da construção do seu produto ou
                serviço? Receba requisições de novas funcionalidades ou
                correções, transpareça mais o que é entregue, cadastre se
                abaixo.
              </Description>
            </motion.div>

            <motion.div variants={enterWithY(200)}>
              <Email>
                <Input
                  iconAlign="right"
                  full={true}
                  label="Seu email para obter o acesso antecipado"
                  placeholder="john@doe.com"
                  onChange={({ target }) => setEmail(target.value)}
                  value={email}
                  onClickIcon={() => setModal(true)}
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
            </motion.div>
          </Header.Content>
        </Container>

        <Hidden xs>
          <Peoples src={peoples} />
        </Hidden>
      </Header>

      <About />

      <Subscribe>
        <Subtitle color={colors.seventiary} weight="bold" bottom={40}>
          Ainda não se inscreveu?
        </Subtitle>

        <Subscribe.Content>
          <Col sm={12} md={4} lg={4}>
            <Input
              full={true}
              id="email"
              label="Seu email para obter o acesso antecipado"
              placeholder="john@doe.com"
              onChange={({ target }) => setEmail(target.value)}
              value={email}
            />
          </Col>

          <Col sm={12} md={2} lg={2} offset={{ md: 1, lg: 1 }}>
            <Send variant="secondary" onClick={() => setModal(true)}>
              Enviar
            </Send>
          </Col>
        </Subscribe.Content>
      </Subscribe>
    </>
  )
})
