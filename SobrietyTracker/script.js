// Function to calculate the difference between two dates
function calculateDayDifference(startDate) {
    const currentDate = new Date();  // Get the current date
    const start = new Date(startDate);  // Convert the start date string to a Date object

    const differenceInMilliseconds = currentDate - start;  // Calculate the difference in milliseconds
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));  // Convert to days

    const remainingHours = Math.floor((differenceInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  // Calculate remaining hours

    return { days: differenceInDays, hours: remainingHours };
}

// Function to update the HTML with the current date and day difference
function updateTracker() {
    const startDate = document.getElementById("start-date").textContent;  // Get the start date from the HTML
    const currentDateElement = document.getElementById("current-date");
    const dayCountElement = document.getElementById("day-count");

    const currentDate = new Date();
    const formattedCurrentDate = currentDate.toLocaleDateString("en-GB");  // Format the date (dd/mm/yyyy)

    currentDateElement.textContent = formattedCurrentDate;  // Display the current date in the HTML

    const { days, hours } = calculateDayDifference(startDate);  // Get the day difference

    dayCountElement.textContent = `${days} days ${hours} hrs`;  // Update the day count display
}

// Run the updateTracker function when the page loads
window.onload = updateTracker;