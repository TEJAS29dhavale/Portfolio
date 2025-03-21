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

function requestResume() {
    window.location.href = "mailto:your-email@example.com?subject=Request for Resume&body=Hi Tejas,%0D%0A%0D%0AI would like to request access to your resume. Please share the details.%0D%0A%0D%0AThank you!";
}

document.getElementById("year").textContent = new Date().getFullYear();
