// document.getElementById('search').addEventListener('keypress', function(event) {
//     if (event.key === 13) {
//         event.preventDefault();
//     }
// });

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        location.reload();
    }
});