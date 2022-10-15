import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

const LinkContainer = ({ children, path }) => {
  return (
    <NextLink href={path}>
      <Link>{children}</Link>
    </NextLink>
  )
} 

export const LinkText = ({ children, path }) => {
  return (
    <LinkContainer path={path}>
      {children}
    </LinkContainer>
  )
}
