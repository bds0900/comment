import gql from "graphql-tag";

export const CREATE_COMMENT=gql`
    mutation CREATE_COMMENT($email:String!,$content:String){
        createComment(email:$email,content:$content)
        {
            _id
        }
    }
`;

export const CREATE_REPLY=gql`
    mutaion CREATE_REPLY($email:String!,$content:String,$comment:ID){
        createReply(email:$email,contetn:$content,comment:$comment)
        {
            _id
        }
    }
`;
