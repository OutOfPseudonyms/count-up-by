$(document).ready(function () {
  $("#countUpBy").submit(function (event) {
    event.preventDefault();

    let countBy = parseInt($("#multiple").val());
    let countTo = parseInt($("#total").val());

    if (countBy < 0 || countTo < 0) {
      alert("Please enter a non-negative number.");
      return;
    }

    if (countBy > countTo) {
      alert("Your multiple cannot be greater than total.")
    }

    for (let index = countBy; index <= countTo; index += countBy) {
      $("#numbers").append(`<li>${index}</li>`)
    }
  })
})