Js for Homepage

<script>
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
    </script>



The JavaScript code controls the highlighting and scrolling behavior for sections and navigation links on the page:

activate Section Function: Highlights a section by adding an "active" class to it, visually enlarging it, and removing the highlight from other sections.

Section Click Events: Allows each section box to be highlighted when clicked by calling activateSection with the clicked section’s ID.

Navigation Link Click Events: Each navigation link, when clicked, prevents the default jump behavior, highlights the matching section, and smoothly scrolls to it on the page.

This enhances user experience by adding interactive transitions to the page.
