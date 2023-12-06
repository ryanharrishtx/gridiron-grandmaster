
    document.addEventListener('DOMContentLoaded', () => {
        const selectedTeams = [];
        
        const buttons = document.querySelectorAll('.teamLogoButton');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Toggle background color on button click
                button.classList.toggle('selected');

                const teamName = button.getAttribute('data-team');
                const teamLogo = button.getAttribute('data-logo');
               

                if (button.classList.contains('selected')) {
                    // Add selected team to the array
                    selectedTeams.push(teamName);
                    selectedTeams.push(teamLogo);
                } else {
                    // Remove unselected team from the array
                    const index = selectedTeams.indexOf(teamName);
                    if (index !== -1) {
                        selectedTeams.splice(index, 1);
                    }
                }
                // Ensure no more than 3 teams are selected
                if (selectedTeams.length > 3) {
                    const unselectTeam = selectedTeams.shift();
                    const unselectButton = document.querySelector(`[data-team="${unselectTeam}"]`);
                    if (unselectButton) {
                        unselectButton.classList.remove('selected');
                    }
                }
                console.log(selectedTeams);

            });
        });
    });

