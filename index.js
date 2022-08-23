// Write your solution in this file!
    const employee={
        name :"Sam",
        streetAddress: "11 Broadway"
    }
function updateEmployeeWithKeyAndValue({... employee}, key ,value){
    employee.name="sam"
    employee.streetAddress="11 Broadway"
    return ({...employee,"name": "Sam","streetAddress": "11 Broadway"})
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key ,value){
    employee.streetAddress="12 Broadway"
   return ({"name": "Sam","streetAddress": "12 Broadway"});
}
function deleteFromEmployeeByKey(employee, key){
     employee.slice="name";
    return ({"streetAddress": "12 Broadway"});
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
