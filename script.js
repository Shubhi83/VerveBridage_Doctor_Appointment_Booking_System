function showForm() {
    document.getElementById('form-container').style.display = 'block';
}

document.getElementById('create-account-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('message').style.display = 'block';
});

///


        function showDoctor() {
    document.getElementById('doctor-container').style.display = 'flex';
}

function showForm() {
    document.getElementById('form-container').style.display = 'block';
}

document.getElementById('aboutButton').addEventListener('click', function() {
    window.location.href = 'about.html';
});

document.getElementById('alldoctors').addEventListener('click', function() {
    window.location.href = 'All Doctors.html';
});

document.getElementById('BookAppionment').addEventListener('click', function() {
    window.location.href = 'Book_Appionment.html';
});

document.getElementById('contact').addEventListener('click', function() {
    window.location.href = 'contact.html';
});

document.getElementById('homes').addEventListener('click', function() {
    window.location.href = 'Index1.html';
});















/*document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Collect form data
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    // Redirect to the next page with form data
    const queryString = new URLSearchParams(data).toString();
    window.location.href = 'nextpage.html?' + queryString;
});*/






















