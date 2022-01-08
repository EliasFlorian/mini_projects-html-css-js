
// all the variables needed
const progressBar = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// functions

let currentActive = 1;


nextBtn.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    updateProgress()
})


prevBtn.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    updateProgress()
})

function updateProgress() {
    circles.forEach((circle, index) => {
        if(index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%'

    if(currentActive === 1) {
        prevBtn = true
    } else if(currentActive === circles.length) {
        nextBtn.disabled = ture
    } else {
        prevBtn.disabled = false
        nextBtn.disabled = false
    }
}