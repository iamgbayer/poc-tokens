import React, { memo, useContext } from 'react'
import styled, { css, ThemeContext } from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { Container as Containerable } from 'react-grid-system'
import { motion } from 'framer-motion'
import { theme, ifProp } from 'styled-tools'

import { Text } from '../../components'

import { enterWithY, breakpoints } from '../../helpers'

const Container = styled(motion.div)`
  width: 100%;
  height: auto;
  padding: 80px 0;
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

Container.Content = styled(Containerable)`
  display: flex;
  justify-content: space-between;

  ${breakpoints.lessThan('lg')`
    flex-direction: column;
  `}
`

const Explanation = styled(Text)`
  text-align: center;
`

const Subtitle = styled(Text)`
  font-size: ${theme('font.size.fortyFive')};
  text-align: center;

  ${breakpoints.greaterThan('sm')`
    font-size: ${theme('font.size.sixty')};
  `}
`

export const About = memo(() => {
  const { colors } = useContext(ThemeContext)

  const [about, inAbout] = useInView({
    rootMargin: '-100px 0px'
  })

  return (
    <Container ref={about}>
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
          <Container.Content>
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
          </Container.Content>
        </motion.div>
      </motion.div>
    </Container>
  )
})
