import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, TextField, Typography, Paper, Avatar, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { baseURL } from "../../environment/index"
import useFriends from '../hooks/useFriends';
import SiteFooter from '../footer/Footer';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

function Friends({ token, userId }) {

    const { friends, fetchFriends, addFriend, deleteFriend } = useFriends();

    useEffect(() => {
        if (token) {
            fetchFriends();
        }
    }, [token, friends]);

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
                    <Paper>
                        <List>
                            {friends.map(friend => (
                                <ListItem key={friend._id}>
                                    <Avatar sx={{ mr: 2 }}>{friend.firstName.charAt(0)}</Avatar>
                                    <ListItemText primary={`${friend.firstName} ${friend.lastName}`} secondary={friend.userName} />
                                    <IconButton onClick={() => deleteFriend(friend._id)}>
                                        <PersonRemoveIcon />
                                    </IconButton>
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Friends;