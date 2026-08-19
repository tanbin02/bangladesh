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

    
    // ========== HOTEL BOOKING SYSTEM ==========
    // NOTE: All hotel, room, availability, pricing and review data below is
    // REALISTIC DEMO DATA for prototyping purposes only. No live hotel
    // inventory, pricing feed or booking API is connected. Replace HOTELS
    // and the booking submit handler with real API calls to go live.

    const HOTEL_CATEGORIES = ["Luxury", "Resort", "Business", "Boutique", "Budget", "Eco Lodge"];

    const HOTELS = [
      {
        id: 101, name: "Sea Pearl Beach Resort & Spa", district: "Cox's Bazar", division: "Chattogram",
        location: "Kolatoli Beach Road", address: "Kolatoli Beach Road, Cox's Bazar 4700",
        category: "Resort", starRating: 5, userRating: 4.7, reviewCount: 1284,
        pricePerNight: 12500, distanceFromAttraction: 0.3,
        img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000&q=80",
          "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1000&q=80",
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1000&q=80",
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1000&q=80"
        ],
        desc: "A beachfront resort with direct sea access, multiple pools and a full spa. Rooms feature private balconies overlooking the Bay of Bengal — ideal for couples and families visiting Cox's Bazar Beach.",
        facilities: ["wifi","pool","restaurant","parking","ac","breakfast","familyFriendly","spa","gym"],
        checkIn: "2:00 PM", checkOut: "12:00 PM",
        rules: ["No smoking in rooms (designated balcony areas only)", "Pets are not allowed", "Valid photo ID required at check-in", "Quiet hours from 11:00 PM to 7:00 AM"],
        cancellation: "Free cancellation up to 3 days before check-in. 50% charge within 3 days. No refund for no-shows.",
        availability: "available",
        rooms: [
          { id: "r101a", name: "Deluxe Sea View", capacity: 2, beds: "1 King Bed", price: 12500, amenities: ["Sea view","Balcony","Free WiFi","AC"], available: true },
          { id: "r101b", name: "Family Suite", capacity: 4, beds: "2 Queen Beds", price: 19800, amenities: ["Sea view","Living area","Free WiFi","AC","Breakfast included"], available: true },
          { id: "r101c", name: "Executive Villa", capacity: 3, beds: "1 King + Sofa Bed", price: 26500, amenities: ["Private pool access","Sea view","Free WiFi","Breakfast included"], available: false }
        ],
        nearbyAttractions: [{ name: "Cox's Bazar Beach", dist: "0.3 km" }, { name: "Himchari National Park", dist: "8 km" }, { name: "Laboni Point", dist: "1.2 km" }],
        reviews: [
          { name: "Rafiul H.", rating: 5, date: "Jul 2026", comment: "Stunning sea view and very clean rooms. Breakfast spread was excellent." },
          { name: "Nusrat A.", rating: 4, date: "Jun 2026", comment: "Great location right on the beach. Pool area gets crowded on weekends." },
          { name: "Tanjil K.", rating: 5, date: "May 2026", comment: "Staff were extremely helpful, arranged a boat trip for us too." }
        ]
      },
      {
        id: 102, name: "Ocean Paradise Hotel", district: "Cox's Bazar", division: "Chattogram",
        location: "Marine Drive Road", address: "Marine Drive Road, Kolatoli, Cox's Bazar",
        category: "Business", starRating: 4, userRating: 4.3, reviewCount: 856,
        pricePerNight: 7200, distanceFromAttraction: 0.6,
        img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1000&q=80",
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80",
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1000&q=80"
        ],
        desc: "A comfortable mid-range hotel a short walk from the beach, popular with families and business travelers alike.",
        facilities: ["wifi","restaurant","parking","ac","breakfast","familyFriendly"],
        checkIn: "1:00 PM", checkOut: "11:00 AM",
        rules: ["No smoking in rooms", "Pets are not allowed", "Government-issued ID required at check-in"],
        cancellation: "Free cancellation up to 24 hours before check-in.",
        availability: "available",
        rooms: [
          { id: "r102a", name: "Standard Twin", capacity: 2, beds: "2 Twin Beds", price: 7200, amenities: ["Free WiFi","AC","Breakfast included"], available: true },
          { id: "r102b", name: "Deluxe Double", capacity: 2, beds: "1 Queen Bed", price: 8900, amenities: ["City view","Free WiFi","AC","Breakfast included"], available: true }
        ],
        nearbyAttractions: [{ name: "Cox's Bazar Beach", dist: "0.6 km" }, { name: "Inani Beach", dist: "22 km" }],
        reviews: [
          { name: "Sadia R.", rating: 4, date: "Jun 2026", comment: "Good value for money, close to the beach." },
          { name: "Imran C.", rating: 4, date: "Apr 2026", comment: "Rooms were clean, breakfast could be more varied." }
        ]
      },
      {
        id: 103, name: "Coral Reef Guest House", district: "Cox's Bazar", division: "Chattogram",
        location: "Kolatoli", address: "Kolatoli Road, Cox's Bazar",
        category: "Budget", starRating: 3, userRating: 4.0, reviewCount: 412,
        pricePerNight: 2800, distanceFromAttraction: 0.8,
        img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
        gallery: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1000&q=80"],
        desc: "Simple, clean rooms for backpackers and budget travelers, minutes from the beach.",
        facilities: ["wifi","ac","parking"],
        checkIn: "2:00 PM", checkOut: "11:00 AM",
        rules: ["No smoking indoors", "No outside guests after 10 PM"],
        cancellation: "Non-refundable rate. No cancellations or changes.",
        availability: "limited",
        rooms: [
          { id: "r103a", name: "Standard Room", capacity: 2, beds: "1 Double Bed", price: 2800, amenities: ["Free WiFi","AC"], available: true },
          { id: "r103b", name: "Dorm-Style Room", capacity: 4, beds: "4 Single Beds", price: 4200, amenities: ["Free WiFi","Fan"], available: true }
        ],
        nearbyAttractions: [{ name: "Cox's Bazar Beach", dist: "0.8 km" }],
        reviews: [{ name: "Mehedi S.", rating: 4, date: "Mar 2026", comment: "Very budget friendly and decent for the price." }]
      },
      {
        id: 104, name: "Sajek Cloud Cottage", district: "Rangamati", division: "Chattogram",
        location: "Sajek Valley", address: "Konglak Para, Sajek Valley, Rangamati",
        category: "Eco Lodge", starRating: 3, userRating: 4.6, reviewCount: 623,
        pricePerNight: 5500, distanceFromAttraction: 0.2,
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        gallery: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&q=80", "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&q=80"],
        desc: "Bamboo cottages perched on a ridge with panoramic sea-of-clouds sunrise views over Sajek Valley.",
        facilities: ["wifi","restaurant","familyFriendly"],
        checkIn: "1:00 PM", checkOut: "11:00 AM",
        rules: ["Generator electricity — limited hours", "No smoking inside cottages", "Bring warm clothing for winter nights"],
        cancellation: "Free cancellation up to 5 days before check-in due to remote location logistics.",
        availability: "available",
        rooms: [
          { id: "r104a", name: "Cloud View Cottage", capacity: 2, beds: "1 Double Bed", price: 5500, amenities: ["Valley view","Balcony"], available: true },
          { id: "r104b", name: "Family Cottage", capacity: 4, beds: "2 Double Beds", price: 8500, amenities: ["Valley view","Balcony","Sitting area"], available: true }
        ],
        nearbyAttractions: [{ name: "Sajek Valley Viewpoint", dist: "0.2 km" }, { name: "Konglak Hill", dist: "1.5 km" }],
        reviews: [
          { name: "Farhan T.", rating: 5, date: "Jan 2026", comment: "Waking up to a sea of clouds was unforgettable." },
          { name: "Priyanka D.", rating: 4, date: "Dec 2025", comment: "Basic but the view makes up for everything." }
        ]
      },
      {
        id: 105, name: "Kaptai Lakeview Resort", district: "Rangamati", division: "Chattogram",
        location: "Kaptai", address: "Kaptai Lake Road, Rangamati",
        category: "Resort", starRating: 4, userRating: 4.4, reviewCount: 389,
        pricePerNight: 6800, distanceFromAttraction: 0.1,
        img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
        gallery: ["https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1000&q=80", "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1000&q=80"],
        desc: "Lakeside resort with private jetty access for boat rides across Kaptai Lake and views of forested hills.",
        facilities: ["wifi","restaurant","parking","ac","breakfast","familyFriendly"],
        checkIn: "2:00 PM", checkOut: "12:00 PM",
        rules: ["Life jackets mandatory for boat rides", "No smoking in rooms"],
        cancellation: "Free cancellation up to 48 hours before check-in.",
        availability: "available",
        rooms: [
          { id: "r105a", name: "Lake View Room", capacity: 2, beds: "1 Queen Bed", price: 6800, amenities: ["Lake view","Free WiFi","Breakfast included"], available: true },
          { id: "r105b", name: "Hillside Suite", capacity: 3, beds: "1 King Bed", price: 9500, amenities: ["Lake view","Balcony","Free WiFi","Breakfast included"], available: true }
        ],
        nearbyAttractions: [{ name: "Kaptai Lake", dist: "0.1 km" }, { name: "Sajek Valley", dist: "58 km" }],
        reviews: [{ name: "Shanto B.", rating: 4, date: "Feb 2026", comment: "Loved the boat ride included with the stay." }]
      },
      {
        id: 106, name: "Nilgiri Hill Resort", district: "Bandarban", division: "Chattogram",
        location: "Thanchi Road", address: "Nilgiri, Thanchi Road, Bandarban",
        category: "Resort", starRating: 4, userRating: 4.5, reviewCount: 501,
        pricePerNight: 7500, distanceFromAttraction: 0.1,
        img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
        gallery: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&q=80", "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1000&q=80"],
        desc: "Perched above the clouds at Nilgiri, offering some of the best sunrise views in the Chittagong Hill Tracts.",
        facilities: ["wifi","restaurant","parking","familyFriendly"],
        checkIn: "1:00 PM", checkOut: "11:00 AM",
        rules: ["Special travel permit may be required for the region", "No smoking indoors"],
        cancellation: "Free cancellation up to 5 days before check-in.",
        availability: "limited",
        rooms: [
          { id: "r106a", name: "Mountain View Room", capacity: 2, beds: "1 Double Bed", price: 7500, amenities: ["Mountain view","Balcony"], available: true },
          { id: "r106b", name: "Premium Cottage", capacity: 3, beds: "1 King + 1 Single", price: 11000, amenities: ["Mountain view","Balcony","Breakfast included"], available: false }
        ],
        nearbyAttractions: [{ name: "Nilgiri Viewpoint", dist: "0.1 km" }, { name: "Chimbuk Hill", dist: "14 km" }],
        reviews: [{ name: "Ovi R.", rating: 5, date: "Nov 2025", comment: "Best sunrise I have ever seen, staff were very welcoming." }]
      },
      {
        id: 107, name: "Boga Lake Tribal Homestay", district: "Bandarban", division: "Chattogram",
        location: "Ruma", address: "Boga Lake, Ruma Upazila, Bandarban",
        category: "Budget", starRating: 2, userRating: 4.1, reviewCount: 178,
        pricePerNight: 1800, distanceFromAttraction: 0.05,
        img: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80",
        gallery: ["https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1000&q=80"],
        desc: "Simple bamboo homestay run by a local Bawm family right beside Boga Lake, with home-cooked meals.",
        facilities: ["breakfast"],
        checkIn: "3:00 PM", checkOut: "10:00 AM",
        rules: ["No electricity after 10 PM (solar only)", "Meals provided by hosts, notify dietary needs in advance"],
        cancellation: "Non-refundable due to remote trekking logistics.",
        availability: "available",
        rooms: [{ id: "r107a", name: "Shared Homestay Room", capacity: 2, beds: "Floor mattresses", price: 1800, amenities: ["Home-cooked meals","Lake access"], available: true }],
        nearbyAttractions: [{ name: "Boga Lake", dist: "0.05 km" }, { name: "Keokradong Peak", dist: "6 km" }],
        reviews: [{ name: "Zarin M.", rating: 4, date: "Oct 2025", comment: "Authentic experience, the family took great care of us." }]
      },
      {
        id: 108, name: "Grand Sundarban Riverside Hotel", district: "Khulna", division: "Khulna",
        location: "Khulna City", address: "KDA Avenue, Khulna",
        category: "Business", starRating: 4, userRating: 4.2, reviewCount: 640,
        pricePerNight: 5900, distanceFromAttraction: 3.5,
        img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
        gallery: ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1000&q=80", "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80"],
        desc: "A modern city hotel in Khulna, the launch point for Sundarbans mangrove forest tours and river cruises.",
        facilities: ["wifi","restaurant","parking","ac","breakfast","gym"],
        checkIn: "2:00 PM", checkOut: "12:00 PM",
        rules: ["No smoking in rooms", "ID required at check-in"],
        cancellation: "Free cancellation up to 24 hours before check-in.",
        availability: "available",
        rooms: [
          { id: "r108a", name: "Executive Room", capacity: 2, beds: "1 Queen Bed", price: 5900, amenities: ["City view","Free WiFi","Breakfast included"], available: true },
          { id: "r108b", name: "Sundarbans Package Suite", capacity: 2, beds: "1 King Bed", price: 8200, amenities: ["Free WiFi","Breakfast included","Tour desk"], available: true }
        ],
        nearbyAttractions: [{ name: "Sundarbans Mangrove Forest", dist: "3.5 km (boat launch)" }, { name: "Sixty Dome Mosque", dist: "48 km" }],
        reviews: [{ name: "Kabir H.", rating: 4, date: "Jan 2026", comment: "Helped us book a great Sundarbans tour from the front desk." }]
      },
      {
        id: 109, name: "Grand Sylhet Hotel & Resort", district: "Sylhet", division: "Sylhet",
        location: "Airport Road", address: "Airport Road, Sylhet",
        category: "Luxury", starRating: 5, userRating: 4.6, reviewCount: 1102,
        pricePerNight: 11000, distanceFromAttraction: 6.0,
        img: "https://images.unsplash.com/photo-1564890367538-4652e70f1f2b?w=800&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1564890367538-4652e70f1f2b?w=1000&q=80",
          "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1000&q=80",
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1000&q=80"
        ],
        desc: "A 5-star resort set among tea gardens near Sylhet city, with multiple restaurants, spa and a large pool.",
        facilities: ["wifi","pool","restaurant","parking","ac","breakfast","familyFriendly","spa","gym"],
        checkIn: "2:00 PM", checkOut: "12:00 PM",
        rules: ["No smoking in rooms", "Formal dress code in fine-dining restaurant"],
        cancellation: "Free cancellation up to 3 days before check-in.",
        availability: "available",
        rooms: [
          { id: "r109a", name: "Garden View Room", capacity: 2, beds: "1 King Bed", price: 11000, amenities: ["Garden view","Free WiFi","Breakfast included"], available: true },
          { id: "r109b", name: "Club Suite", capacity: 3, beds: "1 King + Sofa Bed", price: 17500, amenities: ["Lounge access","Free WiFi","Breakfast included"], available: true }
        ],
        nearbyAttractions: [{ name: "Jaflong", dist: "58 km" }, { name: "Ratargul Swamp Forest", dist: "35 km" }],
        reviews: [
          { name: "Adiba F.", rating: 5, date: "Jul 2026", comment: "Impeccable service, the tea garden setting is beautiful." },
          { name: "Rakib J.", rating: 4, date: "May 2026", comment: "A bit far from the city center but worth it for the ambience." }
        ]
      },
      {
        id: 110, name: "Srimangal Tea Resort", district: "Moulvibazar", division: "Sylhet",
        location: "Srimangal", address: "Bhanugach Road, Srimangal, Moulvibazar",
        category: "Eco Lodge", starRating: 3, userRating: 4.5, reviewCount: 445,
        pricePerNight: 4600, distanceFromAttraction: 1.0,
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
        gallery: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000&q=80", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&q=80"],
        desc: "Cottages surrounded by rolling tea estates, walking distance from Lawachara National Park.",
        facilities: ["wifi","restaurant","parking","breakfast","familyFriendly"],
        checkIn: "1:00 PM", checkOut: "11:00 AM",
        rules: ["Respect wildlife in nearby forest areas", "No smoking indoors"],
        cancellation: "Free cancellation up to 48 hours before check-in.",
        availability: "available",
        rooms: [
          { id: "r110a", name: "Tea Garden Cottage", capacity: 2, beds: "1 Double Bed", price: 4600, amenities: ["Garden view","Breakfast included"], available: true },
          { id: "r110b", name: "Family Bungalow", capacity: 5, beds: "2 Double Beds", price: 7900, amenities: ["Garden view","Sitting area","Breakfast included"], available: true }
        ],
        nearbyAttractions: [{ name: "Srimangal Tea Gardens", dist: "1 km" }, { name: "Lawachara National Park", dist: "8 km" }],
        reviews: [{ name: "Nafisa T.", rating: 5, date: "Mar 2026", comment: "Peaceful stay surrounded by tea gardens, loved the seven-color tea." }]
      },
      {
        id: 111, name: "Pan Pacific Sonargaon Dhaka", district: "Dhaka", division: "Dhaka",
        location: "Kawran Bazar", address: "107 Kazi Nazrul Islam Avenue, Dhaka 1215",
        category: "Luxury", starRating: 5, userRating: 4.7, reviewCount: 2210,
        pricePerNight: 15500, distanceFromAttraction: 5.5,
        img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1000&q=80",
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1000&q=80",
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1000&q=80"
        ],
        desc: "A landmark 5-star hotel in the heart of Dhaka with multiple dining options, a large pool and full business facilities.",
        facilities: ["wifi","pool","restaurant","parking","ac","breakfast","spa","gym"],
        checkIn: "3:00 PM", checkOut: "12:00 PM",
        rules: ["No smoking in rooms", "Formal attire in fine-dining outlets"],
        cancellation: "Free cancellation up to 24 hours before check-in.",
        availability: "available",
        rooms: [
          { id: "r111a", name: "Deluxe City View", capacity: 2, beds: "1 King Bed", price: 15500, amenities: ["City view","Free WiFi","Breakfast included"], available: true },
          { id: "r111b", name: "Executive Club Room", capacity: 2, beds: "1 King Bed", price: 21000, amenities: ["Lounge access","Free WiFi","Breakfast included"], available: true }
        ],
        nearbyAttractions: [{ name: "Lalbagh Fort", dist: "6 km" }, { name: "Ahsan Manzil", dist: "7 km" }],
        reviews: [
          { name: "Tahmid I.", rating: 5, date: "Aug 2026", comment: "Excellent service, great location for business trips." },
          { name: "Farhana N.", rating: 4, date: "Jun 2026", comment: "Lovely breakfast buffet and very comfortable rooms." }
        ]
      },
      {
        id: 112, name: "Old Dhaka Heritage Inn", district: "Dhaka", division: "Dhaka",
        location: "Old Dhaka", address: "Near Lalbagh Fort, Old Dhaka",
        category: "Boutique", starRating: 3, userRating: 4.2, reviewCount: 298,
        pricePerNight: 4200, distanceFromAttraction: 0.4,
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
        gallery: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1000&q=80", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1000&q=80"],
        desc: "A boutique inn with Mughal-inspired interiors, steps away from Lalbagh Fort and Old Dhaka's historic lanes.",
        facilities: ["wifi","ac","breakfast"],
        checkIn: "1:00 PM", checkOut: "11:00 AM",
        rules: ["No smoking indoors", "Quiet hours after 10 PM"],
        cancellation: "Free cancellation up to 24 hours before check-in.",
        availability: "available",
        rooms: [{ id: "r112a", name: "Heritage Room", capacity: 2, beds: "1 Queen Bed", price: 4200, amenities: ["Free WiFi","Breakfast included"], available: true }],
        nearbyAttractions: [{ name: "Lalbagh Fort", dist: "0.4 km" }, { name: "Ahsan Manzil", dist: "1.8 km" }],
        reviews: [{ name: "Rezwan A.", rating: 4, date: "Feb 2026", comment: "Charming place, felt like stepping into history." }]
      },
      {
        id: 113, name: "Kuakata Sunrise-Sunset Resort", district: "Patuakhali", division: "Barishal",
        location: "Kuakata Beach", address: "Kuakata Beach Road, Patuakhali",
        category: "Resort", starRating: 4, userRating: 4.4, reviewCount: 356,
        pricePerNight: 6200, distanceFromAttraction: 0.2,
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
        gallery: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&q=80", "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1000&q=80"],
        desc: "Beachfront resort at Kuakata, famous as the only place in Bangladesh to see both sunrise and sunset over the sea.",
        facilities: ["wifi","restaurant","parking","ac","breakfast","familyFriendly"],
        checkIn: "2:00 PM", checkOut: "11:00 AM",
        rules: ["No smoking in rooms", "Beach bonfires require prior approval"],
        cancellation: "Free cancellation up to 48 hours before check-in.",
        availability: "available",
        rooms: [
          { id: "r113a", name: "Sea View Room", capacity: 2, beds: "1 Queen Bed", price: 6200, amenities: ["Sea view","Free WiFi","Breakfast included"], available: true },
          { id: "r113b", name: "Family Suite", capacity: 4, beds: "2 Queen Beds", price: 9800, amenities: ["Sea view","Free WiFi","Breakfast included"], available: true }
        ],
        nearbyAttractions: [{ name: "Kuakata Beach", dist: "0.2 km" }],
        reviews: [{ name: "Sabbir Y.", rating: 5, date: "Dec 2025", comment: "Caught both sunrise and sunset from our balcony, unforgettable." }]
      },
      {
        id: 114, name: "Chattogram Skyline Hotel", district: "Chattogram", division: "Chattogram",
        location: "GEC Circle", address: "GEC Circle, Chattogram",
        category: "Business", starRating: 4, userRating: 4.3, reviewCount: 712,
        pricePerNight: 6900, distanceFromAttraction: 4.2,
        img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80",
        gallery: ["https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1000&q=80", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1000&q=80"],
        desc: "A well-located business hotel in Chattogram city, a convenient base for trips to Foy's Lake and Sitakunda.",
        facilities: ["wifi","restaurant","parking","ac","breakfast","gym"],
        checkIn: "2:00 PM", checkOut: "12:00 PM",
        rules: ["No smoking in rooms", "ID required at check-in"],
        cancellation: "Free cancellation up to 24 hours before check-in.",
        availability: "available",
        rooms: [{ id: "r114a", name: "Superior Room", capacity: 2, beds: "1 King Bed", price: 6900, amenities: ["City view","Free WiFi","Breakfast included"], available: true }],
        nearbyAttractions: [{ name: "Foy's Lake", dist: "4.2 km" }, { name: "Sitakunda Eco Park", dist: "38 km" }],
        reviews: [{ name: "Mahin O.", rating: 4, date: "Apr 2026", comment: "Great central location and helpful staff." }]
      },
      {
        id: 115, name: "Bogura Heritage Lodge", district: "Bogura", division: "Rajshahi",
        location: "Bogura Sadar", address: "Near Mahasthangarh Road, Bogura",
        category: "Budget", starRating: 3, userRating: 4.0, reviewCount: 165,
        pricePerNight: 2600, distanceFromAttraction: 5.0,
        img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
        gallery: ["https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1000&q=80"],
        desc: "A simple, clean lodge convenient for exploring the ancient ruins of Mahasthangarh.",
        facilities: ["wifi","ac","parking","breakfast"],
        checkIn: "1:00 PM", checkOut: "11:00 AM",
        rules: ["No smoking indoors"],
        cancellation: "Free cancellation up to 24 hours before check-in.",
        availability: "available",
        rooms: [{ id: "r115a", name: "Standard Room", capacity: 2, beds: "1 Double Bed", price: 2600, amenities: ["Free WiFi","Breakfast included"], available: true }],
        nearbyAttractions: [{ name: "Mahasthangarh", dist: "5 km" }],
        reviews: [{ name: "Jubayer H.", rating: 4, date: "Jan 2026", comment: "Good base for visiting Mahasthangarh ruins." }]
      },
      {
        id: 116, name: "Chimbuk Cloud Resort", district: "Bandarban", division: "Chattogram",
        location: "Chimbuk Hill", address: "Chimbuk Road, Bandarban Sadar",
        category: "Eco Lodge", starRating: 3, userRating: 4.3, reviewCount: 233,
        pricePerNight: 4900, distanceFromAttraction: 0.3,
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        gallery: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&q=80", "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&q=80"],
        desc: "Hillside cottages near Chimbuk viewpoint, with sweeping views over the winding hill roads.",
        facilities: ["wifi","restaurant","familyFriendly"],
        checkIn: "1:00 PM", checkOut: "11:00 AM",
        rules: ["No smoking indoors", "Roads can be foggy — drive carefully at night"],
        cancellation: "Free cancellation up to 3 days before check-in.",
        availability: "sold-out",
        rooms: [{ id: "r116a", name: "Hillview Cottage", capacity: 2, beds: "1 Double Bed", price: 4900, amenities: ["Mountain view","Balcony"], available: false }],
        nearbyAttractions: [{ name: "Chimbuk Hill", dist: "0.3 km" }, { name: "Nilgiri", dist: "12 km" }],
        reviews: [{ name: "Labonno P.", rating: 4, date: "Sep 2025", comment: "Gorgeous views, book well ahead as it fills up fast." }]
      }
    ];

    // ========== HOTEL STATE ==========
    let hotelFilteredList = [...HOTELS];
    let hotelSort = "recommended";
    let activeHotelFilters = { priceMin: null, priceMax: null, ratings: [], categories: [], amenities: [], distance: null, budgetCap: null, district: "", destination: "" };

    const AMENITY_META = {
      wifi: { label: "Free Wi-Fi", icon: "📶" },
      parking: { label: "Parking", icon: "🅿️" },
      pool: { label: "Swimming Pool", icon: "🏊" },
      restaurant: { label: "Restaurant", icon: "🍽️" },
      ac: { label: "Air Conditioning", icon: "❄️" },
      breakfast: { label: "Breakfast Included", icon: "🍳" },
      familyFriendly: { label: "Family Friendly", icon: "👨‍👩‍👧" },
      spa: { label: "Spa", icon: "💆" },
      gym: { label: "Gym", icon: "🏋️" }
    };

    function starString(n) {
      return "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n));
    }

    function money(n) {
      return "৳" + Number(n).toLocaleString("en-US");
    }

    function availabilityBadge(status) {
      if (status === "sold-out") return `<span class="avail-badge sold-out">Sold Out</span>`;
      if (status === "limited") return `<span class="avail-badge limited">Limited Rooms</span>`;
      return `<span class="avail-badge">Available</span>`;
    }

    // ========== INIT HOTEL SEARCH UI ==========
    function initHotelUI() {
      // District dropdown
      const districtSelect = document.getElementById("hsDistrict");
      const allDistricts = Object.values(DIVISIONS).flat().sort();
      districtSelect.innerHTML = `<option value="">All Districts</option>` +
        allDistricts.map(d => `<option value="${d}">${d}</option>`).join("");

      // Rating filter options
      document.getElementById("hfRating").innerHTML = [5,4,3].map(r => `
        <label class="hf-option">
          <input type="checkbox" value="${r}" data-group="ratings" />
          <span class="stars">${starString(r)}</span> &amp; up
        </label>`).join("");

      // Category filter options
      document.getElementById("hfCategory").innerHTML = HOTEL_CATEGORIES.map(c => `
        <label class="hf-option">
          <input type="checkbox" value="${c}" data-group="categories" /> ${c}
        </label>`).join("");

      // Amenity filter options
      document.getElementById("hfAmenities").innerHTML = Object.entries(AMENITY_META).map(([key, m]) => `
        <label class="hf-option">
          <input type="checkbox" value="${key}" data-group="amenities" /> ${m.icon} ${m.label}
        </label>`).join("");

      // Distance filter options
      document.getElementById("hfDistance").innerHTML = [
        { v: 1, l: "Within 1 km" }, { v: 5, l: "Within 5 km" }, { v: 15, l: "Within 15 km" }
      ].map(d => `
        <label class="hf-option">
          <input type="radio" name="hfDistanceRadio" value="${d.v}" /> ${d.l}
        </label>`).join("");

      document.getElementById("hotelSearchForm").addEventListener("submit", e => {
        e.preventDefault();
        runHotelSearch();
      });

      document.getElementById("hotelSort").addEventListener("change", e => {
        hotelSort = e.target.value;
        renderHotelsGrid();
      });

      // Set sensible default dates (today / tomorrow)
      const today = new Date();
      const tomorrow = new Date(today.getTime() + 86400000);
      document.getElementById("hsCheckin").value = today.toISOString().slice(0, 10);
      document.getElementById("hsCheckout").value = tomorrow.toISOString().slice(0, 10);
      document.getElementById("hsCheckin").min = today.toISOString().slice(0, 10);
    }

    function showHotels() {
      document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
      document.getElementById("hotelsView").classList.add("active");
      runHotelSearch();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function runHotelSearch() {
      activeHotelFilters.district = document.getElementById("hsDistrict").value;
      activeHotelFilters.destination = document.getElementById("hsDestination").value.trim().toLowerCase();
      const budget = document.getElementById("hsBudget").value;
      activeHotelFilters.budgetCap = budget ? Number(budget) : null;
      computeHotelResults();
    }

    function clearHotelFilters() {
      document.getElementById("hfPriceMin").value = "";
      document.getElementById("hfPriceMax").value = "";
      document.querySelectorAll('#hfRating input, #hfCategory input, #hfAmenities input').forEach(el => el.checked = false);
      document.querySelectorAll('#hfDistance input').forEach(el => el.checked = false);
      activeHotelFilters.priceMin = null;
      activeHotelFilters.priceMax = null;
      activeHotelFilters.ratings = [];
      activeHotelFilters.categories = [];
      activeHotelFilters.amenities = [];
      activeHotelFilters.distance = null;
      computeHotelResults();
    }

    function applyHotelFilters() {
      const priceMin = document.getElementById("hfPriceMin").value;
      const priceMax = document.getElementById("hfPriceMax").value;
      activeHotelFilters.priceMin = priceMin ? Number(priceMin) : null;
      activeHotelFilters.priceMax = priceMax ? Number(priceMax) : null;
      activeHotelFilters.ratings = [...document.querySelectorAll('#hfRating input:checked')].map(el => Number(el.value));
      activeHotelFilters.categories = [...document.querySelectorAll('#hfCategory input:checked')].map(el => el.value);
      activeHotelFilters.amenities = [...document.querySelectorAll('#hfAmenities input:checked')].map(el => el.value);
      const distEl = document.querySelector('#hfDistance input:checked');
      activeHotelFilters.distance = distEl ? Number(distEl.value) : null;
      computeHotelResults();
    }

    function computeHotelResults() {
      const f = activeHotelFilters;
      let list = HOTELS.filter(h => {
        if (f.district && h.district !== f.district) return false;
        if (f.destination && !(h.location.toLowerCase().includes(f.destination) || h.name.toLowerCase().includes(f.destination) || h.district.toLowerCase().includes(f.destination))) return false;
        if (f.budgetCap && h.pricePerNight > f.budgetCap) return false;
        if (f.priceMin && h.pricePerNight < f.priceMin) return false;
        if (f.priceMax && h.pricePerNight > f.priceMax) return false;
        if (f.ratings.length && !f.ratings.some(r => h.userRating >= r)) return false;
        if (f.categories.length && !f.categories.includes(h.category)) return false;
        if (f.amenities.length && !f.amenities.every(a => h.facilities.includes(a))) return false;
        if (f.distance && h.distanceFromAttraction > f.distance) return false;
        return true;
      });
      hotelFilteredList = list;
      const titleParts = [];
      if (f.district) titleParts.push(f.district);
      document.getElementById("hotelResultsTitle").textContent = titleParts.length ? `Hotels in ${titleParts.join(", ")}` : "All Hotels";
      renderHotelsGrid();
    }

    function sortHotels(list) {
      const arr = [...list];
      switch (hotelSort) {
        case "price-asc": return arr.sort((a, b) => a.pricePerNight - b.pricePerNight);
        case "price-desc": return arr.sort((a, b) => b.pricePerNight - a.pricePerNight);
        case "rating-desc": return arr.sort((a, b) => b.userRating - a.userRating);
        case "star-desc": return arr.sort((a, b) => b.starRating - a.starRating);
        default: return arr.sort((a, b) => (b.userRating * b.starRating) - (a.userRating * a.starRating));
      }
    }

    function renderHotelsGrid() {
      const grid = document.getElementById("hotelsGrid");
      const empty = document.getElementById("hotelsEmpty");
      const list = sortHotels(hotelFilteredList);
      if (list.length === 0) {
        grid.innerHTML = "";
        empty.style.display = "block";
        return;
      }
      empty.style.display = "none";
      grid.innerHTML = list.map((h, i) => hotelCardHTML(h, i)).join("");
    }

    function hotelCardHTML(h, i) {
      const facIcons = h.facilities.slice(0, 4).map(f => `<span>${AMENITY_META[f] ? AMENITY_META[f].icon + " " + AMENITY_META[f].label : f}</span>`).join("");
      return `
        <div class="hotel-card" style="--i:${i}">
          <div class="img-wrap">
            <img src="${h.img}" alt="${h.name}" loading="lazy" />
            ${availabilityBadge(h.availability)}
            <span class="star-badge">${"★".repeat(h.starRating)}</span>
          </div>
          <div class="body">
            <span class="cat-tag">${h.category}</span>
            <h3>${h.name}</h3>
            <div class="loc-line">📍 ${h.location}, ${h.district}</div>
            <div class="rating-line">
              <span class="user-rating">${h.userRating.toFixed(1)}</span>
              <span class="review-count">${h.reviewCount.toLocaleString()} reviews</span>
            </div>
            <div class="room-type-line">${h.rooms[0].name} · ${h.rooms.length} room type${h.rooms.length > 1 ? "s" : ""}</div>
            <div class="facility-icons">${facIcons}</div>
            <div class="price-row">
              <div class="price-block">
                <strong>${money(h.pricePerNight)}</strong>
                <span class="per-night">per night</span>
              </div>
            </div>
            <div class="card-btns">
              <button class="btn btn-outline" onclick="openHotelDetail(${h.id})">View Details</button>
              <button class="btn btn-primary" onclick="startBooking(${h.id})" ${h.availability === "sold-out" ? "disabled" : ""}>Book Now</button>
            </div>
          </div>
        </div>`;
    }

    // ========== HOTEL DETAIL ==========
    let currentGalleryHotel = null;
    let currentGalleryIndex = 0;

    function openHotelDetail(id) {
      const h = HOTELS.find(x => x.id === id);
      if (!h) return;
      document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
      document.getElementById("hotelDetailView").classList.add("active");

      const mapQuery = encodeURIComponent(`${h.location}, ${h.district}, Bangladesh`);

      document.getElementById("hotelDetailContent").innerHTML = `
        <div class="hotel-detail-hero">
          <img src="${h.img}" alt="${h.name}" />
          <div class="overlay">
            <span class="div-tag">${h.category} · ${"★".repeat(h.starRating)}</span>
            <h1>${h.name}</h1>
            <div class="hd-meta">
              <span>📍 ${h.location}, ${h.district}</span>
              <span>⭐ ${h.userRating.toFixed(1)} (${h.reviewCount.toLocaleString()} reviews)</span>
              ${availabilityBadge(h.availability)}
            </div>
          </div>
        </div>

        <div class="gallery-strip">
          ${h.gallery.map((g, i) => `<img src="${g}" alt="Gallery image ${i+1}" onclick="openGallery(${h.id}, ${i})" />`).join("")}
        </div>

        <div class="hd-layout">
          <div class="hd-main">
            <div class="hd-section">
              <h3>About This Hotel</h3>
              <p>${h.desc}</p>
            </div>

            <div class="hd-section">
              <h3>Facilities</h3>
              <div class="amenity-grid">
                ${h.facilities.map(f => `<div class="amenity-item">${AMENITY_META[f] ? AMENITY_META[f].icon : "✓"} ${AMENITY_META[f] ? AMENITY_META[f].label : f}</div>`).join("")}
              </div>
            </div>

            <div class="hd-section">
              <h3>Location & Map</h3>
              <p style="margin-bottom:0.75rem">${h.address}</p>
              <div class="map-embed">
                <iframe loading="lazy" src="https://www.google.com/maps?q=${mapQuery}&output=embed"></iframe>
              </div>
            </div>

            <div class="hd-section">
              <h3>Room Types</h3>
              ${h.rooms.map(r => `
                <div class="room-type-card ${r.available ? "" : "unavailable"}">
                  <div class="rt-info">
                    <h4>${r.name}</h4>
                    <p>👥 Up to ${r.capacity} guests · 🛏️ ${r.beds}</p>
                    <div class="rt-amenities">${r.amenities.map(a => `<span>${a}</span>`).join("")}</div>
                  </div>
                  <div class="rt-price">
                    <strong>${money(r.price)}</strong>
                    <span class="per-night">per night</span>
                    <div style="margin-top:0.5rem">
                      <button class="btn btn-primary" style="padding:0.5rem 1rem;font-size:0.8rem" onclick="startBooking(${h.id}, '${r.id}')" ${r.available ? "" : "disabled"}>${r.available ? "Book Now" : "Unavailable"}</button>
                    </div>
                  </div>
                </div>`).join("")}
            </div>

            <div class="hd-section">
              <h3>Hotel Rules</h3>
              <ul class="rules-list">${h.rules.map(r => `<li>${r}</li>`).join("")}</ul>
              <p style="margin-top:0.9rem"><strong style="color:var(--text)">Check-in:</strong> ${h.checkIn} &nbsp;·&nbsp; <strong style="color:var(--text)">Check-out:</strong> ${h.checkOut}</p>
            </div>

            <div class="hd-section">
              <h3>Nearby Tourist Attractions</h3>
              ${h.nearbyAttractions.map(a => `<div class="nearby-attr-item"><span>📍 ${a.name}</span><span class="dist">${a.dist}</span></div>`).join("")}
            </div>

            <div class="hd-section">
              <h3>Guest Reviews (${h.reviewCount.toLocaleString()})</h3>
              ${h.reviews.map(r => `
                <div class="review-item">
                  <div class="rv-head">
                    <span class="rv-name">${r.name}</span>
                    <span class="rv-date">${r.date}</span>
                  </div>
                  <div class="stars">${starString(r.rating)}</div>
                  <p>${r.comment}</p>
                </div>`).join("")}
            </div>
          </div>

          <div class="hd-sidebar">
            <div class="booking-box">
              <div class="bb-price">${money(h.pricePerNight)} <span>/ night</span></div>
              <div class="loc-line">Starting price · ${h.rooms.filter(r=>r.available).length} room type${h.rooms.filter(r=>r.available).length !== 1 ? "s" : ""} available</div>
              <button class="btn btn-primary bb-cta" onclick="startBooking(${h.id})" ${h.availability === "sold-out" ? "disabled" : ""}>Book Now</button>
              <p class="bb-note">You won't be charged yet — this is a demo booking flow.</p>
            </div>
            <div class="policy-box">
              <h4>🛡️ Cancellation Policy</h4>
              <p>${h.cancellation}</p>
            </div>
          </div>
        </div>
      `;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function openGallery(hotelId, index) {
      currentGalleryHotel = HOTELS.find(h => h.id === hotelId);
      currentGalleryIndex = index;
      renderGallery();
      document.getElementById("galleryModal").classList.add("open");
    }

    function renderGallery() {
      if (!currentGalleryHotel) return;
      const g = currentGalleryHotel.gallery;
      document.getElementById("galleryImg").src = g[currentGalleryIndex];
      document.getElementById("galleryCount").textContent = `${currentGalleryIndex + 1} / ${g.length}`;
    }

    function galleryStep(dir) {
      if (!currentGalleryHotel) return;
      const len = currentGalleryHotel.gallery.length;
      currentGalleryIndex = (currentGalleryIndex + dir + len) % len;
      renderGallery();
    }

    function closeGallery() {
      document.getElementById("galleryModal").classList.remove("open");
    }

    // ========== BOOKING FLOW ==========
    let booking = {
      hotel: null, room: null, checkIn: "", checkOut: "", guests: 2, rooms: 1,
      guestInfo: { fullName: "", email: "", phone: "", guestCount: 2, requests: "" },
      step: 1
    };

    function startBooking(hotelId, preselectRoomId) {
      const h = HOTELS.find(x => x.id === hotelId);
      if (!h) return;
      booking = {
        hotel: h,
        room: preselectRoomId ? h.rooms.find(r => r.id === preselectRoomId) : null,
        checkIn: document.getElementById("hsCheckin") ? document.getElementById("hsCheckin").value : "",
        checkOut: document.getElementById("hsCheckout") ? document.getElementById("hsCheckout").value : "",
        guests: Number(document.getElementById("hsGuests") ? document.getElementById("hsGuests").value : 2) || 2,
        rooms: Number(document.getElementById("hsRooms") ? document.getElementById("hsRooms").value : 1) || 1,
        guestInfo: { fullName: "", email: "", phone: "", guestCount: 2, requests: "" },
        step: 1
      };
      document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
      document.getElementById("bookingView").classList.add("active");
      document.getElementById("bookingBackBtn").onclick = () => openHotelDetail(h.id);
      renderBookingStep();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function nightsBetween(a, b) {
      const d1 = new Date(a), d2 = new Date(b);
      const diff = Math.round((d2 - d1) / 86400000);
      return diff > 0 ? diff : 1;
    }

    function updateStepIndicator() {
      [1, 2, 3].forEach(n => {
        const el = document.getElementById("bStep" + n);
        el.classList.remove("active", "done");
        if (n < booking.step) el.classList.add("done");
        if (n === booking.step) el.classList.add("active");
      });
    }

    function renderBookingStep() {
      updateStepIndicator();
      const content = document.getElementById("bookingContent");
      const h = booking.hotel;
      if (booking.step === 1) {
        content.innerHTML = `
          <div class="booking-panel">
            <h2>Select a Room — ${h.name}</h2>
            <div class="form-grid" style="margin-bottom:1.25rem">
              <div class="form-field"><label>Check-in</label><input type="date" id="bkCheckin" value="${booking.checkIn}" /></div>
              <div class="form-field"><label>Check-out</label><input type="date" id="bkCheckout" value="${booking.checkOut}" /></div>
              <div class="form-field"><label>Guests</label><input type="number" id="bkGuests" min="1" value="${booking.guests}" /></div>
              <div class="form-field"><label>Rooms</label><input type="number" id="bkRooms" min="1" value="${booking.rooms}" /></div>
            </div>
            ${h.rooms.map(r => `
              <div class="room-select-card ${booking.room && booking.room.id === r.id ? "selected" : ""} ${r.available ? "" : "unavailable"}" onclick="${r.available ? `selectRoom('${r.id}')` : ""}">
                <div class="rt-info">
                  <h4>${r.name}</h4>
                  <p>👥 Up to ${r.capacity} guests · 🛏️ ${r.beds}${r.available ? "" : " · Sold out"}</p>
                  <div class="rt-amenities">${r.amenities.map(a => `<span>${a}</span>`).join("")}</div>
                </div>
                <div class="rt-price"><strong>${money(r.price)}</strong><span class="per-night">per night</span></div>
              </div>`).join("")}
            <div class="booking-actions">
              <span></span>
              <button class="btn btn-primary" onclick="goToStep2()">Continue →</button>
            </div>
          </div>`;
      } else if (booking.step === 2) {
        const g = booking.guestInfo;
        content.innerHTML = `
          <div class="booking-panel">
            <h2>Guest Information</h2>
            <div class="form-grid">
              <div class="form-field" id="fFullName">
                <label>Full Name *</label>
                <input type="text" id="gFullName" value="${g.fullName}" placeholder="e.g. Tanvin Ahmed" />
                <span class="field-error">Please enter your full name.</span>
              </div>
              <div class="form-field" id="fEmail">
                <label>Email *</label>
                <input type="email" id="gEmail" value="${g.email}" placeholder="you@example.com" />
                <span class="field-error">Please enter a valid email address.</span>
              </div>
              <div class="form-field" id="fPhone">
                <label>Phone Number *</label>
                <input type="tel" id="gPhone" value="${g.phone}" placeholder="01XXXXXXXXX" />
                <span class="field-error">Please enter a valid phone number.</span>
              </div>
              <div class="form-field" id="fGuestCount">
                <label>Number of Guests *</label>
                <input type="number" id="gGuestCount" min="1" value="${g.guestCount || booking.guests}" />
                <span class="field-error">Please enter at least 1 guest.</span>
              </div>
              <div class="form-field full">
                <label>Special Requests (optional)</label>
                <textarea id="gRequests" rows="3" placeholder="e.g. Early check-in, extra bed, dietary needs...">${g.requests}</textarea>
              </div>
            </div>
            <div class="booking-actions">
              <button class="btn btn-outline" onclick="goToStep1()">← Back</button>
              <button class="btn btn-primary" onclick="goToStep3()">Continue →</button>
            </div>
          </div>`;
      } else if (booking.step === 3) {
        const nights = nightsBetween(booking.checkIn, booking.checkOut);
        const roomTotal = booking.room.price * nights * booking.rooms;
        const taxes = Math.round(roomTotal * 0.075);
        const total = roomTotal + taxes;
        content.innerHTML = `
          <div class="booking-panel">
            <h2>Confirm Your Booking</h2>
            <div class="summary-card">
              <div class="summary-row"><span class="label">Hotel</span><span>${h.name}</span></div>
              <div class="summary-row"><span class="label">Room Type</span><span>${booking.room.name}</span></div>
              <div class="summary-row"><span class="label">Check-in</span><span>${booking.checkIn}</span></div>
              <div class="summary-row"><span class="label">Check-out</span><span>${booking.checkOut}</span></div>
              <div class="summary-row"><span class="label">Nights</span><span>${nights}</span></div>
              <div class="summary-row"><span class="label">Rooms</span><span>${booking.rooms}</span></div>
              <div class="summary-row"><span class="label">Guest</span><span>${booking.guestInfo.fullName}</span></div>
              <div class="summary-row"><span class="label">Email</span><span>${booking.guestInfo.email}</span></div>
              <div class="summary-row"><span class="label">Phone</span><span>${booking.guestInfo.phone}</span></div>
              ${booking.guestInfo.requests ? `<div class="summary-row"><span class="label">Special Requests</span><span>${booking.guestInfo.requests}</span></div>` : ""}
              <div class="summary-row"><span class="label">Room Total</span><span>${money(roomTotal)}</span></div>
              <div class="summary-row"><span class="label">Taxes & Fees (7.5%)</span><span>${money(taxes)}</span></div>
              <div class="summary-row total"><span class="label">Total Amount</span><span>${money(total)}</span></div>
            </div>
            <p style="font-size:0.8rem;color:var(--muted);margin-bottom:1rem">By confirming, you agree to this hotel's cancellation policy: ${h.cancellation}</p>
            <div class="booking-actions">
              <button class="btn btn-outline" onclick="goToStep2()">← Back</button>
              <button class="btn btn-primary" onclick="confirmBooking()">✓ Confirm Booking</button>
            </div>
          </div>`;
      }
    }

    function selectRoom(roomId) {
      booking.room = booking.hotel.rooms.find(r => r.id === roomId);
      renderBookingStep();
    }

    function goToStep1() {
      booking.step = 1;
      renderBookingStep();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function goToStep2() {
      booking.checkIn = document.getElementById("bkCheckin").value || booking.checkIn;
      booking.checkOut = document.getElementById("bkCheckout").value || booking.checkOut;
      booking.guests = Number(document.getElementById("bkGuests").value) || booking.guests;
      booking.rooms = Number(document.getElementById("bkRooms").value) || booking.rooms;
      if (!booking.room) {
        alert("Please select a room type to continue.");
        return;
      }
      booking.step = 2;
      renderBookingStep();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function goToStep3() {
      const fullName = document.getElementById("gFullName").value.trim();
      const email = document.getElementById("gEmail").value.trim();
      const phone = document.getElementById("gPhone").value.trim();
      const guestCount = document.getElementById("gGuestCount").value;
      const requests = document.getElementById("gRequests").value.trim();

      let valid = true;
      const setError = (fieldId, hasError) => {
        document.getElementById(fieldId).classList.toggle("has-error", hasError);
        if (hasError) valid = false;
      };
      setError("fFullName", fullName.length < 2);
      setError("fEmail", !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
      setError("fPhone", !/^[0-9+\-\s]{7,15}$/.test(phone));
      setError("fGuestCount", !guestCount || Number(guestCount) < 1);

      if (!valid) return;

      booking.guestInfo = { fullName, email, phone, guestCount: Number(guestCount), requests };
      booking.step = 3;
      renderBookingStep();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function generateBookingId() {
      const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
      return `BDT-${new Date().getFullYear()}-${rand}`;
    }

    function confirmBooking() {
      const nights = nightsBetween(booking.checkIn, booking.checkOut);
      const roomTotal = booking.room.price * nights * booking.rooms;
      const taxes = Math.round(roomTotal * 0.075);
      const total = roomTotal + taxes;
      const bookingId = generateBookingId();
      const h = booking.hotel;

      document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
      document.getElementById("confirmationView").classList.add("active");
      document.getElementById("confirmationContent").innerHTML = `
        <div class="confirmation-wrap">
          <div class="confirm-icon">✅</div>
          <h1 class="confirm-title">Booking Confirmed!</h1>
          <p class="confirm-sub">This is a simulated demo booking — no payment was processed and no real hotel inventory was reserved.</p>
          <div class="confirm-card">
            <div class="confirm-id-row">
              <span class="cid">${bookingId}</span>
              <span class="confirm-status">Confirmed</span>
            </div>
            <div class="summary-row"><span class="label">Hotel</span><span>${h.name}</span></div>
            <div class="summary-row"><span class="label">Location</span><span>${h.location}, ${h.district}</span></div>
            <div class="summary-row"><span class="label">Room Type</span><span>${booking.room.name}</span></div>
            <div class="summary-row"><span class="label">Check-in</span><span>${booking.checkIn}</span></div>
            <div class="summary-row"><span class="label">Check-out</span><span>${booking.checkOut}</span></div>
            <div class="summary-row"><span class="label">Nights</span><span>${nights}</span></div>
            <div class="summary-row"><span class="label">Rooms</span><span>${booking.rooms}</span></div>
            <div class="summary-row"><span class="label">Guest Name</span><span>${booking.guestInfo.fullName}</span></div>
            <div class="summary-row"><span class="label">Email</span><span>${booking.guestInfo.email}</span></div>
            <div class="summary-row"><span class="label">Phone</span><span>${booking.guestInfo.phone}</span></div>
            <div class="summary-row"><span class="label">Number of Guests</span><span>${booking.guestInfo.guestCount}</span></div>
            ${booking.guestInfo.requests ? `<div class="summary-row"><span class="label">Special Requests</span><span>${booking.guestInfo.requests}</span></div>` : ""}
            <div class="summary-row total"><span class="label">Total Amount</span><span>${money(total)}</span></div>
          </div>
          <div class="confirm-actions">
            <button class="btn btn-outline" onclick="window.print()">🖨️ Print / Save</button>
            <button class="btn btn-primary" onclick="showHotels()">Browse More Hotels</button>
          </div>
        </div>`;
      window.scrollTo({ top: 0, behavior: "smooth" });
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

    document.getElementById("galleryModal").addEventListener("click", e => {
      if (e.target === document.getElementById("galleryModal")) closeGallery();
    });

    // Init
    initTheme();
    document.getElementById("themeToggle").addEventListener("click", toggleTheme);
    renderDistricts();
    initHotelUI();
