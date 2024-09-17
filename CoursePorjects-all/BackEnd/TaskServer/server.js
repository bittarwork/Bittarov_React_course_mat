const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 5000;

// Data model with upcoming date
let events = [
    {
        userId: 1,
        id: 1,
        title: 'To make a server about: Task.',
        completed: false,
        date: '2024-10-01T10:00:00Z'
    },
    {
        userId: 2,
        id: 2,
        title: 'To make a front-end Application for it.',
        completed: false,
        date: '2024-10-02T15:00:00Z'
    },
];

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));

// Get all events
app.get('/events', (req, res) => {
    res.json(events);
});

// Get a specific event by ID
app.get('/events/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const event = events.find(e => e.id === id);
    if (event) {
        res.json(event);
    } else {
        res.status(404).send('Event not found');
    }
});

// Add a new event
app.post('/events', (req, res) => {
    const newEvent = req.body;
    newEvent.id = events.length ? events[events.length - 1].id + 1 : 1;
    if (!newEvent.date) {
        return res.status(400).send('Date is required');
    }
    if (!newEvent.title) {
        return res.status(400).send('Title is required');
    }
    events.push(newEvent);
    res.status(201).json(newEvent);
});

// Update a specific event by ID
app.put('/events/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const updatedEvent = req.body;
    const index = events.findIndex(e => e.id === id);
    if (index !== -1) {
        if (updatedEvent.date === undefined) {
            updatedEvent.date = events[index].date; // Retain current date if new date is not provided
        }
        if (updatedEvent.title === undefined) {
            updatedEvent.title = events[index].title; // Retain current title if new title is not provided
        }
        events[index] = { ...events[index], ...updatedEvent };
        res.json(events[index]);
    } else {
        res.status(404).send('Event not found');
    }
});

// Delete a specific event by ID
app.delete('/events/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = events.findIndex(e => e.id === id);
    if (index !== -1) {
        events.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Event not found');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
