import { Box, Typography } from '@mui/material';
import CharacterProgressionTable from '../CharacterProgressionTable';
import SavingThrowsTable from '../SavingThrowsTable';
import CharacterTable from '../CharactersTable';



export default function FighterCharacterView() {
    
    const characterType: string = 'לוחם';

    return (
        <Box className='main-box'>
            <Box component={"span"} display={"block"}>
                <Typography>לוחמים הם אנשי קרבות המיומנים בלחימה ובשימוש בכלי נשק ושריונות. אתה יכול להיות פושט ויקינגי אכזרי, סמוראי נודד, פיראט נועז, סייף קטלני או אביר אציל. מי שלא תהיה, כנראה תהיה בחזית של חבורת ההרפתקנים - מתעמת ישירות עם דרקונים, גובלינים ואנשי כת מרושעים. קורע דרכם התיב בכלי נשקך, וסופג את עיקר התקפותיהם.</Typography>
            </Box>
            <Box className="small-image-box">
                <img className="image" src={`${process.env.PUBLIC_URL}/images/fighter-small.png`} alt="fighter" />
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

