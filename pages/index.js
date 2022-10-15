import { 
  Box,
} from '@chakra-ui/react'
import { AboutMe } from '../components/aboutme'
import { Skills } from '../components/skills'
import { Posts } from '../components/posts'

function Home() {
  return (
    <Box>
      <AboutMe />
      <Skills />
      <Posts />
    </Box>
  )
}

export default Home
