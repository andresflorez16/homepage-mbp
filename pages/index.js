import { 
  Box,
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { AboutMe } from '../components/aboutme'
import { Skills } from '../components/skills'
import { Web } from '../components/web'

function Home() {
  return (
    <Layout>
      <Box>
        <AboutMe />
        <Skills />
        <Web />
      </Box>
    </Layout>
  )
}

export default Home
