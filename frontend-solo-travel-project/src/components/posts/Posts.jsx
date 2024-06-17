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

// Format Date Function
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options); // can add a timezone if we want later... will need to `npm install date-fns date-fns-tz`
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

export default function PostCard(props) {
  const { post, userId, token} = props;
  const [expanded, setExpanded] = React.useState(false);
  const [likeCount, setLikeCount] = React.useState(0);
  const [liked, setLiked] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  React.useEffect(() => {
    if (post && post.likes) {
      setLikeCount(post.likes.length);
      setLiked(post.likes.includes(userId));
    }
  }, [post, userId]);

  return (
    <Card
      sx={{
        maxWidth: 345,
        minWidth: 345,
        backgroundColor: "#F5F5F5",
      }}
      variant="outlined"
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.post.title}
        subheader={formatDate(props.post.date)}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://picsum.photos/seed/picsum/1400/1500"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.post.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <LikeFunction postId={post._id} userId={userId} token={token} />
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
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>DETAILS</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            numquam eius assumenda expedita temporibus dolorem eveniet, culpa
            ab, velit modi, blanditiis soluta ipsam ullam ratione nemo.
            Dignissimos iure aliquam fugiat!
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi natus
            enim eius alias ut, vitae, explicabo mollitia veniam aspernatur
            distinctio officia. Nobis, tempora. Eveniet rem vitae, impedit ipsam
            quos aliquid?
          </Typography>
          <Typography>END DETAILS</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
