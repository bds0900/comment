import gql from "graphql-tag";

export const GET_COMMENTS = gql`
{
  	comments{
      _id
      email
      time
      content
      replies{
        _id
        email
        time
        content
      }
    }
}
`;
export const GET_COMMENT = gql`
query GET_COMMENT($id:ID){
  comment(id:$id){
    id
    email
    time
    content
    replies{
      _id
      email
      time
      content
    }
  }
}
`;