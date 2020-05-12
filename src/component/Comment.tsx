import React from 'react'

interface Props {
    comment:CommentType;
}
interface CommentType{
    id:string;
    name:string;
    password:string;
    content:string;
}
const Comment = (props: Props) => {
    const comment= props.comment;
    return (
        <div>
            
        </div>
    )
}

export default Comment
