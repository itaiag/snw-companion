import { useState } from 'react';
import Box from '@mui/material/Box';
import { MenuItem, FormControl, InputLabel } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { savingThrowsData } from '../../../data/savingThrowsData';
import SavingThrowsTable from '../SavingThrowsTable/SavingThrowsTable';
import Typography from '@mui/material/Typography';


export default function SavingThrowsView() {

    const [characterClass, setCharacterClass] = useState('');

    const handleChange = (event: SelectChangeEvent) => {        
        setCharacterClass(event.target.value + "");
    };

    const uniqueTypes = Array.from(new Set(savingThrowsData.map(item => item.סוג)));

    return (
        <Box className='main-box'>
            <Typography variant='h5' sx={{ p: 3 }}>גלגולי הצלה</Typography>
            <Box
                className='main-box'
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '35ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <FormControl fullWidth>
                    <InputLabel id="savingthrows-list">סוג דמות</InputLabel>
                    <Select
                        labelId="savingthrows-list"
                        id="savingthrows-list"
                        value={characterClass}
                        label="סוג דמות"
                        onChange={handleChange}
                    >
                        {uniqueTypes.map((type, index) => (
                            <MenuItem key={index} value={type}>
                                {type}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            {characterClass && <SavingThrowsTable characterClass={characterClass} />}
        </Box>
    );
}


