import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import useMediaQuery from '@mui/material/useMediaQuery'

export default function Dishes() {
  const isMobile = useMediaQuery('(max-width:500px)');

    const menuBoxTitles = [
      { title: 'Menu Geral',  mapping: 'regularMenu'}, 
      { title: 'Menu Vegetariano', mapping: 'veggieMenu' }, 
      { title: 'Menu Infantil', mapping:  'kidsMenu'},
      { title: 'Sobremesas', mapping:  'desserts'}
    ]
    const menus = {
      regularMenu: [
        {
          tipo: 'Entrada',
          prato: 'Ainda por definir' 
        }, 
        {
          tipo: 'Prato de peixe',
          prato: 'Ainda por definir' 
        },
        {
          tipo: 'Prato de carne',
          prato: 'Ainda por definir' 
        },
      ],
      veggieMenu: [
        {
          tipo: 'Entrada',
          prato: 'Ainda por definir' 
        }, 
        {
          tipo: 'Prato de peixe fake',
          prato: 'Ainda por definir' 
        },
        {
          tipo: 'Prato de carne fake',
          prato: 'Ainda por definir' 
        }
      ],
      kidsMenu: [
        {
          tipo: 'Entrada',
          prato: 'sopa de grelos' 
        }, 
        {
          tipo: 'Prato Principal',
          prato: 'besteiras' 
        }
      ],
      desserts: [
        {
          tipo: 'Buffet de sobremesas',
          prato: ''
        }
      ]
    }
    return (
        <Box sx={{
          position: 'relative',
          backgroundColor: '#fff',
          color: '#fff',
          width: '100%'
          }}>
            <Header text='O que iremos comer' />
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
                O que iremos comer
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
                Teremos um primeiro momento de aperitivos e depois o jantar. Jantar chique, com todos sentados nos seus lugares definidos. Tipo menu degustação. Caro igual. 
          </Typography>
              </Box>
              <Box width='100%' display='flex' justifyContent='start'>
              {<img alt='' style={{ width:'100px', marginTop:'30px', filter: 'grayscale(10%)', transform: 'rotateY(180deg)'}} src='folhas-lateral.jpg'/>}
              </Box>
            </Box>

            <img alt='' src='/folha1.jpg' style={{ marginTop: '30px', width: '70px', transform: 'rotate(60deg)' }}/>

            <Box display='flex' flexDirection='column' gap='15px' marginTop= '50px'>
              <Typography fontSize='38px' fontStyle='italic'>
                Sunset
              </Typography>
              <Typography fontWeight='300'>
                Buffet de aperitivos
              </Typography>
              <Typography fontWeight='300'>
                Bebidas
              </Typography>
            </Box>

            <img alt='' src='/folha1.jpg' style={{ marginTop: '30px', width: '70px', transform: 'rotate(60deg)' }}/>

            <Typography fontSize='38px' marginTop='50px' fontStyle='italic'>
              Jantar
            </Typography>
            {menuBoxTitles.map((menuBox) =>
              <Box display='flex' flexDirection='column' gap='15px'marginTop='50px' >
                <Typography color='gray' fontSize='25px' fontWeight='400'>
                  {menuBox.title} 
                </Typography> 
                <Box display='flex' justifyContent='center' gap='60px' flexDirection={isMobile ? 'column' : 'row'}>
                {menus[menuBox.mapping].map((dish) => 
                  <Box display='flex' flexDirection='column'>
                    <Typography color='gray' fontSize='20px' fontWeight='300'>
                      {dish.tipo}
                    </Typography>
                    <Typography color='gray' fontWeight='300'>
                      {dish.prato}
                    </Typography>
                  </Box>
                )}
                </Box>
              </Box>
            )}
            
            <img alt='' src='/folha1.jpg' style={{ marginTop: '30px', width: '70px', transform: 'rotate(60deg)' }}/>


            
        </Box>
    );
}