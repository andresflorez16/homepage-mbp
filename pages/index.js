import { AboutMe } from '../components/aboutme'
import { Skills } from '../components/skills'
import { 
  Box,
} from '@chakra-ui/react'
import { Bio } from '../components/bio'

function Home() {
  return (
    <Box>
      <AboutMe />
      <Skills />
      <Bio />
    </Box>
  )
}

export default Home
