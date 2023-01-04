import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { signIn } from '../../services/firebase';
import { auth } from '../../store/profile/actions'


export function SignIn() {
    const [inputs, setInputs] = useState({ email: '', password: '' })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        try {
            await signIn(inputs.email, inputs.password)
            dispatch(auth(true))
            navigate('/chats')
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
            <h2>Login</h2>
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
                    <Button color="success" type='submit'>login</Button>
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