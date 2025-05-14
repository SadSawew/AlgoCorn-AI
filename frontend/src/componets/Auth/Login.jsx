import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // For redirection

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/token/', { username, password }); // Django's token endpoint
            const token = response.data.access;
            localStorage.setItem('access_token', token); // Store token (INSECURE for production - use HttpOnly cookies)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Set authorization header
            navigate('/'); // Redirect to the main page
        } catch (error) {
            console.error('Login error:', error);
            // Handle login errors (e.g., display error messages)
        }
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        variant="outlined"
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Login
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}

export default Login;