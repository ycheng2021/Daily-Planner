let textSlots = $('.description');
let saveButton = $('.saveBtn');
let currentTD = $('#currentDay');

// use moment js to generate current day and time
// function to update the current time per second
function updateTime() {
    let today = moment();
    currentTD.text(today.format('dddd, MMMM Do YYYY'));
}

setInterval(updateTime, 1000);

// checking what gives me the time in each p tag
// console.log($('.time0').text())
// do the color coding for past, present, and future
for (let j=0; j< textSlots.length; j++) {
    let dataNumber = $('.time' + j);
    let currentTime = moment().format('H');
    let compareTime = dataNumber.attr('data-number')
    // checking if this logs current hour in 24
    // console.log(currentTime)
    // checking if it gives data number we set it up with
    // console.log(compareTime)
    if (compareTime === currentTime) {
        $('.text' + j).addClass('present')
    } else if (compareTime < currentTime) {
        $('.text' + j).addClass('past')
    } else {
        $('.text' + j).addClass('future')
    }
}

// checking if this gives me number of time-blocks
// console.log(textSlots.length)

// texts will be retrieved if they are saved in local storage
// for loop
for (let i=0; i<textSlots.length; i++) {
    // that retrieves the data and input saved local storage value for that texti
    $('.text' + i).val(localStorage.getItem('text' + i)) 
}

// function to store the text data that user types
function storeData() {
    // for loop
    for (let i=0; i<textSlots.length; i++) {
    // that saves each comment to local storage as texti value
        localStorage.setItem('text' + i, $('.text' + i).val());
    }
};

// when save button is clicked, texts are saved to local storage
saveButton.on('click', storeData);