import React, { useContext, useState } from 'react'
import Head from 'next/head'
import { Container, Col, Hidden } from 'react-grid-system'
import styled, { ThemeContext, css } from 'styled-components'
import { theme, ifProp } from 'styled-tools'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-translate'

import peoples from '../../assets/images/peoples.svg'
import extendable from '../../assets/images/extends.svg'
import firstWave from '../../assets/images/firstWave.svg'

import { Text, Input, Icon, Modal, Button } from '../../components'
import { breakpoints, enterWithY } from '../../helpers'
import { saveLeadAddress } from '../../services'

import About from './About'

const Description = styled(Text)`
  max-width: 500px;

  ${ifProp(
    { center: true },
    css`
      text-align: center;
    `
  )}

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
  height: 80vh;
  position: relative;
  display: flex;
  align-items: center;
  z-index: ${theme('zindex.overlay')};

  ${breakpoints.lessThan('sm')`
    display: flex;
    align-items: center;
    height: 70vh;
  `}
`

Header.Container = styled(Container)`
  display: flex;
  align-items: center;
`

Header.Content = styled(motion.div)`
  height: 100%;

  ${breakpoints.lessThan('sm')`
    padding-top: 0;
    text-align: center;
  `}
`

const Peoples = styled.img`
  width: 50%;

  ${breakpoints.lessThan('x1')`
    width: 40%;
  `}
`

const FirstWave = styled.img`
  width: 70%;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: ${theme('zindex.behind')};
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

const Content = styled.div`
  position: relative;
`

const Extends = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: ${theme('zindex.behind')};
  max-width: 60%;

  ${breakpoints.lessThan('md')`
    max-width: 90%;
  `}
`

Modal.Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Languages = styled(motion.div)`
  display: flex;
  position: absolute;
  top: 10px;
  right: 15px;
  z-index: ${theme('zindex.overlay')};
`

const Language = styled(Text)`
  cursor: pointer;
`

export default function Landing() {
  const { colors } = useContext(ThemeContext)
  const [email, setEmail] = useState('')
  const [modal, setModal] = useState(false)
  const { t } = useTranslation()

  const changeLanguage = language => () => i18n.changeLanguage(language)

  const save = () => {
    setEmail('')

    email && saveLeadAddress(email).then(() => setModal(true))
  }

  return (
    <Content>
      <Head>
        <title>This page has a title 🤔</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:url" content="http://welcome.feedl.co/" />
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="Feedl" />
        <meta property="og:title" content="Ship stuff people need | Feedl" />
        <meta
          property="og:description"
          content="With feedl, your entire feedback workflow is in one place."
        />
        <meta
          property="og:image"
          content="http://welcome.feedl.co/assets/images/meta-picture.jpg"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="http://Feedl.app/" />
        <meta name="twitter:title" content="Ship stuff people need | Feedl" />
        <meta
          name="twitter:description"
          content="With feedl, your entire feedback workflow is in one place."
        />
        <meta
          name="twitter:image"
          content="http://welcome.feedl.co/assets/images/meta-picture.jpg"
        />
      </Head>

      <Languages variants={enterWithY(10)}>
        <Language color={colors.primary} onClick={changeLanguage('en')}>
          🇺🇸
        </Language>

        <Language
          color={colors.primary}
          left={15}
          onClick={changeLanguage('pt-BR')}
        >
          🇧🇷
        </Language>
      </Languages>

      <Modal isOpen={modal} close={() => setModal(false)}>
        <Modal.Content>
          <Description
            color={colors.primary}
            size="eighteen"
            weight="light"
            center={true}
            height={22}
            bottom={30}
          >
            {t('translation:landing.modal.title')}
          </Description>

          <Button
            variant="secondary"
            href="https://feedl.typeform.com/to/EvEKdH"
          >
            {t('translation:landing.modal.button')}
          </Button>
        </Modal.Content>
      </Modal>

      <Header>
        <Header.Container>
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
              <Title color={colors.primary} weight="bold">
                {t('translation:landing.header.title')}
              </Title>
            </motion.div>

            <motion.div variants={enterWithY(200)}>
              <Description
                color={colors.support.quartiary}
                size="eighteen"
                weight="light"
                height={22}
                top={30}
                bottom={40}
              >
                {t('translation:landing.header.description')}
              </Description>
            </motion.div>

            <motion.div variants={enterWithY(200)}>
              <Email>
                <Input
                  iconAlign="right"
                  full={true}
                  label={t('translation:landing.header.email')}
                  placeholder="john@doe.com"
                  onChange={({ target }) => setEmail(target.value)}
                  value={email}
                  onClickIcon={save}
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

          <Hidden xs>
            <Peoples src={peoples} />
          </Hidden>
        </Header.Container>

        <FirstWave src={firstWave} />
      </Header>

      <About />

      <Subscribe>
        <Subtitle color={colors.primary} weight="bold" bottom={40}>
          {t('translation:landing.subscribe.title')}
        </Subtitle>

        <Subscribe.Content>
          <Col xl={12} xs={12} sm={12} md={4} lg={4}>
            <Input
              full={true}
              id="email"
              label={t('translation:landing.subscribe.email')}
              placeholder="john@doe.com"
              onChange={({ target }) => setEmail(target.value)}
              value={email}
            />
          </Col>

          <Col xl={12} xs={12} sm={12} md={2} lg={2} offset={{ md: 1, lg: 1 }}>
            <Send full={true} variant="secondary" onClick={save}>
              {t('translation:landing.subscribe.button')}
            </Send>
          </Col>
        </Subscribe.Content>
      </Subscribe>

      <Extends src={extendable} />
    </Content>
  )
}
