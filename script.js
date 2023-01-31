function toggleNav() {
    let state = document.getElementsByTagName("nav")[0].style.display;
    if (state == 'block') {
        document.getElementsByTagName("nav")[0].style.display = 'none';
    } else {
        document.getElementsByTagName("nav")[0].style.display = 'block';
    }
}