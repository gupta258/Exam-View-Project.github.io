function loadModal(x) {

    var modal = document.querySelectorAll(".mine-modal");
    console.log(x);
    for (var i = 0; i < 2; i++) {

        if (i == x) {
            modal[i].style.display = "block";
        } else {
            modal[i].style.display = "none";
        }
    }
}