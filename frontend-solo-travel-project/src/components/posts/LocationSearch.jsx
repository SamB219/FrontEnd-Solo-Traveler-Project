//MUI imports
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
//Date-Time picker imports
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
//Leaflet imports
import { OpenStreetMapProvider } from "leaflet-geosearch";

function LocationSearch({
  selectedLocation,
  setSelectedLocation,
  date,
  setDate,
}) {
  const provider = new OpenStreetMapProvider();
  const [locations, setLocations] = useState([]);

  let key = 0;

  async function handleLocation(e) {
    e.preventDefault();
    let newArray = [];
    //MUI method for retrieving form data
    const data = new FormData(e.currentTarget);
    const locationName = data.get("location");
    //OpenStreetMapProvider call. Returns object with coordinate data and label.
    const locationResults = await provider.search({ query: locationName });
    locationResults.forEach((location) => {
      const locationData = [location.label, , location.x, location.y];
      newArray.push(locationData);
    });
    setLocations(newArray);
  }
  function handleSelect(location) {
    console.log(location);
    setSelectedLocation(location);
    handleClickAway();
  }
  //ClickawayListener details
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  //Modal details
  const [openModal, setOpenModal] = React.useState(true);
  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  const styles = {
    position: "absolute",
    top: 255,
    right: 0,
    left: 16,
    zIndex: 1,
    p: 1,
    bgcolor: "background.paper",
    maxHeight: 396,
    maxWidth: 400,
    overflow: "auto",
  };

  const boxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 550,
    width: 400,
    bgcolor: "background.paper",
    /*  border: "1px solid #000", */
    boxShadow: 24,
    p: 4,
    mt: 1,
    mx: 12,
  };

  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        hideBackdrop={true}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box
            component="form"
            noValidate
            onSubmit={handleLocation}
            sx={boxStyle}
          >
            <Box sx={{ marginBottom: 3, fontFamily: "verdana" }}>
              <Typography variant="h5">Plan your Event</Typography>
            </Box>

            <Divider />

            <Box>
              <Typography
                sx={{ marginBottom: 1, marginTop: 3, fontFamily: "verdana" }}
              >
                Where to?
              </Typography>
              <TextField
                required
                fullWidth
                name="location"
                label="Location"
                id="location"
              />
            </Box>

            {open ? (
              <Grid container spacing={2} sx={styles}>
                {locations.map((location) => (
                  <Grid item key={key++}>
                    <Button
                      variant="outlined"
                      onClick={() => handleSelect(location)}
                    >
                      {location[0]}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            ) : null}

            <Button
              type="submit"
              onClick={handleClick}
              sx={{ marginBottom: 1, marginTop: 0.5 }}
            >
              Search
            </Button>
            {selectedLocation ? (
              <Paper
                sx={{
                  p: 2,
                }}
                elevation={5}
              >
                {selectedLocation}
              </Paper>
            ) : null}
            <Box>
              <Typography
                sx={{ marginBottom: 1, marginTop: 2, fontFamily: "verdana" }}
              >
                What time?
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  required
                  value={date}
                  onChange={(newDate) => setDate(newDate)}
                />
              </LocalizationProvider>
            </Box>
            <Button
              variant={date && selectedLocation ? "contained" : "outlined"}
              sx={{ mt: 0, mb: 0, top: 495, position: "absolute" }}
              size="large"
              onClick={date && selectedLocation ? handleClose : null}
            >
              Next
            </Button>
          </Box>
        </ClickAwayListener>
      </Modal>
    </>
  );
}

export default LocationSearch;
