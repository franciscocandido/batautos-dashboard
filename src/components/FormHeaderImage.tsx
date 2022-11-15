import { Image, useColorMode } from '@chakra-ui/react';

export default function FormHeaderImage() {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={
        colorMode == 'dark'
          ? 'batautos-logo-dark.webp'
          : 'batautos-logo-light.webp'
      }
      alt='Logotipo da Batautos Auto Service'
      w='auto'
      h='auto'
      paddingBottom='25px'
      paddingTop='10rem'
      draggable='false'
    />
  );
}
