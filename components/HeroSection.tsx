import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
} from '@chakra-ui/react';
export default function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1429772011165-0c2e054367b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6} bg={'blackAlpha.800'} borderRadius={'2xl'} 
            padding={'2'}>
          <Heading color={'white'} alignSelf={'center'}>WSD Servicios</Heading>   
          <Text
            color={'white'}
            fontWeight={600}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
            textAlign={'justify'}>
            Con todo gusto le ayudaremos, estamos comprometidos con nuestros servicios.
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
}