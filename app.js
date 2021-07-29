// Init Github
const github = new GitHub;
// Init UI
const ui = new UI;

// Search Input

const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text ...
  const userText = e.target.value;

  if(userText !== ''){
    // make http call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show Alert

      } else {
        // Show Profile
        ui.showProfile(data.profile);
      }
    })
  } else {
    ui.clearProfile();
  }
})