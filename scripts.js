$(document).ready(function () {

    //using jquery to do everything that was done using Vanilla JS in other lab

    // step 1. Creates button without using HTML adds a label to the button and some styling and uses evenet listener to alert when button clicked.
    $('#btnDiv').css({ display: 'flex', justifyContent: 'center', margin: '3em' });
    $('<button id=btn1>This Will Alert!</button>').appendTo('#btnDiv');
    $('#btn1').click(function () {
        alert('I WARNED YOU!');
    });

    // Step 2. created a click event listener that takes value typed into the text portion of the form and displays it as an alert when the button is clicked. 
    $('#btnSubmit').click(function () {
        event.preventDefault();
        alert($('#formText1').val());
    });

    //step 3. creating mouseover and mouseout functions that change color of background and text of div created in HTML.
    $('#colorDiv').mouseover(function () {
        $('#colorDiv').css({ backgroundColor: '' + randomColor() + '', color: '' + randomColor() + '' });
    });
    $('#colorDiv').mouseout(function () {
        $('#colorDiv').css({ backgroundColor: 'white', color: 'black' });
    });

    //step 4. creating function for changing random colors using event listener to use randomColor function to change color of paragraph element text created in HTML on click
    $('#p1').click(function () {
        $('#p1').text("I didn't necessarily lie, I will turn red............eventually").css({ color: '' + randomColor() + '' });
    });

    function randomColor() { 
        let R = Math.floor(Math.random() * 245);
        let G = Math.floor(Math.random() * 250);
        let B = Math.floor(Math.random() * 255);
        return 'rgb(' + R + ',' + G + ',' + B + ')';
    };

    //step 5. button, empty div, and event listener created in using jquery that creates span with my name in it when the button is clicked.
    $('<button id=btn3>Add-a-span</button>').appendTo('#btnDiv');
    $('<div id=spanDiv></div>').appendTo('body');
    $('#spanDiv').css({ display: 'block', textAlign: 'center'});
    
    $('#btn3').click(function () {
        $('<span id=nameSpan>Nate DeBenedetti</span>').css({display: 'block', color: '' + randomColor() + ''}).appendTo('#spanDiv');
        
    });

    //step 6. Array created in jquery and linked to button and ul created in HTML.
    let friendsArr = ['Matt', 'Dustin', 'Brooks', 'Jason', 'Alex', 'Jordan', 'Todd', 'John', 'Bob', 'Jack'];

    $('#listBtn').click(function () {
        for (f = 0; f < friendsArr.length; f ++) {
        $('<li>' + friendsArr[f] + '</li>').appendTo('#list').css({ margin: '3em', color: '' + randomColor() + '' });
        $('#list').css({ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' });
        
        }

    });
    






});