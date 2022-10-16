import NextLink from 'next/link'
import { Image, Link} from '@chakra-ui/react'

export const Logo = () => {
  return (
    <NextLink href='/'>
      <Link>
        <Image
          src='/logo.png'
          w={'180px'}
          h={'90px'}
          alt='Logo Andres Florez'
          m='-20px'
          mx={3}
          _hover={{ transform: 'scale(0.9)' }}
          transition='transform .2s ease'
        />
      </Link>
    </NextLink>
  )
}
