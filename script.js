document.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.getElementById('eat-btn');
    const btn2 = document.getElementById('drink-btn');
    const content1 = document.getElementById('eat');
    const content2 = document.getElementById('drink');


    btn1.addEventListener('click', () => {
        content1.style.display = 'block'; 
        content2.style.display = 'none';  
    });

    
    btn2.addEventListener('click', () => {
        content1.style.display = 'none';  
        content2.style.display = 'block'; 
    });
});
document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); 
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth', 
                block: 'start'      
            });
        }
    });
});
document.getElementById('msg').addEventListener('click', function () {
    // Get the form values
    const name = document.getElementById('NAME').value;
    const people = document.getElementById('people').value;
    const appointment = document.getElementById('appointment').value;
    const message = document.getElementById('messageg').value;

    // Validate form values (optional)
    if (!name || !people || !appointment || !message) {
        alert('Please fill in all fields before submitting.');
        return;
    }

    // Create new page content
    const newPageContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Form Submission</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                }
                h1 {
                    color: #333;
                }
                p {
                    margin: 5px 0;
                }
            </style>
        </head>
        <body>
            <h1>Submitted Details</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>People:</strong> ${people}</p>
            <p><strong>Date:</strong> ${appointment}</p>
            <p><strong>Message:</strong> ${message}</p>
        </body>
        </html>
    `;

    // Open a new window or tab and write the content
    const newWindow = window.open();
    newWindow.document.open();
    newWindow.document.write(newPageContent);
    newWindow.document.close();
});
