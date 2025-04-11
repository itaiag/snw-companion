import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ThiefCharacterView from './ThiefView/ThiefCharacterView';
import { Divider, Typography } from '@mui/material';
import ClericCharacterView from './ClericView/ClericCharacterView';
import FighterCharacterView from './FighterView/FighterCharacterView';
import MagicUserCharacterView from './MagicUser/MagicUserCharacterView';
import ElfCharacterView from './ElfView/ElfCharacterView';
import TrackerHalfingCharacterView from './TrackerHalfing/TrackerHalfingCharacterView';
import DwarfCharacterView from './DwarfView/DwarfCharacterView';
import DruidCharacterView from './DruidView/DruidCharacterView';
import ElfRuneMasterCharacterView from './ElfRuneMasterView/ElfRuneMasterCharacterView';
import DwarfRockWhispererCharacterView from './DwarfRockWhispererView/DwarfRockWhispererCharacterView';
import HalfingBardCharacterView from './HalfingBardView/HalfingBardCharacterView';
import HalfElfWayfarerCharacterView from './HalfElfWayfarerView/HalfElfWayfarerCharacterView';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}

      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabbedCharactersView() {
  const [value, setValue] = React.useState(0);


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="character tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="גנב" {...a11yProps(0)} />
          <Tab label="כוהן" {...a11yProps(1)} />
          <Tab label="לוחם" {...a11yProps(2)} />
          <Tab label="קוסם" {...a11yProps(3)} />
          <Tab label="אלף קשת" {...a11yProps(4)} />
          <Tab label="בן-מחצית גשש" {...a11yProps(5)} />
          <Tab label="גמד שומר-מעוז" {...a11yProps(6)} />
          <Tab label="דרואיד" {...a11yProps(7)} />
          <Tab label="פלאדין" {...a11yProps(8)} />
          <Tab label="אלף אמן-רונות" {...a11yProps(9)} />
          <Tab label="בן מחצית פייטן" {...a11yProps(10)} />
          <Tab label="גמד לוחש-סלעים" {...a11yProps(11)} />
          <Tab label="חצי-אלף תר-דרך" {...a11yProps(12)} />

        </Tabs>

      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography variant='h5'>גנב</Typography>
        <Divider />
        <ThiefCharacterView />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography variant='h5'>כוהן</Typography>
        <Divider />
        <ClericCharacterView />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography variant='h5'>לוחם</Typography>
        <Divider />
        <FighterCharacterView />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Typography variant='h5'>קוסם</Typography>
        <Divider />
        <MagicUserCharacterView />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Typography variant='h5'>אלף קשת</Typography>
        <Divider />
        <ElfCharacterView />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <Typography variant='h5'>בן מחצית גשש</Typography>
        <Divider />
        <TrackerHalfingCharacterView />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <Typography variant='h5'>גמד שומר-מעוז</Typography>
        <Divider />
        <DwarfCharacterView />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        <Typography variant='h5'>דרואיד</Typography>
        <Divider />
        <DruidCharacterView />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={8}>
        <Typography variant='h5'>פלאדין</Typography>
        <Divider />
        <DruidCharacterView />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={9}>
        <Typography variant='h5'>אלף אומן-רונות</Typography>
        <Divider />
        <ElfRuneMasterCharacterView />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={10}>
        <Typography variant='h5'>בן-מחצית פייטן</Typography>
        <Divider />
        <HalfingBardCharacterView />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={11}>
        <Typography variant='h5'>גמד לוחש-סלעים</Typography>
        <Divider />
        <DwarfRockWhispererCharacterView />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={12}>
        <Typography variant='h5'>חצי-אלף תר-דרך</Typography>
        <Divider />
        <HalfElfWayfarerCharacterView />
      </CustomTabPanel>


    </Box>
  );
}
