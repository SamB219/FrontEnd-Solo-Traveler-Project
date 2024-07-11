import { Box, Button, Typography, TextField, Toolbar, Container, Grid, Paper } from '@mui/material';
import React, { useState, useEffect } from 'react';
import useProfile from '../hooks/useProfile';

function Profile(props) {
    const token = (props && props.token) ?? "";

    const { userName, firstName, lastName, age, bio, country, travelPreferences, interests,
        getProfile, updateProfile } = useProfile();

    const [changedAge, setChangedAge] = useState(age);
    const [changedBio, setChangedBio] = useState(bio);
    const [changedCountry, setChangedCountry] = useState(country);
    const [changedTravelPreferences, setChangedTravelPreferences] = useState(travelPreferences);
    const [changedInterests, setChangedInterests] = useState(interests);
    const [isEditMode, setIsEditMode] = useState(false);

    const handleUpdateProfile = () => {
        updateProfile(changedAge, changedBio, changedCountry, changedTravelPreferences, changedInterests);
        window.location.reload();
    };

    const handleEditClick = () => {
        setIsEditMode(!isEditMode);
    };

    useEffect(() => {
        setChangedAge(age);
        setChangedBio(bio);
        setChangedCountry(country);
        setChangedTravelPreferences(travelPreferences);
        setChangedInterests(interests);
    }, [age, bio, country, travelPreferences, interests]);

    return (
        <>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: "100vh",
                    overflow: "auto",
                }}>
                <Toolbar />
                <Container maxWidth="false" sx={{ mt: 3, mb: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                                <Typography component="h1" variant="h5">
                                    First Name: {firstName}
                                </Typography>
                                <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
                                    Last Name: {lastName}
                                </Typography>
                                <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
                                    Username: {userName}
                                </Typography>
                                <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
                                    Age: {age}
                                </Typography>
                                {isEditMode && (
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        id="age"
                                        label="What is your age?"
                                        name="Age"
                                        defaultValue={changedAge}
                                        onChange={(e) => { setChangedAge(e.target.value) }}
                                    />
                                )}
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                                <Typography component="h1" variant="h5">
                                    Biography: {bio}
                                </Typography>
                                {isEditMode && (
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        id="bio"
                                        label="Tell us something about yourself"
                                        name="Bio"
                                        defaultValue={changedBio}
                                        onChange={(e) => { setChangedBio(e.target.value) }}
                                    />
                                )}
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                                <Typography component="h1" variant="h5">
                                    Country: {country}
                                </Typography>
                                {isEditMode && (
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        id="country"
                                        label="What country do you live in?"
                                        name="country"
                                        defaultValue={changedCountry}
                                        onChange={(e) => { setChangedCountry(e.target.value) }}
                                    />
                                )}
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                                <Typography component="h1" variant="h5">
                                    Travel Preferences: {travelPreferences}
                                </Typography>
                                {isEditMode && (
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        id="travelPreferences"
                                        label="What are your preferences while traveling?"
                                        name="travelPreferences"
                                        defaultValue={changedTravelPreferences}
                                        onChange={(e) => { setChangedTravelPreferences(e.target.value) }}
                                    />
                                )}
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                                <Typography component="h1" variant="h5">
                                    Interests: {interests}
                                </Typography>
                                {isEditMode && (
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        id="interests"
                                        label="What are some things you are interested in?"
                                        name="interests"
                                        defaultValue={changedInterests}
                                        onChange={(e) => { setChangedInterests(e.target.value) }}
                                    />
                                )}
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            {isEditMode ? (
                                <Button type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={handleUpdateProfile}>
                                    Save
                                </Button>
                            ) : (
                                <Button type="button"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={handleEditClick}>
                                    Edit Profile
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Profile;

