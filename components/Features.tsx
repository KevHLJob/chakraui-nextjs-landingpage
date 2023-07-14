import { Container, Box, chakra, Text, Icon, SimpleGrid } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { MdOutlinePersonPin, MdPermDeviceInformation, MdOutlineFlashlightOn } from 'react-icons/md';
import { SiMinds } from 'react-icons/si';
import { IconType } from 'react-icons';

interface IFeature {
  heading: string;
  icon: IconType;
}

const features: IFeature[] = [
  {
    heading: 'Responsabilidad',
    icon: MdOutlineFlashlightOn
  },
  {
    heading: 'Compromiso',
    icon: SiMinds
  },
  {
    heading: 'Profesionalismo',
    icon: MdPermDeviceInformation
  },
  {
    heading: 'Calidad',
    icon: MdOutlinePersonPin
  }
];

export default function Feature () {
  return (
    <Container maxW="6xl" p={{ base: 5, md: 10 }}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={3} textAlign="center">
        Nuestros valores
      </chakra.h3>
      <SimpleGrid columns={{ base: 1, md: 2 }} placeItems="center" spacing={16} mt={12} mb={4}>
        {features.map((feature, index) => (
          <Box key={index} textAlign="center">
            <Icon as={feature.icon} w={10} h={10} color="blue.500" />
            <chakra.h3 fontWeight="semibold" fontSize="2xl">
              {feature.heading}
            </chakra.h3>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};