
import { Repo } from "./Repo";

 export class User{
     login:string="null";
     fullName:string="null";
     repoCount:number=0;
     followerCount:number=0;
     repos: Repo[] = [];
 }