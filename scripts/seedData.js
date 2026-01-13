import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/database.js';
import Crop from '../models/Crop.js';
import Scheme from '../models/Scheme.js';
import MarketPrice from '../models/MarketPrice.js';
import Job from '../models/Job.js';
import Video from '../models/Video.js';

dotenv.config();

const seedData = async () => {
  try {
    await connectDB();

    // Clear existing data (optional - comment out if you want to keep existing data)
    // await Crop.deleteMany({});
    // await Scheme.deleteMany({});
    // await MarketPrice.deleteMany({});
    // await Job.deleteMany({});
    // await Video.deleteMany({});

    // Seed Crops
    const crops = [
      // Kharif crops
      {
        name: "Paddy",
        nameTamil: "நெல்",
        season: "kharif",
        soil: "Clay / Loamy",
        water: "High",
        days: "120–150",
        gains: "Adds organic matter",
        next: "Wheat / Pulses",
        tip: "Avoid water stress during tillering"
      },
      {
        name: "Maize",
        nameTamil: "சோளம்",
        season: "kharif",
        soil: "Well drained",
        water: "Medium",
        days: "90–110",
        gains: "Improves soil tilth",
        next: "Potato / Pulses",
        tip: "Ensure weed control first 30 days"
      },
      {
        name: "Cotton",
        nameTamil: "பருத்தி",
        season: "kharif",
        soil: "Black soil",
        water: "Medium",
        days: "150–180",
        gains: "Deep root improves soil",
        next: "Groundnut",
        tip: "Avoid excess nitrogen"
      },
      {
        name: "Groundnut",
        nameTamil: "வேர்க்கடலை",
        season: "kharif",
        soil: "Sandy loam",
        water: "Low",
        days: "100–120",
        gains: "Fixes nitrogen",
        next: "Maize / Sorghum",
        tip: "Good drainage needed"
      },
      {
        name: "Soybean",
        nameTamil: "சோயாபீன்",
        season: "kharif",
        soil: "Clay loam",
        water: "Medium",
        days: "90–110",
        gains: "High nitrogen fixing",
        next: "Wheat",
        tip: "Do not waterlog"
      },
      // Rabi crops
      {
        name: "Wheat",
        nameTamil: "கோதுமை",
        season: "rabi",
        soil: "Loam",
        water: "Medium",
        days: "120–140",
        gains: "Moderate residue",
        next: "Paddy / Maize",
        tip: "Avoid late sowing"
      },
      {
        name: "Mustard",
        nameTamil: "கடுகு",
        season: "rabi",
        soil: "Loam",
        water: "Low",
        days: "100–120",
        gains: "Improves structure",
        next: "Pulses",
        tip: "Needs cool dry weather"
      },
      {
        name: "Peas",
        nameTamil: "பட்டாணி",
        season: "rabi",
        soil: "Light loam",
        water: "Low",
        days: "90–110",
        gains: "Fixes nitrogen",
        next: "Wheat / Maize",
        tip: "Avoid water stagnation"
      },
      {
        name: "Garlic",
        nameTamil: "வெள்ளை பூண்டு",
        season: "rabi",
        soil: "Loose soil",
        water: "Medium",
        days: "150–180",
        gains: "Light feeder",
        next: "Vegetables",
        tip: "Needs well aerated soil"
      },
      // Summer crops
      {
        name: "Watermelon",
        nameTamil: "தர்பூஸ்",
        season: "summer",
        soil: "Sandy loam",
        water: "Medium",
        days: "80–95",
        gains: "Covers soil surface",
        next: "Pulses",
        tip: "Needs high sunlight"
      },
      {
        name: "Cowpea",
        nameTamil: "தட்டைப் பயறு",
        season: "summer",
        soil: "Any",
        water: "Low",
        days: "70–90",
        gains: "High nitrogen fixing",
        next: "Cereals",
        tip: "Very heat tolerant"
      },
      {
        name: "Green gram",
        nameTamil: "பாசிப்பயறு",
        season: "summer",
        soil: "Light soil",
        water: "Low",
        days: "60–75",
        gains: "Restores soil",
        next: "Wheat",
        tip: "Good for drylands"
      },
      {
        name: "Sesame",
        nameTamil: "எள்ளு",
        season: "summer",
        soil: "Well drained",
        water: "Low",
        days: "90–110",
        gains: "Deep roots loosen soil",
        next: "Vegetables",
        tip: "Avoid heavy rains"
      }
    ];

    // Seed Schemes
    const schemes = [
      {
        title: "PM-Kisan",
        titleTamil: "PM-கிசான்",
        description: "₹6000 yearly income support",
        descriptionTamil: "ஆண்டுக்கு ரூ.6000 உதவி",
        url: "https://pmkisan.gov.in",
        category: "subsidy",
        icon: "🌾"
      },
      {
        title: "PMFBY (Crop Insurance)",
        titleTamil: "PMFBY (பயிர் காப்பீடு)",
        description: "Insurance for crop loss, Low premium",
        descriptionTamil: "பயிர் சேதத்திற்கு காப்பீடு, பிரீமியம் குறைவு",
        url: "https://pmfby.gov.in",
        category: "insurance",
        icon: "🛡"
      },
      {
        title: "Soil Health Card",
        titleTamil: "மண் சுகாதார அட்டை",
        description: "Soil test & fertilizer advice",
        descriptionTamil: "மண் பரிசோதனை & உர பரிந்துரை",
        url: "https://soilhealth.dac.gov.in",
        category: "other",
        icon: "🌱"
      },
      {
        title: "Micro Irrigation (PMKSY)",
        titleTamil: "நுண்ணீர்ப்பாசனம் (PMKSY)",
        description: "Drip & sprinkler subsidy",
        descriptionTamil: "டிரிப் & ஸ்பிரிங்க்லர் உதவி",
        url: "https://pmksy.gov.in",
        category: "subsidy",
        icon: "💧"
      },
      {
        title: "Organic Farming (PKVY)",
        titleTamil: "இயற்கை விவசாயம் (PKVY)",
        description: "Support for organic farming",
        descriptionTamil: "இயற்கை விவசாய ஊக்கத்தொகை",
        url: "https://pgsindia-ncof.gov.in",
        category: "subsidy",
        icon: "🌍"
      },
      {
        title: "Kisan Credit Card (KCC)",
        titleTamil: "கிசான் கிரெடிட் கார்டு (KCC)",
        description: "Low interest crop loan",
        descriptionTamil: "குறைந்த வட்டி கடன்",
        url: "https://www.myscheme.gov.in",
        category: "loan",
        icon: "🏦"
      }
    ];

    // Seed Market Prices
    const marketPrices = [
      {
        crop: "Paddy",
        district: "Chennai",
        minPrice: 18,
        maxPrice: 26,
        weeklyTrend: [
          { price: 20, date: new Date() },
          { price: 22, date: new Date() },
          { price: 21, date: new Date() },
          { price: 23, date: new Date() },
          { price: 24, date: new Date() },
          { price: 25, date: new Date() },
          { price: 26, date: new Date() }
        ]
      },
      {
        crop: "Paddy",
        district: "Madurai",
        minPrice: 17,
        maxPrice: 25
      },
      {
        crop: "Banana",
        district: "Chennai",
        minPrice: 12,
        maxPrice: 18
      },
      {
        crop: "Groundnut",
        district: "Chennai",
        minPrice: 50,
        maxPrice: 72
      }
    ];

    // Seed Jobs
    const jobs = [
      {
        title: "Agriculture Extension Assistant",
        education: "Diploma / Degree in Agriculture",
        age: "No age limit (Govt rules apply)",
        pay: "₹15,000 – ₹30,000",
        type: "Government / NGO",
        category: "edu",
        isActive: true
      },
      {
        title: "Farming Trainer / Field Instructor",
        education: "Any Degree / Agriculture Knowledge",
        age: "18+",
        pay: "₹12,000 – ₹25,000",
        type: "Private / Training Centres",
        category: "edu",
        isActive: true
      },
      {
        title: "Organic Farming Staff",
        education: "No education required",
        age: "18+",
        pay: "₹8,000 – ₹18,000",
        type: "Farms / Organic Units",
        category: "gen",
        isActive: true
      }
    ];

    // Seed Videos
    const videos = [
      {
        title: "Intro to Natural Farming",
        titleTamil: "இயற்கை விவசாயம் அறிமுகம்",
        link: "https://www.youtube.com/watch?v=G0B-m7vV4fA",
        embedLink: "https://www.youtube.com/embed/G0B-m7vV4fA",
        category: "farming"
      },
      {
        title: "Organic Fertilizer Guide",
        titleTamil: "உரம் தயாரிப்பு",
        link: "https://www.youtube.com/watch?v=q6ioP1L1QZI",
        embedLink: "https://www.youtube.com/embed/q6ioP1L1QZI",
        category: "fertilizer"
      },
      {
        title: "Water Saving Methods",
        titleTamil: "நீர் சேமிப்பு முறைகள்",
        link: "https://www.youtube.com/watch?v=VI5jz7wKZ2o",
        embedLink: "https://www.youtube.com/embed/VI5jz7wKZ2o",
        category: "irrigation"
      }
    ];

    // Insert data
    await Crop.insertMany(crops);
    console.log('✅ Crops seeded');

    await Scheme.insertMany(schemes);
    console.log('✅ Schemes seeded');

    await MarketPrice.insertMany(marketPrices);
    console.log('✅ Market prices seeded');

    await Job.insertMany(jobs);
    console.log('✅ Jobs seeded');

    await Video.insertMany(videos);
    console.log('✅ Videos seeded');

    console.log('🎉 All data seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
