import React from 'react'
import CardChangelog from '~/components/CardChangelog'
import Layout from '~/components/Layout'
import CHANGELOG from '~/data/changelog'
import getNavigation from '~/helpers/getNavigation'

export async function getStaticProps() {
  return { props: { navigation: getNavigation(), changelog: CHANGELOG } }
}

const CardChangelogPage = ({ navigation, ...props }) => (
  <Layout
    active={['GAME', 'UPDATES', 'CARD_CHANGELOG']}
    navigation={navigation}
  >
    <CardChangelog {...props} />
  </Layout>
)

export default CardChangelogPage
