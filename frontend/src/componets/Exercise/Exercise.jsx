import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function ExerciseView() {
    const { exerciseId } = useParams();
    const [exercise, setExercise] = useState(null);
    const [solution, setSolution] = useState('');
    const [result, setResult] = useState(null);

    useEffect(() => {
        axios.get(`/api/exercises/${exerciseId}/`)  // Fetch exercise details
            .then(response => setExercise(response.data))
            .catch(error => console.error('Error fetching exercise:', error));
    }, [exerciseId]);

    const handleSubmit = () => {
        // Send solution to the backend for evaluation
        axios.post(`/api/exercises/${exerciseId}/submit/`, { solution })
            .then(response => setResult(response.data)) // Handle the result
            .catch(error => console.error('Error submitting solution:', error));
    };

    if (!exercise) {
        return <div>Loading...</div>;
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {exercise.description}
                </Typography>
                <TextField
                    multiline
                    fullWidth
                    rows={4}
                    label="Your Solution"
                    value={solution}
                    onChange={(e) => setSolution(e.target.value)}
                    variant="outlined"
                    margin="normal"
                />
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>

                {result && (
                    <div>
                        <Typography variant="h6">Result:</Typography>
                        <Typography>{result.message}</Typography>
                        {/* Display score, feedback, etc. */}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

export default ExerciseView;