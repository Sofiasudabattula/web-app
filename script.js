let ingredientsShown = false;
let instructionsShown = false;
let totalSteps = 6; // Number of steps
let completedSteps = 0;

// Toggle ingredients visibility
document.getElementById('toggle-ingredients').addEventListener('click', function() {
    const ingredients = document.querySelector('.ingredients');
    ingredients.classList.toggle('hidden');
    ingredientsShown = !ingredientsShown;
    
    this.textContent = ingredientsShown ? 'Hide Ingredients' : 'Show Ingredients';

    // If all ingredients are shown, reveal the instructions button
    if (ingredientsShown) {
        document.getElementById('toggle-steps').classList.remove('hidden');
    } else {
        document.getElementById('toggle-steps').classList.add('hidden');
        document.querySelector('.steps').classList.add('hidden');
    }
});

// Toggle instructions visibility
document.getElementById('toggle-steps').addEventListener('click', function() {
    const steps = document.querySelector('.steps');
    steps.classList.toggle('hidden');
    instructionsShown = !instructionsShown;
    
    this.textContent = instructionsShown ? 'Hide Instructions' : 'Show Instructions';
});

// Handle clicking on each cooking step
document.querySelectorAll('.steps li').forEach((step, index) => {
    step.addEventListener('click', function() {
        if (!this.classList.contains('completed')) {
            this.classList.add('completed');
            completedSteps++;

            // Update progress bar
            const progressBar = document.querySelector('.progress-bar');
            progressBar.style.width = (completedSteps / totalSteps) * 100 + '%';

            // Check if all steps are completed
            if (completedSteps === totalSteps) {
                showFinalMessage();
            }
        }
    });
});

// Function to show the final message when all steps are completed
function showFinalMessage() {
    const finalMessage = document.getElementById('final-message');
    finalMessage.classList.remove('hidden');
}
