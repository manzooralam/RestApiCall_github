"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GitHubApiService_1 = require("./GitHubApiService");
var svc = new GitHubApiService_1.GitHubApiService();
svc.getUserInfo('manzooralam');
/*
 svc.getUserInfo('manzooralam',  (user: User)=>
   {
      console.log(user);
   });
*/
