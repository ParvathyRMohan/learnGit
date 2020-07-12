const adminMethods = require('./adminmethods.js');

function gotoAdminHome(){
	console.log("1. Add new employee\n2. Edit employee details\n3. View employee details\n4. Search employee\n5. Remove employee details\n6. Signout\n");
	process.stdin.once('data',function(adminMenuChoice){
		adminMenuChoice = adminMenuChoice.toString().trim();
		if(adminMenuChoice == 1){
			adminMethods.addEmployee();
		}else if(adminMenuChoice == 2){
			adminMethods.editEmployee();
		}else if(adminMenuChoice == 3){
			adminMethods.viewEmployee();
		}else if (adminMenuChoice == 4){
		    adminMethods.searchEmployee()
		}else if(adminMenuChoice == 5){
			adminMethods.removeEmployee();
        }else if(adminMenuChoice == 6){
            process.exit()
        }else{
			console.log("Invalid entry");
		}
	});	
}

module.exports.gotoAdminHome=gotoAdminHome