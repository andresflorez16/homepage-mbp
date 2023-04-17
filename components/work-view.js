import {
  Box,
  Text,
  Image,
  Badge
} from '@chakra-ui/react'

export const WorkView = ({ path, title }) => {
  return (
    <Box display='grid' placeItems='center'>
      <Text variant='_section' textAlign='center'>{title}</Text>
      <Image
        src={`/assets/${path}`}
        w={250}
        borderRadius='10px'
        alt='thumbnail'
      />
    </Box>
  )
}

export const Meta = ({ children }) => (
  <Badge colorScheme='green' fontSize='md' mr={2}>
    {children}
  </Badge>
)
