const fs = require('fs');


function readUserFileData(){
    try{
        var dataString = fs.readFileSync('userList.json');
        return(JSON.parse(dataString));
    }catch(err){
        return [];
    }
    }
function writeUserFileData(data){
    data = JSON.stringify(data);
    fs.writeFileSync('userList.json',data);
}


function readEmpFile(){
    
    try{ 
        var dataString = fs.readFileSync('empList.json');
        return(JSON.parse(dataString));
    }catch(err){
        return [];
    }
}

function writeEmpFile(data){

    data = JSON.stringify(data);
    fs.writeFileSync('empList.json',data);
}

module.exports = {
    readUserFileData,writeUserFileData,readEmpFile, writeEmpFile
}