document.addEventListener("DOMContentLoaded", function() {

    // Function to create stars
    function createStars(numStars) {
        const starContainer = document.querySelector('.stars');
        
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // Randomize star size and position
            const size = Math.random() * (3 - 1) + 1 + 'px'; // Size between 1px and 3px
            star.style.width = size;
            star.style.height = size;

            // Position the stars randomly within the container
            const xPos = Math.random() * window.innerWidth + 'px';
            const yPos = Math.random() * window.innerHeight + 'px';
            star.style.left = xPos;
            star.style.top = yPos;

            // Add the star to the container
            starContainer.appendChild(star);
        }
        
        // Add movement animation
        animateStars();
    }

    // Function to animate stars
    function animateStars() {
        const stars = document.querySelectorAll('.star');
        
        stars.forEach(star => {
            const duration = Math.random() * (5 - 2) + 2; // Random duration between 2s and 5s

            if (duration > 0) { // Ensure duration is positive
                star.style.animationDuration = duration + 's';

                // Move stars in a random direction
                const moveX = Math.random() > 0.5 ? '+=50' : '-=50'; // Move right or left
                const moveY = Math.random() > 0.5 ? '+=50' : '-=50'; // Move down or up

                star.animate([
                    { transform: `translate(${moveX}, ${moveY})`, opacity: '1' },
                    { transform: `translate(0, -10%)`, opacity: '0' }
                ], {
                    duration: duration * 1000, // Convert seconds to milliseconds for animate()
                    iterations: Infinity,
                    easing: 'linear'
                });
            }
        });
    }

    createStars(2000); // Create a specified number of stars
});
