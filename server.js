const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize the app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
const dbURI = 'mongodb+srv://motsuenyanetshegofatso:ZuwFnI3UcvuRi8K9@cluster1.wteqevk.mongodb.net/airbnbfunctional?retryWrites=true&w=majority';
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

// Location schema and model
const locationSchema = new mongoose.Schema({
  img: String,
  locationName: String,
  locationDescription: String,
  numberOfStays: String,
  highlights: String
}, { collection: 'locations' });

const Location = mongoose.model('Location', locationSchema);

// Listing schema and model
const listingSchema = new mongoose.Schema({
  img: String,
  title: String,
  description: String,
  rooms: String,
  amenities: String,
  rating: Number,
  price: String
}, { collection: 'listings' });

const Listing = mongoose.model('Listing', listingSchema);

// Route to get locations
app.get('/locations', async (req, res) => {
  try {
    console.log('Fetching locations from database...');
    const locations = await Location.find();
    console.log('Locations fetched:', locations);
    res.status(200).json(locations);
  } catch (err) {
    console.error('Error fetching locations:', err);
    res.status(500).json({ message: 'Server error', error: err });
  }
});

// Route to add a new location
app.post('/locations', async (req, res) => {
  const { img, locationName, locationDescription, numberOfStays, highlights } = req.body;

  try {
    const newLocation = new Location({ img, locationName, locationDescription, numberOfStays, highlights });
    await newLocation.save();
    res.status(201).json(newLocation);
  } catch (err) {
    console.error('Error adding new location:', err);
    res.status(500).json({ message: 'Server error', error: err });
  }
});

// Route to get listings
app.get('/listings', async (req, res) => {
  const { locationName } = req.params;

  try {
    console.log(`Fetching listings for location: ${locationName}`);
    const listings = await Listing.find({ locationName });
    console.log('Listings fetched:', listings);
    res.status(200).json(listings);
  } catch (err) {
    console.error('Error fetching listings:', err);
    res.status(500).json({ message: 'Server error', error: err });
  }
});

// Route to add a new listing
app.post('/listings', async (req, res) => {
  const { img, title, description, rooms, amenities, rating, price } = req.body;

  try {
    const newListing = new Listing({ img, title, description, rooms, amenities, rating, price });
    await newListing.save();
    res.status(201).json(newListing);
  } catch (err) {
    console.error('Error adding new listing:', err);
    res.status(500).json({ message: 'Server error', error: err });
  }
});

// Start the server
app.listen(3001, () => console.log('Server running on port 3001'));
