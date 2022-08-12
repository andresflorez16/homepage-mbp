import { AboutMe } from '../components/aboutme'
import { Experience } from '../components/experience'
import { 
  Box,
  Text
} from '@chakra-ui/react'

export default function Home() {
  return (
    <Box>
      <Box
        w='100%'
        p={5}
        position='fixed'
        top='0'
        bg='#333'
      >
        <Text color='#fff'>Navbar</Text>
      </Box>
      <AboutMe />
      <Experience />
      <Experience />
    </Box>
  )
}
