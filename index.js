var tr=true;
function sidebaropen(){
const a= document.getElementById('ulnav2');
const b=document.getElementById('nab1');
if(tr){
    a.style.display='grid';
    b.src="image/icons8-close-48.png";
    tr=false;
}
else{
 a.style.display='none';
 b.src="image/icons8-menu-50.png";
tr=true;
}
}
