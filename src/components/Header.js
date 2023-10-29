import Menu from './Menu';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import useMediaQuery from '@mui/material/useMediaQuery'

export default function Header({ text='' }) {
    const isMobile = useMediaQuery('(max-width:500px)');

    return (
        
        <Box display='flex' justifyContent='center' alignItems='center' sx={{ position: 'fixed', width:'100%', height:60, padding:'5px', zIndex:1, top: 0, backgroundColor: 'white' }}>
            <Menu color='gray' />
            <Typography color='gray' 
                sx={{
                textAlign: 'center',
                width: '100%',
                fontSize: 34,
                alignItems: 'center',
                fontWeight: 500,
                fontFamily:'Allura',
                display: !isMobile && 'none'
                }}>
                {text}
            </Typography>
        </Box>
    )
}