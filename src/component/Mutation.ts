import gql from "graphql-tag";

export const CREATE_COMMENT=gql`
    mutation CREATE_COMMENT($email:String!,$content:String){
        addComment(email:$email,content:$content)
        {
            _id
        }
    }
`;

export const CREATE_REPLY=gql`
    mutation CREATE_REPLY($email:String!,$content:String,$comment:ID){
        addReply(email:$email,contetn:$content,comment:$comment)
        {
            _id
        }
    }
`;
