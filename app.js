$("#btn").click(function () {
    var li = document.createElement("li");
    var input = $("#add").val();
    li.textContent = input;
    li.id = "li";
    console.log(li);
    $("#list").append(li);
})
$("#li").click(function () {
    this.style.textDecoration = "line-through";
})      