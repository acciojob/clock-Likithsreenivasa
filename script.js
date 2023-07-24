// Function to update the timer display
function updateTimer() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour format to 12-hour format
    const hours12 = hours % 12 || 12;

    const formattedTime = `${month}/${day}/${year}, ${hours12}:${minutes}:${seconds} ${ampm}`;
    
    document.getElementById("time").textContent = formattedTime;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Call the function initially to avoid a 1-second delay
updateTimer();


