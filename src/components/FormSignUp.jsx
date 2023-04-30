import { useState } from 'react';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import { FormControlLabel, FormGroup } from '@mui/material';

function FormSignUP (props){
    const {handleSubmit} = props
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [prom, setProm] = useState(true)
    const [nov, setNov] = useState(false)

    const [errors, setError] = useState({
        name: {
            error:false,
            message: 'Deben ser al menos 3 caracteres'
        }
    })

    function validarNombre(nombre){
        if(nombre.length >= 3){
            return {name: {error: false, message: ''}}
        }else{
            return {name: {error: true, message:'Deben ser al menos 3 caracteres' }}
        }
    }
    
    return(
        <form
            onSubmit={(e) =>{
                e.preventDefault()
                handleSubmit({
                    name,
                    lastName,
                    email,
                    prom,
                    nov,
                })
            }}
        >
            <TextField 
                id='name'
                label='Nombre'
                variant='outlined'
                fullWidth
                margin='normal'
                onChange={ (e) => 
                 setName(e.target.value)
                }
                value = {name}
                error={ errors.name.error}
                helperText={ errors.name.error? errors.name.message: ""}
                onBlur={(e) => {
                   setError(validarNombre(e.target.value)) 
                }}
            />
             <TextField 
                id='lastname'
                label='Apellido'
                variant='outlined'
                fullWidth
                margin='normal'
                onChange={ (e) => 
                    setLastName(e.target.value)
                }
                value = {lastName}
            />
             <TextField 
                id='Email'
                label='Correo Electronico'
                variant='outlined'
                fullWidth
                margin='normal'
                onChange={ (e) => 
                    setEmail(e.target.value)
                }
                value = {email}
            />
           
           <FormGroup>
                <FormControlLabel control={
                    <Switch
                        checked={prom}
                        onChange={(e) => setProm(e.target.checked)}
                    />} label="Promociones"
                />
                <FormControlLabel control={
                    <Switch
                    checked={nov}
                    onChange={(e) => setNov(e.target.checked)}
                    />} label="Novedades"
                />  
                
            </FormGroup>
            <Button variant="contained" type='submit' >Registrarse</Button>
        </form>
    ) 
  
}

export default FormSignUP