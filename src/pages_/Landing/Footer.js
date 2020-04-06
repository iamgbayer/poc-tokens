import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { theme } from 'styled-tools'
import { Container as Containerable, Col } from 'react-grid-system'
import useTranslation from 'next-translate/useTranslation'

import { Text, Icon } from '../../components'

const Content = styled.div`
  width: 100%;
  background-color: ${theme('colors.secondary')};
  padding: 30px 0;
`

const Socials = styled.div`
  display: flex;
`

const Container = styled(Containerable)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Social = styled(Icon)`
  cursor: pointer;
`

export default function Footer() {
  const { colors } = useContext(ThemeContext)
  const { t } = useTranslation()

  const open = (social) => () => {
    const getBySocial = {
      twitter: 'https://twitter.com/feedlHQ',
      linkedin: 'https://www.linkedin.com/company/feedl'
    }

    window.open(getBySocial[social])
  }

  return (
    <Content>
      <Container>
        <Col>
          <Text color={colors.quartiary}>
            {t('translation:landing.footer.description')}
          </Text>
        </Col>

        <Socials>
          <Social
            name="twitter"
            onClick={open('twitter')}
            color={colors.quartiary}
            width={30}
            height={30}
          />

          <Social
            name="linkedin"
            onClick={open('linkedin')}
            left={15}
            color={colors.quartiary}
            width={30}
            height={30}
          />
        </Socials>
      </Container>
    </Content>
  )
}
