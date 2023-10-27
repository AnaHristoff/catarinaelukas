import { Box, Typography } from "@mui/material";
import Header from "../components/Header";

export default function DressCode() {

    return (
        <Box sx={{
          position: 'relative',
          backgroundColor: '#fff',
          color: '#fff',
          width: '100%'
          }}>
            <Header text='Como se vestir' />


            <Box display='flex' flexDirection='row'>
                <Box width='100%' display='flex'>
                {<img style={{ width:'100px', marginTop:'30px', filter: 'grayscale(10%)'}} src='folhas-lateral.jpg'/>}
                </Box>
                <Box sx={{marginTop:'30px'}}>
                <Typography color='gray' 
            sx={{
              textAlign: 'center',
              width: '100%',
              fontSize: 16,
              alignItems: 'center',
              fontWeight: 300
            }}>
              A festa começa cedo, por volta das 14h, e, se tivermos tempo bom, as primeiras horas serão no espaço exterior. 
          </Typography>
          <Typography color='gray' 
            sx={{
              textAlign: 'center',
              width: '100%',
              fontSize: 16,
              alignItems: 'center',
              fontWeight: 300
            }}>
               Sugerimos roupas leves, frescas, de cores mais claras e sapatos que deixem vocês confortáveis pisando na grama (sem ser tênis de academia!!!)
          </Typography>
              </Box>
              <Box width='100%' display='flex'>
              {<img style={{ width:'100px', marginTop:'30px', filter: 'grayscale(10%)', transform: 'rotateY(180deg)'}} src='folhas-lateral.jpg'/>}
              </Box>
            </Box>
            
        </Box>
    );
}