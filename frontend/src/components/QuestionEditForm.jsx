import * as React from 'react';
import '@fontsource/roboto';
import { Autocomplete, Box, ButtonGroup, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';

const top100Films = [
  { label: 'Multi', year: 0 },
  { label: 'Single', year: 1 }
];

function QuestionEditForm () {
  return (
      <>
          <Autocomplete
              disablePortal
              options={top100Films}
              fullWidth={true}
              renderInput={(params) => <TextField {...params} label="Question Type"/>}
          />
          <TextField type={'text'} variant={'outlined'} fullWidth={true} label="Question"/>
          <TextField
              label="Time Limit"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth={true}
          />
          <TextField
              label="Points"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth={true}
          />
          <TextField label={'Question Image'} fullWidth={true} type={'url'}/>
          <Box>
              <Typography variant={'h6'}>Answers</Typography>
              <TextField label={'Answer 01'} fullWidth={true} type={'text'}/>
              <TextField label={'Answer 02'} fullWidth={true} type={'text'}/>
              <TextField label={'Answer 03'} fullWidth={true} type={'text'}/>
              <TextField label={'Answer 04'} fullWidth={true} type={'text'}/>
              <ButtonGroup fullWidth={true} variant={'contained'}>
                  <Button>Cancel</Button>
                  <Button>OK</Button>
              </ButtonGroup>
          </Box>
      </>

  );
}

export default QuestionEditForm;