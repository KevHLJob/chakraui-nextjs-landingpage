import { SimpleGrid, Card, CardHeader,CardBody, Text, Heading,CardFooter, Button, Image } from "@chakra-ui/react";

export default function Service() {
  return( 

  
  <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(330px, 1fr))'>  
  <Card alignItems={'center'}  padding={2}>
    <Image src="DiseñoInspeccion.jpeg" w={{sm:'20%',lg:'70%'}} borderRadius={'lg'}
    alt="Diseño e inspección de obras de construcción">
    </Image>
    <CardHeader>
      <Heading size='md'>Diseño</Heading>
    </CardHeader>
    <CardBody>
      <Text>Diseño e inspección de obras de construcción.</Text>
    </CardBody>
  </Card>
  <Card alignItems={'center'}  padding={2}>
  <Image src="Conversion.jpeg" w={{sm:'20%',lg:'70%'}} borderRadius={'lg'}
  alt="Certificación de modificación y conversión de vehiculos de carga">
    </Image>
    <CardHeader>
      <Heading size='md'>Conversión</Heading>
    </CardHeader>
    <CardBody>
      <Text>Certificación de modificación y conversión de vehiculos de carga.</Text>
    </CardBody>
  </Card>
  <Card alignItems={'center'}  padding={2}>
  <Image src="Electricamecanica.jpeg" w={{sm:'20%',lg:'70%'}} borderRadius={'lg'}
  alt="Diseño e inspección de obras eléctricas y mecánicas">
    </Image>
    <CardHeader>
      <Heading size='md'>Electrica</Heading>
    </CardHeader>
    <CardBody>
      <Text>Diseño e inspección de obras eléctricas y mecánicas.</Text>
    </CardBody>
  </Card>
</SimpleGrid>
  )
}