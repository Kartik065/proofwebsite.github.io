// Toggle script Starts Here

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', function () {
    navbarLinks.style.backgroundColor = 'green';
    navbarLinks.classList.toggle('active');
});

// Toggle script Ends Here

// Slider script starts here

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 3500;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};
next.addEventListener('click', function () {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', function () {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}

// Slider script ends here

// customer review script starts here

const myreview = [
    {
        id: 1,
        name: "Andrew martin",
        img: "images/team-1.jpg",
        info: "I was passing through and saw the sign from the road and I could not believe my eyes. This place is tucked into one of those little malls ",

    },

    {
        id: 2,
        name: "Shawaz hussain",
        img: "images/team-2.jpg",
        info: "This place is great! Awesome salads and the most adorable little pastry bites. Cute, colorful, relaxed atmosphere. Oh, and great tea selection",

    },
    {
        id: 3,
        name: "Joshy Antony",
        img: "images/team-3.jpg",
        info: "This place is really good. I had the Kibbie combo, 6 different types. I choose beef, chicken, potato, and pumpkin. They were all delicious. Though my favorites were the beef and the potato.",

    },
    {
        id: 4,
        name: "Matilda",
        img: "images/team-4.jpg",
        info: "Consumers use reviews to reduce the likelihood that a purchase will lead to disappointment or, at the very least, reduce the severity of a potential disappointment.",

    },

]



const image = document.querySelector('#cust-img');
const name = document.querySelector('#name');
const info = document.querySelector('#info');
const nextButton = document.querySelector('.btn-next');
const prevButton = document.querySelector('.btn-prev');

let currentReview = 0;
window.addEventListener("DOMContentLoaded", function () {
    showReview();
})

function showReview() {
    const review = myreview[currentReview];
    image.src = review.img;
    name.textContent = review.name;
    info.textContent = review.info;
}


nextButton.addEventListener('click', function () {
    currentReview++;
    if (currentReview > myreview.length - 1) {
        currentReview = 0;
    }
    showReview();
})

prevButton.addEventListener('click', function () {
    currentReview--;
    if (currentReview < 0) {
        currentReview = myreview.length - 1;
    }
    showReview();
})
// customer review script ends here