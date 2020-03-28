import React, { memo, useContext, useState } from 'react'
import { Container, Col, Hidden } from 'react-grid-system'
import styled, { ThemeContext, css } from 'styled-components'
import { theme, ifProp } from 'styled-tools'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import peoples from '../../assets/images/peoples.svg'
import extendable from '../../assets/images/extends.svg'

import { Text, Input, Icon, Modal, Button } from '../../components'
import { breakpoints, enterWithY } from '../../helpers'
import { saveLeadAddress } from '../../services'

import { About } from './About'

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

export const Landing = memo(() => {
  const { colors } = useContext(ThemeContext)
  const [email, setEmail] = useState('')
  const [modal, setModal] = useState(false)
  const { t, i18n } = useTranslation()

  const changeLanguage = language => () => i18n.changeLanguage(language)

  const save = () => {
    setEmail('')

    email && saveLeadAddress(email).then(() => setModal(true))
  }

  return (
    <Content>
      <Languages variants={enterWithY(10)}>
        <Language
          color={colors.support.quintiary}
          onClick={changeLanguage('en')}
        >
          🇺🇸
        </Language>

        <Language
          color={colors.support.quintiary}
          left={15}
          onClick={changeLanguage('pt-BR')}
        >
          🇧🇷
        </Language>
      </Languages>

      <Modal isOpen={modal} close={() => setModal(false)}>
        <Modal.Content>
          <Description
            color={colors.support.quintiary}
            size="eighteen"
            weight="light"
            center={true}
            height={22}
            bottom={30}
          >
            {t('landing.modal.title')}
          </Description>

          <Button
            variant="secondary"
            href="https://feedl.typeform.com/to/EvEKdH"
          >
            {t('landing.modal.button')}
          </Button>
        </Modal.Content>
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
                {t('landing.header.title')}
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
                {t('landing.header.description')}
              </Description>
            </motion.div>

            <motion.div variants={enterWithY(200)}>
              <Email>
                <Input
                  iconAlign="right"
                  full={true}
                  label={t('landing.header.email')}
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
        </Container>

        <Hidden xs>
          <Peoples src={peoples} />
        </Hidden>
      </Header>

      <About />

      <Subscribe>
        <Subtitle color={colors.seventiary} weight="bold" bottom={40}>
          {t('landing.subscribe.title')}
        </Subtitle>

        <Subscribe.Content>
          <Col sm={12} md={4} lg={4}>
            <Input
              full={true}
              id="email"
              label={t('landing.subscribe.email')}
              placeholder="john@doe.com"
              onChange={({ target }) => setEmail(target.value)}
              value={email}
            />
          </Col>

          <Col sm={12} md={2} lg={2} offset={{ md: 1, lg: 1 }}>
            <Send full={true} variant="secondary" onClick={save}>
              {t('landing.subscribe.button')}
            </Send>
          </Col>
        </Subscribe.Content>
      </Subscribe>

      <Extends src={extendable} />
    </Content>
  )
})
