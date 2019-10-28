$(document).ready(function(){
   loadQuestions()
})

// function displayQuestions(questions) {
//    const tableOfQuestions = $('tableOfQuestions')
//
//    // questions.forEach() { Add functionality to show all of the questions }
// }

function loadQuestions() {
  $.get('/questions')
    .done(questions => {
      console.log(questions)
      //displayQuestions(questions)
    })
    .fail(xhr => {
      // TODO Come up with a message to the user.
      console.log('Error loading qustions.', xhr.responseText)
    })
}