/* Your Code Here */


let createEmployeeRecord = function(employeeRecord) {
    return {
    firstName: employeeRecord[0],
    familyName: employeeRecord[1], 
    title: employeeRecord[2],
    payPerHour: employeeRecord[3],
    timeInEvents: [],
    timeOutEvents: []
    } 
}

let createEmployeeRecords = function(employeeRecords) {

    return employeeRecords.map(function(record) {
        return createEmployeeRecord(record)
    })

}

let createTimeInEvent = function(dateStamp) {
    let [date, hour] = dateStamp.split(' ')

     this.timeInEvents.push({
         type: "TimeIn",
         hour: parseInt(hour,10),
         date, 
     })

     return this 
}

let createTimeOutEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(" ")

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour,10),
        date,
     })

     return this 
}

let hoursWorkedOnDate = function(soughtDate){
    //find time in on the sought date using find function
    //we're looking for time in property that corresponds w/ a record that has the sough date 
    let inEvent = this.timeInEvents.find(function(e){
        return e.date === soughtDate 
    })

    //find time out n the sought date using find function

    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === soughtDate 
    })

    return (outEvent.hour - inEvent.hour)/ 100 
}

let wagesEarnedOnDate = function(dateSought){

    let rawWage = hoursWorkedOnDate.call(this, dateSought)
        * this.payPerHour
        return parseFloat(rawWage.toString())
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

let findEmployeeByFirstName = function(srcArray, firstName) {

    return srcArray.find(function(record) {
        return record.firstName === firstName 
    })
}

let calculatePayroll = function(employeeRecords){
    return employeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

