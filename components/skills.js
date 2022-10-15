import { 
  Box,
  Heading,
  Text,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import { Section } from './section'
import SliderContainer, { SliderItem } from './slider'
import { skillsFile } from '../utils/skills-files'

const Skill = ({ skill, src }) => (
  <Box
    w='100%'
    _hover={{ transform: 'rotate(10deg)' }}
    transition='transform .5 ease'
  >
    <Image src={`/techs/${src}`} m='0 auto' alt={skill} width={{ base: '47', sm: '55', md: '82' }} height={{ base: '47', sm: '55', md: '82' }} />
    <Text>{skill}</Text>
  </Box>
)

export const Skills = () => {
  return (
    <Box
      bg={useColorModeValue('smoothTeal', '#111')}
      minH='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDir='column'
      w='100%'
    >
      <Section delay={0.3} w='100%' p={2}>
        <Heading variant='_title' textAlign='center'>
          Skills
        </Heading>
        <Box textAlign='center' w='100%'>
          <Text variant='_section_skills' m={5}>Frontend</Text>
          <SliderContainer
            contentWidth={1290}
            initialOffsetX={0}
          >
            {
              skillsFile.map(( skill, i ) => (
                <SliderItem width={150} key={i}>
                  <Image src={`/techs/${skill.path}`} w={150} />
                </SliderItem>
              ))
            }
          </SliderContainer>
        </Box>
      </Section>
    </Box>
  )
}
