import * as React from 'react';
      import Box from '@mui/material/Box';
      import Drawer from '@mui/material/Drawer';
      import Button from '@mui/material/Button';
      import List from '@mui/material/List';
      import ListItem from '@mui/material/ListItem';
      import ListItemButton from '@mui/material/ListItemButton';
      import ListItemIcon from '@mui/material/ListItemIcon';
      import ListItemText from '@mui/material/ListItemText';
      import { MenuRounded, LocationOn, Checkroom, CardGiftcard,Groups, Restaurant, EventNote } from '@mui/icons-material';
      import { useNavigate } from 'react-router-dom';
      import HomeIcon from '@mui/icons-material/Home';
      import useMediaQuery from '@mui/material/useMediaQuery'
      import Tabs from '@mui/material/Tabs';
      import Tab from '@mui/material/Tab';
import { fontWeight } from '@mui/system';
    
    
      
      export default function Menu({ color }) {
        const isMobile = useMediaQuery('(max-width:500px)');

        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        const sections = [
            { title: 'Página principal', url: '/', icon: <HomeIcon /> },
            { title: 'Onde será', url: '/onde-sera', icon: <LocationOn /> },
            { title: 'Dress code', url: '/dress-code', icon: <Checkroom />},
            { title: 'Lista de presentes', url: '/lista-de-presentes', icon: <CardGiftcard /> },
            { title: 'Convidados', url: '/convidados', icon: <Groups /> },
            { title: 'Ementa', url: '/ementa', icon: <Restaurant /> },
            { title: 'Cronograma', url: '/cronograma', icon: <EventNote /> }
          ];
      
        const toggleDrawer =
          (open) =>
          (event) => {
            if (
              event.type === 'keydown' &&
              (event.key === 'Tab' ||
                (event.key === 'Shift'))
            ) {
              return;
            }
            setIsMenuOpen(open);
          };

        const navigate = useNavigate();

        const [value, setValue] = React.useState(0);

        const handleChange = (event, newValue) => {
          setValue(newValue);
        };

        const list = () => (
          <Box
            sx={{ width:250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {sections.map((item) => (
                <ListItem key={item.title} disablePadding onClick={() => navigate(item.url)}>
                  <ListItemButton>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        );
      
        return (
          <>
            {(isMobile ? (
            <div>
              <React.Fragment>
                <Button onClick={toggleDrawer(true)} sx={{ position: 'absolute', left: 0, top:12}}>
                  {<MenuRounded  sx={{color:{color}, fontSize: 30}}/>}
                  </Button>
                <Drawer
                  anchor='top'
                  open={isMenuOpen}
                  onClose={toggleDrawer(false)}
                >
                  {list()}
                </Drawer>
              </React.Fragment>
          </div>
          ) : (
            <Box display='flex' justifyContent='center' alignItems='center' sx={{marginBottom:20, position:'fixed', backgroundColor:'white', top:0}}>
              <Tabs 
                value={value} 
                onChange={handleChange} 
                textColor="gray"
                indicatorColor="gray"
                sx={{
                  width:'100%',
                  alignItems:'center'
                }}>
              {sections.map((section) => 
              
              <Tab sx={{
                  color:'gray', 
                  fontSize:'16px',
                  fontWeight:500,
                  onClick: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  paddingTop: '25px'
                }} 
                label={section.title} 
                onClick={() => navigate(section.url)}
                />
           
              )}
               </Tabs>
            </Box>
          )
        )}
          </>
          
        );
      }

