import {
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  interface HeroProps {
    description: string;
    subtitle: string;
    title: string;
  }
  
  export default function Hero(props: HeroProps) {
    return (
      <Stack minH={'75vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={10} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}
              >
                {props.title}
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                {props.subtitle}
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              {props.description}
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Background Image'}
            objectFit={'cover'}
            src={              
              'https://unifafire.edu.br/wp-content/uploads/2024/05/UNIFAFIREINST2024-scaled.webp'
            }
          />
        </Flex>
      </Stack>
    );
  }