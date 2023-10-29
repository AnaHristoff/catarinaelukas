import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainPhoto from '../../components/MainPhoto'
import Footer from '../../components/Footer';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery'


const photoFolhas = {
  image: 'folhas-principal.jpg'
};
const weddingText = 'A única certeza que quero ter é viver intensamente essa incerteza'
const weddingDay = '04 de Outubro de 2024'
const weddingPlace = 'Quinta do Avesso, Portugal'
const defaultTheme = createTheme();

export const HomePage = () => {
  const isMobile = useMediaQuery('(max-width:500px)');

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
        <MainPhoto />
        <Box>
          <Typography color='gray' gutterBottom fontFamily='Allura'
            sx={{
              textAlign: 'center',
              width: '100%',
              fontSize: isMobile ? 32 : 44,
              marginTop: 10,
              padding:2
            }}>
              {weddingText}
          </Typography>
          <Box display='flex' justifyContent='end' marginRight= {isMobile ? '40px' : '500px'} >
          {<img style={{ width:'90px', transform: 'rotate(260deg)', filter: 'grayscale(40%)'}} src={photoFolhas.image}/>}
          </Box>
          <Typography color='gray' gutterBottom fontFamily='Allura'
            sx={{
              textAlign: 'center',
              width: '100%',
              fontSize: isMobile ? 30 : 40,
              marginTop: 0
            }}>
              {weddingDay}
          </Typography>
          <Typography color='gray' gutterBottom fontFamily='Allura'
            sx={{
              textAlign: 'center',
              width: '100%',
              fontSize: isMobile ? 30 : 40,
              marginTop: 0
            }}>
              {weddingPlace}
          </Typography>
          <Box display='flex' justifyContent='start' marginLeft={isMobile ? '40px' : '500px'}>
          {<img style={{ width:'90px', transform: 'rotate(70deg)', filter: 'grayscale(40%)'}} src={photoFolhas.image}/>}
          </Box>
          
        </Box>
     <Footer />
    </ThemeProvider>
  );
}