import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import useMediaQuery from '@mui/material/useMediaQuery'

export default function GuestList() {
  const isMobile = useMediaQuery('(max-width:500px)');
    return (
        <Box sx={{
            position: 'relative',
            backgroundColor: '#fff',
            color: '#fff',
            width: '100%'
            }}>
            <Header text='Nossos convidados' />
            {!isMobile && (<Typography color='gray' 
                sx={{
                textAlign: 'center',
                width: '100%',
                fontSize: 48,
                alignItems: 'center',
                fontWeight: 500,
                fontFamily:'Allura',
                paddingTop: '80px'
                }}>
                Nossos convidados
            </Typography>)}

            <Box display='flex' flexDirection='row' paddingTop= {isMobile ? '80px' : '40px'}>
                <Box width='100%' display='flex' justifyContent='end'>
                {<img alt='' style={{ width:'100px', marginTop:'30px', filter: 'grayscale(10%)'}} src='folhas-lateral.jpg'/>}
                </Box>
                <Box sx={{marginTop:'30px'}}>
                <Typography color='gray' 
            sx={{
              textAlign: 'center',
              width: '100%',
              fontSize: isMobile ? 16 : 20,
              alignItems: 'center',
              fontWeight: 400
            }}>
                Vocês são as pessoas mais próximas e mais importantes pra gente. 
          </Typography>
          <Typography color='gray' 
            sx={{
              textAlign: 'center',
              width: '100%',
              fontSize: isMobile ? 16 : 20,
              alignItems: 'center',
              fontWeight: 400
            }}>
                Um muito obrigada a todos que fizeram o esforço de vir do Brasil pra poder estar conosco nesse momento. 
          </Typography>
          <Typography color='gray' 
            sx={{
              textAlign: 'center',
              width: '100%',
              fontSize: isMobile ? 16 : 20,
              alignItems: 'center',
              fontWeight: 400
            }}>
                Aos que já estavam perto, vale lembrar que vocês economizaram um dinheirinho bom, então lembrem-se da lista de presentes! 
          </Typography>
              </Box>
              <Box width='100%' display='flex' justifyContent='start'>
              {<img alt='' style={{ width:'100px', marginTop:'30px', filter: 'grayscale(10%)', transform: 'rotateY(180deg)'}} src='folhas-lateral.jpg'/>}
              </Box>
            </Box>

            <Box sx={{
              marginTop:10
            }}>
              <Typography color='gray' 
              sx={{
                textAlign: 'center',
                width: '100%',
                fontSize: isMobile ? 16 : 20,
                alignItems: 'center',
                fontWeight: 300
              }}>
                  Os programadores ainda não tiveram tempo de fazer essa página
            </Typography>
            </Box>


            
        </Box>
    );
}