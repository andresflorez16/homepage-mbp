import {
  Box
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { AboutMe } from '../components/aboutme'
import { Skills } from '../components/skills'
import { Web } from '../components/web'
import { Experience } from '../components/experience'

function Home () {
  return (
    <Layout title='Home'>
      <Box>
        <AboutMe />
        <Experience />
        <Skills />
        <Web />
      </Box>
    </Layout>
  )
}

export default Home
