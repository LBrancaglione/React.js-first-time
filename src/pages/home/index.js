import React from 'react';
//import './style.css'
import { makeStyles } from '@material-ui/core/styles';
import  Container  from '@material-ui/core/Container';
import  Box  from '@material-ui/core/Box';

import Header from './components/header';
import Feed from './components/feed';
import NavBar from './components/navBar';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'colum'
    },
    main: {
        height: '100vh',
        padding: 24,
        marginTop: 50
    },
    toolbar:{
        minHeight: 64,
    }
});

function Home(){
    const classes = useStyles();
    return (
        <div className ={classes.root}>
        <Header />
        <div className = {classes.toolbar}></div>
        <main className = {classes.main}>
            <Container maxWidth = "lg">
                <Box display = "flex">
                    {/*NavBar*/}
                    <NavBar></NavBar>
                    {/*Feed*/}
                     <Feed></Feed>
                </Box>
            </Container>
        </main>
    </div>
    )
}

export default Home;