$("p").bind("click", function () {
    $("<div>This is a click Event</div>").appendTo("body");
});

$("p").bind("dblclick", function () {
    $("<div>This is a double-click Event</div>").appendTo("body");
});