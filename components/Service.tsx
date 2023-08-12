import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
  Image
} from "@chakra-ui/react";
export default function Service() {
  return (
    <SimpleGrid minChildWidth='200px' spacing='40px' >
      <Card alignItems={'center'} padding={2} bgColor={'gray.100'} color={'blackAlpha.900'} boxShadow={'lg'}>
        <Image src="DiseñoInspeccion.jpeg" w={{ sm: '25rem' }} loading="lazy" borderRadius={'lg'}
          alt="Diseño e inspección de obras de construcción">
        </Image>
        <CardHeader>
          <Heading size='md'>Diseño</Heading>
        </CardHeader>
        <CardBody>
          <Text>Diseño e inspección de obras de construcción.</Text>
        </CardBody>
      </Card>
      <Card alignItems={'center'} padding={2} bgColor={'gray.100'} color={'blackAlpha.900'} boxShadow={'lg'}>
        <Image src="Conversion.jpeg" w={{ sm: '25rem' }} loading="lazy" borderRadius={'lg'}
          alt="Certificación de modificación y conversión de vehiculos de carga">
        </Image>
        <CardHeader>
          <Heading size='md'>Conversión</Heading>
        </CardHeader>
        <CardBody>
          <Text>Certificación de modificación y conversión de vehiculos de carga.</Text>
        </CardBody>
      </Card>
      <Card alignItems={'center'} padding={2} bgColor={'gray.100'} color={'blackAlpha.900'} boxShadow={'lg'}>
        <Image src="Electricamecanica.jpeg" w={{ sm: '25rem' }} loading="lazy" borderRadius={'lg'}
          alt="Diseño e inspección de obras eléctricas y mecánicas">
        </Image>
        <CardHeader>
          <Heading size='md'>Eléctrica</Heading>
        </CardHeader>
        <CardBody>
          <Text>Diseño e inspección de obras eléctricas y mecánicas.</Text>
        </CardBody>
      </Card>
      <Card alignItems={'center'} padding={2} bgColor={'gray.100'} color={'blackAlpha.900'} boxShadow={'lg'}>
        <Image src="GLP.jpeg" w={{ sm: '25rem' }} loading="lazy" borderRadius={'lg'}
          alt="Certificación, instalación y verificación de instalaciones de GLP.">
        </Image>
        <CardHeader>
          <Heading size='md'>GLP</Heading>
        </CardHeader>
        <CardBody>
          <Text>Certificación, instalación y verificación de instalaciones de GLP.</Text>
        </CardBody>
      </Card>
    </SimpleGrid>
  )
}