const cls= require('./classes.js');
//const common = require('./common.js');
const fileOps = require('./fileops.js');
const hom = require('./adminhome.js')
var empList=[];
var userid
function addEmployee(){
    
	empList = fileOps.readEmpFile();
	console.log("Enter employee name : ");
	process.stdin.once('data',function(empName){
		empName = empName.toString().trim();
		console.log("Enter employee id : ");
		process.stdin.once('data',function(empId){
            empId =empId.toString().trim();
            console.log("set username for new employee : ")
            process.stdin.once('data',function(userName){
                userName=userName.toString().trim()
                console.log("set password for new employee : ")
                process.stdin.once('data',function(pass){
                    pass=pass.toString().trim()
			console.log("Enter project name : ");
			process.stdin.once('data',function(projName){
				projName = projName.toString().trim();
				console.log("Enter role : ");
				process.stdin.once('data',function(role){
                    role = role.toString().trim();
                    console.log("enter skills")
                    process.stdin.once('data',function(skill){
                        skill=skill.toString().trim();
                        console.log("enter the location")
                        process.stdin.once('data',function(loc){
                            loc=loc.toString().trim();
					empObject =new cls.employee(empName,empId,projName,role,skill,loc)
					empList.push(empObject)
                    fileOps.writeEmpFile(empList)
                    hom.gotoAdminHome()
                             });

                        });
                    });
				});
			});
		});
    });
});
}

function viewEmployee(userId){
	userid = userId;
	var empList = fileOps.readEmpFile();
    console.log("Enter Employee ID: ")
    process.stdin.once('data',function(result){
        result = result.toString().trim()     
    for(var j = 0; j < empList.length ; j++){
    console.log("________Employee details________\nName : " +empList[j].empName);
    console.log("Employee Id : " +empList[j].empId);
    console.log("Project : " +empList[j].projName);
    console.log("role : " +empList[j].role);
    console.log("skills : " +empList[j].skill);
    console.log("location : " +empList[j].loc);
}

 hom.gotoAdminHome()
    })
}

function searchEmployee(){
	empList = fileOps.readEmpFile();
    console.log("Enter the choice by which you want to search\n 1.Name wise\n 2.Id wise\n 3.Project wise\n 4.Role wise\n 5.Skill wise\n 6.Location wise\n")
    process.stdin.once('data',function(choice){
       choice = choice.toString().trim();
       if(choice == 1){
            console.log("enter the name : ");
            process.stdin.once('data',function(ename){
                ename=ename.toString().trim();
                var index = searchNameInArray(empList,ename);
                if(index == 404){
                    console.log("Employee not found !");
                }else{
                    console.log(empList[index]);
                }
                hom.gotoAdminHome()
            });
       }else if(choice == 2){
           console.log("enter the id : ")
           process.stdin.once('data',function(eid){
               eid=eid.toString().trim()
            var index= searchIdInArray(empList,eid)
            if(index == 404){
                console.log("employee not found")
            }else{
                    console.log(empList[index])
                }
                hom.gotoAdminHome()
            })
        }else if(choice == 3){
         console.log("enter the project name : ")
         process.stdin.once('data',function(pname){
             pname=pname.toString().trim()
             var index=searchProjNameInArray(empList,pname)
             if (index == 404){
                 console.log("employee not found")
             }else{
                 console.log(empList[index])
             }
             hom.gotoAdminHome()
            })
        }else if(choice == 4){
            console.log("enter the roll : ")
            process.stdin.once('data',function(roll){
                roll=roll.toString().trim()
                var index=searchRollInArray(empList,roll)
                if (index == 404){
                    console.log("employee not found")
                }else{
                    console.log(empList[index])
                }
                hom.gotoAdminHome()
               })
           }
   })
}


function searchNameInArray(empList,ename){
	for(var i=0;i<empList.length; i++){
		if(empList[i].empName==ename){
			return i;
		}
	}
	return 404;
}

function searchIdInArray(empList,eid){
    for(i=0;i<empList.length;i++){
        if(empList[i].empId==eid)
        return i
    }
return 404
}

function searchProjNameInArray(empList,pname){
	for(var i=0;i<empList.length; i++){
		if(empList[i].projName==pname){
			return i;
		}
	}
	return 404;
}

function searchRollInArray(empList,roll){
	for(var i=0;i<empList.length; i++){
		if(empList[i].role==roll){
			return i;
		}
	}
	return 404;
}

module.exports={
    addEmployee,viewEmployee,searchEmployee
}