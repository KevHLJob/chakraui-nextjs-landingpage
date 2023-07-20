import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Link,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  return (
    <>
    <NextSeo
            title="Wanner Servicios"
            description="Servicios de ingienería electromecánica"
        />
      <Box bg={useColorModeValue('blackAlpha.900', 'blue.700')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box color={'#FFFFFF'} fontWeight={700} fontSize={'2xl'}>WSD
          <Text as={'span'} color={'blue.300'}>Servicios</Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}