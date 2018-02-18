// Click on a close button to remove the current list item
$(document).on('click', '.close', function () {
    $(this).parent('li').remove();

    localStorage.clear();
    var list = JSON.parse(localStorage.getItem("list"));
    if (list == null)
        list = [];

    $('#myUL li').each(function () {
        var item = $(this).html();
        list.push(item);
    });

    localStorage.setItem("list", JSON.stringify(list));
    
});

//Load current list from local storage
$(document).ready(function () {
    
    var list = JSON.parse(localStorage.getItem("list"));
    if (list != null) {
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            $("#myUL").append($("<li></li>").html(item));
        }
    }
});

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = $("#myInput").val();
    var t = document.createElement("SPAN");
    t.className = 'list-item';
    var text = document.createTextNode(inputValue);
    li.appendChild(t);
    t.append(text);
    

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $("#myUL").append(li);

    }

    var span = document.createElement("SPAN");
    var input = document.createElement('INPUT');
    var txt = document.createTextNode("\u00D7");
    input.className = 'edit';
    span.className = "close";
    span.append(txt);
    li.append(span);
    li.append(input);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    $(document).find('.edit').css('display', 'none');

    $(document).on('click', '#add', function () {
        $("#myInput").val('');
    });
}

//Save list to local storage on save button click

$(document).on('click', '#add', function () {
    localStorage.clear();
    var list = JSON.parse(localStorage.getItem("list"));
    if (list == null)
        list = [];
    
    $('#myUL li').each(function () {
        var item = $(this).html();
        list.push(item);
    });
    
    localStorage.setItem("list", JSON.stringify(list));
    
    
});


$(document).on('click', '#myUL li', function () {

    var $elem = $(this).find('.list-item');

    $elem.hide();
    $(this).find('.edit').show().val($elem.text()).focus();

});

$(document).on('focusout', '.edit', function () {
    $(this).hide().siblings(".list-item").show().text($(this).val());
});

//Remove list from local storage on clear button click
$(document).on('click', '#clear', function () {
    localStorage.clear();
    $('#myUL li').remove();
});