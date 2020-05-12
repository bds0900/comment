import gql from "graphql-tag";

export const CREATE_COMMENT=gql`
    mutation CREATE_COMMENT($name:String!,$password:String,$content:String){
        createComment(data:{
            name:$name
            paaword:$password
            content:$content
        }){
            id
        }
    }
`;
