import React from 'react'
import { useQuery, useMutation} from '@apollo/react-hooks'
import { GET_COMMENTS } from './Query';
import Comment from './Comment';
import { List,ListItem, TextField, Button } from '@material-ui/core';
import { CREATE_COMMENT } from './Mutation';
import CreateComment from './CreateComment';
import {CommentType} from './Interface'
interface Props {
    
}
interface CommentListType{
    comments:CommentType[]
}

const CommentList = (props: Props) => {
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
                <CreateComment/>
                </div>)
            }
        </div>
    )
}

export default CommentList
