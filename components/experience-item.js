import NextLink from 'next/link'
import { Box, Link } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const ExperienceSection = styled(Box)`
margin-top: 30px;
padding-left: 3.4em;
text-indent: -3.4em;
`

const ExperienceYear = styled.span`
font-weight: bold;
margin-right: 1em;
`

export default function ExperienceItem ({ children, year, href = null, alt = null }) {
  return (
    <ExperienceSection>
      <ExperienceYear>{year}</ExperienceYear>
      {children}
      {
        href && alt &&
          (
            <NextLink href={href}>
              <Link ml={2}>
                {alt} <ExternalLinkIcon />
              </Link>
            </NextLink>
          )
      }
    </ExperienceSection>
  )
}
