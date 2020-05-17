import React from 'react'
import { CREATE_COMMENT } from './Mutation'
import { useMutation } from '@apollo/react-hooks'
import { TextField, Button } from '@material-ui/core'
import { CommentType } from './Interface'

interface Props {

}
interface CommentData{
    createCourse:CommentType
}
const CreateComment = (props: Props) => {

    const [email, setEmail] = React.useState('');
    const [content, setContent] = React.useState('');

    const [saveComment, { error, data }]=  useMutation<CommentData,{}>(
        CREATE_COMMENT,
        {variables:{email:email,content:content}}
    )
    return (
        
        <div style={{textAlign:'left',padding:16}}>
            {error ? <p> {error.message}</p> : null}
            
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
                value={content}
                onChange={(event)=>setContent(event.target.value)}
            />
            </div>
            <div style={{marginTop:10}}>
            <Button variant="contained" onClick={()=>saveComment()}>comment</Button>
            </div>
        </div>
        
    )
}

export default CreateComment
