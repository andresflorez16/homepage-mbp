import { 
  Box,
  Heading,
  SimpleGrid,
  Text,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import { Section } from './section'

const Skill = ({ skill, src }) => (
  <Box>
    <Image src={`/techs/${src}`} m='0 auto' alt={skill} width={{ base: '47', md: '90' }} height={{ base: '47', md: '90', xl: '90' }} />
    <Text>{skill}</Text>
  </Box>
)

export const Skills = () => {
  return (
    <Box
      bg={useColorModeValue('smoothTeal', '#333')}
      minH='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDir='column'
    >
      <Section delay={0.3} w='100%' p={2}>
        <Heading variant='_title' textAlign='center'>
          Skills
        </Heading>
        <SimpleGrid w={{ base: '99%', sm: '90%', md: '60%' }} m='0 auto' columns={2} >
          <Box textAlign='center'>
            <Text variant='_section_skills' m={5}>Frontend</Text>
            <SimpleGrid columns={2} spacing={2}>
              <Skill skill='HTML' src='html.png' />
              <Skill skill='CSS' src='css.png' />
              <Skill skill='Javascript' src='javascript.png' />
              <Skill skill='ReactJS' src='react.png' />
              <Skill skill='NextJS' src='next.png' />
            </SimpleGrid>
          </Box>
          <Box textAlign='center'>
            <Text variant='_section_skills' color={useColorModeValue('#111', '#fff')} m={5}>Backend</Text>
            <SimpleGrid columns={2} spacing={2}>
              <Skill skill='NodeJS' src='nodejs.png' />
              <Skill skill='ExpressJS' src='expressjs.png' />
            </SimpleGrid>
          </Box>
          <Box textAlign='center'>
            <Text variant='_section_skills' color={useColorModeValue('#111', '#fff')} m={5}>Database</Text>
            <SimpleGrid columns={2} spacing={2}>
              <Skill skill='MongoDB' src='mongodb.png' />
              <Skill skill='MySQL' src='mysql.png' />
            </SimpleGrid>
          </Box>
          <Box textAlign='center'>
            <Text variant='_section_skills' color={useColorModeValue('#111', '#fff')} m={5}>Cloud</Text>
            <SimpleGrid columns={2} spacing={2}>
              <Skill skill='Firebase' src='firebase.png' />
              <Skill skill='GCloud' src='google.png' />
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Section>
    </Box>
  )
}
