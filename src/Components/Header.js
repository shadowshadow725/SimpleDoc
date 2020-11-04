import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LoginButton from '../Components/Buttons/LoginButton';


export default function Header(){
    return (
	<Toolbar>		
		<Typography 
			component="h2"
          		variant="h5"
          		color="inherit"
          		textAlign="center"
          		noWrap
          		
		>
		Simple Doc
		</Typography>
		<LoginButton style={{textAlign: 'right'}}/>
	</Toolbar>
	
    )
}

