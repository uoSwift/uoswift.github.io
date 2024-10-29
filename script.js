
        // Select all sections
        const sections = document.querySelectorAll('.section');

        // Function to highlight the clicked section
        function activateSection(sectionId) {
            // Remove the active class from all sections
            sections.forEach(sec => sec.classList.remove('active'));
            
            // Add the active class to the section with the matching ID
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        }

        // Add click event listeners to sections for manual clicks
        sections.forEach(section => {
            section.addEventListener('click', () => {
                activateSection(section.id);
            });
        });

        // Add click event listeners to nav links
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default anchor behavior

                // Get the target section from the data attribute
                const target = this.getAttribute('data-target');
                
                // Highlight and enlarge the corresponding section
                activateSection(target);

                // Optionally, scroll to the section
                document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
            });
        });
