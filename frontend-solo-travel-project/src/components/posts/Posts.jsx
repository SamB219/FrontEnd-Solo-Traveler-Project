import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LikeFunction from "../likes/LikeFunction";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

// Format Date Function
function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostCard({ post, userId, token }) {
  const [expanded, setExpanded] = React.useState(false);
  const [likeCount, setLikeCount] = React.useState(
    post.likes ? post.likes.length : 0
  );

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  React.useEffect(() => {
    if (post && post.likes) {
      setLikeCount(post.likes.length);
    }
  }, [post, userId]);

  return (
    <Card
      sx={{
        maxWidth: 345,
        minWidth: 345,
        minHeight: 500,
        backgroundColor: "#F5F5F5",
      }}
      variant="outlined"
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {post.username.charAt(0).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        titleTypographyProps={{ variant: "h7" }}
        title={post.title}
        subheader={`${post.username} • ${formatDate(post.eventDate)}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={post.imgUrl}
        alt="Post image"
      />
      <CardContent sx={{ height: 170 }}>
        <Typography variant="body2" color="text.secondary">
          {post.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              variant={"outlined"}
              color={"primary"}
              sx={{ margin: 0.5, fontSize: 12 }}
            />
          ))}
        </Typography>
        <Box sx={{ p: 1 }}>
          <Typography variant="body2" color="text.secondary">
            {post.description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <LikeFunction
          postId={post._id}
          userId={userId}
          token={token}
          updateLikeCount={setLikeCount}
          likeCount={likeCount}
        />
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Additional content goes here.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
