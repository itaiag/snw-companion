import { Box, Typography } from '@mui/material';
import CharacterProgressionTable from '../CharacterProgressionTable';
import SavingThrowsTable from '../SavingThrowsTable';
import CharacterTable from '../CharactersTable';
import SpellCastingProgressionTable from '../SpellCastingProgressionTable';



export default function ElfCharacterView() {
    
    const characterType: string = 'אלף קשת';

    return (
        <Box className='main-box'>
            <Box component={"span"} display={"block"}>
                <Typography>האלפים הם גזע אצילי של שוכני היערות העתיקים. הם גבוהים, בעלי שיער ארוך בצבע זהוב, כסוף או שחור ועיניהם כחולות, חומות או ירוקות. גזרתם דקה יותר משל בני האדם, אוזניהם מחודדות ואין להם שיער פנים. תוחלת חייהם גבוהה מאוד, יותר מאלף שנים כפי הנראה, אך על פי רוב הם נוטשים את עולם בני התמותה לאחר כמה מאות שנים אל עולם מסתורי השמור רק לבני גזעם.</Typography>
            </Box>
            <Box className="small-image-box">
                <img className="image" src={`${process.env.PUBLIC_URL}/images/elf.png`} alt="elf" />
            </Box>
            <Typography variant='h6' sx={{ p: 3 }}>תכונות דמות</Typography>
            <CharacterTable characterClass={characterType} />
            <Typography variant='h6' sx={{ p: 3 }}>טבלת התקדמות</Typography>
            <CharacterProgressionTable characterClass={characterType} />
            <Typography variant='h6' sx={{ p: 3 }}>גלגולי הצלה</Typography>
            <SavingThrowsTable characterClass={characterType} />
            <Typography variant='h6' sx={{ p: 3 }}>הטלת קסמים</Typography>
            <SpellCastingProgressionTable characterClass={characterType} />
            
            
        </Box>
        
    );
}

