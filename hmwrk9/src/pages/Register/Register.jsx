import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { register } from '../../services/firebase'

export function Register() {
    const [inputs, setInputs] = useState({ email: '', password: '' })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        try {
            await register(inputs.email, inputs.password)
            navigate('/signin')
        } catch (error) {
            console.log(error)
            setError(error.message)
            setInputs({ email: '', password: '' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '120px', width: '220px' }}>
                    <TextField
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                        size="small"
                        type="text"
                        name="email"
                        value={inputs.email}
                        onChange={(e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                    />
                    <TextField
                        id="standard-basic"
                        label="Password"
                        variant="standard"
                        size="small"
                        type="text"
                        name="password"
                        value={inputs.password}
                        onChange={(e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                    />
                    <Button type='submit'>SignUp</Button>
                </Box>
            </form>
            {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    )
}