import * as React from 'react';
import {useContext} from 'react';
import '@fontsource/roboto';
import {AppBar, Box, Link, Toolbar, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import {userContext} from "../App";
import {AUTH} from "../config";
import {useNavigate} from "react-router-dom";

function HeaderBar () {
  return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link variant={'inherit'} color={'inherit'} underline={'none'} to="/" href={'/'}>BigBrain</Link>
                    </Typography>
                    <LoginOutButton />
                </Toolbar>
            </AppBar>
        </Box>
  );
}
function LoginOutButton () {
    const [user, setUser] = useContext(userContext);
    let navigate = useNavigate();
    const logout = ()=>{
        fetch(AUTH.LOGOUT_URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': user.toString()
                },
            })
            .then(r => {
                if (r.ok) {
                    setUser(null);
                }
            })
            .catch(err => console.log(err));
    }
    if (user === null) {
        return <Button variant="text" color={'inherit'} onClick={()=>{navigate("../login")}}>login</Button>;
    } else {
        return <Button variant="text" color={'inherit'} onClick={logout}>logout</Button>;
    }
}
export default HeaderBar;
