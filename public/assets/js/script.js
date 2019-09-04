$(document).ready(function() {
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    var burger_id = $(this)
      .children(".burger_id")
      .val();
    console.log(burger_id);
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(function(data) {
      // reload page to display devoured burger in proper column
      location.reload();
    });
  });
});

// $(function() {
//   $(".create-form").on("submit", function(event) {
//     event.preventDefault();

//     var newBurger = {
//       burger_name: $("#newburger")
//         .val()
//         .trim(),
//       devoured: 0
//     };

//     $.ajax("/api/burgers", {
//       type: "POST",
//       data: newBurger
//     }).then(function() {
//       console.log("Added new burger");
//       location.reload();
//     });
//   });

//   $(".eatburger").on("click", function(event) {
//     event.preventDefault();

//     var id = $(this).data("id");
//     var devouredState = {
//       devoured: 1
//     };

//     $.ajax("/api/burgers/" + id, {
//       type: "PUT",
//       data: devouredState
//     }).then(function() {
//       console.log("Burger devoured");
//       location.reload();
//     });
//   });

//   $(".trashburger").on("click", function(event) {
//       event.preventDefault();

//       var id = $(this).data("id");

//       $.ajax({
//           type: "DELETE",
//           url: "/api/burgers/" + id
//       }).then(location.reload());
//   });
// });
