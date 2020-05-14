import React from 'react'

interface Props {
    comment:CommentType;
}
interface CommentType{
    _id:string;
    email:string;
    time:string;
    content:string;
    reply:CommentType[];
}
const Comment = (props: Props) => {
    const comment= props.comment;
    return (
        <div>
           {comment.content} 
        </div>
    )
}

export default Comment
