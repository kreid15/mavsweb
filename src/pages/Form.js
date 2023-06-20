import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Header from '../components/Header';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useTheme } from '@mui/material/styles';
import "./Form.css";

const nbaTeams = [
  'Atlanta Hawks',
  'Boston Celtics',
  'Brooklyn Nets',
  'Charlotte Hornets',
  'Chicago Bulls',
  'Cleveland Cavaliers',
  'Dallas Mavericks',
  'Denver Nuggets',
  'Detroit Pistons',
  'Golden State Warriors',
  'Houston Rockets',
  'Indiana Pacers',
  'LA Clippers',
  'Los Angeles Lakers',
  'Memphis Grizzlies',
  'Miami Heat',
  'Milwaukee Bucks',
  'Minnesota Timberwolves',
  'New Orleans Pelicans',
  'New York Knicks',
  'Oklahoma City Thunder',
  'Orlando Magic',
  'Philadelphia 76ers',
  'Phoenix Suns',
  'Portland Trail Blazers',
  'Sacramento Kings',
  'San Antonio Spurs',
  'Toronto Raptors',
  'Utah Jazz',
  'Washington Wizards'
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip() {
  const theme = useTheme();
  const [eventN, setEventN] = useState([]);
  const [scoutName, setScoutName] = useState('');
  const [team, setTeam] = useState('');
  const [player, setPlayer] = useState('');
  const [event, setEvent] = useState([]);
  const [report, setReport] = useState('');
  const [submissionResult, setSubmissionResult] = useState(null);

  const handleEventNChange = (event) => {
    setEventN(event.target.value);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // checks if fields are filled
    if (!scoutName || !team || !player || event.length !== 2 || !report) {
      setSubmissionResult('error');
      return;
    }

    // send and format to file as needed//DB setup 

    // Resets form after submission
    setScoutName('');
    setTeam('');
    setPlayer('');
    setEvent([]);
    setReport('');
    setSubmissionResult('success');
  };

  const handleTeamChange = (event) => {
    setTeam(event.target.value);
  };

  return (
    <>
      <Header />
      {/* if success or error */}
      <form onSubmit={handleSubmit}>
        {submissionResult === 'success' && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="success">
              Form submitted successfully.
            </Alert>
          </Stack>
        )}
        {submissionResult === 'error' && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">
              Please fill in all required fields correctly.
            </Alert>
          </Stack>
        )}
        <div className='scoutR'>
          <h1 className='scout'>SCOUTING REPORT</h1>
          <div className='formFields'>
          <div>
          <Box
            component="form"
            sx={{
              color: "#F5F5FA",
              m: 1,
              width: '800px'
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Scout Name"
              variant="outlined"
              value={scoutName}
              onChange={(e) => setScoutName(e.target.value)}
              required
              sx={{
                color: "#F5F5FA",
                width: '100%',
              }}
            />
          </Box>

            </div>
            <div className='row2'>
              <div>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
                  <InputLabel required id="team-label">Team</InputLabel>
                  <Select
                    labelId="team-label"
                    id="team-select"
                    value={team}
                    label="Team"
                    onChange={handleTeamChange}
                  >
                    <MenuItem value="">
                      <em>Select Team</em>
                    </MenuItem>
                    {nbaTeams.map((teamName) => (
                      <MenuItem key={teamName} value={teamName}>
                        {teamName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" }
                  }}
                  autoComplete="on"
                  noValidate
                >
                  <TextField
                    label="Player"
                    variant="outlined"
                    value={player}
                    onChange={(e) => setPlayer(e.target.value)}
                    required
                  />
                </Box>
              </div>
              <div>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel required id="chip-label">Team Name</InputLabel>
                  <Select
                    labelId="chip-label"
                    id="chip-select"
                    multiple
                    value={eventN}
                    onChange={handleEventNChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Team Name" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {nbaTeams.map((teams) => (
                      <MenuItem
                        key={teams}
                        value={teams}
                        style={getStyles(teams, eventN, theme)}
                      >
                        {teams}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className='row3'>
              <Box
                component="form"
                sx={{ width: '750px',
                  "& > :not(style)": { m:1,width: "70ch" }
                }}
                autoComplete="on"
                noValidate
              >
                <TextField
                  label="Report"
                  multiline
                  rows={10}
                  variant="outlined"
                  value={report}
                  onChange={(e) => setReport(e.target.value)}
                  required
                  sx={{width: '750px', m:1
                }}
                />
              </Box>
            </div>
            
          <div className='bigbutton'>
            <Button sx={{ 
            backgroundColor: '#98012e', 
            color: 'white', 
            width: '100px', height: 'auto',m: 'auto',
            '&:hover': {
              backgroundColor: '#F9A01A',
            }}} 
            variant="contained" type='submit'>
              Submit
            </Button>
          </div>
          </div>
        </div>
      </form>
    </>
  );
}
