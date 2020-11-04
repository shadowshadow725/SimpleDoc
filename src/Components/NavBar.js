import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ContributeButton from '../Components/Buttons/ContributeButton';
import QuizzesButton from '../Components/Buttons/QuizzesButton';
import HomeButton from '../Components/Buttons/HomeButton';
import HelpButton from '../Components/Buttons/HelpButton';
import ConceptsButton from '../Components/Buttons/ConceptsButton';
//import '../mystyle.module.css';

const mystyles = {
      color: "#121212",
      backgroundColor: "#FFFFF",

};

export default function NavBar() {
 // const classes = useStyles();


  return (
    //<div style={mystyles} className={classes.root}>
    <div style={mystyles}>
      <AppBar position="static">
        <Toolbar>
        <HomeButton />
		<ConceptsButton />
		<QuizzesButton />  
		<ContributeButton />
		<HelpButton />
        </Toolbar>
      </AppBar>
    </div>
  );
}

