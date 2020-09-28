function monthConverter(month){
let newArray=[]
if(month+1==1){
    newArray=["August", "September", "October", "November", "December", "January"]
}
else if(month+1==2){
    newArray=["September", "October", "November", "December", "January","February"]
}
else if(month+1==3){
    newArray=[ "October", "November", "December", "January","February","March"]
}
else if(month+1==4){
    newArray=[ "November", "December", "January","February","March","April"]
}
else if(month+1==5){
    newArray=["December", "January","February","March","April","May"]
}
else if(month+1==6){
    newArray=["January","February","March","April","May","June"]
}
else if(month+1==7){
    newArray=["February","March","April","May","June","July"]
}
else if(month+1==8){
    newArray=["March","April","May","June","July","August"]
}
else if(month+1==9){
    newArray=["April","May","June","July","August","September"]
}
else if(month+1==10){
    newArray=["May","June","July","August","September","October"]
}
else if(month+1==11){
    newArray=["June","July","August","September","October","November"]
}
else{
    newArray=["July","August","September","October","November","December"] 
}
return newArray
}

export default monthConverter;