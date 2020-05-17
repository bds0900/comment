import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { List,ListItem, IconButton, TextField, Button } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import ReplyIcon from '@material-ui/icons/Reply';
import CreateReply from './CreateReply';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
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
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
    margin: {
        margin: theme.spacing(1),
    },
    email:{
        margin: theme.spacing(1)
    },
    date:{
        margin: theme.spacing(1)
    },
    comment:{
        width:'80%',
        margin: theme.spacing(1),
        wordWrap: 'break-word'
    }
  }),
);


const Comment = (props: Props) => {
    const comment= props.comment;
    const classes = useStyles();
    const [addComment, setAddComment]=useState(false);
    return (
        <div>
        <Grid container className={classes.root}>

            <span className={classes.email}>
                {comment.email}
            </span>
            <span className={classes.date}>
                {comment.time}
            </span>
            
            <div className={classes.comment}>
                {comment.content}
            </div>
        </Grid>

        
        <Grid>
        
            <List>
            {comment.replies && comment.replies.map(reply=>(
                <ListItem key={reply._id}>
                    
                <Comment comment={reply}/>
                
                </ListItem>
            ))}
            </List>  
        </Grid>
        <Button onClick={()=>setAddComment(!addComment)}><SubdirectoryArrowRightIcon/>reply</Button>

        {addComment?<CreateReply comment={comment._id}/>:null}


        
        </div>
    )
}

export default Comment
