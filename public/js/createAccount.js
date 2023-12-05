const createAccount = async (event) => {
    event.preventDefault();
  
    // Collect values from the create account form
    const email = document.querySelector('#email').value.trim();
    const teamName = document.querySelector('#teamname').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (email && teamName && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/createAccount', {
        method: 'POST',
        body: JSON.stringify({ email, teamName, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/api/teamNames');
      } else {
        alert(response.statusText);
      }
    }
  };

document.querySelector('#createAccountForm').addEventListener('submit', createAccount);