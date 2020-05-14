
export interface CommentType{
    _id:string;
    email:string;
    time:string;
    content:string;
    comment:string;
    reply:CommentType[]
}
