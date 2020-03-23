import React, { memo, useContext, useState } from 'react'
import { Container, Col, Hidden } from 'react-grid-system'
import styled, { ThemeContext, css } from 'styled-components'
import { theme, ifProp } from 'styled-tools'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import peoples from '../assets/images/peoples.svg'

import { Text, Input, Icon, Modal } from '../components'
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
  padding-top: 60px;

  ${breakpoints.greaterThan('sm')`
    font-size: ${theme('font.size.sixty')};
  `}
`

const About = styled(motion.div)`
  width: 100%;
  height: 80vh;
  background-color: ${theme('colors.quartiary')};
`

const Point = styled(motion.div)`
  width: 300px;
  height: 260px;
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

export const enterWithY = y => ({
  initial: { opacity: 0 },
  enter: { opacity: 1, y },
  exit: { opacity: 0 }
})

export const Landing = memo(() => {
  const { colors } = useContext(ThemeContext)
  const [email, setEmail] = useState('')
  const [modal, setModal] = useState(false)

  const [about, inAbout] = useInView({
    rootMargin: '-100px 0px'
  })

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
                  placeholder="Seu email aqui"
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

      <About ref={about}>
        <motion.div
          exit="exit"
          initial="initial"
          animate="enter"
          variants={{
            initial: { y: -200 },
            enter: { transition: { staggerChildren: 0.6 } }
          }}
        >
          <motion.div
            variants={enterWithY(200)}
            initial="inital"
            animate={inAbout ? 'enter' : 'exit'}
          >
            <Subtitle color={colors.seventiary} weight="bold" bottom={20}>
              Como funciona?
            </Subtitle>
          </motion.div>

          <motion.div
            variants={enterWithY(200)}
            initial="inital"
            animate={inAbout ? 'enter' : 'exit'}
          >
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
          </motion.div>

          <motion.div
            variants={enterWithY(200)}
            exit="exit"
            initial="inital"
            animate={inAbout ? 'enter' : 'exit'}
          >
            <About.Content>
              <Point variant="primary">
                <Text
                  className="title"
                  color={colors.support.quintiary}
                  weight="bold"
                >
                  Colete feedbacks
                </Text>

                <Text weight="light" color={colors.support.quintiary}>
                  Tenha uma visão clara de novas funcionalidades e correções que
                  estão sendo mais sugeridas por seus usuário em um único lugar.
                </Text>
              </Point>

              <Point variant="secondary">
                <Text className="title" weight="bold" color={colors.quartiary}>
                  Defina um roadmap
                </Text>

                <Text weight="light" color={colors.quartiary}>
                  Deixe bem explícito para todos no que atualmente seu time está
                  trabalhando e quais serão os próximos afazeres.
                </Text>
              </Point>

              <Point variant="primary">
                <Text
                  className="title"
                  color={colors.support.quintiary}
                  weight="bold"
                >
                  Exponha um changelog
                </Text>

                <Text weight="light" color={colors.support.quintiary}>
                  Anuncie os últimos lançamentos do seu produto, engajando seus
                  usuários mais cedo com novas funcionalidades e correções.
                </Text>
              </Point>
            </About.Content>
          </motion.div>
        </motion.div>
      </About>
    </>
  )
})
