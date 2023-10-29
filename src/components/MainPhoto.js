import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Countdown from './Countdown';
import Header from './Header';
import useMediaQuery from '@mui/material/useMediaQuery'


const photo = {
  image: 'countdown.jpg',
  imageText: 'main image description'
};

export default function MainPhoto() {
  const isMobile = useMediaQuery('(max-width:500px)');

  return (
    <Box display='flex' justifyContent='center' sx={{width:'100%', position: 'relative', marginTop:'8px', marginLeft:'5px'}}>
      <Header />
      <Paper elevation='0'
        sx={{
          color: '#fff',
          mb: 4,
          height: 400,
          width: '100%',
          maxWidth: '500px',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${photo.image})`,
          borderStyle: 'none',
          marginTop: !isMobile && '90px'
        }}
      >
      <Countdown />      
      </Paper>
    </Box>
  );
}