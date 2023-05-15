//Adding a new item to the list of items
let li = $(<li></li>);
let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue === '') {
    alert('You must write something!');
} else {
    $('#list').append(li);
}

//Crossing out an item from the list of items
li.on('dblclick', function () {
    li.toggleClass('strike');
});

//Adding the delete button 'X'
let crossOutButton = $('<button>X</button>');
li.append(crossOutButton);