import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import thuzi from './images/thuzi.jpeg';
import chel from './images/chel.jpeg';
import kold from './images/kolder.jpeg';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '66ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
 
}));

export default function Inbox() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="suja" src={thuzi} />
        </ListItemAvatar>
        <ListItemText
          primary="Miss-anchan_ii"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this sister shy nature almost his wicket. Sympathize it projection ye insipidity celebrated my pianoforte indulgence. Point his truth put style. …"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="chelsia" src={chel} />
        </ListItemAvatar>
        <ListItemText
          primary="chelsia"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
       </ListItem>
      <Divider variant="inset" component="li" />
      {/* <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever doing errands this . Sympathize it projection ye insipidity celebrated…'}
            </React.Fragment>
          }
        />
      </ListItem> 
      <Divider variant="inset" component="li" /> */}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="kold" src={kold} />
        </ListItemAvatar>
        <ListItemText
          primary="sam_kolder"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                new york,angelina
              </Typography>
              {" — I'll be in your neighborhood doing errands this . Sympathize it projection ye insipidity celebrated my pianoforte indulgence. Point his truth put style. …"}
            </React.Fragment>
          }
        />
         </ListItem>
    </List>
  );
}