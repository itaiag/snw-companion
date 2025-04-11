import { Box, Typography } from '@mui/material';
import CharacterProgressionTable from '../CharacterProgressionTable';
import SavingThrowsTable from '../SavingThrowsTable';
import CharacterTable from '../CharactersTable';
import TurnUndeadTable from './TurnUndeadTable';


export default function ClericCharacterView() {
    
    const characterType: string = 'כוהן';

    return (
        <Box className='main-box'>
            <Box component={"span"} display={"block"}>
                <Typography>רוב הכהנים משרתים אל מסוים או פועלים בשירותה של דת ממוסדת. אתה הוא אלופו של האל ושל הנטייה שלך, ותפקידך לקדם את מעמדם בעולם </Typography>
                <Typography>כוהנים הם לוחמי קודש עטויי שריון המשרתים את הסדר או את התוהו. אתה עשוי להיות אביר מבורך, מגרש שדים או צייד מכשפות אכזרי. בגלל שרוב יכולותיו של הכוהן נוטות לריפוי ולהגנה,</Typography>
                <Typography>הכוהנים נוטים לשרת בתפקידי תמיכה במהלך הקרב: הם עוזרים למתקיפים בחזית, אבל אם עולה הצורך, הם יכולים גם לעמוד כתף אל כתף לצד הלוחם.</Typography>
            </Box>
            <Box className="small-image-box">
                <img className="image" src={`${process.env.PUBLIC_URL}/images/cleric.png`} alt="cleric" />
            </Box>

            <Typography variant='h6' sx={{ p: 3 }}>תכונות דמות</Typography>
            <CharacterTable characterClass={characterType} />
            <Typography variant='h6' sx={{ p: 3 }}>טבלת התקדמות</Typography>
            <CharacterProgressionTable characterClass={characterType} />
            <Typography variant='h6' sx={{ p: 3 }}>גלגולי הצלה</Typography>
            <SavingThrowsTable characterClass={characterType} />
            <Typography variant='h6' sx={{ p: 3 }}>גירוש אל-מתים</Typography>
            <TurnUndeadTable />
        </Box>
        
    );
}

