"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var User_1 = require("./User");
var GitHubApiService = /** @class */ (function () {
    function GitHubApiService() {
        this.options = {
            headers: {
                'user-Agent': 'request'
            }
        };
    }
    GitHubApiService.prototype.getUserInfo = function (userName) {
        request.get('https://api.github.com/users/' + userName, this.options, function (error, response, body) {
            //console.log(error);
            // console.log(response); 
            var user = new User_1.User(JSON.parse(body));
            console.log(user);
        });
    };
    GitHubApiService.prototype.getRepo = function () { };
    return GitHubApiService;
}());
exports.GitHubApiService = GitHubApiService;
