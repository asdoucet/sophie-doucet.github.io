function changepreviewart() {
    document.getElementById("about").classList.add('hidden');
    document.getElementById("photo").classList.add('hidden');
    document.getElementById("design").classList.add('hidden');
    document.getElementById("art").classList.remove('hidden');
}
function changepreviewabout() {
    document.getElementById("art").classList.add('hidden');
    document.getElementById("photo").classList.add('hidden');
    document.getElementById("design").classList.add('hidden');
    document.getElementById("about").classList.remove('hidden');
}
function changepreviewphoto() {
    document.getElementById("art").classList.add('hidden');
    document.getElementById("about").classList.add('hidden');
    document.getElementById("design").classList.add('hidden');
    document.getElementById("photo").classList.remove('hidden');
}
function changepreviewdesign() {
    document.getElementById("art").classList.add('hidden');
    document.getElementById("about").classList.add('hidden');
    document.getElementById("photo").classList.add('hidden');
    document.getElementById("design").classList.remove('hidden');
}

document.getElementById("nav-art").onmouseover= changepreviewart;
document.getElementById("nav-about").onmouseover = changepreviewabout;
document.getElementById("nav-photo").onmouseover = changepreviewphoto;
document.getElementById("nav-design").onmouseover = changepreviewdesign;






