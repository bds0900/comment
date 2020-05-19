import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { CREATE_REPLY } from './Mutation';
import { useMutation } from '@apollo/react-hooks';
import { CommentType } from './Interface';
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
interface Props {
    comment:string
}
interface CommentData{
    createReply:CommentType
}
const CreateReply = (props: Props) => {
    const [email, setEmail] = React.useState('');
    const [content, setContent] = React.useState('');
    const [emailValid,setEmailValid] =React.useState<"success" | "error" | "warning" | undefined>()
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
                onChange={(event)=>{
                    setEmail(event.target.value)
                    setEmailValid(emailRegex.test(event.target.value.toLowerCase()) ? 'success' : 'error')
                }}
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
            <Button variant="contained" 
            disabled={emailValid !== 'success'}
            onClick={()=> emailValid && save()}>reply</Button>
            </div>
        </div>
    )
}

export default CreateReply
