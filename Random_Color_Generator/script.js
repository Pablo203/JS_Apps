var color_arr = [];
var temp = "#";
function color_gen(){
    for(let j=0; j<6; j++){
        color_arr[j] = 0;
    }
    temp = "#";
    for(let i=0; i<6; i++){
        var x = Math.floor(Math.random() * 15);
        switch(x){
            case 10:
            x = "A"
            break;
            case 11:
            x = "B"
            break;
            case 12:
            x = "C"
            break;
            case 13:
            x = "D"
            break;
            case 14:
            x = "E"
            break;
            case 15:
            x = "F"
            break;
        }
        color_arr[i] = x;
    }
    for(let h=0; h<6; h++){
        temp += color_arr[h];
        document.getElementById("value").innerHTML = temp;
        document.getElementById("huge").style = "background-color: "+temp;
    }
}