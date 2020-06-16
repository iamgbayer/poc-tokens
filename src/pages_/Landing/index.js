import React, { useState, useEffect, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { width } from 'styled-system'

import { theme } from 'styled-tools'
import { motion } from 'framer-motion'
import media from 'styled-media-query'
import { lte } from 'ramda'

import firstWave from '@/assets/images/firstWave.svg'
import partners from '@/assets/images/partners.svg'

import { Input, Text, Icon } from '@/components'
import { enterWithY } from '@/helpers'

import Head from './Head'

const Content = styled(motion.div)`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  z-index: ${theme('zindex.one')};

  ${media.lessThan('large')`
    padding: 0 15px;
    padding-top: 20px;
  `};
`

const Description = styled(Text)`
  max-width: 500px;
`

const Title = styled(Text)`
  max-width: 630px;
`

const FirstWave = styled.img`
  width: 70%;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: ${theme('zindex.behind')};
`

const Partners = styled.img`
  ${width}
  position: absolute;
  right: 30px;
  bottom: 30px;
`

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`

export default function Landing() {
  const [email, setEmail] = useState('')

  const earlySignup = () => {}

  return (
    <>
      <Container>
        <Head />

        <Content
          exit="exit"
          initial="initial"
          animate="enter"
          variants={{
            initial: { y: -200 },
            enter: { transition: { staggerChildren: 0.4 } }
          }}
        >
          <motion.div variants={enterWithY(200)}>
            <Title fontSize={[30, 45]} fontWeight="bold">
              We want to match people with projects in a different way.
            </Title>
          </motion.div>

          <motion.div variants={enterWithY(200)}>
            <Description
              fontSize={18}
              fontWeight="light"
              color="eight"
              lineHeight={22}
              marginTop={30}
              marginBottom={40}
            >
              If you need to find a partner for your project or if you are
              really trying to join a project, you've come to the right place.
              Enter you email below to be notified when we'll be ready.
            </Description>
          </motion.div>

          <motion.div variants={enterWithY(200)}>
            <Input
              iconAlign="right"
              full={true}
              label="Sign up for early access"
              placeholder="john@doe.com"
              onChange={({ target }) => setEmail(target.value)}
              value={email}
              onClickIcon={earlySignup}
              icon={({ color }) => (
                <Icon name="right" width={12} height={12} color={color} />
              )}
            />
          </motion.div>
        </Content>

        <Partners width={['60%', '50%']} src={partners} />

        <FirstWave src={firstWave} />
      </Container>
    </>
  )
}
