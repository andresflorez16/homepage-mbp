import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Link } from '@chakra-ui/react'
import useImageLoaded from '../utils/useImageLoaded'

export const Logo = () => {
  const { imageLoaded, handleImageLoaded } = useImageLoaded()

  return (
    <Box
      opacity={imageLoaded ? '100' : '0'}
      m='-20px'
      mx={3}
      _hover={{ transform: 'scale(0.9)' }}
      transition='transform .2s ease'
      transform={imageLoaded ? 'translateY(0px)' : 'translateY(-20px)'}
    >
      <NextLink href='/'>
        <Link>
          <Image
            src='/logo.png'
            width='180px'
            height='90px'
            alt='Logo Andres Florez'
            onLoad={handleImageLoaded}
          />
        </Link>
      </NextLink>
    </Box>
  )
}
