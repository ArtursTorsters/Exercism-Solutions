export const meetup = (year, month, descriptor, dayOfWeek) => {
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const teenthDays = [13, 14, 15, 16, 17, 18, 19];

    // Start with the first day of the month
    const date = new Date(year, month - 1, 1);
    
    // Array to store dates that match the given day of the week
    const dates = [];

    // Loop through the month
    while (date.getMonth() === month - 1) {
        // Check if the day of the week matches the desired day
        if (weekDays[date.getDay()] === dayOfWeek) {
            // If it matches, add the date to the array
            dates.push(new Date(date));
        }
        // Move to the next day
        date.setDate(date.getDate() + 1);
    }

    // Depending on the descriptor, return the appropriate date
    switch (descriptor) {
        case "first":
            return dates[0]; // Return the first date
        case "second":
            return dates[1]; // Return the second date
        case "third":
            return dates[2]; // Return the third date
        case "fourth":
            return dates[3]; // Return the fourth date
        case "last":
            return dates[dates.length - 1]; // Return the last date
        case "teenth":
            // For "teenth", find the date that falls within the teenth days array
            return dates.find((date) => teenthDays.includes(date.getDate()));
        default:
            // Throw an error for unknown descriptor
            throw new Error("Unknown descriptor");
    }
};
