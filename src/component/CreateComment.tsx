import React from 'react'
import { CREATE_COMMENT } from './Mutation'
import { useMutation } from '@apollo/react-hooks'
import { TextField, Button } from '@material-ui/core'
import { CommentType } from './Interface'
import { GET_COMMENTS } from './Query'
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
interface Props {

}
interface CommentData{
    createComment:CommentType
}
const CreateComment = (props: Props) => {

    const [email, setEmail] = React.useState('');
    const [content, setContent] = React.useState('');
    const [emailValid,setEmailValid] =React.useState<"success" | "error" | "warning" | undefined>()
    function save() {
        saveComment();
        setContent('');
        setEmail('');
    }
    const [saveComment, { error, data }]=  useMutation<CommentData,{}>(
        CREATE_COMMENT,
        {
            variables:{email:email,content:content},
            refetchQueries:[{query:GET_COMMENTS}]
        }
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
            <Button variant="contained" 
            disabled={emailValid !== 'success'}
            onClick={()=>email && save()}>comment</Button>
            </div>
        </div>
        
    )
}

export default CreateComment
