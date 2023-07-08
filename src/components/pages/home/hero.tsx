import { Stack, Box, Heading, Text, useMediaQuery } from '@chakra-ui/react';

import SectionContainer from '../../common/section-container';

const Hero = () => {
  const [large] = useMediaQuery('(min-width: 800px)');
  return (
    <SectionContainer>
      <Stack gap={{ base: 2, lg: 4 }}>
        <Heading width={{ lg: '90%' }}>
          creating delightful digital{' '}
          <Box as="span" bgClip="text" bgGradient="linear(to-r, #ff3124, #fbb03b)">
            experiences{' '}
          </Box>
          <Box display={large ? 'none' : 'block'} as="br" />
          and bringing ideas to life, one pixel at a time
        </Heading>
        <Box pl={{ base: 1, lg: 2 }} lineHeight={2}>
          <Text width={{ lg: '60%' }} color="gray.300">
            Hey there 👋, I&apos;m{' '}
            <Box as="span" fontWeight="bold">
              Uchechukwu Azubuine
            </Box>{' '}
            a frontend engineer, passionate about creating aesthetically pleasing user interfaces, with the goal of
            bridging the gap between design and implementation.
          </Text>
        </Box>
      </Stack>
    </SectionContainer>
  );
};

export default Hero;
