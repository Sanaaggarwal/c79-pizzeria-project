menu_array=["Chicken Tandoori Pizza","Deluxe Veggie Pizza","Paneer Tikka Pizza","Veg Pizza","Veg supreme pizza"]
function getmenu(){
    menu_array.sort();
    var htmldata="";
    for(var i=0; i<menu_array.length;i++){
    htmldata=htmldata+"<h3>"+menu_array[i]+"</h3>"
    }
    document.getElementById("display_menu").innerHTML=htmldata;
}
function add_item(){
    newitem=document.getElementById("add_item").value;
    menu_array.push(newitem);
    var htmldata="";
    for(var i=0; i<menu_array.length;i++){
    htmldata=htmldata+"<h3>"+menu_array[i]+"</h3>"
    }
    document.getElementById("display_addedmenu").innerHTML=htmldata;
}