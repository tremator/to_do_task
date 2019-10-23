var counter = 0;

$("#btn").click(function () {
    var li = document.createElement("li");
    var input = $("#add").val();
    li.textContent = input;
    counter = counter + 1;
    li.id = counter;
    $("#list").append(li);
})

$('#list').on('click','li', function(event){
    event.preventDefault();
    console.log(event.currentTarget.id); // This is to get the element id, for future cases.
    this.style.textDecoration = "line-through";
})