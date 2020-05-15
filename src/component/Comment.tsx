import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { List,ListItem } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
interface Props {
    comment:CommentType;
}
interface CommentType{
    _id:string;
    email:string;
    time:string;
    content:string;
    replies:CommentType[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
      maxWidth: 500
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);


const Comment = (props: Props) => {
    const comment= props.comment;
    const classes = useStyles();
    return (
        <div>
        <Grid container className={classes.root}>

            <Grid item xs={6} sm={6}>
                <Typography variant="body2" gutterBottom >
                {comment.email}
                </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
                <Typography variant="body2" gutterBottom >
                {comment.time}
                </Typography>
            </Grid>
            
            <Grid item xs={6} sm={6}>
                <Typography variant="body2" gutterBottom >
                {comment.content}
                </Typography>
            </Grid>
            
        </Grid>
        <div style={{width:'20%'}}/>
        <Grid>
        
            <List>
            {comment.replies && comment.replies.map(reply=>(
                <ListItem key={reply._id}>
                    
                <Comment comment={reply}/>
                </ListItem>
            ))}
            </List>  
        </Grid>
        </div>
    )
}

export default Comment
