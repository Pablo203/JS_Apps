var x = document.getElementById("topic");
var y = document.getElementById("content");
var i = 0;
function add_item() {
    var topic = x.value;
    var content = y.value;
    document.getElementById("to_do_elements").innerHTML += '<div id=' + i + '><div class = "thing"><div class = "thing-title"><div class = "btn-area"><button class = "delete-btn" onclick="rm_item(' + i + ')"><div class="cross-line-1"></div><div class="cross-line-2"></div></button></div><p>' + topic + '</p></div><div class = "thing-content">' + content + '</div></div></div>';
    i++;
}

function rm_item(item_id){
    document.getElementById(item_id).innerHTML = " ";
}