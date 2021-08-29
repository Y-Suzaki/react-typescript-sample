import { extendTheme } from '@chakra-ui/react';

// chakra UIを使って、globalにcssを当てる方法。
const thema = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.100',
        color: 'gray.800',
      },
    },
  },
});

export default thema;
