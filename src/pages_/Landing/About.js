import React, { useContext } from 'react'
import styled, { ThemeContext, css } from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { Container as Containerable, Hidden } from 'react-grid-system'
import { motion } from 'framer-motion'
import { theme, ifProp, prop } from 'styled-tools'
import { useTranslation } from 'next-translate'

import secondWave from '../../assets/images/secondWave.svg'

import prioritize from '../../assets/images/prioritize.svg'
import roadmap from '../../assets/images/roadmap.svg'
import feedback from '../../assets/images/feedback.svg'

import { Text } from '../../components'
import { enterWithY, breakpoints, enterWithX } from '../../helpers'

const Card = ({
  justifyLeft = false,
  title,
  width = 100,
  description,
  image,
  hasMargin = false
}) => {
  const { colors } = useContext(ThemeContext)

  return (
    <Card.Container hasMargin={hasMargin} variants={enterWithY(200)}>
      <Hidden xs={true}>
        {justifyLeft && <Image width={width} src={image} />}
      </Hidden>

      <Card.Content justifyLeft={justifyLeft}>
        <Card.Title
          className="title"
          color={colors.primary}
          size="forty"
          weight="bold"
        >
          {title}
        </Card.Title>

        <Card.Description
          weight="light"
          color={colors.support.quartiary}
          size="twenty"
        >
          {description}
        </Card.Description>
      </Card.Content>

      <Hidden xs={true}>
        {!justifyLeft && <Image width={width} src={image} />}
      </Hidden>
    </Card.Container>
  )
}

const Image = styled.img`
  width: 100%;
  max-width: ${prop('width')}%;
`

const Container = styled(motion.div)`
  width: 100%;
  height: auto;
  position: relative;
`

Card.Title = styled(Text)`
  ${breakpoints.lessThan('lg')`
    font-size: ${theme('font.size.twenty')};
  `}
`

Card.Description = styled(Text)`
  ${breakpoints.lessThan('lg')`
    font-size: ${theme('font.size.twelve')};
  `}
`

Card.Container = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  ${ifProp(
    { hasMargin: true },
    css`
      margin: 130px 0;
    `
  )}
`

Card.Content = styled(motion.div)`
  width: 100%;
  max-width: 380px;

  .title {
    margin-bottom: 30px;
  }

  ${breakpoints.lessThan('lg')`
    ${ifProp(
      { justifyLeft: true },
      css`
        padding-left: 25px;
      `,
      css`
        padding-right: 20px;
      `
    )}

    .title {
      margin-bottom: 10px;
    }
  `}

  ${breakpoints.lessThan('sm')`
    text-align: center;
    max-width: 100%;
    padding: 0;
  `}
`

Container.Content = styled(Containerable)`
  display: flex;
  flex-direction: column;

  ${breakpoints.lessThan('lg')`
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

const SecondWave = styled.img`
  width: calc(70% - 5px);
  position: absolute;
  right: 0;
  top: 0;
  z-index: ${theme('zindex.behind')};
`

export default function About() {
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
        animate={inAbout ? 'enter' : 'exit'}
        variants={{
          initial: { y: -200 }
        }}
      >
        <motion.div
          variants={enterWithY(200)}
          initial="inital"
          animate={inAbout ? 'enter' : 'exit'}
        >
          <Subtitle color={colors.primary} weight="bold" bottom={20}>
            {t('translation:landing.about.title')}
          </Subtitle>
        </motion.div>

        <motion.div
          variants={enterWithY(200)}
          initial="inital"
          animate={inAbout ? 'enter' : 'exit'}
        >
          <Explanation
            color={colors.support.quartiary}
            size="eighteen"
            weight="light"
            height={22}
            bottom={80}
          >
            {t('translation:landing.about.subtitle')}
          </Explanation>
        </motion.div>

        <Container.Content>
          <motion.div
            exit="exit"
            initial="initial"
            animate={inAbout ? 'enter' : 'exit'}
            variants={{
              enter: {
                initial: { y: -200 },
                transition: {
                  staggerChildren: 0.8
                }
              }
            }}
          >
            <Card
              inAbout={inAbout}
              image={feedback}
              width={50}
              title={t('translation:landing.about.feedback.title')}
              description={t('translation:landing.about.feedback.description')}
            />

            <Card
              justifyLeft={true}
              hasMargin={true}
              width={50}
              image={prioritize}
              inAbout={inAbout}
              title={t('translation:landing.about.prioritize.title')}
              description={t(
                'translation:landing.about.prioritize.description'
              )}
            />

            <Card
              inAbout={inAbout}
              width={50}
              image={roadmap}
              title={t('translation:landing.about.roadmap.title')}
              description={t('translation:landing.about.roadmap.description')}
            />
          </motion.div>
        </Container.Content>
      </motion.div>

      <SecondWave src={secondWave} />
    </Container>
  )
}
