import { 
  Box,
} from '@chakra-ui/react'
import { AboutMe } from '../components/aboutme'
import { Skills } from '../components/skills'
import { Web } from '../components/web'

function Home() {
  return (
    <Box>
      <AboutMe />
      <Skills />
      <Web />
    </Box>
  )
}

export default Home
