import { Box, Heading, SimpleGrid, Divider, Text } from '@chakra-ui/react'
import { Section } from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'

const Works = () => {
  return (
    <Layout title='Works'>
      <Box
        display='flex'
        minH='100vh'
        justifyContent='center'
        alignItems='center'
        mt={20}
        p={15}
      >
        <Section delay={0.3} mb={[20, 10]}>
          <Heading textAlign='center' mb={10} variant='_title'>Works</Heading>
          <Text m={5} fontSize={20}>Own</Text>
          <SimpleGrid
            columns={[1, 1, 2]}
            gap={8}
          >
            <WorkGridItem
              id='aire-ciudadano'
              title='Aire Ciudadano'
              thumbnail='aireciudadano.png'
            >
              To monitoring air quality by low-cost sensors
            </WorkGridItem>
            <WorkGridItem
              id='open-jira'
              title='OpenJira'
              thumbnail='openjira.png'
            >
              Similar Jira App with drag and drop entries
            </WorkGridItem>
            <WorkGridItem
              id='onboarding'
              title='Onboarding Digital BBVA'
              thumbnail='onboarding.png'
            >
              BBVA's Hackathon to create bank accounts
            </WorkGridItem>
            <WorkGridItem
              id='plc'
              title='PLC Web'
              thumbnail='plc.png'
            >
              Application to analyze multiple PLC data
            </WorkGridItem>
            <WorkGridItem
              id='color-guess'
              title='Color Guess'
              thumbnail='color-guess.png'
            >
              Game to guess HEX color
            </WorkGridItem>
          </SimpleGrid>
          <Divider m={5} />
          <Text m={5} fontSize={20}>Collaborations</Text>
          <SimpleGrid
            columns={[1, 1, 2]}
            gap={8}
          >
            <WorkGridItem
              id='ita-editorial'
              title='ItaEditorial'
              thumbnail='itabooks.png'
            >
              Web publisher
            </WorkGridItem>
          </SimpleGrid>
        </Section>
      </Box>
    </Layout>
  )
}

export default Works
