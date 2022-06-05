import { Iposts } from "../interface/iposts";


 let posts:Iposts[] = [ {
    id:1,
    body:"luptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
    title:'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.',
    active:true,
    type:"edu"
},
{
    id:2,
    body:"Sit minim deserunt enim enim nisi. Eiusmod voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
    title:"Dolor velit sint tempor culpa ad tempor eiusmod.",
    active:true,
    type:"politic"
},
{
    id:3,
    body:"Sit minim deserunt enim enim nisi. Eiusuptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
    title:"Dolor velit sint tempor culsum do ad tempor eiusmod.",
    active:true,
    type:"edu"
},
{
    id:4,
    body:"Sit minim deserunt enim enim nisi. Eiusmoluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
    title:"Dolor velit sint tempor culppsum do ad tempor eiusmod.",
    active:false,
    type:"news"
},
{
    id:5,
    body:"Sit minim deserunt enim enimoluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
    title:"Dolor velit sint tempor culpa sum do ad tempor eiusmod.",
    active:false,
    type:"politic"
}]

export function getPosts():void{console.log(posts);}