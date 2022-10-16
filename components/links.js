import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

const LinkContainer = ({ children, path }) => {
  const { asPath } = useRouter()
  const isPath = asPath === path
  return (
    <NextLink href={path}>
      <Link
        textDecor={isPath ? 'underline' : 'none'}
      >{children}</Link>
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
