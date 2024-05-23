document.addEventListener("DOMContentLoaded", function() {
    // Handle form submission for adding events
    const addEventForm = document.getElementById('add-event-form');
    if (addEventForm) {
        addEventForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const eventName = document.getElementById('event-name').value;
            const eventDate = document.getElementById('event-date').value;
            const eventDescription = document.getElementById('event-description').value;
            
            // Save event to localStorage
            let events = JSON.parse(localStorage.getItem('events')) || [];
            events.push({ name: eventName, date: eventDate, description: eventDescription });
            localStorage.setItem('events', JSON.stringify(events));
            
            // Redirect to events page
            window.location.href = 'events.html';
        });
    }

    // Display events on events.html
    const eventList = document.getElementById('event-list');
    if (eventList) {
        let events = JSON.parse(localStorage.getItem('events')) || [];
        events.forEach(event => {
            let eventDiv = document.createElement('div');
            eventDiv.classList.add('event');
            eventDiv.innerHTML = `<h3>${event.name}</h3><p>${event.date}</p><p>${event.description}</p>`;
            eventList.appendChild(eventDiv);
        });
    }
});
