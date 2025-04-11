import { Box, Typography } from '@mui/material';
import CharacterProgressionTable from '../CharacterProgressionTable';
import SavingThrowsTable from '../SavingThrowsTable';
import CharacterTable from '../CharactersTable';
import ThiefSkillsTable from './ThiefSkillsTable';


export default function ClericCharacterView() {
    
    const characterType: string = 'גנב';

    return (
        <Box className='main-box'>
            <Box component={"span"} display={"block"}>
                <Typography>הגנב חי בצללים, מתמחה בהתגנבות ומלאכות עדינות. כגנב אתה עוסק במלכודות, מנעולים וגישוש - אתה העיניים והאוזניים של החבורה, מי שמתמודד עם הסכנה שבקירות המבוך ממש </Typography>
            </Box>
            <Box className="small-image-box">
                <img className="image" src={`${process.env.PUBLIC_URL}/images/thief.png`} alt="thief" />
            </Box>
            <Typography variant='h6' sx={{ p: 3 }}>תכונות דמות</Typography>
            <CharacterTable characterClass={characterType} />
            <Typography variant='h6' sx={{ p: 3 }}>טבלת התקדמות</Typography>
            <CharacterProgressionTable characterClass={characterType} />
            <Typography variant='h6' sx={{ p: 3 }}>גלגולי הצלה</Typography>
            <SavingThrowsTable characterClass={characterType} />
            <Typography variant='h6' sx={{ p: 3 }}>מיומנויות גנב</Typography>
            <ThiefSkillsTable/>
        </Box>
        
    );
}

