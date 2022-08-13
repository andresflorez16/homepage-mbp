import { AboutMe } from '../components/aboutme'
import { Experience } from '../components/experience'
import { 
  Box,
} from '@chakra-ui/react'
import { Bio } from '../components/bio'
import { Navbar } from '../components/navbar'

function Home() {
  return (
    <Box>
      <Navbar />
      <AboutMe />
      <Experience />
      <Bio />
    </Box>
  )
}

export default Home
