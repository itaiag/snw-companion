import { Box, Typography } from '@mui/material';
import CharacterProgressionTable from '../CharacterProgressionTable';
import SavingThrowsTable from '../SavingThrowsTable';
import CharacterTable from '../CharactersTable';



export default function HalfElfWayfarerCharacterView() {
    
    const characterType: string = 'חצי-אלף תר-דרך';

    return (
        <Box className='main-box'>
            <Box component={"span"} display={"block"}>
                <Typography></Typography>
            </Box>
            <Typography variant='h6' sx={{ p: 3 }}>תכונות דמות</Typography>
            <CharacterTable characterClass={characterType} />
            <Typography variant='h6' sx={{ p: 3 }}>טבלת התקדמות</Typography>
            <CharacterProgressionTable characterClass={characterType} />
            <Typography variant='h6' sx={{ p: 3 }}>גלגולי הצלה</Typography>
            <SavingThrowsTable characterClass={characterType} />
            
        </Box>
        
    );
}

