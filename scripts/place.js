// place.js

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Thank you for your message, ${name}! We will get back to you at ${email}.`);
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Fetch Nigerian weather data
    const weatherInfo = document.getElementById('weather-info');
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your OpenWeatherMap API key
    const city = 'Lagos'; // Example city

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},ng&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            const description = data.weather[0].description;
            weatherInfo.textContent = `Current weather in ${city}: ${temp}°C, ${description}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.textContent = 'Unable to load weather data.';
        });
});


