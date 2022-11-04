import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Text,
  LinkBox,
} from '@chakra-ui/react'
import useImageLoaded from '../utils/useImageLoaded'

export const WorkGridItem = ({ children, id, title, thumbnail }) => {
  const { imageLoaded, handleImageLoaded } = useImageLoaded()
  return (
    <Box
      w='100%'
      align='center'
    >
      <NextLink href={`/works/${id}`}>
        <LinkBox
          cursor='pointer'
        >
          <Box
            width={400}
            height={232}
            boxShadow='2xl'
            _hover={{ filter: 'blur(2px)' }}
            transition='all .3s ease'
            opacity={imageLoaded ? '100' : '0'}
            transform={imageLoaded ? 'scale(1)' : 'scale(0.1)'}
          >
            <Image
              width={400}
              height={232}
              src={`/thumbnail/${thumbnail}`}
              alt={title}
              style={{ borderRadius: '12px' }}
              onLoad={handleImageLoaded}
            />
          </Box>
          <Text variant='_subtitle'>{title}</Text>
          <Text>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  )
}
