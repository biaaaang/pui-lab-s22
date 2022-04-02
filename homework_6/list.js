function onLoad() {
    var selected = JSON.parse(localStorage.getItem('mySelected'));
    if (selected === null) {
        selected = [];
    }
    document.getElementsByClassName("cart_page")[0].textContent =
            "My Courses (" + selected.length + ")";
}