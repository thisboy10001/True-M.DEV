   // function toggleMenu() {
        //     var menuContent = document.getElementById('menuContent');
        //     if (menuContent.style.display === 'block') {
        //         menuContent.style.display = 'none';
        //     } else {
        //         menuContent.style.display = "block";
        //     }
        // }

        function toggleMenu() {
            var menuContent = document.getElementById('menuContent');
            menuContent.classList.toggle('show');
        }