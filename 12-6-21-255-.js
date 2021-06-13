var a  = 4 ;
if(!a %2 ){
    console.log("yes")
}
else{
    console.log("no")
}
console.log(a%2)
 switch(new Date().getDay()){

        case 0 :
            console.log("Sunday")
            break 
            case 1:
                console.log("Sunday")
                break 
                case 2:
                    console.log("Tuesday")
                    break 
                    case 3:
                        console.log("wedneday")
                        break 
                        case 4 :
                            console.log("Thursday")
                            break 
                            case 5 :
                                console.log("friday")
                                break 
                                case 6 : 
                                console.log("Saturday")
                                break  
 }
 var i =3;
// for(;i;i++){
//    console.log(i)
// }
var obj = {
    name:"Arun",
    age:26,
    year:1995
    
}
console.log(obj)
var obj2=[]
var holder = {}
for(obj2 in obj ){
     for(let i=0 ;i <= obj2.length-1;i++){
          holder[obj2[i]]=obj[obj2[i]]
     }
    
}
console.log(holder)
