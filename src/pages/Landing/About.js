import React, { memo, useContext } from 'react'
import styled, { css, ThemeContext } from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { Container as Containerable, Hidden } from 'react-grid-system'
import { motion } from 'framer-motion'
import { theme, ifProp } from 'styled-tools'
import { useTranslation } from 'react-i18next'

import below from '../../assets/images/below.svg'

import { Text } from '../../components'

import { enterWithY, breakpoints } from '../../helpers'

const Container = styled(motion.div)`
  width: 100%;
  height: auto;
  padding: 80px 0;
  position: relative;
`

const Point = styled(motion.div)`
  width: 300px;
  height: 260px;
  padding: 45px;
  border-radius: ${theme('border.radius.five')};

  background-color: ${ifProp(
    { variant: 'primary' },
    theme('colors.support.primary'),
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

const Below = styled.img`
  width: calc(75% - 5px);
  position: absolute;
  right: 0;
  top: 0;
  z-index: ${theme('zindex.behind')};

  ${breakpoints.lessThan('x1')`
    width: 85%;
  `}
`

export const About = memo(() => {
  const { colors } = useContext(ThemeContext)
  const { t } = useTranslation()

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
            {t('landing.about.title')}
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
            {t('landing.about.subtitle')}
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
                color={colors.seventiary}
                size="eighteen"
                weight="bold"
              >
                {t('landing.about.feedback.title')}
              </Text>

              <Text weight="light" color={colors.support.quintiary}>
                {t('landing.about.feedback.description')}
              </Text>
            </Point>

            <Point variant="primary">
              <Text
                className="title"
                size="eighteen"
                weight="bold"
                color={colors.seventiary}
              >
                {t('landing.about.roadmap.title')}
              </Text>

              <Text weight="light" color={colors.support.quintiary}>
                {t('landing.about.roadmap.description')}
              </Text>
            </Point>

            <Point variant="primary">
              <Text
                className="title"
                size="eighteen"
                color={colors.seventiary}
                weight="bold"
              >
                {t('landing.about.changelog.title')}
              </Text>

              <Text weight="light" color={colors.support.quintiary}>
                {t('landing.about.changelog.description')}
              </Text>
            </Point>
          </Container.Content>
        </motion.div>
      </motion.div>

      <Hidden xs>
        <Below src={below} />
      </Hidden>
    </Container>
  )
})
