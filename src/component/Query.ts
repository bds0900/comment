import gql from "graphql-tag";

export const GET_COMMENTS = gql`
{
  comments{
    id
    name
    content
    reply
  }
}
`;
export const GET_COMMENT = gql`
query GET_COMMENT($id:ID){
  comment(id:$id){
    id
    name
    content
    reply
  }
}
`;