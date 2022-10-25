import { 
  Box,
  Heading,
  Text,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import { Section } from './section'
import SliderContainer, { SliderItem } from './slider'
import { skillsFrontend, skillsBackend } from '../utils/skills-files'

const Skill = ({ skill, src, width }) => {
   return (
    <Box>
      <Image 
        src={`/techs/${src}`} 
        alt={skill} 
        width={width} 
      />
      <Text>{skill}</Text>
    </Box>
  )
}

export const Skills = () => {
  return (
    <Box
      bg={useColorModeValue('light3', '#333')}
      minH='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDir='column'
      w='100%'
      color={useColorModeValue('#000', '#fff')}
    >
      <Section delay={0.3} w='100%' p={2}>
        <Heading variant='_title' m={5} textAlign='center'>
          Skills
        </Heading>
        <Box
          textAlign='center'
          mb={20}
        >
          <Text variant='_section_skills' m={5}>Frontend</Text>
          <SliderContainer
            contentWidth={1270}
            initialOffsetX={0}
          >
            {
              skillsFrontend.map(( skill, i ) => (
                <SliderItem width={100} key={i}>
                  <Skill width={100} skill={skill.skill} src={skill.path} />
                </SliderItem>
              ))
            }
          </SliderContainer>
        </Box>
        <Box
          textAlign='center'
        >
          <Text variant='_section_skills' m={5}>Backend/DB/Cloud</Text>
          <SliderContainer
            contentWidth={1290}
            initialOffsetX={0}
          >
            {
              skillsBackend.map(( skill, i ) => (
                <SliderItem width={100} key={i}>
                  <Skill width={100} skill={skill.skill} src={skill.path} />
                </SliderItem>
              ))
            }
          </SliderContainer>
        </Box>
      </Section>
    </Box>
  )
}
