import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


const useStyles = makeStyles ((theme)=>({
    root: {
        padding: theme.spacing(2),
        width: 256,
        marginRight: theme.spacing(2)
    },
    button:{
        width: '100%'
    }
}))

const tags = [
    {id: 1,  name: 'React.JS'},
    {id: 2,  name: 'JavaScript'},
    {id: 3,  name: 'DotNet'},
    {id: 4,  name: 'PHP'},
    {id: 5,  name: 'MaterialDesign'},
    {id: 6,  name: 'WebDev'},
]

function NavBar(){
    const classes = useStyles();
    return(
        <Paper className= {classes.root}>
            <Button className = {classes.button} variant="outlined" color="secondary">Registrar Gratis</Button>
            <ListSubheader>
            {'Tags em Alta'}
            </ListSubheader>
            {
                tags.map((item) =>(
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                     <ListItemText primary= {`#${item.name}`}/>
                    </ListItem>
                ))
            }
            <ListItem button>
                Exibir Mais Tags
            </ListItem>
       </Paper>
    )
}

export default NavBar;