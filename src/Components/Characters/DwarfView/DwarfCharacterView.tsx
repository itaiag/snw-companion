import { Box, Typography } from '@mui/material';
import CharacterProgressionTable from '../CharacterProgressionTable';
import SavingThrowsTable from '../SavingThrowsTable';
import CharacterTable from '../CharactersTable';



export default function DwarfCharacterView() {
    
    const characterType: string = 'גמד שומר-מעוז';

    return (
        <Box className='main-box'>
            <Box component={"span"} display={"block"}>
                <Typography>הגמדים הם גזע קשוח וקשה עורף של כורי זהב ומתכות. גובהם נמוך - כמטר ושלושים סנטימטרים - והם המתהדרים בזקנים ארוכים ושופעים, אותם הם קולעים לתמות בסגנונות שונים המעידים על השיוך השבטי שלהם</Typography>
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

