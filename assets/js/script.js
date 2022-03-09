let textSlots = $('.description');
let saveButton = $('.saveBtn');

// get number of time-blocks
console.log(textSlots.length)

// texts will be retrieved if they are saved in local storage
// for loop
for (let i=0; i<textSlots.length; i++) {
    // that retrieves the data and input saved local storage value for that texti
    $(".text" + i).val(localStorage.getItem("text" + i)) 
}

// function to store the text data that user types
function storeData() {
    // for loop
    for (let i=0; i<textSlots.length; i++) {
    // that saves each comment to local storage as texti value
        localStorage.setItem("text" + i, $(".text" + i).val());
    }
};

// when save button is clicked, texts are saved to local storage
saveButton.on('click', storeData);
