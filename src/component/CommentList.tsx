import React from 'react'
import { useQuery} from '@apollo/react-hooks'
import { GET_COMMENTS } from './Query';
import Comment from './Comment';
import { List,ListItem, TextField, Button } from '@material-ui/core';
interface Props {
    
}
interface CommentListType{
    comments:CommentType[]
}
interface CommentType{
    _id:string;
    email:string;
    time:string;
    content:string;
    replies:CommentType[];
}
const CommentList = (props: Props) => {
    const [email, setEmail] = React.useState('');
    const [comment, setComment] = React.useState('');

    const{loading,data}= useQuery<CommentListType,{}>(
        GET_COMMENTS
    );
    return (
        <div >
            Commnet List
            {loading?(<p>Loading...</p>):
                (<div>
                <List>
                    {data && data.comments.map(comment=>(
                    <ListItem key={comment._id}>
                    <Comment comment={comment}/>
                    </ListItem>
                    ))}
                </List>
                <div style={{textAlign:'left',padding:16}}>
                    <div>
                    <TextField
                        id="outlined-name"
                        label="Email"
                        value={email}
                        onChange={(event)=>setEmail(event.target.value)}
                        variant="outlined"
                    />
                    </div>
                    <div>
                    <TextField
                        placeholder="Leave a comment here"
                        multiline
                        rows={2}
                        rowsMax={4}
                        style = {{width: 500}}
                        value={comment}
                        onChange={(event)=>setComment(event.target.value)}
                    />
                    </div>
                    <div style={{marginTop:10}}>
                    <Button variant="contained">comment</Button>
                    </div>
                </div>
                </div>)
            }
        </div>
    )
}

export default CommentList
