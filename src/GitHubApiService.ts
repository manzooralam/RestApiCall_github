

import *as request from 'request';

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
               console.log(body);
            
            });
     }
     getRepo(){}
 }