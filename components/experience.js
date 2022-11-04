import NextLink from 'next/link'
import { 
  Box,
  Heading,
  useColorModeValue,
  Link
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
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
            Full-Stack developer at La Salle University for the implementation of a low-cost sensor monitoring application
            <NextLink href='/works/aire-ciudadano'>
              <Link ml={2}>
                Aire Ciudadano <ExternalLinkIcon />
              </Link>
            </NextLink>
          </ExperienceSection>
          <ExperienceSection>
            <ExperienceYear>2021-2022</ExperienceYear>
            Application developer intern at Schlumberger for the implementation of multiple business applications for different work areas.
          </ExperienceSection>
          <ExperienceSection>
            <ExperienceYear>2022</ExperienceYear>
            Full-Stack developer at 
            <NextLink href='/works/itaeditorial'>
              <Link mx={2}>
                ItaEditorial <ExternalLinkIcon />
              </Link>
            </NextLink>
            for the implementation of a web, server and app mobile to publish books from anywhere
          </ExperienceSection>
          <ExperienceSection>
            <ExperienceYear>2022</ExperienceYear>
            Implementation of an app to BBVA&apos;s Hackathon to create bank accounts
            <NextLink href='/works/onboarding'>
              <Link ml={2}>
                Onboarding Digital <ExternalLinkIcon />
              </Link>
            </NextLink>
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
