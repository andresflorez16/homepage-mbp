import NextLink from 'next/link'
import {
  Box,
  Text,
  LinkBox,
  Image
} from '@chakra-ui/react'

export const WorkGridItem = ({ children, id, title, thumbnail }) => {
  return (
    <Box
      w='100%'
      align='center'
    >
      <NextLink href={`/works/${id}`}>
        <LinkBox
          cursor='pointer'
        >
          <Image
            width={400}
            height={232}
            src={`/thumbnail/${thumbnail}`}
            alt={title}
            placeholder='blur'
            borderRadius={12}
            boxShadow='2xl'
            _hover={{ filter: 'blur(2px)' }}
            transition='filter .3s ease'
          />
          <Text variant='_subtitle'>{title}</Text>
          <Text>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  )
}
