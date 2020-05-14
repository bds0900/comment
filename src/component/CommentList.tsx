import React from 'react'
import { useQuery} from '@apollo/react-hooks'
import { GET_COMMENTS } from './Query';
import Comment from './Comment';
import { List,ListItem } from '@material-ui/core';
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
    reply:CommentType[];
}
const CommentList = (props: Props) => {
    const{loading,data}= useQuery<CommentListType,{}>(
        GET_COMMENTS
    );
    return (
        <div>
            {loading?(<p>Loading...</p>):
                (<div>
                <List>
                {data && data.comments.map(comment=>(
                <ListItem>
                <Comment comment={comment}/>
                </ListItem>
                ))}
                </List>
                </div>)
            }
        </div>
    )
}

export default CommentList
