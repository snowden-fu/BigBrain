import * as React from 'react';
import '@fontsource/roboto';
import {
  Autocomplete,
  Box,
  ButtonGroup,
  Dialog, DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography
} from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useParams, useNavigate } from 'react-router-dom';

function GameEditForm () {
  const { gameId } = useParams();
  console.log('game id' + gameId);
  return (
        <Box component="form" sx={{
          maxWidth: '100%',
        }}>
            <Typography variant="h1">Game Title</Typography>
            <TextField
    label="Game Title"
    variant="outlined"/>
            <GameQuestionList/>
    </Box>

  );
}
function GameQuestionList () {
  const { gameId } = useParams()
  const [newGameDialogOpen, setNewGameDialogOpen] = React.useState(false);
  const navigate = useNavigate();
  const deleteGameHandler = () => {
  //  todo delete game from database
    console.log('delete game');
    navigate('../../admin/edit/' + gameId);
    console.log('game deleted')
  };
  const navToQuestionEdit = () => {
    navigate('../../admin/edit/' + gameId + '/question/1');
  };
  return (
      <>
        <Box sx={{ margin: 'auto', width: '70%' }}>
            <Card sx={{ display: 'flex' }}>
                <Typography variant="body1">Questions</Typography>
                <ButtonGroup size={'small'} variant="text" aria-label="text button group">
                    <Button onClick={navToQuestionEdit}>Edit</Button>
                    <Button onClick={deleteGameHandler}>Delete</Button>
                </ButtonGroup>
            </Card>
            <Card sx={{ display: 'flex' }}>
                <Typography variant="body1">Questions</Typography>
                <ButtonGroup size={'small'} variant="text" aria-label="text button group">
                    {/* open to edit question details */}
                    <Button onClick={navToQuestionEdit}>Edit</Button>
                    <Button>Delete</Button>
                </ButtonGroup>
            </Card>
        </Box>
      <Box>
          <GameAddFormDialog open={newGameDialogOpen} onClose={() => setNewGameDialogOpen(false)}/>
      </Box>

    </>
  );
}
function GameAddFormDialog () {
  const questionType = [
    { label: 'Multi', year: 0 },
    { label: 'Single', year: 1 }
  ];
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const addHandler = () => {
  //  todo add question to database
    console.log('question added');
    setOpen(false);
  };

  return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add New Question
            </Button>
            <Dialog open={open} onClose={handleCloseDialog}>
                <DialogTitle>New Question</DialogTitle>
                <DialogContent>
                    <Autocomplete
                        disablePortal
                        options={questionType}
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={addHandler}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
  );
}
export default GameEditForm;
