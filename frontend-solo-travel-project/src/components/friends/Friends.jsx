import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, TextField, List, ListItem, ListItemText, Typography } from '@mui/material';

function Friends() {
    const [friends, setFriends] = useState([]);

    const fetchFriends = async () => {
        // Replace this with your actual API call
        const response = await fetch('/api/friends');
        const data = await response.json();
        setFriends(data);
    };

    useEffect(() => {
        fetchFriends();
    }, []);

    return (
        <Grid container>
            <Grid item xs={8} md={6} lg={10}>
                <Box mt={12} ml={4} mr={4} display="flex" alignItems="center">
                    <TextField 
                        fullWidth
                        name="friend-search"
                        label="Search your friends..."
                        id="friendSearch"
                    />
                    <Box ml={1} display="flex" alignItems="center">
                        <Button variant="contained" color="primary" sx={{ height: '56px' }}>
                            Filter
                        </Button>
                        <Button variant="contained" sx={{ ml: 1, height: '56px', backgroundColor: 'white', color: 'primary.main', '&:hover': { backgroundColor: 'lightgray' } }}>
                            Clear Filters
                        </Button>
                    </Box>
                </Box>
                <Box mt={4} ml={4} mr={4}>
                    <Typography variant="h6">Your Friends</Typography>
                    <List>
                        {friends.map(friend => (
                            <ListItem key={friend.id}>
                                <ListItemText primary={friend.name} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Friends;
