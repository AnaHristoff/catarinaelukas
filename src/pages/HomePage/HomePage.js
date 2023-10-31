import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Countdown from '../../components/Countdown';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const photoFolhas = {
  image: 'folhas-principal.jpg'
};
const weddingText = 'A única certeza que quero ter é viver intensamente essa incerteza'
const weddingDay = '04 de Outubro de 2024'
const weddingPlace = 'Quinta do Avesso, Portugal'
const defaultTheme = createTheme();

export const HomePage = () => {
  const isMobile = useMediaQuery('(max-width:500px)');

  const photosCatarinaLukas = [
    
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764053/catarina-e-lukas/catarinaelukas4_quxyjn.jpg',
      index: 4,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764054/catarina-e-lukas/catarinaelukas5_uwqtcq.jpg',
      index: 5,
      rows: isMobile ? 2 : 4,
      cols: 4,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764054/catarina-e-lukas/catarinaelukas6_or7n0v.jpg',
      index: 6,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764055/catarina-e-lukas/catarinaelukas7_wbabvf.jpg',
      index: 7,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764056/catarina-e-lukas/catarinaelukas8_g6twlf.jpg',
      index: 9,
      rows: isMobile ? 2 : 4,
      cols: 3,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764057/catarina-e-lukas/catarinaelukas9_vgflxf.jpg',
      index: 10,
      rows: isMobile ? 2 : 4,
      cols: 1,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764058/catarina-e-lukas/catarinaelukas10_tyii1p.jpg',
      index: 11,
      rows: isMobile ? 2 : 4,
      cols: 4,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764059/catarina-e-lukas/catarinaelukas11_umixp2.jpg',
      index: 12,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764060/catarina-e-lukas/catarinaelukas12_fe96rj.jpg',
      index: 13,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764061/catarina-e-lukas/catarinaelukas13_vh7fff.jpg',
      index: 14,
      rows: isMobile ?  2 : 4,
      cols: 4,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764062/catarina-e-lukas/catarinaelukas14_eorw9y.jpg',
      index: 15,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },{

      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764063/catarina-e-lukas/catarinaelukas15_nno6bi.jpg',
      index: 18,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764064/catarina-e-lukas/catarinaelukas16_vvaumr.jpg',
      index: 16,
      rows: isMobile ? 2 : 4,
      cols: 4,
    }
    ,
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764065/catarina-e-lukas/catarinaelukas18_vejlcq.jpg',
      index: 19,
      rows: isMobile ? 2 : 4,
      cols: 2,
    }
    ,{
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764066/catarina-e-lukas/catarinaelukas19_fsxfcb.jpg',
      index: 20,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764067/catarina-e-lukas/catarinaelukas20_zietll.jpg',
      index: 21,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    ,{
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764068/catarina-e-lukas/catarinaelukas21_zv6liv.jpg',
      index: 22,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764069/catarina-e-lukas/catarinaelukas22_x52bua.jpg',
      index: 23,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764070/catarina-e-lukas/catarinaelukas23_ycvyao.jpg',
      index: 24,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764074/catarina-e-lukas/catarinaelukas28_ygagmx.jpg',
      index: 25,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },{
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764074/catarina-e-lukas/catarinaelukas27_fub1vn.jpg',
      index: 26,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764075/catarina-e-lukas/catarinaelukas29_wxr00k.jpg',
      index: 27,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },{
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764078/catarina-e-lukas/catarinaelukas31_wbwlwx.jpg',
      index: 28,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764077/catarina-e-lukas/catarinaelukas30_zwnuze.jpg',
      index: 29,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764073/catarina-e-lukas/catarinaelukas26_biwnpz.jpg',
      index: 30,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764079/catarina-e-lukas/catarinaelukas32_zfperx.jpg',
      index: 31,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764080/catarina-e-lukas/catarinaelukas33_t3emqw.jpg',
      index: 32,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764081/catarina-e-lukas/catarinaelukas34_yi2bpc.jpg',
      index: 33,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764071/catarina-e-lukas/catarinaelukas24_xmamvx.jpg',
      index: 34,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764072/catarina-e-lukas/catarinaelukas25_zwz6wp.jpg',
      index: 35,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764082/catarina-e-lukas/catarinaelukas36_ihnvrw.jpg',
      index: 36,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764084/catarina-e-lukas/catarinaelukas37_ymdqbe.jpg',
      index: 37,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764084/catarina-e-lukas/catarinaelukas38_sdolfm.jpg',
      index: 38,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764086/catarina-e-lukas/catarinaelukas39_k5ocjk.jpg',
      index: 39,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764087/catarina-e-lukas/catarinaelukas40_xpdmwd.jpg',
      index: 40,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764088/catarina-e-lukas/catarinaelukas41_z7lcus.jpg',
      index: 41,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764089/catarina-e-lukas/catarinaelukas42_afobgo.jpg',
      index: 42,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764090/catarina-e-lukas/catarinaelukas43_li1nmf.jpg',
      index: 43,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764091/catarina-e-lukas/catarinaelukas44_opqkmo.jpg',
      index: 44,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764092/catarina-e-lukas/catarinaelukas45_wptmus.jpg',
      index: 45,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764093/catarina-e-lukas/catarinaelukas46_kvrdul.jpg',
      index: 46,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764094/catarina-e-lukas/catarinaelukas47_jh9ax1.jpg',
      index: 47,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/q_auto:eco/v1698764095/catarina-e-lukas/catarinaelukas48_vxkcn5.jpg',
      index: 48,
      rows: isMobile ? 2 : 4,
      cols: 2,
    }]

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Header />
          <Box display='flex' justifyContent='center' sx={{
                marginTop:10
                }}>
                <Swiper style={{width: '90%', height: isMobile ? '300px' : '650px', zIndex:0}}
                  spaceBetween={30}
                  centeredSlides={true}
                  speed={4200}
                  autoplay={{
                    delay: 2900,
                    disableOnInteraction: false,
                  }}
                  
                  modules={[Autoplay, Pagination, Navigation]}
                  >
                  {photosCatarinaLukas.map((item) => (
                  <SwiperSlide 
                    style={{
                      textAlign: 'center', 
                      fontSize: '18px', 
                      background: '#fff',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                    <img
                         src={item.img}
                         alt={item.title}
                         loading="lazy"
                         style={{borderRadius:'7px', display: 'block', width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)'}} />
                  </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
              <Countdown />    
      
       
       
        <Box>
          <Typography color='gray' gutterBottom fontFamily='Allura'
            sx={{
              textAlign: 'center',
              width: '100%',
              fontSize: isMobile ? 32 : 44,
              marginTop: 7,
              padding:2
            }}>
              {weddingText}
          </Typography>
          <Box display='flex' justifyContent='end' marginRight= {isMobile ? '40px' : '500px'} >
          {<img style={{ width:'90px', transform: 'rotate(260deg)', filter: 'grayscale(20%)'}} src={photoFolhas.image}/>}
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
          {<img style={{ width:'90px', transform: 'rotate(70deg)', filter: 'grayscale(20%)'}} src={photoFolhas.image}/>}
          </Box>
          
        </Box>
     <Footer />
    </ThemeProvider>
  );
}