
export interface CommentType{
    id:string;
    name:string;
    password:string;
    content:string;
    reply:ReplyType[]
}

export interface ReplyType{
    id:string;
    name:string;
    password:string;
    content:string;
    comment:CommentType;
    reply:ReplyType[]
}