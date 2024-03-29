import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Bell } from 'react-feather'
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
   img: {
       maxHeight: 55,
   },
   grow: {
       flexGrow: 1
   },
   userSection: {
       display: 'flex',
       alignItems: 'center'
   },
   button: {
       marginRight: 10
   },
   bell: {
       marginRight: 10
   }
});
function Header(){
    const classes = useStyles();
 return(
            <AppBar position='fixed' color='inherit'>
                <Toolbar>
                    <img src = "/imgs/logo.png" alt= "Logo" className = {classes.img}/>
                    <div className = {classes.grow}></div>
                    <div className = {classes.userSection}>
                    <Button color= 'primary' variant = 'contained' className = {classes.button}>Novo Post</Button>
                    </div>
                    <SvgIcon className = {classes.bell}>
                        <Bell></Bell>
                    </SvgIcon>
                    <Avatar alt="Remy Sharp" src="/" />
                {/* Esquerda 
                 <span>Primeiro Aplicativo</span>
                {Direita}
                <div className = ''>
                    <Button color= 'primary' variant = 'contained'>Novo Post</Button>
                    <span>Img01</span>
                    <span>img02</span>
                </div> */}
            </Toolbar>
            </AppBar>
        )
}

export default Header;