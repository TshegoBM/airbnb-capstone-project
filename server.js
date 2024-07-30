const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express(); //Initializes the app
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
const dbURI =
  "mongodb+srv://motsuenyanetshegofatso:ZuwFnI3UcvuRi8K9@cluster1.wteqevk.mongodb.net/airbnbfunctional?retryWrites=true&w=majority";

mongoose.connect(dbURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

// Schema and Model Definitions

//Hotels schema and model
const hotelsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const Hotel = mongoose.model("Hotel", hotelsSchema);

// Location schema and model
const locationSchema = new mongoose.Schema(
  {
    img: String,
    title: String,
    locationName: String,
    rooms: String,
    amenities: String,
    rating: Number,
    reviews: String,
    price: String,
  },
  { collection: "locations" }
);

const Location = mongoose.model("Location", locationSchema);

// Listing schema and model
const listingSchema = new mongoose.Schema(
  {
    img: String,
    title: String,
    description: String,
    rooms: String,
    amenities: String,
    rating: Number,
    price: String,
    locationName: String,
  },
  { collection: "listings" }
);

const Listing = mongoose.model("Listing", listingSchema);

//Routes

//Fetching hotel locations from the database
app.get("/api/hotels", async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Route to get locations
app.get("/locations", async (req, res) => {
  try {
    console.log("Fetching locations from database...");
    const locations = await Location.find();
    console.log("Locations fetched:", locations);
    res.status(200).json(locations);
  } catch (err) {
    console.error("Error fetching locations:", err);
    res.status(500).json({ message: "Server error", error: err });
  }
});

// Route to add a new location
app.post("/locations", async (req, res) => {
  const { img, locationName, rooms, amenities, rating, reviews, price } =
    req.body;

  try {
    const newLocation = new Location({
      img,
      locationName,
      rooms,
      amenities,
      rating,
      reviews,
      price,
    });
    await newLocation.save();
    res.status(201).json(newLocation);
  } catch (err) {
    console.error("Error adding new location:", err);
    res.status(500).json({ message: "Server error", error: err });
  }
});


// Route to get listings
app.get("/listings", async (req, res) => {
  const locationName = req.query.locationName;
  console.log("Location Name:", locationName);

  if (!locationName) {
    return res.status(400).json({ message: "Location name is required" });
  }

  try {
    const listings = await Listing.find({ locationName: locationName });
    console.log("Listings fetched:", listings);
    res.json(listings);
  } catch (error) {
    console.error("Error fetching listings:", err);
    res.status(500).json({ message: "Error fetching listings" });
  }
});

app.get("/location-names", async (req, res) => {
  try {
    const locations = await Listing.distinct("locationName");
    res.json(locations);
  } catch (err) {
    console.error("Error fetching location names:", err);
    res.status(500).json({ message: "Server error", error: err });
  }
});

// Route to add a new listing
app.post("/listings", async (req, res) => {
  const {
    img,
    title,
    description,
    rooms,
    amenities,
    rating,
    price,
    locationName,
  } = req.body;

  try {
    const newListing = new Listing({
      img,
      title,
      description,
      rooms,
      amenities,
      rating,
      price,
      locationName,
    });
    await newListing.save();
    res.status(201).json(newListing);
  } catch (err) {
    console.error("Error adding new listing:", err);
    res.status(500).json({ message: "Server error", error: err });
  }
});

// Route to get listing details by ID
app.get("/location-details/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const listing = await Listing.findById(id); // Use Listing model to find by ID
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }
    res.status(200).json(listing); // Return the listing object
  } catch (err) {
    console.error("Error fetching listing details:", err);
    res.status(500).json({ message: "Server error", error: err });
  }
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Login logic...
  res.json({ message: "Login successful" });
});

// Start the server
app.listen(3001, () => console.log("Server running on port 3001"));
