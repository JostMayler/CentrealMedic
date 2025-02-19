/*banner*/
let currentIndex = 0;
        const images = document.querySelectorAll('.banner img');
        const totalImages = images.length;
        let interval;

        function showNextImage() {
            images[currentIndex].classList.remove('active');
            images[currentIndex].classList.add('previous');
            currentIndex = (currentIndex + 1) % totalImages;
            images[currentIndex].classList.add('active');
            images[currentIndex].classList.remove('previous');
        }

        function showPreviousImage() {
            images[currentIndex].classList.remove('active');
            images[currentIndex].classList.add('previous');
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            images[currentIndex].classList.add('active');
            images[currentIndex].classList.remove('previous');
        }

        function startSlideshow() {
            interval = setInterval(showNextImage, 10000);
        }

        function stopSlideshow() {
            clearInterval(interval);
        }

        document.getElementById('banner').addEventListener('mouseover', stopSlideshow);
        document.getElementById('banner').addEventListener('mouseout', startSlideshow);
        document.getElementById('next').addEventListener('click', showNextImage);
        document.getElementById('prev').addEventListener('click', showPreviousImage);

        startSlideshow();
 /**/