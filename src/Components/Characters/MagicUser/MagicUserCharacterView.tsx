import { Box, Typography } from '@mui/material';
import CharacterProgressionTable from '../CharacterProgressionTable';
import SavingThrowsTable from '../SavingThrowsTable';
import CharacterTable from '../CharactersTable';



export default function MagicUserCharacterView() {
    
    const characterType: string = 'קוסם';

    return (
        <Box className='main-box'>
            <Box component={"span"} display={"block"}>
                <Typography>הקוסם הוא טיפוס מסתורי וחוקר המסתורין בעצמו, אדם המשוקע בידע עתיק ומופלא. כקוסם השקעת שעות ארוכות במחקר לתוך הלילה, לאור נרות, קורא במגילות עתיקות ובכפתבים מכוסי קורי עכביש, משנן את מעגלי הקסם והרונות, לומד אודות חשיבותם המוזרה של הכוכבים והירחים, נחשף לתיאוריות מטרידות של פילוסופים מטורפים, ומעל הכול, מפתח את היכולת להטיל לחשי קסם</Typography>
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

