

import *as request from 'request';
import { User } from './User';

 export class GitHubApiService{
      
     options:any = {
               headers:{
                   'user-Agent' :'request'
               }
               
    };

     getUserInfo(userName:string){

                request.get('https://api.github.com/users/' + userName, this.options, (error:any,response:any,body:any) =>{
                    
                //console.log(error);
               // console.log(response); 
               let user = new User(JSON.parse(body));
               console.log(user);
               

            
            });
     }
     getRepo(){}
 }