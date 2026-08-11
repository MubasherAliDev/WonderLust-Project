const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
      filename: "listingimage",
    },
    price: 1500, location: "Malibu", country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for business travelers and urban explorers.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      filename: "listingimage",
    },
    price: 2200, location: "New York", country: "United States",
  },
  {
    title: "Luxury Villa with Pool",
    description: "Experience ultimate luxury in this stunning villa with private pool, lush gardens, and breathtaking mountain views.",
    image: {
      url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800",
      filename: "listingimage",
    },
    price: 8000, location: "Bali", country: "Indonesia",
  },
  {
    title: "Charming Mountain Cabin",
    description: "Unwind in this peaceful wooden cabin surrounded by pine forests. Ideal for hiking lovers and nature enthusiasts.",
    image: {
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800",
      filename: "listingimage",
    },
    price: 1800, location: "Aspen", country: "United States",
  },
  {
    title: "Seafront Penthouse Suite",
    description: "Live like royalty in this top-floor penthouse with panoramic sea views, modern interiors, and rooftop terrace.",
    image: {
      url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      filename: "listingimage",
    },
    price: 12000, location: "Dubai", country: "UAE",
  },
  {
    title: "Rustic Farmhouse Retreat",
    description: "Enjoy the countryside in this authentic farmhouse with open fields, barn, and traditional decor throughout.",
    image: {
      url: "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800",
      filename: "listingimage",
    },
    price: 950, location: "Tuscany", country: "Italy",
  },
  {
    title: "Tropical Beach House",
    description: "Wake up to white sand beaches steps from your door. Perfect for a dream island vacation with family.",
    image: {
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
      filename: "listingimage",
    },
    price: 3500, location: "Phuket", country: "Thailand",
  },
  {
    title: "Historic City Apartment",
    description: "Stay in the old town in this beautifully restored apartment with exposed brick walls and antique furnishings.",
    image: {
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800",
      filename: "listingimage",
    },
    price: 1300, location: "Prague", country: "Czech Republic",
  },
  {
    title: "Desert Glamping Tent",
    description: "A unique glamping experience under the stars in the heart of the desert. Luxury meets adventure.",
    image: {
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800",
      filename: "listingimage",
    },
    price: 2800, location: "Marrakech", country: "Morocco",
  },
  {
    title: "Lakeside Wooden Chalet",
    description: "A picture-perfect chalet right on the lake. Enjoy kayaking, fishing, and stunning alpine scenery.",
    image: {
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
      filename: "listingimage",
    },
    price: 4200, location: "Interlaken", country: "Switzerland",
  },
  {
    title: "Cliffside Ocean Villa",
    description: "Perched on dramatic cliffs, this villa offers unmatched ocean views and a private infinity pool.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      filename: "listingimage",
    },
    price: 9500, location: "Santorini", country: "Greece",
  },
  {
    title: "Cozy Studio in Paris",
    description: "A charming Parisian studio near the Eiffel Tower with classic French decor for a romantic getaway.",
    image: {
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
      filename: "listingimage",
    },
    price: 1700, location: "Paris", country: "France",
  },
  {
    title: "Jungle Treehouse Escape",
    description: "Sleep among the treetops in this eco-friendly treehouse surrounded by tropical jungle and exotic wildlife.",
    image: {
      url: "https://images.unsplash.com/photo-1540541338537-1220bdf036b3?w=800",
      filename: "listingimage",
    },
    price: 2100, location: "Costa Rica", country: "Costa Rica",
  },
  {
    title: "Ski Chalet in the Alps",
    description: "Hit the slopes from your doorstep in this cozy alpine chalet with fireplace and hot tub.",
    image: {
      url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      filename: "listingimage",
    },
    price: 6000, location: "Chamonix", country: "France",
  },
  {
    title: "Secluded Island Bungalow",
    description: "Your own private paradise — an overwater bungalow with direct lagoon access and coral reefs.",
    image: {
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800",
      filename: "listingimage",
    },
    price: 11000, location: "Maldives", country: "Maldives",
  },
  {
    title: "Urban Rooftop Apartment",
    description: "A chic rooftop apartment with panoramic city views and access to a shared rooftop lounge.",
    image: {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      filename: "listingimage",
    },
    price: 2500, location: "Barcelona", country: "Spain",
  },
  {
    title: "Heritage Haveli Stay",
    description: "Experience royal Rajasthani culture in this stunning haveli with carved archways and traditional courtyard.",
    image: {
      url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800",
      filename: "listingimage",
    },
    price: 1100, location: "Jaipur", country: "India",
  },
  {
    title: "Vineyard Cottage in Bordeaux",
    description: "Stay in the middle of a working vineyard with wine tastings at your door and countryside views.",
    image: {
      url: "https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=800",
      filename: "listingimage",
    },
    price: 2000, location: "Bordeaux", country: "France",
  },
  {
    title: "Minimalist Tokyo Apartment",
    description: "A sleek minimalist apartment in central Tokyo, walking distance to Shibuya and Shinjuku.",
    image: {
      url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
      filename: "listingimage",
    },
    price: 1900, location: "Tokyo", country: "Japan",
  },
  {
    title: "Safari Lodge in Kenya",
    description: "Fall asleep to the sounds of the savanna in this luxury safari lodge with game drives included.",
    image: {
      url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
      filename: "listingimage",
    },
    price: 7500, location: "Nairobi", country: "Kenya",
  },
  {
    title: "Scandinavian Forest Cabin",
    description: "A peaceful retreat in the Nordic forest with wood-fired sauna and northern lights views.",
    image: {
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
      filename: "listingimage",
    },
    price: 3200, location: "Rovaniemi", country: "Finland",
  },
  {
    title: "Colonial Mansion in Cartagena",
    description: "A grand colonial mansion in the walled city with colorful facades and rooftop pool.",
    image: {
      url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
      filename: "listingimage",
    },
    price: 4800, location: "Cartagena", country: "Colombia",
  },
  {
    title: "Houseboat on Dal Lake",
    description: "Float peacefully on the famous Dal Lake in a traditional Kashmiri houseboat with carved interiors.",
    image: {
      url: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800",
      filename: "listingimage",
    },
    price: 850, location: "Srinagar", country: "India",
  },
  {
    title: "Glass Igloo in Lapland",
    description: "Watch the northern lights from your bed in this stunning glass igloo in the Finnish wilderness.",
    image: {
      url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800",
      filename: "listingimage",
    },
    price: 5500, location: "Saariselkä", country: "Finland",
  },
  {
    title: "Boho Beach Bungalow",
    description: "A laid-back boho bungalow steps from the beach with hammocks and stunning sunsets.",
    image: {
      url: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=800",
      filename: "listingimage",
    },
    price: 1200, location: "Tulum", country: "Mexico",
  },
  {
    title: "Converted Barn in Cotswolds",
    description: "A beautifully converted stone barn in the English countryside with exposed beams and garden.",
    image: {
      url: "https://images.unsplash.com/photo-1464890100898-a385f744067f?w=800",
      filename: "listingimage",
    },
    price: 2700, location: "Cotswolds", country: "United Kingdom",
  },
  {
    title: "Poolside Villa in Mykonos",
    description: "A dazzling whitewashed villa with private pool overlooking the iconic Aegean Sea.",
    image: {
      url: "https://images.unsplash.com/photo-1601581975053-7c899da7347e?w=800",
      filename: "listingimage",
    },
    price: 10500, location: "Mykonos", country: "Greece",
  },
  {
    title: "Rio Apartment with Sea View",
    description: "A stunning apartment overlooking Copacabana Beach with modern decor and balcony.",
    image: {
      url: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800",
      filename: "listingimage",
    },
    price: 2300, location: "Rio de Janeiro", country: "Brazil",
  },
  {
    title: "Traditional Riad in Fes",
    description: "Immerse yourself in Moroccan culture in this authentic riad with mosaic tilework and rooftop.",
    image: {
      url: "https://images.unsplash.com/photo-1548018560-c7196cd07978?w=800",
      filename: "listingimage",
    },
    price: 1400, location: "Fes", country: "Morocco",
  },
  {
    title: "Lighthouse Keeper's Cottage",
    description: "Stay in a restored lighthouse cottage perched on the rugged coastline with Atlantic views.",
    image: {
      url: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800",
      filename: "listingimage",
    },
    price: 3100, location: "Cork", country: "Ireland",
  },
  {
    title: "Hillside Home in Positano",
    description: "A gorgeous hillside home on the Amalfi cliffs with sea terrace and lemon trees.",
    image: {
      url: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=800",
      filename: "listingimage",
    },
    price: 5800, location: "Positano", country: "Italy",
  },
  {
    title: "Capsule Suite in Singapore",
    description: "A futuristic capsule suite in central Singapore with smart tech and skyline views.",
    image: {
      url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800",
      filename: "listingimage",
    },
    price: 1600, location: "Singapore", country: "Singapore",
  },
  {
    title: "Outback Station Stay",
    description: "Experience authentic Australian outback life on a working cattle station with starry skies.",
    image: {
      url: "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=800",
      filename: "listingimage",
    },
    price: 1750, location: "Alice Springs", country: "Australia",
  },
  {
    title: "Canal House in Amsterdam",
    description: "A classic Dutch canal house with original wooden beams and views over the iconic canals.",
    image: {
      url: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=800",
      filename: "listingimage",
    },
    price: 2900, location: "Amsterdam", country: "Netherlands",
  },
  {
    title: "Eco Lodge in Amazon",
    description: "An eco-friendly jungle lodge in the Amazon rainforest with guided wildlife tours.",
    image: {
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
      filename: "listingimage",
    },
    price: 3300, location: "Manaus", country: "Brazil",
  },
  {
    title: "Penthouse in Manhattan",
    description: "A jaw-dropping Manhattan penthouse with Central Park views and luxury finishes throughout.",
    image: {
      url: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800",
      filename: "listingimage",
    },
    price: 25000, location: "New York", country: "United States",
  },
  {
    title: "Plantation House in Kerala",
    description: "A serene plantation bungalow surrounded by tea and spice estates in the misty hills of Kerala.",
    image: {
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800",
      filename: "listingimage",
    },
    price: 900, location: "Munnar", country: "India",
  },
  {
    title: "Cave Hotel in Cappadocia",
    description: "Sleep inside a real cave with stunning hot air balloon views at dawn over the valleys.",
    image: {
      url: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=800",
      filename: "listingimage",
    },
    price: 4100, location: "Göreme", country: "Turkey",
  },
  {
    title: "Waterfront Condo in Sydney",
    description: "A modern condo on Sydney Harbour with Opera House views and rooftop pool.",
    image: {
      url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800",
      filename: "listingimage",
    },
    price: 5200, location: "Sydney", country: "Australia",
  },
  {
    title: "Floating Villa in Lombok",
    description: "A unique floating villa on a turquoise lagoon with sunrise views and snorkeling access.",
    image: {
      url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800",
      filename: "listingimage",
    },
    price: 6800, location: "Lombok", country: "Indonesia",
  },
];

module.exports = sampleListings;