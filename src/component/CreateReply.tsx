import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { CREATE_REPLY } from './Mutation';
import { useMutation } from '@apollo/react-hooks';
import { CommentType } from './Interface';

interface Props {
    comment:string
}
interface CommentData{
    createReply:CommentType
}
const CreateReply = (props: Props) => {
    const [email, setEmail] = React.useState('');
    const [content, setContent] = React.useState('');
    function save() {
        saveComment();
        setContent('');
        setEmail('');
    }
    const [saveComment, { error, data }]=  useMutation<CommentData,{}>(
        CREATE_REPLY,
        {variables:{email:email,content:content, comment:props.comment}}
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
                placeholder="Leave a reply here"
                multiline
                rows={2}
                rowsMax={4}
                style = {{width: 500}}
                value={content}
                onChange={(event)=>setContent(event.target.value)}
            />
            </div>
            <div style={{marginTop:10}}>
            <Button variant="contained" onClick={()=>save()}>reply</Button>
            </div>
        </div>
    )
}

export default CreateReply
