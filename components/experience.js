import { 
  Box,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'
import { Section } from './section'
import { ExperienceSection, ExperienceYear } from './experience-item'

export const Experience = () => {
  return (
    <Box
      w='100%'
      minH='100vh'
      bg={useColorModeValue('light2', '#444')} display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Section 
        delay={0.3}
        w={{ base: 'full', md: '60%' }}
      >
        <Heading variant='_title' textAlign='center' mb={10}>
          Experience
        </Heading>
        <Box
          w='100%'
          px={3}
        >
          <ExperienceSection>
            <ExperienceYear>2021</ExperienceYear>
            Full-Stack developer at La Salle University for the implementation of a low-cost sensor monitoring application.
          </ExperienceSection>
          <ExperienceSection>
            <ExperienceYear>2021-2022</ExperienceYear>
            Application developer intern at Schlumberger for the implementation of multiple business applications for different work areas.
          </ExperienceSection>
          <ExperienceSection>
            <ExperienceYear>2022</ExperienceYear>
            Full-Stack developer at ItaEditorial for the implementation of a web, server and app mobile to publish books from anywhere
          </ExperienceSection>
          <ExperienceSection>
            <ExperienceYear>2022</ExperienceYear>
            Implementation of an app to BBVA's Hackathon to create bank accounts
          </ExperienceSection>
          <ExperienceSection>
            <ExperienceYear>2022</ExperienceYear>
            Development and implementation of an inventory management web application for a company
            </ExperienceSection>
          </Box>
      </Section>
    </Box>
  )
}
