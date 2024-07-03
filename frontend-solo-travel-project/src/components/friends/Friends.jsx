import { Box, Button, Grid, TextField } from '@mui/material';
import React from 'react';

function Friends() {
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
                    <Button variant="contained" color="primary" sx={{ml: 5, height: '100%' }}>
                        Filter
                    </Button>
                </Box>
                {/* Need to include some sort of logic to map over friends array in database */}
            </Grid>
        </Grid>
    );
}

export default Friends;