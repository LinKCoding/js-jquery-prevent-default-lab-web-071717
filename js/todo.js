$(document).ready(function(){
  // call functions here
  submitForm()
});

function submitForm(){
  $('form').on('submit', (e) =>{
    e.preventDefault()
    let input = $('#item').val()
    // console.log(input);
    $('#list ol')[0].innerHTML += `<li>${input}</li>`
    // console.log($('#list ol'));
  })
}
