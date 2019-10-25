var counter = 0;

$("#btn").click(function () {
    var li = document.createElement("li");
    var input = $("#add").val();
    var button = document.createElement("button");
    button.id ="clean" ;
    button.textContent = "X";
    li.textContent = input;
    counter = counter + 1;
    li.id = counter;
    li.append(button);
    $("#list").append(li);

});

$('#list').on('click','li', function(event){
    event.preventDefault();
    console.log(event.currentTarget.id); // This is to get the element id, for future cases.
    this.style.textDecoration = "line-through";
    $(this).css("background-color", "black");
    $(this).css("list-style-image","url(https://icon-icons.com/icons2/933/PNG/32/circle-with-check-symbol_icon-icons.com_72811.png)")
})
$('#list').on('click', 'button', function (event) {
    event.preventDefault();
    $(this).parent().remove();
})

