 // Hamburger menu toggle
        const hamburger = document.getElementById('hamburger-menu');
        const navList = document.getElementById('nav-list');

        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navList.classList.toggle('active');
        });
        // Optional: close menu when a link is clicked (mobile UX)
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
            });
        });