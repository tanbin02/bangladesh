// ========== DATA ==========
    const DIVISIONS = {
      "Dhaka": ["Dhaka","Faridpur","Gazipur","Gopalganj","Kishoreganj","Madaripur","Manikganj","Munshiganj","Narayanganj","Narsingdi","Rajbari","Shariatpur","Tangail"],
      "Chattogram": ["Bandarban","Brahmanbaria","Chandpur","Chattogram","Cumilla","Cox's Bazar","Feni","Khagrachhari","Lakshmipur","Noakhali","Rangamati"],
      "Rajshahi": ["Bogura","Chapai Nawabganj","Joypurhat","Naogaon","Natore","Pabna","Rajshahi","Sirajganj"],
      "Khulna": ["Bagerhat","Chuadanga","Jashore","Jhenaidah","Khulna","Kushtia","Magura","Meherpur","Narail","Satkhira"],
      "Barishal": ["Barguna","Barishal","Bhola","Jhalokati","Patuakhali","Pirojpur"],
      "Sylhet": ["Habiganj","Moulvibazar","Sunamganj","Sylhet"],
      "Rangpur": ["Dinajpur","Gaibandha","Kurigram","Lalmonirhat","Nilphamari","Panchagarh","Rangpur","Thakurgaon"],
      "Mymensingh": ["Jamalpur","Mymensingh","Netrokona","Sherpur"]
    };

    // Comprehensive place data (curated)
    const PLACES = [
      // Cox's Bazar
      {id:1, name:"Cox's Bazar Beach", district:"Cox's Bazar", division:"Chattogram", category:["Beach","Photography","Family"], rating:4.8, location:"Cox's Bazar Sadar", best:"Nov–Mar", img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", desc:"The world's longest natural sandy sea beach stretching over 120 km. Perfect for sunsets, surfing and beach walks."},
      {id:2, name:"Inani Beach", district:"Cox's Bazar", division:"Chattogram", category:["Beach","Photography"], rating:4.6, location:"Ukhia", best:"Nov–Mar", img:"https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80", desc:"Crystal-clear water and unique coral stones. Quieter alternative to the main beach."},
      {id:3, name:"Himchari National Park", district:"Cox's Bazar", division:"Chattogram", category:["Forest","Adventure","Photography"], rating:4.5, location:"Himchari", best:"Oct–Mar", img:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80", desc:"Waterfalls, hills and viewpoints overlooking the Bay of Bengal."},
      {id:4, name:"Saint Martin's Island", district:"Cox's Bazar", division:"Chattogram", category:["Beach","Adventure","Photography"], rating:4.7, location:"Saint Martin", best:"Nov–Feb", img:"https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80", desc:"Bangladesh's only coral island. Turquoise water, snorkeling and serene nights."},
      // Bandarban
      {id:5, name:"Nilgiri", district:"Bandarban", division:"Chattogram", category:["Mountain","Photography","Adventure"], rating:4.8, location:"Thanchi", best:"Oct–Mar", img:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc:"Cloud-kissed peaks and endless green hills. One of the most scenic viewpoints in the country."},
      {id:6, name:"Boga Lake", district:"Bandarban", division:"Chattogram", category:["Mountain","Adventure","Photography"], rating:4.7, location:"Ruma", best:"Oct–Apr", img:"https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80", desc:"A pristine natural lake nestled among hills. Trek through tribal villages to reach it."},
      {id:7, name:"Nafakhum Waterfall", district:"Bandarban", division:"Chattogram", category:["Waterfall","Adventure","Photography"], rating:4.6, location:"Thanchi", best:"Jun–Sep", img:"https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80", desc:"One of the widest waterfalls in Bangladesh. Best experienced during monsoon."},
      {id:8, name:"Buddha Dhatu Jadi", district:"Bandarban", division:"Chattogram", category:["Religious","Historical"], rating:4.5, location:"Balaghata", best:"Year-round", img:"https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", desc:"The largest Theravada Buddhist temple in Bangladesh with a golden stupa."},
      // Rangamati
      {id:9, name:"Kaptai Lake", district:"Rangamati", division:"Chattogram", category:["Adventure","Photography","Family"], rating:4.6, location:"Kaptai", best:"Oct–Mar", img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80", desc:"Southeast Asia's largest man-made lake. Boat rides through emerald waters and forested hills."},
      {id:10, name:"Sajek Valley", district:"Rangamati", division:"Chattogram", category:["Mountain","Photography","Adventure"], rating:4.9, location:"Baghaichhari", best:"Oct–Mar", img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc:"Famous for sea of clouds, sunrise views and indigenous culture. A must-visit highland."},
      // Khagrachhari
      {id:11, name:"Alutila Cave", district:"Khagrachhari", division:"Chattogram", category:["Adventure","Historical"], rating:4.3, location:"Matiranga", best:"Oct–Mar", img:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80", desc:"A mysterious natural tunnel through a hill with a stream running inside."},
      // Sundarbans / Khulna / Bagerhat / Satkhira
      {id:12, name:"Sundarbans Mangrove Forest", district:"Khulna", division:"Khulna", category:["Forest","Wildlife","Adventure","Photography"], rating:4.9, location:"Sundarbans", best:"Nov–Feb", img:"https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80", desc:"World's largest mangrove forest and UNESCO site. Home of the Royal Bengal Tiger."},
      {id:13, name:"Sixty Dome Mosque", district:"Bagerhat", division:"Khulna", category:["Historical","Religious"], rating:4.7, location:"Bagerhat", best:"Year-round", img:"https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80", desc:"UNESCO World Heritage Site. Magnificent 15th-century mosque with 60 domes."},
      // Sylhet / Moulvibazar
      {id:14, name:"Srimangal Tea Gardens", district:"Moulvibazar", division:"Sylhet", category:["Photography","Family","Adventure"], rating:4.7, location:"Srimangal", best:"Oct–Mar", img:"https://images.unsplash.com/photo-1564890367538-4652e70f1f2b?w=800&q=80", desc:"Rolling green tea estates, seven-color tea and the 'tea capital' of Bangladesh."},
      {id:15, name:"Lawachara National Park", district:"Moulvibazar", division:"Sylhet", category:["Forest","Wildlife","Adventure"], rating:4.6, location:"Kamalganj", best:"Nov–Mar", img:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80", desc:"Tropical rainforest with hoolock gibbons, rare birds and scenic trails."},
      {id:16, name:"Jaflong", district:"Sylhet", division:"Sylhet", category:["Photography","Adventure","Family"], rating:4.4, location:"Gowainghat", best:"Oct–Mar", img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc:"Stone collection sites, hills and the Dawki river bordering India."},
      {id:17, name:"Ratargul Swamp Forest", district:"Sylhet", division:"Sylhet", category:["Forest","Photography","Adventure"], rating:4.5, location:"Gowainghat", best:"Jun–Sep", img:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80", desc:"Only freshwater swamp forest in Bangladesh. Magical boat rides among trees."},
      {id:18, name:"Hum Hum Waterfall", district:"Moulvibazar", division:"Sylhet", category:["Waterfall","Adventure"], rating:4.4, location:"Kamalganj", best:"Jun–Sep", img:"https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80", desc:"Hidden waterfall deep in the Rajkandi Reserve Forest. Challenging trek."},
      // Dhaka & nearby
      {id:19, name:"Lalbagh Fort", district:"Dhaka", division:"Dhaka", category:["Historical","Photography"], rating:4.5, location:"Old Dhaka", best:"Year-round", img:"https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80", desc:"Incomplete Mughal fort from the 17th century with beautiful gardens."},
      {id:20, name:"Ahsan Manzil", district:"Dhaka", division:"Dhaka", category:["Historical"], rating:4.6, location:"Islampur", best:"Year-round", img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80", desc:"The Pink Palace — former residence of the Nawabs of Dhaka, now a museum."},
      {id:21, name:"Panam City", district:"Narayanganj", division:"Dhaka", category:["Historical","Photography"], rating:4.5, location:"Sonargaon", best:"Year-round", img:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80", desc:"Abandoned 19th-century merchant town with ornate decaying facades."},
      {id:22, name:"Bhawal National Park", district:"Gazipur", division:"Dhaka", category:["Forest","Family","Wildlife"], rating:4.2, location:"Gazipur", best:"Oct–Mar", img:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80", desc:"Sal forest picnic spot and nature trails near the capital."},
      // Rajshahi / Bogura / Naogaon
      {id:23, name:"Somapura Mahavihara (Paharpur)", district:"Naogaon", division:"Rajshahi", category:["Historical","Religious"], rating:4.7, location:"Paharpur", best:"Oct–Mar", img:"https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80", desc:"UNESCO World Heritage Site. Largest known Buddhist monastery south of the Himalayas."},
      {id:24, name:"Mahasthangarh", district:"Bogura", division:"Rajshahi", category:["Historical"], rating:4.5, location:"Shibganj", best:"Oct–Mar", img:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80", desc:"Oldest urban archaeological site in Bangladesh dating back to 3rd century BCE."},
      {id:25, name:"Kantaji Temple", district:"Dinajpur", division:"Rangpur", category:["Religious","Historical","Photography"], rating:4.8, location:"Kantajir Mandir", best:"Year-round", img:"https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", desc:"Exquisite 18th-century terracotta Hindu temple, one of the finest in the subcontinent."},
      // Barishal / Patuakhali
      {id:26, name:"Kuakata Beach", district:"Patuakhali", division:"Barishal", category:["Beach","Photography","Family"], rating:4.5, location:"Kuakata", best:"Nov–Mar", img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", desc:"Rare beach where you can watch both sunrise and sunset over the sea."},
      // More places for coverage
      {id:27, name:"Madhabkunda Waterfall", district:"Moulvibazar", division:"Sylhet", category:["Waterfall","Family","Photography"], rating:4.4, location:"Barlekha", best:"Jun–Sep", img:"https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80", desc:"One of the largest waterfalls in Bangladesh, easily accessible."},
      {id:28, name:"Foy's Lake", district:"Chattogram", division:"Chattogram", category:["Family","Adventure"], rating:4.3, location:"Khulshi", best:"Year-round", img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80", desc:"Scenic artificial lake and amusement park in the port city."},
      {id:29, name:"Sitakunda Eco Park", district:"Chattogram", division:"Chattogram", category:["Forest","Adventure","Religious"], rating:4.2, location:"Sitakunda", best:"Oct–Mar", img:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80", desc:"Hills, trails and the Chandranath Temple with panoramic views."},
      {id:30, name:"Mainamati Ruins", district:"Cumilla", division:"Chattogram", category:["Historical","Religious"], rating:4.4, location:"Kotbari", best:"Oct–Mar", img:"https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80", desc:"Ancient Buddhist archaeological site with monasteries and museums."},
      {id:31, name:"Rabindranath Tagore's Kuthibari", district:"Kushtia", division:"Khulna", category:["Historical","Photography"], rating:4.5, location:"Shilaidaha", best:"Year-round", img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80", desc:"Historic residence of the Nobel laureate poet on the Padma river."},
      {id:32, name:"Lalon Shah Shrine", district:"Kushtia", division:"Khulna", category:["Religious","Historical"], rating:4.6, location:"Cheuria", best:"Year-round", img:"https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", desc:"Sacred shrine of the great Baul mystic and philosopher Lalon Fakir."},
      {id:33, name:"Nikli Haor", district:"Kishoreganj", division:"Dhaka", category:["Photography","Adventure","Wildlife"], rating:4.3, location:"Nikli", best:"Jul–Oct", img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80", desc:"Vast wetland with migratory birds and boat rides during monsoon."},
      {id:34, name:"Madhupur National Park", district:"Tangail", division:"Dhaka", category:["Forest","Wildlife","Adventure"], rating:4.2, location:"Madhupur", best:"Oct–Mar", img:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80", desc:"Sal forest with wildlife and the famous rubber garden."},
      {id:35, name:"Tanguar Haor", district:"Sunamganj", division:"Sylhet", category:["Wildlife","Photography","Adventure"], rating:4.6, location:"Tahirpur", best:"Dec–Feb", img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80", desc:"Ramsar wetland of international importance. Birdwatching paradise."},
      {id:36, name:"Sangu River & Remakri", district:"Bandarban", division:"Chattogram", category:["Adventure","Photography","Mountain"], rating:4.5, location:"Thanchi", best:"Oct–Mar", img:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", desc:"Remote river valleys and tribal trails deep in the Hill Tracts."},
      {id:37, name:"Chimbuk Hill", district:"Bandarban", division:"Chattogram", category:["Mountain","Photography"], rating:4.4, location:"Bandarban Sadar", best:"Oct–Mar", img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", desc:"Popular viewpoint with winding roads and panoramic hill views."},
      {id:38, name:"Golden Temple (Bandarban)", district:"Bandarban", division:"Chattogram", category:["Religious"], rating:4.5, location:"Balaghata", best:"Year-round", img:"https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", desc:"Also known as Buddha Dhatu Jadi — gleaming golden structure on a hill."},
      {id:39, name:"Moheshkhali Island", district:"Cox's Bazar", division:"Chattogram", category:["Beach","Religious","Adventure"], rating:4.3, location:"Moheshkhali", best:"Nov–Mar", img:"https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80", desc:"Island with Adinath Temple, hills and quiet beaches."},
      {id:40, name:"Parki Beach", district:"Chattogram", division:"Chattogram", category:["Beach","Family"], rating:4.1, location:"Anhwara", best:"Nov–Mar", img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", desc:"Quiet beach near Chattogram city, ideal for day trips."}
    ];

    // District meta (short descriptions + tips)
    const DISTRICT_META = {
      "Cox's Bazar": {
        desc: "Home to the world's longest natural sea beach. A complete coastal destination with islands, hills and vibrant beach life.",
        nature: "Cox's Bazar Beach, Inani, Himchari, Saint Martin's Island, Moheshkhali",
        historical: "Agmeda Khyang, various Buddhist temples",
        religious: "Buddhist temples, local mosques and churches",
        food: "Shutki (dried fish), seafood, local sweets",
        hotels: "From budget guesthouses to 5-star resorts along Marine Drive",
        restaurants: "Beachside seafood shacks and hotel restaurants",
        transport: "Flights to Cox's Bazar Airport + buses from Dhaka/Chattogram",
        best: "November to March",
        budget: "Budget 3–5 days: ৳8,000–15,000 | Mid-range: ৳15,000–30,000",
        tips: "Book hotels early in peak season. Sunset at Laboni or Kolatoli is magical. Carry sunscreen.",
        nearby: ["Chattogram","Bandarban","Khagrachhari"]
      },
      "Bandarban": {
        desc: "The adventure capital of Bangladesh. Misty mountains, tribal culture, waterfalls and some of the highest peaks in the country.",
        nature: "Nilgiri, Boga Lake, Nafakhum, Keokradong, Sangu river",
        historical: "Tribal heritage sites",
        religious: "Buddha Dhatu Jadi (Golden Temple)",
        food: "Indigenous cuisine, bamboo chicken, local fruits",
        hotels: "Hill resorts and eco-cottages in Nilgiri, Chimbuk and town",
        restaurants: "Local tribal food stalls and resort dining",
        transport: "Bus/jeep from Chattogram. Some areas require special permits.",
        best: "October to March",
        budget: "3–5 days trek-focused: ৳10,000–25,000",
        tips: "Hire local guides for remote treks. Respect indigenous communities. Check permit requirements.",
        nearby: ["Rangamati","Khagrachhari","Cox's Bazar"]
      },
      "Rangamati": {
        desc: "Lake district of Bangladesh. Kaptai Lake, hanging bridge and the famous Sajek Valley.",
        nature: "Kaptai Lake, Sajek Valley, Hanging Bridge",
        historical: "Chakma Rajbari, tribal museum",
        religious: "Buddhist temples and viharas",
        food: "Tribal dishes, fresh lake fish",
        hotels: "Resorts around the lake and Sajek",
        restaurants: "Lakeside and tribal eateries",
        transport: "Bus from Chattogram/Dhaka. Boats on the lake.",
        best: "October to March",
        budget: "৳8,000–20,000 for 3–4 days",
        tips: "Sajek is best at sunrise for cloud views. Book cottages in advance.",
        nearby: ["Bandarban","Khagrachhari","Chattogram"]
      },
      "Khulna": {
        desc: "Gateway to the Sundarbans — the largest mangrove forest on Earth and home of the Royal Bengal Tiger.",
        nature: "Sundarbans mangrove forest, rivers and wildlife",
        historical: "Nearby Bagerhat heritage sites",
        religious: "Local mosques and temples",
        food: "Freshwater fish, prawn, local sweets",
        hotels: "City hotels + river cruise boats for Sundarbans",
        restaurants: "Riverside and city restaurants",
        transport: "Train/bus from Dhaka. Boats for forest tours.",
        best: "November to February",
        budget: "Sundarbans 2–3 night package: ৳12,000–30,000",
        tips: "Go with licensed operators. Winter is ideal for wildlife sighting.",
        nearby: ["Bagerhat","Satkhira","Jashore"]
      },
      "Bagerhat": {
        desc: "City of mosques. UNESCO-listed Sixty Dome Mosque and the historic landscape of Khan Jahan Ali.",
        nature: "Nearby Sundarbans access points",
        historical: "Sixty Dome Mosque, Khan Jahan Ali Mazar, other medieval mosques",
        religious: "Sixty Dome Mosque and shrine complex",
        food: "Regional Bengali cuisine",
        hotels: "Small hotels and guest houses in town",
        restaurants: "Local eateries",
        transport: "Bus from Khulna/Dhaka",
        best: "October to March",
        budget: "Day trip or 1–2 nights: ৳3,000–8,000",
        tips: "Combine with a Sundarbans trip. Early morning visits are peaceful.",
        nearby: ["Khulna","Satkhira"]
      },
      "Moulvibazar": {
        desc: "Tea capital of Bangladesh. Endless tea gardens, Lawachara rainforest and waterfalls.",
        nature: "Tea estates, Lawachara National Park, Madhabkunda & Hum Hum waterfalls",
        historical: "Colonial-era tea bungalows",
        religious: "Local mosques and temples",
        food: "Seven-color tea, local sweets, fresh produce",
        hotels: "Tea resort hotels and forest lodges",
        restaurants: "Tea stalls and resort restaurants",
        transport: "Bus from Sylhet/Dhaka. Train to Srimangal.",
        best: "October to March",
        budget: "৳7,000–18,000 for 3 days",
        tips: "Stay in a tea bungalow if possible. Try the famous 7-layer tea.",
        nearby: ["Sylhet","Habiganj","Sunamganj"]
      },
      "Sylhet": {
        desc: "Land of saints, tea and haors. Spiritual sites, Jaflong hills and Ratargul swamp forest.",
        nature: "Jaflong, Ratargul, nearby tea gardens",
        historical: "Shah Jalal & Shah Paran shrines",
        religious: "Hazrat Shah Jalal Mazar, Shah Paran Mazar",
        food: "Sylheti cuisine, seven-color tea, local sweets",
        hotels: "City hotels and resorts near Jaflong",
        restaurants: "Famous for Sylheti food and tea",
        transport: "Flights to Sylhet + buses/trains from Dhaka",
        best: "October to March (haors in monsoon)",
        budget: "৳8,000–20,000 for 3–4 days",
        tips: "Visit shrines respectfully. Monsoon is great for Ratargul and haors.",
        nearby: ["Moulvibazar","Sunamganj","Habiganj"]
      },
      "Dhaka": {
        desc: "The vibrant capital. Mughal forts, colonial architecture, river life and modern energy.",
        nature: "Limited — nearby parks and river cruises",
        historical: "Lalbagh Fort, Ahsan Manzil, Sonargaon/Panam City",
        religious: "Baitul Mukarram, Dhakeshwari Temple, Star Mosque",
        food: "Biryani, fuchka, old Dhaka street food, modern cafés",
        hotels: "All ranges — from backpacker to 5-star",
        restaurants: "Old Dhaka, Gulshan, Banani, Dhanmondi",
        transport: "Major hub — flights, trains, buses, ride-sharing",
        best: "November to February (avoid peak heat/rain)",
        budget: "Highly variable. City day: ৳2,000–6,000",
        tips: "Use ride-sharing apps. Old Dhaka is best explored with a local guide.",
        nearby: ["Narayanganj","Gazipur","Munshiganj","Manikganj"]
      },
      "Naogaon": {
        desc: "Home to the UNESCO-listed Somapura Mahavihara at Paharpur — one of the great Buddhist universities of Asia.",
        nature: "Rural landscapes",
        historical: "Somapura Mahavihara (Paharpur)",
        religious: "Buddhist ruins and local temples/mosques",
        food: "North Bengal cuisine",
        hotels: "Limited — best as day trip from Bogura/Rajshahi",
        restaurants: "Local eateries",
        transport: "Bus from Bogura/Rajshahi/Dhaka",
        best: "October to March",
        budget: "Day trip: ৳2,000–5,000",
        tips: "Combine with Mahasthangarh in Bogura for a heritage circuit.",
        nearby: ["Bogura","Rajshahi","Joypurhat"]
      },
      "Bogura": {
        desc: "Ancient Mahasthangarh — the oldest city ruins in Bangladesh — and a gateway to North Bengal heritage.",
        nature: "Rural and riverine",
        historical: "Mahasthangarh, Vasu Bihar",
        religious: "Local sites",
        food: "Famous for yogurt (doi) and North Bengal dishes",
        hotels: "Town hotels",
        restaurants: "Local restaurants known for doi",
        transport: "Bus/train from Dhaka and Rajshahi",
        best: "October to March",
        budget: "1–2 days: ৳3,000–8,000",
        tips: "Visit Mahasthangarh early. Try local doi.",
        nearby: ["Naogaon","Sirajganj","Joypurhat"]
      },
      "Dinajpur": {
        desc: "Home of the exquisite terracotta Kantaji Temple — one of the most beautiful Hindu temples in the region.",
        nature: "Ramsagar and local parks",
        historical: "Kantaji Temple, palace ruins",
        religious: "Kantaji Temple",
        food: "North Bengal specialties",
        hotels: "Town hotels",
        restaurants: "Local",
        transport: "Bus/train from Dhaka/Rangpur",
        best: "Year-round (best Oct–Mar)",
        budget: "Day to overnight: ৳3,000–7,000",
        tips: "Kantaji is the highlight — allow time for the intricate terracotta work.",
        nearby: ["Thakurgaon","Panchagarh","Rangpur"]
      },
      "Patuakhali": {
        desc: "Kuakata — the beach where both sunrise and sunset can be viewed over the sea.",
        nature: "Kuakata Beach, nearby mangrove and islands",
        historical: "Local heritage",
        religious: "Rakhine temples and local sites",
        food: "Seafood and regional cuisine",
        hotels: "Beach hotels and cottages",
        restaurants: "Beachside eateries",
        transport: "Bus from Barishal/Dhaka",
        best: "November to March",
        budget: "2–3 days: ৳6,000–14,000",
        tips: "Stay overnight for both sunrise and sunset. Visit the Rakhine community.",
        nearby: ["Barguna","Barishal","Bhola"]
      },
      "Chattogram": {
        desc: "The commercial capital and port city. Hills, lake, beaches nearby and a gateway to the Hill Tracts.",
        nature: "Foy's Lake, Sitakunda, Parki Beach",
        historical: "War Cemetery, old port area",
        religious: "Chandranath Temple, various mosques",
        food: "Famous mezban, seafood, local sweets",
        hotels: "Wide range of city hotels",
        restaurants: "Excellent seafood and mezban houses",
        transport: "Major hub — airport, trains, buses, ships",
        best: "October to March",
        budget: "City base: flexible",
        tips: "Great base for Cox's Bazar and Hill Tracts trips.",
        nearby: ["Cox's Bazar","Rangamati","Bandarban","Feni"]
      },
      "Narayanganj": {
        desc: "Historic Sonargaon and the hauntingly beautiful abandoned merchant town of Panam City.",
        nature: "Riverine landscape",
        historical: "Panam City, Sonargaon Folk Arts Museum",
        religious: "Local temples and mosques",
        food: "Near Dhaka — similar options",
        hotels: "Day trip from Dhaka recommended",
        restaurants: "Local and Dhaka options",
        transport: "Easy day trip from Dhaka by road",
        best: "Year-round",
        budget: "Day trip: ৳1,500–4,000",
        tips: "Hire a guide for Panam City stories. Combine with Old Dhaka.",
        nearby: ["Dhaka","Munshiganj","Gazipur"]
      },
      "Gazipur": {
        desc: "Green escape near Dhaka with Bhawal National Park and popular amusement parks.",
        nature: "Bhawal National Park, forests",
        historical: "Bhawal Rajbari remnants",
        religious: "Local",
        food: "Picnic food and local eateries",
        hotels: "Resorts and day facilities",
        restaurants: "Park restaurants",
        transport: "Short drive from Dhaka",
        best: "October to March",
        budget: "Day trip: ৳1,500–4,000",
        tips: "Popular weekend picnic destination for Dhaka residents.",
        nearby: ["Dhaka","Narsingdi","Tangail"]
      },
      "Kushtia": {
        desc: "Cultural heartland — Tagore's Kuthibari and the shrine of Baul saint Lalon Shah.",
        nature: "Padma river landscape",
        historical: "Shilaidaha Kuthibari, Lalon shrine",
        religious: "Lalon Shah Mazar",
        food: "Regional Bengali",
        hotels: "Town hotels",
        restaurants: "Local",
        transport: "Bus/train from Dhaka/Khulna",
        best: "Year-round",
        budget: "1–2 days: ৳3,000–8,000",
        tips: "Visit during Lalon festival if possible for cultural immersion.",
        nearby: ["Jashore","Meherpur","Chuadanga"]
      },
      "Sunamganj": {
        desc: "Haor country. Tanguar Haor is a Ramsar site famous for migratory birds and vast wetlands.",
        nature: "Tanguar Haor, other haors",
        historical: "Local",
        religious: "Local shrines",
        food: "Haor fish and regional cuisine",
        hotels: "Limited — boat stays possible",
        restaurants: "Local",
        transport: "Bus from Sylhet/Dhaka",
        best: "December to February for birds; monsoon for water landscape",
        budget: "2–3 days: ৳8,000–18,000",
        tips: "Boat trips are essential. Winter is peak for birdwatching.",
        nearby: ["Sylhet","Netrokona","Moulvibazar"]
      },
      "Tangail": {
        desc: "Known for handloom sarees and the Madhupur forest tract.",
        nature: "Madhupur National Park",
        historical: "Zamindar houses, local heritage",
        religious: "Local",
        food: "Traditional",
        hotels: "Town hotels",
        restaurants: "Local",
        transport: "Bus from Dhaka",
        best: "October to March",
        budget: "Day to overnight: ৳2,500–6,000",
        tips: "Combine nature with a look at Tangail weaving tradition.",
        nearby: ["Gazipur","Mymensingh","Jamalpur"]
      },
      "Kishoreganj": {
        desc: "Haor landscapes including the scenic Nikli Haor.",
        nature: "Nikli Haor and wetlands",
        historical: "Local zamindar history",
        religious: "Local",
        food: "Haor fish",
        hotels: "Limited",
        restaurants: "Local",
        transport: "Bus from Dhaka",
        best: "Monsoon for water; winter for birds",
        budget: "Day trip: ৳2,000–5,000",
        tips: "Boat rides are the main attraction during high water.",
        nearby: ["Netrokona","Mymensingh","Narsingdi"]
      }
    };

    // Default meta for districts without custom entry
    function getDistrictMeta(name) {
      if (DISTRICT_META[name]) return DISTRICT_META[name];
      return {
        desc: `${name} district offers a mix of local culture, rural landscapes and hidden spots waiting to be explored by curious travelers.`,
        nature: "Local parks, rivers and countryside",
        historical: "Local heritage sites and zamindar remnants",
        religious: "Mosques, temples and local shrines",
        food: "Authentic regional Bengali cuisine",
        hotels: "Town hotels and guest houses",
        restaurants: "Local eateries and tea stalls",
        transport: "Bus connections from major cities",
        best: "October to March",
        budget: "Flexible — day trips from nearby hubs recommended",
        tips: "Talk to locals for the best hidden spots. Carry cash in smaller towns.",
        nearby: []
      };
    }

    // ========== STATE ==========
    let currentFilter = "all";
    let searchQuery = "";

    // ========== RENDER ==========
    function renderDistricts() {
      const container = document.getElementById("districtsContainer");
      let html = "";
      for (const [div, districts] of Object.entries(DIVISIONS)) {
        const filtered = districts.filter(d => {
          if (!searchQuery) return true;
          const q = searchQuery.toLowerCase();
          return d.toLowerCase().includes(q) ||
            PLACES.some(p => p.district === d && (p.name.toLowerCase().includes(q) || p.category.some(c => c.toLowerCase().includes(q))));
        });
        if (filtered.length === 0 && searchQuery) continue;
        html += `
          <div class="division-section">
            <div class="division-header" onclick="this.parentElement.classList.toggle('collapsed')">
              <h2>${div} Division</h2>
              <span class="count">${filtered.length} districts</span>
            </div>
            <div class="district-grid">
              ${filtered.map(d => {
                const count = PLACES.filter(p => p.district === d).length;
                return `
                  <div class="district-card" onclick="showDistrict('${d.replace(/'/g, "\\'")}')">
                    <div class="icon">📍</div>
                    <h3>${d}</h3>
                    <p>${count > 0 ? count + " places" : "Explore"}</p>
                  </div>`;
              }).join("")}
            </div>
          </div>`;
      }
      container.innerHTML = html || `<div class="empty"><h3>No districts match</h3></div>`;
    }

    function showDistrict(name) {
      document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
      document.getElementById("districtView").classList.add("active");
      const meta = getDistrictMeta(name);
      const places = PLACES.filter(p => p.district === name);
      const division = Object.entries(DIVISIONS).find(([_, ds]) => ds.includes(name))?.[0] || "";
      const banner = places[0]?.img || "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80";

      document.getElementById("districtContent").innerHTML = `
        <div class="district-hero">
          <img src="${banner}" alt="${name}" />
          <div class="overlay">
            <div class="div-tag">${division} Division</div>
            <h1>${name}</h1>
          </div>
        </div>
        <p style="font-size:1.05rem;color:var(--muted);margin-bottom:1.5rem;max-width:800px">${meta.desc}</p>

        <div class="info-grid">
          <div class="info-card"><h4>🌿 Nature & Adventure</h4><p>${meta.nature}</p></div>
          <div class="info-card"><h4>🏛️ Historical Places</h4><p>${meta.historical}</p></div>
          <div class="info-card"><h4>🕌 Religious Places</h4><p>${meta.religious}</p></div>
          <div class="info-card"><h4>🍲 Food Specialties</h4><p>${meta.food}</p></div>
          <div class="info-card"><h4>🏨 Hotels</h4><p>${meta.hotels}</p></div>
          <div class="info-card"><h4>🍽️ Restaurants</h4><p>${meta.restaurants}</p></div>
          <div class="info-card"><h4>🚌 Transportation</h4><p>${meta.transport}</p></div>
          <div class="info-card"><h4>📅 Best Time</h4><p>${meta.best}</p></div>
          <div class="info-card"><h4>💰 Estimated Budget</h4><p>${meta.budget}</p></div>
          <div class="info-card"><h4>💡 Travel Tips</h4><p>${meta.tips}</p></div>
        </div>

        ${meta.nearby.length ? `
          <h3 class="section-title">📍 Nearby Districts</h3>
          <div class="nearby-list">
            ${meta.nearby.map(n => `<span class="nearby-chip" onclick="showDistrict('${n.replace(/'/g, "\\'")}')">${n}</span>`).join("")}
          </div>` : ""}

        <h3 class="section-title">✨ Popular Tourist Places</h3>
        <div class="places-grid">
          ${places.length ? places.map(p => placeCardHTML(p)).join("") :
            `<div class="empty" style="grid-column:1/-1"><p>Detailed place cards coming soon. Meanwhile explore the overview above and search for similar attractions.</p></div>`}
        </div>
      `;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function placeCardHTML(p) {
      return `
        <div class="place-card" onclick="openPlace(${p.id})">
          <img src="${p.img}" alt="${p.name}" loading="lazy" />
          <div class="body">
            <span class="cat">${p.category[0]}</span>
            <h3>${p.name}</h3>
            <p class="desc">${p.desc}</p>
            <div class="place-meta">
              <span class="rating">★ ${p.rating}</span>
              <span>${p.location}</span>
            </div>
            <button class="btn btn-primary explore-btn" onclick="event.stopPropagation();openPlace(${p.id})">Explore</button>
          </div>
        </div>`;
    }

    function showExplore(filter = currentFilter) {
      document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
      document.getElementById("exploreView").classList.add("active");
      currentFilter = filter;
      renderExplore();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function renderExplore() {
      let list = [...PLACES];
      if (currentFilter && currentFilter !== "all") {
        list = list.filter(p => p.category.includes(currentFilter));
      }
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        list = list.filter(p =>
          p.name.toLowerCase().includes(q) ||
          p.district.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q) ||
          p.category.some(c => c.toLowerCase().includes(q))
        );
      }
      document.getElementById("exploreTitle").textContent =
        currentFilter === "all" ? (searchQuery ? `Results for “${searchQuery}”` : "All Tourist Places") : `${currentFilter} Places`;
      const grid = document.getElementById("placesGrid");
      const empty = document.getElementById("exploreEmpty");
      if (list.length === 0) {
        grid.innerHTML = "";
        empty.style.display = "block";
      } else {
        empty.style.display = "none";
        grid.innerHTML = list.map(p => placeCardHTML(p)).join("");
      }
      // sync filter chips
      document.querySelectorAll("#categoryFilters .filter-chip, #exploreFilters .filter-chip").forEach(chip => {
        chip.classList.toggle("active", chip.dataset.filter === currentFilter);
      });
    }

    function showHome() {
      document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
      document.getElementById("homeView").classList.add("active");
      searchQuery = document.getElementById("globalSearch").value.trim();
      renderDistricts();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function openPlace(id) {
      const p = PLACES.find(x => x.id === id);
      if (!p) return;
      document.getElementById("modalImg").src = p.img;
      document.getElementById("modalCat").textContent = p.category.join(" · ");
      document.getElementById("modalName").textContent = p.name;
      document.getElementById("modalRating").textContent = `★ ${p.rating}`;
      document.getElementById("modalLoc").textContent = `📍 ${p.location}, ${p.district}`;
      document.getElementById("modalBest").textContent = `📅 Best: ${p.best}`;
      document.getElementById("modalDesc").textContent = p.desc;
      document.getElementById("modalExtra").innerHTML = `
        <button class="btn btn-primary" onclick="showDistrict('${p.district.replace(/'/g, "\\'")}');closeModal()">View ${p.district} District</button>
      `;
      document.getElementById("placeModal").classList.add("open");
    }

    function closeModal() {
      const overlay = document.getElementById("placeModal");
      if (!overlay.classList.contains("open")) return;
      overlay.classList.add("closing");
      overlay.classList.remove("open");
      setTimeout(() => {
        overlay.classList.remove("closing");
      }, 280);
    }

    
    // ========== DARK MODE ==========
    function initTheme() {
      const saved = localStorage.getItem("bd-tourism-theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (saved === "dark" || (!saved && prefersDark)) {
        document.body.classList.add("dark");
      }
    }

    function toggleTheme() {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");
      localStorage.setItem("bd-tourism-theme", isDark ? "dark" : "light");
    }

    // ========== EVENTS ==========
    document.getElementById("globalSearch").addEventListener("input", e => {
      searchQuery = e.target.value.trim();
      if (document.getElementById("exploreView").classList.contains("active")) {
        renderExplore();
      } else if (document.getElementById("homeView").classList.contains("active")) {
        renderDistricts();
      }
    });

    document.getElementById("globalSearch").addEventListener("keydown", e => {
      if (e.key === "Enter") {
        searchQuery = e.target.value.trim();
        if (searchQuery) showExplore("all");
      }
    });

    document.querySelectorAll("#categoryFilters .filter-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        currentFilter = chip.dataset.filter;
        document.querySelectorAll("#categoryFilters .filter-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        if (currentFilter === "all") {
          showHome();
        } else {
          showExplore(currentFilter);
        }
      });
    });

    document.getElementById("placeModal").addEventListener("click", e => {
      if (e.target === document.getElementById("placeModal")) closeModal();
    });

    // Init
    initTheme();
    document.getElementById("themeToggle").addEventListener("click", toggleTheme);
    renderDistricts();
