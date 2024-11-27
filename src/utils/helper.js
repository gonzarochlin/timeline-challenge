// Helper to get all dates in range
export const getDateRange = (startDate, endDate) => {
    const dates = [];
    let currentDate = new Date(startDate);
    const stopDate = new Date(endDate);

    while (currentDate <= stopDate) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates.map((date) => date.toISOString().split("T")[0]); // Format YYYY-MM-DD
};

// Get the first start date
export const getMinDate = (events) => {
    const sortedEvents = [...events].sort(
        (a, b) => new Date(a.start) - new Date(b.start)
    )
    return sortedEvents?.[0].start
};

// Get the latest end date
export const getMaxDate = (events) => {
    const endDates = events.map(event => event.end);
    endDates.sort((a, b) => new Date(b) - new Date(a));
    return endDates?.[0];
};