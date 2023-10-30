import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import useMediaQuery from '@mui/material/useMediaQuery'
import Footer from "../components/Footer";


export default function Schedule() {
  const isMobile = useMediaQuery('(max-width:500px)');
  

    return (
        <Box sx={{
          position: 'relative',
          backgroundColor: '#fff',
          color: '#fff',
          width: '100%'
          }}>
          <Header text='Como será o nosso dia' />
          {!isMobile && (<Typography color='gray' 
                sx={{
                textAlign: 'center',
                width: '100%',
                fontSize: 52,
                alignItems: 'center',
                fontWeight: 500,
                fontFamily:'Allura',
                paddingTop: '80px'
                }}>
                Como será o nosso dia
            </Typography>)}

            <Box sx={{padding:2}}>
              <Box display='flex' flexDirection='row' paddingTop= {isMobile ? '80px' : '40px'}>
                <Box width='100%' display='flex' justifyContent='end'>
                {<img alt='' style={{ width: isMobile ? '70px' : '200px', marginTop:'30px', filter: 'grayscale(10%)'}} src='folhas-lateral.jpg'/>}
                </Box>
                <Box sx={{marginTop:'30px'}}>
              <Typography color='gray' 
                sx={{
                  textAlign: 'center',
                  width: '100%',
                  fontSize: isMobile ? 16 : 24,
                  alignItems: 'center',
                  fontWeight: 400
                }}>
                  O casamento português é um pouco diferente do brasileiro, começando pela duração (14 horas de festa!!!).
              </Typography>
              <Typography color='gray' 
                sx={{
                  textAlign: 'center',
                  width: '100%',
                  fontSize: isMobile ? 16 : 24,
                  alignItems: 'center',
                  fontWeight: 400
                }}>
                  Vamos, então, explicar um pouco como será esse nosso evento estilo ópera com vários atos.
              </Typography>
              </Box>
              <Box width='100%' display='flex' justifyContent='start'>
              {<img alt='' style={{ width: isMobile ? '70px' : '200px', marginTop:'30px', filter: 'grayscale(10%)', transform: 'rotateY(180deg)'}} src='folhas-lateral.jpg'/>}
              </Box>
            </Box>
            
            <Box sx={{marginTop:7}}>
              <Typography color='gray' 
                sx={{
                  textAlign: 'center',
                  width: '100%',
                  fontSize: isMobile ? 16 : 24,
                  alignItems: 'center',
                  fontWeight: 400
                }}>
                  Primeiro ato (por volta das 14h):
              </Typography>
              <Typography color='gray' 
                sx={{
                  textAlign: 'center',
                  width: '100%',
                  fontSize: isMobile ? 16 : 24,
                  alignItems: 'center',
                  fontStyle: 'italic',
                  fontWeight: 300
                }}>
                  Matar as saudades e... nos casar!!!
              </Typography>
            </Box>
            <Box sx={{marginTop:4}}>
              <Typography color='gray' 
                sx={{
                  textAlign: 'center',
                  width: '100%',
                  fontSize: isMobile ? 16 : 24,
                  alignItems: 'center',
                  fontWeight: 400
                }}>
                  Segundo ato: 
              </Typography>
              <Typography color='gray' 
                sx={{
                  textAlign: 'center',
                  width: '100%',
                  fontSize: isMobile ? 16 : 24,
                  alignItems: 'center',
                  fontStyle: 'italic',
                  fontWeight: 300
                }}>
                  Aproveitar a comida e a bebida ouvindo uma musiquinha boa
              </Typography>
            </Box>
            <Box sx={{marginTop:4}}>
              <Typography color='gray' 
                sx={{
                  textAlign: 'center',
                  width: '100%',
                  fontSize: isMobile ? 16 : 24,
                  alignItems: 'center',
                  fontWeight: 400
                }}>
                  Terceiro ato (por volta das 20h): 
              </Typography>
              <Typography color='gray' 
                sx={{
                  textAlign: 'center',
                  width: '100%',
                  fontSize: isMobile ? 16 : 24,
                  alignItems: 'center',
                  fontStyle: 'italic',
                  fontWeight: 300
                }}>
                  Sentar para apreciar o jantar
              </Typography>
            </Box>
            <Box sx={{marginTop:4}}>
              <Typography color='gray' 
                sx={{
                  textAlign: 'center',
                  width: '100%',
                  fontSize: isMobile ? 16 : 24,
                  alignItems: 'center',
                  fontWeight: 400
                }}>
                  Quarto ato: 
              </Typography>
              <Typography color='gray' 
                sx={{
                  textAlign: 'center',
                  width: '100%',
                  fontSize: isMobile ? 16 : 24,
                  alignItems: 'center',
                  fontStyle: 'italic',
                  fontWeight: 300
                }}>
                  Vamos cortar o bolo e brindar!
              </Typography>
            </Box>
            <Box sx={{marginTop:4}}>
              <Typography color='gray' 
                sx={{
                  textAlign: 'center',
                  width: '100%',
                  fontSize: isMobile ? 16 : 24,
                  alignItems: 'center',
                  fontWeight: 400
                }}>
                  Quinto ato: 
              </Typography>
              <Typography color='gray' 
                sx={{
                  textAlign: 'center',
                  width: '100%',
                  fontSize: isMobile ? 16 : 24,
                  alignItems: 'center',
                  fontStyle: 'italic',
                  fontWeight: 300
                }}>
                  Sobremesas liberadas
              </Typography>
            </Box>
            <Box sx={{marginTop:4}}>
              <Typography color='gray' 
                sx={{
                  textAlign: 'center',
                  width: '100%',
                  fontSize: isMobile ? 16 : 24,
                  alignItems: 'center',
                  fontWeight: 400
                }}>
                  Sexto e último ato: 
              </Typography>
              <Typography color='gray' 
                sx={{
                  textAlign: 'center',
                  width: '100%',
                  fontSize: isMobile ? 16 : 30,
                  alignItems: 'center',
                  fontStyle: 'italic',
                  fontWeight: 300
                }}>
                  FESTA!!!
              </Typography>
            </Box>
          </Box>
          <Footer /> 
          <Box display='flex'>
          {<img alt='' style={{ width:'100%', height: isMobile ? '200px' : '350px', transform: !isMobile && 'rotateY(180deg)'}} src='folhas-chao.jpg'/>}
          {<img alt='' style={{ display: isMobile && 'none', width:'100%', height: '350px' }} src='folhas-chao.jpg'/>}
          </Box>
           
        </Box>
    );
}