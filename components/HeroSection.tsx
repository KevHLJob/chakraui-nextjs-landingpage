import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Card,
} from '@chakra-ui/react';

export default function HeroSection() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Kevin Meza  <br /> 
            <Text as={'span'} color={'green.400'}>
              Developer
            </Text>
          </Heading>
          <Text color={'gray.700'}
            textAlign={'justify'}>
            Soy un profesional graduado de Ingeniería de Sistemas Informáticos.
            Mi trayectoria comienza hace 6 años, en la universidad comencé a trabajar en proyectos de aplicaciones
            de escritorio con Java y C#,
            conforme avancé en mi aprendizaje empecé a realizar proyectos Web empezando con HTML,
            CSS y Javascript. En el presente me encuentro aprendiendo Python con librerias como pandas y Seaborn,
            para el análisis de datos,
            Tengo conocimiento con los gestores de bases de datos: Mysql y SQLServer.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
           
          </Stack>
          <Card align='center' size={'sm'} borderRadius={'full'}>
  <CardHeader>
    <Heading size='md'> Projects</Heading>
  </CardHeader>
  <CardBody>
    <Text>60+</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>
        </Stack>
      </Container>
    </>
  );
}
