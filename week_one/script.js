// Create an array to hold the event objects
const events = [
  {
    title: "Workshop on Web Development",
    date: new Date("2023-08-25T14:00:00"),
    location: "Virtual",
    attendees: new Set(["Alice", "Bob", "Charlie"])
  },
  {
    title: "Conference on JavaScript Frameworks",
    date: new Date("2023-08-27T09:30:00"),
    location: "City Convention Center",
    attendees: new Set(["David", "Eve", "Frank", "Grace"])
  },
  {
    title: "Tech Meetup: AI and JavaScript",
    date: new Date("2023-09-18T18:00:00"),
    location: "Tech Hub Co-working Space",
    attendees: new Set(["Hannah", "Isaac", "Julia"])
  }
  
];

// Print out the event details
events.forEach(event => 
    {
  console.log("Title:", event.title);
  console.log("Date:", event.date.toISOString());
  console.log("Location:", event.location);
  console.log("Attendees:", Array.from(event.attendees).join(", "));
  console.log("\n"); // Add a line break for separation
});

const now = new Date();

const upcomingEvents = events.filter(event => {
  const timeDifference = event.date - now;
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
  return daysDifference >= 0 && daysDifference <= 7;
});

const upcomingEventDetails = upcomingEvents.map(event => {
  return {
    title: event.title,
    date: event.date.toISOString(),
    location: event.location,
    attendees: Array.from(event.attendees)
  };
});

console.log("Upcoming Events in the Next 7 Days:");
console.log(upcomingEventDetails);


// Create a WeakMap to store the event organizers
const eventOrganizers = new Map();

// Set the organizer information for each event
eventOrganizers.set(events[0].title, "John Doe");
eventOrganizers.set(events[1].title, "Jane Smith");
eventOrganizers.set(events[2].title, "Michael Johnson");

// Retrieve and display the organizer for each event
events.forEach(event => {
  const organizer = eventOrganizers.get(event.title);
  console.log(`Event: ${event.title}, Organizer: ${organizer}`);
  console.log("\n");
},
);

// Function to display events in a table format

  console.table(events);
  console.log("\n");
  
// Function to add a new attendee to an event
function addAttendeeToEvent(eventTitle, attendeeName) {
    const event = events.find(event => event.title === eventTitle);
  
    if (event) {
      event.attendees.add(attendeeName);
      console.log(`${attendeeName} has been added to ${eventTitle}. New attendees: ${Array.from(event.attendees).join(', ')}`);
    } else {
      console.log(`Event with title "${eventTitle}" not found.`);
    }console.log("\n");
  }
  
  // Call the function to add an attendee to an event
  addAttendeeToEvent("Workshop on Web Development", "Diana");

  // Function to add a custom toJSON method to Date objects
function addFormattedDateToJSON() {
    Date.prototype.toJSON = function () {
      return this.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    };
  }
  
  // Function to convert the event array to a JSON string with custom formatted dates
  function convertEventsToJSONWithFormattedDate(events) {
    addFormattedDateToJSON();
  
    const eventsWithFormattedDate = events.map(event => {
      const eventCopy = { ...event };
      eventCopy.formattedDate = event.date;
      return eventCopy;
    });
  
    return JSON.stringify(eventsWithFormattedDate, null, 2); // Use 2 spaces for indentation
  }
  
  // Call the function to convert events to JSON with formatted dates
  const eventsJSON = convertEventsToJSONWithFormattedDate(events);
  console.log(eventsJSON);


  // Get the first event object from the array
const firstEvent = events[0];

// Display properties using Object.keys()
const eventProperties = Object.keys(firstEvent);
console.log("Properties of the first event:", eventProperties);

// Display values using Object.values()
const eventValues = Object.values(firstEvent);
console.log("Values of the first event:", eventValues);

// Display properties and values using Object.entries()
const eventEntries = Object.entries(firstEvent);
console.log("Properties and values of the first event:");
eventEntries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

events.forEach(event => {
  console.log("Title:", event.title);
  console.log("Date:", event.date.toISOString().slice(0, 10)); // Format date as "YYYY-MM-DD"
  console.log("-----------------------");
});


// Function to delete an event by title
function deleteEventByTitle(title) {
  const eventIndex = events.findIndex(event => event.title === title);

  if (eventIndex !== -1) {
    events.splice(eventIndex, 1);
    console.log(`Event "${title}" has been deleted.`);
  } else {
    console.log(`Event "${title}" not found.`);
  }
}

// Call the function to delete an event by title
deleteEventByTitle("Conference on JavaScript Frameworks");

// Display the updated events array
console.log("Updated Events Array:");
console.log(events);


const eventWithMostAttendees = events.reduce((maxEvent, currentEvent) => {
  if (currentEvent.attendees.size > maxEvent.attendees.size) {
    return currentEvent;
  } else {
    return maxEvent;
  }
}, events[0]);

console.log("Event with the most attendees:");
console.log(eventWithMostAttendees);

  