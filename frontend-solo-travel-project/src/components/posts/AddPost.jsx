import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
/* import Typography from "@mui/material/Typography"; */
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { Container, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import { baseURL } from "../../environment";
import FileUpload from "../upload/FileUpload";
import Tags from "./tags/Tags";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function refreshPage() {
    window.location.reload();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const title = data.get("title");
    const description = data.get("description");

    let bodyObj = JSON.stringify({
      title,
      description,
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
      console.log(data);
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
            autoComplete="current-password"
          />
          <Tags selected={selected} setSelected={setSelected} />
          <Box
            sx={{ display: "flex", justifyContent: "center", paddingBottom: 3 }}
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
      </Modal>
    </div>
  );
}