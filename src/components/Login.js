import React, { useState, setState } from 'react'
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import fondo from '../assets/fondo.png'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import axios from 'axios'

//Estilos para vista
const useStyles = makeStyles(theme => ({
	root: {
		backgroundImage: `url(${fondo})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '100vh'
	},
	container: {
		opacity: '0.8',
		height: '60%',
		marginTop: theme.spacing(10),
		[theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
			marginTop: 0,
			width: '100%',
			height: '100%'
		}
	},
	div: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1)
	},
	button: {
		margin: theme.spacing(3, 0, 2)
	}
}))

const Login = () => {
	const [body, setBody] = useState({ username: '', password: ''})
	const classes = useStyles()


	const handleChange = e => {
		setBody({
			...body,
			[e.target.name]: e.target.value
		})
	}

	const onSubmit = () => {
		console.log(body)
	}

	function enviar() {
		axios.post('localhost:3000', {
			email: body.email,
			password: body.password
		  });
	  }

	return (
		<Grid container component='main' className={classes.root}>
			<CssBaseline />
			<Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
				<div className={classes.div}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>Log In</Typography>
					<form className={classes.form}>
						<TextField
							fullWidth
							autoFocus
							color='primary'
							margin='normal'
							variant='outlined'
							label='Correo electrónico'
							name='username'
							value={body.username}
							onChange={handleChange}
						/>
						<TextField
							fullWidth
							type='password'
							color='primary'
							margin='normal'
							variant='outlined'
							label='Contraseña'
							name='password'
							value={body.password}
							onChange={handleChange}
						/>
						<Button
							fullWidth
							variant='contained'
							color='secondary'
							className={classes.button}
							onClick={enviar}
						>
							Iniciar Sesión
						</Button>
					</form>
				</div>
			</Container>
		</Grid>
	)
};
	

export default Login;