import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
/* import Typography from "@mui/material/Typography"; */
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import dayjs from "dayjs";
import { IconButton } from "@mui/material";
import { baseURL } from "../../environment";
import FileUpload from "../upload/FileUpload";
import Tags from "./tags/Tags";
import LocationSearch from "./LocationSearch";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 550,
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  mt: 1,
  mx: 12,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState();
  const [date, setDate] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function refreshPage() {
    window.location.reload();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("pinged submit");
    const data = new FormData(e.currentTarget);
    const title = data.get("title");
    const description = data.get("description");
    const tags = selected;
    const location = selectedLocation;
    const eventDate = date;

    let bodyObj = JSON.stringify({
      title,
      description,
      tags,
      location,
      eventDate,
    });

    const url = `${baseURL}/post/new`;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", props.token);

    const requestOption = {
      headers,
      body: bodyObj,
      method: "POST",
    };

    try {
      const response = await fetch(url, requestOption);
      const data = await response.json();
      handleClose();
      refreshPage();
    } catch (err) {
      console.error(err.message);
    }
  }
  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ mt: 0, mb: 0 }}
        size="large"
      >
        New Post
      </Button>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Box
            sx={style}
            component="form"
            noValidate
            onSubmit={handleSubmit}
            /*  onSubmit={handleSubmit} */
            /* SET WIDTH WITH MX */
          >
            <Box
              sx={{
                p: 1,
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                top: 5,
                right: 5,
              }}
            >
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Event Title"
              name="title"
              autoComplete="title"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              id="description"
              multiline
              rows={4}
            />
            <Tags selected={selected} setSelected={setSelected} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: 3,
              }}
            >
              <FileUpload />
            </Box>

            <Button
              variant="contained"
              sx={{ mt: 0, mb: 0 }}
              size="large"
              type="submit"
            >
              Create
            </Button>
          </Box>
          <LocationSearch
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            date={date}
            setDate={setDate}
          />
        </Box>
      </Modal>
    </div>
  );
}
