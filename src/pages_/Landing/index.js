import React, { useContext, useState } from 'react'
import Head from 'next/head'
import { Container, Hidden } from 'react-grid-system'
import styled, { ThemeContext, css } from 'styled-components'
import { theme, ifProp } from 'styled-tools'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-translate'
import Link from 'next-translate/Link'

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
  z-index: ${theme('zindex.100')};

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

Modal.Title = styled(Text)`
  font-size: ${theme('font.size.thirty')};
  text-align: center;
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
  width: 100%;
  max-width: 120px;
  margin-left: 20px;

  ${breakpoints.lessThan('md')`
    max-width: 100%;
    margin-top: 20px;
  `}
`

const Col = styled.div`
  width: 100%;
  max-width: 30%;

  ${breakpoints.lessThan('md')`
    max-width: 100%;
  `}
`

export default function Landing() {
  const { colors } = useContext(ThemeContext)
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [config, setConfig] = useState({
    modal: false,
    status: 'right',
    size: 11
  })

  const save = () => {
    setEmail('')

    if (email) {
      setConfig({
        modal: false,
        status: 'loading',
        size: 25
      })

      saveLeadAddress(email).then(() =>
        setConfig({ modal: true, status: 'right', size: 11 })
      )
    }
  }

  const { modal, status, size } = config

  return (
    <Content>
      <Head>
        <title>{t('translation:landing.meta.title')}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:url" content="https://welcome.feedl.co/" />
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="Feedl" />
        <meta
          property="og:title"
          content={t('translation:landing.meta.title')}
        />

        <meta
          property="og:description"
          content={t('translation:landing.meta.description')}
        />
        <meta
          property="og:image"
          content="http://welcome.feedl.co/assets/images/meta-picture.jpg"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://welcome.feedl.co/" />
        <meta
          name="twitter:title"
          content={t('translation:landing.meta.title')}
        />
        <meta
          name="twitter:description"
          content={t('translation:landing.meta.description')}
        />
        <meta
          name="twitter:image"
          content="https://welcome.feedl.co/assets/images/meta-picture.jpg"
        />
      </Head>

      <Languages variants={enterWithY(10)}>
        <Link href="/" lang="en" key="en">
          <Language color={colors.primary}>🇺🇸</Language>
        </Link>

        <Link href="/" lang="pt-BR" key="pt-BR">
          <Language color={colors.primary} left={15}>
            🇧🇷
          </Language>
        </Link>
      </Languages>

      <Modal
        isOpen={modal}
        close={() => setConfig({ status: 'right', modal: false, size: 11 })}
      >
        <Modal.Content>
          <Modal.Title color={colors.primary} weight="bold" bottom={20}>
            {t('translation:landing.modal.title')}
          </Modal.Title>

          <Description
            color={colors.primary}
            size="eighteen"
            weight="light"
            center={true}
            height={22}
            bottom={30}
          >
            {t('translation:landing.modal.description')}
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
                  icon={({ color }) => (
                    <Icon
                      name={status}
                      width={size}
                      height={size}
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
          <Col>
            <Input
              full={true}
              id="email"
              label={t('translation:landing.subscribe.email')}
              placeholder="john@doe.com"
              onChange={({ target }) => setEmail(target.value)}
              value={email}
            />
          </Col>

          <Send full={true} variant="secondary" onClick={save}>
            {t('translation:landing.subscribe.button')}
          </Send>
        </Subscribe.Content>
      </Subscribe>

      <Extends src={extendable} />
    </Content>
  )
}
