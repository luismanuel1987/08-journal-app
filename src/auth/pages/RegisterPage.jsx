import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmail } from '../../store/auth/thunks';


const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@', 'El correo debe de tener una @.')],
  password: [ (value) => value.length >= 6, 'El password debe de tener mas de 6 letras.' ],
  displayName: [ (value) => value.length >=1, 'El nombre es obligatorio.' ]
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false)

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const {  
    formState, displayName, email, password, onInputChange,  
    isFormValid, displayNameValid, emailValid, passwordValid } = useForm(formData, formValidations);

    console.log(displayNameValid);
    


  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid ) return;

    dispatch( startCreatingUserWithEmail(formState) );
  }

  return (
    <AuthLayout title="Crear cuenta">
      <h1>FormValid {isFormValid ? 'Valido':'Incorrecto'}</h1>
      <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Nombre completo"
              type='text'
              placeholder='Luis Lopez'
              fullWidth
              name='displayName'
              value={ displayName }
              onChange={ onInputChange }
              error= { !!displayNameValid && formSubmitted }
              helperText={ displayNameValid }
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Correo"
              type='email'
              placeholder='correo@google.com'
              fullWidth
              name='email'
              value={ email }
              onChange={ onInputChange }
              error= { !!emailValid && formSubmitted }
              helperText={ emailValid }
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Password"
              type='password'
              placeholder='Password'
              fullWidth
              name='password'
              value={ password }
              onChange={ onInputChange }
              error= { !!passwordValid && formSubmitted }
              helperText={ password }
            />
          </Grid>

          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

            <Grid item xs={ 12 } display={ !!errorMessage ? '': 'none'}>
              <Alert severity='error'> { errorMessage } </Alert>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button 
                disabled = { isCheckingAuthentication }
                type='submit'
                variant='contained' 
                fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>Ya tienes una cuenta ? </Typography>
              <Link component={ RouterLink } color='inherit' to='/auth/login'>       
                Ingresar
              </Link>
            </Grid>

          </Grid>
        </form>
    </AuthLayout>  
  )
}
