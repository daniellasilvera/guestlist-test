document.addEventListener('DOMContentLoaded', function () {
    fetch('data/guestList.json')
        .then(response => response.json())
        .then(data => {
            const guestList = data.guestList;
            const guestListElement = document.getElementById('guestList');

            guestList.forEach(guest => {
                const listItem = document.createElement('li');
                listItem.textContent = `${guest.guestName} (${guest.emailAddress}) - Plus One: ${guest.plusOneName}, Children: ${guest.childrenNames}`;
                guestListElement.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching guest list:', error));
});
