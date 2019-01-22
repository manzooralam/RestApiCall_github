
import {GitHubApiService} from './GitHubApiService';

let svc= new GitHubApiService();
svc.getUserInfo('manzooralam');

/*
 svc.getUserInfo('manzooralam',  (user: User)=>
   {
      console.log(user);
   });
*/
