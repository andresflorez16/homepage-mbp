import {
  Box,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'
import { Section } from './section'
import ExperienceItem from './experience-item'

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
        w={{ base: 'full', md: '70%' }}
      >
        <Heading variant='_title' textAlign='center' mb={10}>
          Experience
        </Heading>
        <Box
          w='100%'
          px={3}
        >
          <ExperienceItem year='2023 - Present'>
            Senior Developer React at Gestión de Seguridad Electrónica GSE. In charge of different projects like microservices, web applications and others. Also supervision of junior devs
          </ExperienceItem>
          <ExperienceItem year='2023'>
            Development of an inventory management web application for a bricks company
          </ExperienceItem>
          <ExperienceItem
            year='2022'
            href='https://link.springer.com/chapter/10.1007/978-3-031-20611-5_37'
            alt='"A Machine Learning Based Command Voice Recognition Interface"'
          >
            Researcher at La Salle University in the application of scientific paper to Springer database by WEA 2022, called
          </ExperienceItem>
          <ExperienceItem year='2022' href='/works/onboarding' alt='Onboarding Digital'>
            Participant at BBVA&apos;s Hackathon about bank accounts
          </ExperienceItem>
          <ExperienceItem year='2022' href='/works/itaeditorial' alt='ItaEditorial'>
            Full-Stack developer at ItaEditorial for the implementation of a web, server and app mobile to publish books from anywhere
          </ExperienceItem>
          <ExperienceItem year='2021' href='/works/aire-ciudadano' alt='Aire Ciudadano'>
            Full-Stack developer at La Salle University for the implementation of a low-cost sensor monitoring application
          </ExperienceItem>
          <ExperienceItem year='2021-2022'>
            Application developer intern at Schlumberger for the implementation of multiple business applications for different work areas.
          </ExperienceItem>
        </Box>
      </Section>
    </Box>
  )
}
