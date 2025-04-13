import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


import { Divider, Typography } from '@mui/material';
import StrengthAbilityScoreView from './StrengthAbilityScoreView';
import DexterityAbilityScoreView from './DexterityAbilityScoreView';
import ConstitutionAbilityScoreView from './ConstitutionAbilityScoreView';
import IntelligenceAbilityScoreView from './IntelligenceAbilityScoreView';
import WisdomAbilityScoreView from './WisdomAbilityScoreView';
import CharismaAbilityScoreView from './CharismaAbilityScoreView';

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

export default function TabbedAbilityScoresView() {
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
          aria-label="ability scores tabs"
          variant="scrollable"
          scrollButtons="auto">
          <Tab label="כוח" {...a11yProps(0)} />
          <Tab label="זריזות" {...a11yProps(1)} />
          <Tab label="חוסן" {...a11yProps(2)} />
          <Tab label="תבונה" {...a11yProps(3)} />
          <Tab label="חוכמה" {...a11yProps(4)} />
          <Tab label="כריזמה" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography variant='h5'>כוח</Typography>
        <Divider />
        <StrengthAbilityScoreView />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography variant='h5'>זריזות</Typography>
        <Divider />
        <DexterityAbilityScoreView />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography variant='h5'>חוסן</Typography>
        <Divider />
        <ConstitutionAbilityScoreView />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Typography variant='h5'>תבונה</Typography>
        <Divider />
        <IntelligenceAbilityScoreView />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Typography variant='h5'>חוכמה</Typography>
        <Divider />
        <WisdomAbilityScoreView />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <Typography variant='h5'>כריזמה</Typography>
        <Divider />
        <CharismaAbilityScoreView />
      </CustomTabPanel>


    </Box>
  );
}
