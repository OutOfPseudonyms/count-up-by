$(document).ready(function () {
  $("#countUpBy").submit(function (event) {
    event.preventDefault();

    let countBy = $("#multiple").val();
    let countTo = $("#total").val();

    // let countBy = 5
    // let countTo = 30

    for (let index = 0; index <= countTo; index += countBy) {
        console.log(index);
    };
  })
})

