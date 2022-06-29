import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Urls from '../Constants/Urls';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function DataCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [Book_Details,set_BookDetails]=React.useState(props.data);
  const [Date,set_Date]=React.useState(`${props.data.created_time}`.split('T'));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: '100%' }} onClick={handleExpandClick}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {`${Book_Details.b_author[0]}`}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={Book_Details.b_name}
        subheader={Date[0]}
      />
      {/* <a href={`${Urls.File_Routs.get_file}/1649099756779-Screenshot 2022-03-31 at 3.27.00 PM.png`} target="_blank"> */}
        <CardMedia
          component="img"
          height="100"
          image={`${Urls.File_Routs.get_file}/${Book_Details.bookpic}`}
          alt="Book Picture Not Available"
        />
        {/* </a> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {Book_Details.b_name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography >
            {`Book Author : ${Book_Details.b_author}`}
          </Typography>
          <Typography >
          {`Book Branch : ${Book_Details.b_branch} , ${Book_Details.b_section}`}
          </Typography>
          <Typography >
          {`Book Edition : ${Book_Details.b_edition} , sem ${Book_Details.b_sem}`}
          </Typography>
          <Typography>
          {`Book University : ${Book_Details.b_university}`}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
