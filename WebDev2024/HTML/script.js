// JavaScript (script.js)
document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownButton.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    // Optional: Close the dropdown if clicking outside of it
    window.addEventListener('click', function(event) {
        if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});

function filterCourses(courseType) {
    const courses = document.querySelectorAll('.course');
    courses.forEach(course => {
        if (courseType === 'All' || course.querySelector('.course-type').textContent.includes(courseType)) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
}

function searchCourses() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const courses = document.querySelectorAll('.course');
    courses.forEach(course => {
        const courseTitle = course.querySelector('h3').textContent.toLowerCase();
        if (courseTitle.includes(searchTerm)) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
}

