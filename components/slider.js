import { useContext, useRef, useCallback } from 'react'
import { Box } from '@chakra-ui/react'
import { SizeContext } from '../utils/size-observer'
import useAnimationFrame from '../utils/use-animation-frame'

export const SliderItem = ({ children, width }) => {
  return (
    <Box
      display='inline-flex'
      justifyContent='center'
      alignItems='center'
      w={width}
      mx={5}
    >
      {children}
    </Box>
  )
}

const SliderContainer = ({ children, initialOffsetX, contentWidth }) => {
  const { innerWidth } = useContext(SizeContext)
  const refScrollX = useRef(initialOffsetX)
  const refContainer = useRef(null)
  const refContent = useRef(null)

  const enabled = innerWidth < contentWidth
  console.log(enabled)

  useAnimationFrame(
    enabled,
    useCallback(() => {
      const { current: elContainer } = refContainer
      const { current: elContent } = refContent

      if (elContainer && elContent) {
        refScrollX.current += 1
        elContainer.scrollLeft = refScrollX.current
        if (elContainer.scrollLeft >= elContent.clientWidth) {
          refScrollX.current = 0
          elContainer.scrollLeft = 0
        }
      }
    }, [])
  )

  return (
    <Box
      ref={refContainer}
      overflowX='hidden'
      whiteSpace='nowrap'
      pointerEvents='none'
      textAlign='center'
      maxW='100%'
    >
      <Box
        ref={refContent}
        display='inline-block'
      >
        {children}
      </Box>
      <Box
        display={enabled ? 'inline-block' : 'none'}
      >
        {children}
      </Box>
    </Box>
  )
}

export default SliderContainer
