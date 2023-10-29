import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import useMediaQuery from '@mui/material/useMediaQuery'

export default function DressCode() {
  const isMobile = useMediaQuery('(max-width:500px)');

    return (
        <Box sx={{
          position: 'relative',
          backgroundColor: '#fff',
          color: '#fff',
          width: '100%'
          }}>
            <Header text='Como se vestir' />
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
                Como se vestir
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
              A festa começa cedo, por volta das 14h, e, se tivermos tempo bom, as primeiras horas serão no espaço exterior. 
          </Typography>
          <Typography color='gray' 
            sx={{
              textAlign: 'center',
              width: '100%',
              fontSize: isMobile ? 16 : 20,
              alignItems: 'center',
              fontWeight: 400
            }}>
               Sugerimos roupas leves, frescas, de cores mais claras e sapatos que deixem vocês confortáveis pisando na grama (sem ser tênis de academia!!!)
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
                fontSize: 16,
                alignItems: 'center',
                fontWeight: 400
              }}>
                  Os programadores ainda não tiveram tempo de fazer essa página
            </Typography>
            </Box>
            
        </Box>
    );
}