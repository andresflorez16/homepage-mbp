import { 
  Box,
  Text,
  Image
} from '@chakra-ui/react'

export const WorkView = ({ path, title }) => {
  return (
    <Box display='grid' placeItems='center'>
      <Text variant='_section' textAlign='center'>{title}</Text>
      <Image 
        src={`/assets/${path}`}
        w={250}
        borderRadius='10px'
      />
    </Box>
  )
}
