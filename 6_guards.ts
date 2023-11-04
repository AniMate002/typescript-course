//              Different actions depending on type

//  1)TYPE OF
function strip(x: string | number){
    if(typeof x === 'number')
        return x.toFixed(2)
    return x.trim()
}

//  2)INSTANCE OF
class MyResponse{
    head: 'response head'
    result: 'response result'
}
class MyError{
    head: 'error head'
    message: 'error message'
}
function handle(x: MyResponse | MyError){
    if(x instanceof MyResponse){
        return x.result
    }
    return x.message
}

// 3) Type
type AlertType = 'success' | 'warning' | 'danger'
function setAlertType(x: AlertType):void{
    console.log("Current type is: ", typeof x)
}
setAlertType('success')
setAlertType('warning')
setAlertType('danger')