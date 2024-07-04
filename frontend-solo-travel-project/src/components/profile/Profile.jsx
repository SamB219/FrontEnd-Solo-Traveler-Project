import { Box, Button, Input, Typography } from '@mui/material'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import React, { useState, useEffect } from 'react'
import useProfile from '../hooks/useProfile';

function Profile(props) {


    // If props or props.token is null, set to empty string
    const token = (props && props.token) ?? "";

    const { firstName, lastName, age, bio, country, travelPreferences, interests,
        getProfile, updateProfile } = useProfile()
        
    const [changedAge, setChangedAge] = useState(age)
    const [changedBio, setChangedBio] = useState(bio)
    const [changedCountry, setChangedCountry] = useState(country)
    const [changedTravelPreferences, setChangedTravelPreferences] = useState(travelPreferences)
    const [changedInterests, setChangedInterests] = useState(interests)
    const [isEditMode, setIsEditMode] = useState(false);

    const handleUpdateProfile = () => {
        updateProfile(changedAge, changedBio, changedCountry, changedTravelPreferences, changedInterests)
        window.location.reload();
    }

    const handleEditClick = () => {
        setIsEditMode(!isEditMode);
    }

    useEffect(() => {
        setChangedAge(age);
        setChangedBio(bio);
        setChangedCountry(country);
        setChangedTravelPreferences(travelPreferences);
        setChangedInterests(interests);
    }, [age, bio, country, travelPreferences, interests])

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
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                            <Typography component="h1" variant="h5">
                                First name: {firstName}
                            </Typography>
                            <Typography component="h1" variant="h5" sx={{ mt: 5, mb: 5 }}>
                                Last name: {lastName}
                            </Typography>
                            <Typography component="h1" variant="h5">
                                Age: {age}
                            </Typography>
                            {isEditMode && (
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="age"
                                    name="Age"
                                    defaultValue={changedAge}
                                    onChange={(e) => { setChangedAge(e.target.value) }}
                                />
                            )}
                        </Paper>
                        <Toolbar />
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
                        <Toolbar />
                        <Paper sx={{ p: 2, display: "flex", flexDirection: "column", mb: 8 }}>
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
                        <Toolbar />
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
                </Container>
            </Box>
        </>
    )
}

export default Profile