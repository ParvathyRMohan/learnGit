const adminHomeMethod = require('./adminhome.js');
//const userHomeMethod = require('./userhome.js');
const fileOps = require('./fileops.js');
function login(){
    console.log("**********")
    console.log("Login Page")
    console.log("**********")
    var fileData = fileOps.readUserFileData();
var found = false;
console.log("User Name : ");
process.stdin.once('data',function(userName){
	userName = userName.toString().trim();
	console.log("Password : ");
	process.stdin.once('data',function(pswd){
		pswd = pswd.toString().trim();
		for(var i=0;i<fileData.length;i++){
			if(userName == fileData[i].userName && pswd == fileData[i].password){
				found = true;
				break;
			}
		}
		if(found == true){
			j=i-1;
			//console.log(i)
			if(fileData[i].userType == "admin"){
				adminHomeMethod.gotoAdminHome();
			}else{
				userHomeMethod.gotoUserHome(fileData[i].userId);
			}
		}else{
			console.log("Invalid User");
		}
	})
})
}
login()