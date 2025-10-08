const stateInfo = {
  Maharashtra: {
    info: `महाराष्ट्र म्हणजे आपलं home ground. आपण इथेच जन्मलो, राहिलो आणि main म्हणजे पहिल्यांदा भेटलो. 
            <br /><br />मुंबई तर आपलीच! लोणावळा, नाशिक bike ride आपण केलीये, पुणे ही फिरलोय, आणि थोडंफार कोकण, सातारा, कोल्हापूर ही पाहिलंय.
            <br /><br />पण विविध संस्कृतीने भरलेला हा महाराष्ट्र देश आपल्याला अजूनही explore करायचाय.अजून खूप काही बघायचं बाकी आहे यार! या राज्याचा उरलेला भाग, तिथली वेगळी संस्कृती, गड-किल्ले, निसर्गरम्यता... 
            <br /><br />सगळं काही तुझ्यासोबत बघायची खूप इच्छा आहे. लवकरच plan करूया!`,
    title: "महाराष्ट्र",
    //images of already visited places
    images: [
      {
        link: "./Maharashtra/home.jpeg",
        title: "Home Sweet Home",
      },
      {
        link: "./Maharashtra/lonavla.jpeg",
        title: "Lonavala Ride",
      },
      {
        link: "./Maharashtra/pune.jpeg",
        title: "Pune Camping",
      },
      {
        link: "./Maharashtra/nashik.mp4",
        title: "Nashik Visit",
        isVideo: true,
      },
      {
        link: "./Maharashtra/alibag.jpeg",
        title: "Celebration at Alibaug",
      },
      {
        link: "./Maharashtra/marines.jpeg",
        title: "Marine Lines",
      },
      {
        link: "./Maharashtra/parle.jpeg",
        title: "Deenanath Mangeshkar Natyagriha",
      },
      {
        link: "./Maharashtra/miraroad.jpeg",
        title: "Dinner Date at Dharas",
      },
    ],
    thingsToDo: [
      {
        name: "Ajanta & Ellora Caves, Aurangabad",
        description:
          "UNESCO World Heritage Sites famous for ancient Buddhist, Hindu, and Jain rock-cut caves, murals, and sculptures dating back to the 2nd century BCE.",
        images: [
          {
            title: "Ajanta and Ellora Caves at Aurangabad, Maharashtra",
            link: "https://upload.wikimedia.org/wikipedia/commons/d/da/Ajanta_and_ellora_caves_at_aurangabad%2Cmaharashtra.jpg",
          },
        ],
      },
      {
        name: "Bibi Ka Maqbara, Aurangabad",
        description:
          "Often called the 'Taj of the Deccan', this mausoleum was built by Aurangzeb’s son Azam Shah in memory of his mother.",
        images: [
          {
            title: "Night view of Bibi-Ka-Maqbara, Aurangabad, Maharashtra",
            link: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Bibi-Ka-Maqbara%2C_Aurangabad%2C_Maharashtra-Night_View-01.jpg",
          },
        ],
      },
      {
        name: "Tadoba Andhari Tiger Reserve, Chandrapur",
        description:
          "Maharashtra’s oldest and largest national park, home to tigers, leopards, sloth bears, and diverse bird species. A paradise for wildlife enthusiasts.",
        images: [
          {
            title: "Tigers in the jungle at Tadoba Andhari Tiger Reserve",
            link: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Tigers_in_the_jungle.jpg",
          },
        ],
      },
      {
        name: "Nagzira Wildlife Sanctuary, Bhandara-Gondia",
        description:
          "A scenic forest reserve in Vidarbha with rich biodiversity, often called the 'Green Oasis of Vidarbha'.",
        images: [
          {
            title: "Morning Delight In The Wild at Nagzira Wildlife Sanctuary",
            link: "https://upload.wikimedia.org/wikipedia/commons/7/72/Morning_Delight_In_The_Wild.jpg",
          },
        ],
      },
      {
        name: "Lonar Lake, Buldhana",
        description:
          "A unique crater lake formed by a meteorite impact around 52,000 years ago. Known for its saline and alkaline water ecosystem.",
        images: [
          {
            title: "Lonar Lake Buldhana Maharashtra",
            link: "https://upload.wikimedia.org/wikipedia/commons/0/05/Lonar_Lake_view.jpg",
          },
        ],
      },
      {
        name: "Chikhaldara, Amravati",
        description:
          "The only hill station in Vidarbha, known for cool weather, coffee plantations, Melghat Tiger Reserve, and beautiful viewpoints.",
        images: [
          {
            title:
              "Natural Heritage at Bheemkund, Chikhaldara, Amravati, Maharashtra",
            link: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Bhimkund%2C_Chikhaldara%2C_Amravati%2C_Maharashtra.jpg",
          },
        ],
      },
      {
        name: "Markanda Temple Complex, Gadchiroli",
        description:
          "An ancient temple town on the banks of the Wainganga River, often called 'Mini Khajuraho' of Vidarbha for its intricate carvings.",
        images: [
          {
            title: "Markanda Mahadev Temple Complex in Gadchiroli, Maharashtra",
            link: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Markanda_temples10-Gadchiroli-Maharashtra.jpg",
          },
          {
            title:
              "Markandi temples and ruins, Uma Shankar temple, Markanda Maharashtra",
            link: "https://upload.wikimedia.org/wikipedia/commons/a/a6/0011823_Markandi_temples_and_ruins%2C_Uma_Shankar_temple%2C_Markanda_Maharastra_009.jpg",
          },
        ],
      },
      {
        name: "Bhandardara",
        description:
          "A tranquil hill station known for Arthur Lake, Randha Falls, and Wilson Dam. Popular for camping and stargazing at night.",
        images: [
          {
            title: "Bhandardara lake (Arthur lake)",
            link: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Bhandardara_lake_%28Arthur_lake%29_%286714130573%29.jpg",
          },
        ],
      },
      {
        name: "Sindhudurg Fort, Malvan",
        description:
          "A sea fort built by Chhatrapati Shivaji Maharaj on an island, known for its strategic location and scuba diving experiences nearby.",
        images: [
          {
            title: "Sindhudurg fort with sea",
            link: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Sindhudurg_fort_with_sea.jpg",
          },
        ],
      },
      {
        name: "Pench Tiger Reserve, Nagpur",
        description:
          "Spread across Maharashtra and Madhya Pradesh, this reserve inspired Kipling’s Jungle Book and is known for tigers and rich biodiversity.",
        images: [
          {
            title: "Jungle Owlet (Glaucidium radiatum) at Pench Tiger Reserve",
            link: "https://upload.wikimedia.org/wikipedia/commons/4/40/Jungle_Owlet_%28Glaucidium_radiatum%29.jpg",
          },
        ],
      },
    ],
  },
  Rajasthan: {
    info: "Rajasthan, the land of kings, is renowned for its majestic forts, opulent palaces, and vibrant desert culture. From the pink city of Jaipur to the golden sands of Jaisalmer, the state is a tapestry of history, art, and traditions. Experience royal hospitality, colorful festivals, and the charm of the Thar Desert.",
    title: "Rajasthan",
    thingsToDo: [
      {
        name: "Amber Fort, Jaipur",
        description:
          "A magnificent hill fort and UNESCO World Heritage Site known for its Rajput architecture, intricate mirror work, and scenic views.",
        images: [
          {
            title: "Amber Fort on the hills of Jaipur",
            link: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Amber_Fort_on_the_hills_of_Jaipur.JPG",
          },
        ],
      },
      {
        name: "Jaisalmer Fort, Jaisalmer",
        description:
          "A living fort in the Thar Desert, also known as Sonar Quila, famous for its golden sandstone architecture and vibrant markets.",
        images: [
          {
            title:
              "Jaisalmer Fort (Sonar Qila or Golden Fort) Viewed from the North at Sunrise",
            link: "https://upload.wikimedia.org/wikipedia/commons/8/80/Jaisalmer_Fort_%28Sonar_Qila_or_Golden_Fort%29_Viewed_from_the_North_at_Sunrise.jpg",
          },
        ],
      },
      {
        name: "Mehrangarh Fort, Jodhpur",
        description:
          "One of India’s largest forts, perched on a hill, offering panoramic views and housing a museum with royal artifacts.",
        images: [
          {
            title: "Mehrangarh Fort located in Jodhpur, Rajasthan",
            link: "https://upload.wikimedia.org/wikipedia/commons/7/70/Mehrangarh_Fort_-_Jodhpur_1.jpg",
          },
        ],
      },
      {
        name: "Pushkar Lake and Brahma Temple, Pushkar",
        description:
          "A sacred lake surrounded by 52 ghats, famous for the annual Pushkar Camel Fair and one of the few temples dedicated to the Hindu creator god, Brahma.",
        images: [
          {
            title:
              "Devotees gathering for holy bath at Brambha Temple surrounded by Pushkar Lake",
            link: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Brambha_Temple-Pushkar.jpg",
          },
        ],
      },
      {
        name: "Ranthambore National Park, Sawai Madhopur",
        description:
          "A premier tiger reserve with a historic fort, known for its biodiversity and wildlife safaris.",
        images: [
          {
            title: "Ranthambore National Park",
            link: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Ranthambore_National_Park.JPG",
          },
        ],
      },
      {
        name: "Hawa Mahal (Palace of Winds), Jaipur",
        description:
          "An iconic five-story palace with an intricate facade of 953 windows, built to allow royal ladies to observe street festivals while remaining unseen.",
        images: [
          {
            title:
              "Hawa Mahal Palace (Palace of Winds), famous landmark of Jaipur",
            link: "https://upload.wikimedia.org/wikipedia/commons/1/14/Hawa_Mahal_Palace_%28Palace_of_Winds%29%2C_famous_landmark_of_Jaipur.jpg",
          },
        ],
      },
      {
        name: "City Palace, Udaipur",
        description:
          "A breathtaking fusion of Rajasthani and Mughal architecture on the banks of Lake Pichola, showcasing grand courtyards and adorned rooms.",
        images: [
          {
            title: "City Palace, Udaipur",
            link: "https://upload.wikimedia.org/wikipedia/commons/4/4d/City_palace%2C_Udaipur.JPG",
          },
        ],
      },
      {
        name: "City Palace, Jaipur",
        description:
          "A majestic complex in the old city, which includes the Chandra Mahal and Mubarak Mahal, and still houses the royal family.",
        images: [
          {
            title: "Chandra Mahal in City Palace, Jaipur",
            link: "https://upload.wikimedia.org/wikipedia/commons/5/55/The_City_Palace%2C_Jaipur.jpg",
          },
        ],
      },
      {
        name: "Udaipur's Lake Pichola",
        description:
          "An artificial freshwater lake in the heart of Udaipur, famous for its tranquility and the island palaces like Jag Mandir and Jag Niwas (Lake Palace).",
        images: [
          {
            title: "Backside view of City Palace on Lake Pichola, Udaipur",
            link: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Backside_view_of_City_palace_%28Lake_Pichola%2C_Udaipur%29.jpg",
          },
        ],
      },
      {
        name: "Chittorgarh Fort, Chittorgarh",
        description:
          "One of the largest forts in India and a UNESCO World Heritage Site, which epitomizes the Rajput spirit of valor and romance.",
        images: [
          {
            title: "Chittorgarh Fort, a famous monument of India",
            link: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Chittorgarh_fort.JPG",
          },
        ],
      },
      {
        name: "Keoladeo Ghana National Park (Bharatpur Bird Sanctuary), Bharatpur",
        description:
          "A famous UNESCO World Heritage Site and a man-made wetland, home to hundreds of species of migratory and resident birds.",
        images: [
          {
            title:
              "Snakebird (Darter) in Bharatpur Bird Sanctuary, Rajasthan, India",
            link: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Snake_bird_of_Bharatpur_Bird_Sanctuary_in_Bharatpur%2C_Rajasthan.jpg",
          },
        ],
      },
      {
        name: "Jantar Mantar, Jaipur",
        description:
          "The largest stone astronomical observatory in the world and a UNESCO World Heritage Site, featuring giant instruments for measuring time and studying celestial bodies.",
        images: [
          {
            title:
              "Jantar Mantar at Jaipur showing smaller architectural sundials from the observation platform",
            link: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Jantar_Mantar_at_Jaipur.jpg",
          },
        ],
      },
      {
        name: "Umaid Bhawan Palace, Jodhpur",
        description:
          "One of the world's largest private residences, a magnificent blend of Eastern and Western architectural styles, with a part of it still serving as the royal family's home and another as a heritage hotel.",
        images: [
          {
            title: "Umaid Bhawan Palace, Jodhpur",
            link: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Umaid_Bhawan%2C_Jodhpur.jpg",
          },
        ],
      },
      {
        name: "Sajjangarh Palace (Monsoon Palace), Udaipur",
        description:
          "Perched on a hill, it offers panoramic views of the city and its lakes, originally built to watch the monsoon clouds.",
        images: [
          {
            title:
              "Sajjangarh Monsoon Palace at dusk, Udaipur, Rajasthan, India",
            link: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Sajjangarh_Monsoon_Palace_at_dusk%2C_Udaipur%2C_Rajasthan%2C_India.jpg",
          },
        ],
      },
      {
        name: "Neemrana Fort Palace, Neemrana",
        description:
          "A historic palace fort, once the seat of power of the Chauhan Rajputs, now developed as a heritage resort.",
        images: [
          {
            title: "Neemrana Fort-Palace",
            link: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Neemrana_fort.jpg",
          },
        ],
      },
      {
        name: "Bundi",
        description:
          "A picturesque town known as the 'City of Stepwells' (Baoris), dotted with palaces and forts for a quiet vacation.",
        images: [
          {
            title: "Bundi City in Rajasthan, India",
            link: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Bundi_l_Rajasthan.jpg",
          },
        ],
      },
      {
        name: "Mount Abu",
        description:
          "The only hill station in Rajasthan, offering stunning landscapes and a cool climate, home to the Dilwara Jain Temples.",
        images: [
          {
            title: "Mount Abu, Rajasthan",
            link: "https://upload.wikimedia.org/wikipedia/commons/5/55/Mount_Abu_Rajasthan%2C.jpg",
          },
        ],
      },
      {
        name: "Bikaner",
        description:
          "Often called 'Camel Country,' known for its Junagarh Fort, the Karni Mata Temple, and the annual Camel Festival.",
        images: [
          {
            title: "Lalgarh Palace in Bikaner",
            link: "https://upload.wikimedia.org/wikipedia/commons/l/la/Lalgarh_palace_bikaner2.jpg",
          },
        ],
      },
      {
        name: "Ajmer",
        description:
          "A city with the holy shrine of Khwaja Muin-ud-din Chishti at its heart, a significant cultural and historical center.",
        images: [
          {
            title: "Adhai Din Ka Jhonpra Mosque in Ajmer, Rajasthan, India",
            link: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Adhai_Din_Ka_Jhonpra%2C_Ajmer_Rajasthan%2C_INDIA.jpg",
          },
        ],
      },
      {
        name: "Kumbhalgarh Fort, Rajsamand",
        description:
          "A massive fort and UNESCO World Heritage Site with the second-longest continuous wall in the world after the Great Wall of China.",
        images: [
          {
            title:
              "View of the main corner dome of Badal Mahal at Kumbhalgarh Fort, Rajasthan",
            link: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Kumbhalgarh_Fort%2C_Rajasthan_01.jpg",
          },
        ],
      },
      {
        name: "Ranakpur Jain Temple, Ranakpur",
        description:
          "A prominent 15th-century religious landmark known for its remarkable and intricate architecture, dedicated to Rishabhanatha.",
        images: [
          {
            title:
              "Chaumukha Jain temple at Ranakpur in Aravalli range near Udaipur Rajasthan India",
            link: "https://upload.wikimedia.org/wikipedia/commons/8/86/Chaumukha_Jain_temple_at_Ranakpur_in_Aravalli_range_near_Udaipur_Rajasthan_India.jpg",
          },
        ],
      },
      {
        name: "Nahargarh Fort, Jaipur",
        description:
          "Overlooking the Pink City, this fort offers panoramic views and a glimpse into the region's martial history.",
        images: [
          {
            title: "Nahargarh Fort overlooking the city of Jaipur, India",
            link: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Nahargarh_Fort_-_Jaipur_-_India.jpg",
          },
        ],
      },
      {
        name: "Sariska Tiger Reserve, Alwar",
        description:
          "A renowned wildlife reserve nestled amidst the Aravalli Hills, home to a diverse variety of wildlife species.",
        images: [
          {
            title: "Neel Gai or Blue Bull in Sariska Tiger Reserve",
            link: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Sariska_Tiger_Reserve-002.jpg",
          },
        ],
      },
    ],
  },
  "Jammu and Kashmir": {
    info: "Jammu and Kashmir, often called 'Paradise on Earth', is a union territory renowned for its breathtaking landscapes, from the snow-capped Himalayas of Kashmir to the rugged terrains of Ladakh and the serene hills of Jammu. Discover floating houseboats on Dal Lake, ancient temples, lush meadows, high-altitude lakes, and vibrant cultural heritage amid stunning natural beauty.",
    title: "Jammu and Kashmir",
    thingsToDo: [
      {
        name: "Dal Lake, Srinagar",
        description:
          "An iconic urban lake in Srinagar, famous for its houseboats, shikara rides, and surrounding Mughal gardens, offering a serene glimpse into Kashmiri life.",
        images: [
          {
            title: "Dal Lake with houseboats in Srinagar",
            link: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dal_Lake_Srinagar_kashmir.jpg",
          },
        ],
      },
      {
        name: "Vaishno Devi Mandir, Katra",
        description:
          "A sacred shrine dedicated to Goddess Vaishno Devi, located in the Trikuta hills, attracting millions of pilgrims annually for its spiritual significance and scenic trek.",
        images: [
          {
            title: "Vaishno Devi hill trek",
            link: "https://upload.wikimedia.org/wikipedia/commons/0/07/Mata_vaishno_devi_hill.jpg",
          },
        ],
      },
      {
        name: "Gulmarg Gondola, Gulmarg",
        description:
          "The world's second-highest cable car ride, offering panoramic views of snow-covered meadows and peaks, ideal for skiing and adventure sports.",
        images: [
          {
            title: "Gulmarg Gondola station",
            link: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Gulmarg_Gondola_%28ropeway_or_cable_transport%29_station_in_Jammu_and_Kashmir.jpg",
          },
        ],
      },
      {
        name: "Pahalgam",
        description:
          "A picturesque hill station along the Lidder River, known for its apple orchards, betaab valley, and as the base for Amarnath Yatra.",
        images: [
          {
            title: "Mountain range in Pahalgam",
            link: "https://upload.wikimedia.org/wikipedia/commons/4/47/Pahalgam_Mountain_Range.jpg",
          },
        ],
      },
      {
        name: "Sonamarg",
        description:
          "Known as the 'Meadow of Gold', this alpine valley features glaciers, trout fishing, and trekking routes amidst Himalayan splendor.",
        images: [
          {
            title: "Sonamarg valley",
            link: "https://upload.wikimedia.org/wikipedia/commons/8/89/Sonamarg%2C_jammu_and_kashmir.jpg",
          },
        ],
      },
      {
        name: "Pangong Lake, Ladakh",
        description:
          "A mesmerizing high-altitude saltwater lake changing colors from turquoise to deep blue, famous for its stark beauty and as a filming location.",
        images: [
          {
            title: "Pangong Lake in Ladakh",
            link: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pangong_lake_in_Ladakh.jpg",
          },
        ],
      },
      {
        name: "Leh Palace, Leh",
        description:
          "A nine-story royal palace overlooking Leh, showcasing Tibetan architecture and housing a museum of royal artifacts and Buddhist relics.",
        images: [
          {
            title: "Leh Palace from below",
            link: "https://upload.wikimedia.org/wikipedia/commons/1/12/Leh_Palace_From_Below_%2848976062652%29.jpg",
          },
        ],
      },
      {
        name: "Nubra Valley, Ladakh",
        description:
          "A high-altitude cold desert valley with sand dunes, Bactrian camels, and Diskit Monastery, offering a unique blend of adventure and culture.",
        images: [
          {
            title: "View of Nubra Valley from Diskit Monastery",
            link: "https://upload.wikimedia.org/wikipedia/commons/4/48/Nubra_valley%2C_Ladakh.jpg",
          },
        ],
      },
      {
        name: "Shalimar Bagh, Srinagar",
        description:
          "A Mughal garden built by Emperor Jahangir, featuring terraced lawns, fountains, and pavilions, symbolizing earthly paradise.",
        images: [
          {
            title: "Shalimar Bagh gardens in Srinagar",
            link: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Shalimar_Bagh_Srinagar_05.jpg",
          },
        ],
      },
      {
        name: "Nishat Bagh, Srinagar",
        description:
          "Known as the 'Garden of Joy', this 17th-century Mughal garden boasts cascading fountains, chinar trees, and stunning Zabarwan mountain views.",
        images: [
          {
            title: "Nishat Bagh terraced gardens",
            link: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Nishat_Bagh_Srinagar_05.jpg",
          },
        ],
      },
      {
        name: "Chashme Shahi, Srinagar",
        description:
          "A royal spring garden built for Emperor Shah Jahan, featuring fresh water fountains, marble pavilions, and terraced flower beds.",
        images: [
          {
            title: "Pavilion inside Chashme Shahi",
            link: "https://upload.wikimedia.org/wikipedia/commons/9/95/Pavillion_inside_Chashme_Shahi%2C_Srinagar.jpg",
          },
        ],
      },
      {
        name: "Indira Gandhi Memorial Tulip Garden, Srinagar",
        description:
          "Asia's largest tulip garden with over 60 varieties, blooming vibrantly in spring against the backdrop of snow-capped mountains.",
        images: [
          {
            title: "Tulips in Indira Gandhi Memorial Garden",
            link: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Tulip_Garden_Srinagar.jpg",
          },
        ],
      },
      {
        name: "Shankaracharya Temple, Srinagar",
        description:
          "An ancient hilltop Shiva temple offering panoramic views of Srinagar and Dal Lake, steeped in Hindu mythology and history.",
        images: [
          {
            title: "Ancient Shankaracharya Temple in Srinagar",
            link: "https://upload.wikimedia.org/wikipedia/commons/f/fc/The_Ancient_Shankaracharya_Temple_%28Srinagar%2C_Jammu_and_Kashmir%29.jpg",
          },
        ],
      },
      {
        name: "Amarnath Cave, Pahalgam",
        description:
          "A sacred Hindu pilgrimage site featuring a natural ice stalagmite symbolizing Lord Shiva, accessible via a challenging high-altitude trek.",
        images: [
          {
            title: "View of Amarnath Cave",
            link: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Amarnath_cave_view.jpg",
          },
        ],
      },
      {
        name: "Betaab Valley, Pahalgam",
        description:
          "A scenic valley named after a Bollywood film, known for its pine forests, meadows, and the confluence of rivers, perfect for picnics.",
        images: [
          {
            title: "Betaab Valley near Pahalgam",
            link: "https://upload.wikimedia.org/wikipedia/commons/2/27/Betaab_Valley_Pahalgham.jpg",
          },
        ],
      },
      {
        name: "Patnitop",
        description:
          "A serene hill station with dense pine forests, offering paragliding, skiing, and views of the Chenab basin in winter snowfall.",
        images: [
          {
            title: "Patnitop Hills landscape",
            link: "https://upload.wikimedia.org/wikipedia/commons/3/34/Beauty_of_India_-_Patnitop_Hills.jpg",
          },
        ],
      },
      {
        name: "Raghunath Temple, Jammu",
        description:
          "A majestic 19th-century temple complex dedicated to Lord Rama, featuring intricate architecture and a vast collection of ancient scriptures.",
        images: [
          {
            title: "Raghunath Temple in Jammu",
            link: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Raghunath_Temple_Jammu.JPG",
          },
        ],
      },
      {
        name: "Bahu Fort, Jammu",
        description:
          "An ancient hilltop fort overlooking Tawi River, believed to be built by Raja Bahulochan, now housing a museum and offering city views.",
        images: [
          {
            title: "Bahu Fort in Jammu",
            link: "https://upload.wikimedia.org/wikipedia/commons/5/59/Bahu_Fort%2C_Jammu%2C_India.jpg",
          },
        ],
      },
      {
        name: "Akhnoor Fort, Jammu",
        description:
          "A historical fort on the banks of Chenab River, showcasing Dogra architecture and legends from the Mahabharata era.",
        images: [
          {
            title: "Akhnoor Fort on Chenab River",
            link: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Akhnoor_Fort_-_Jammu_-_Jammu_and_Kashmir_-_DSC_0001.jpg",
          },
        ],
      },
      {
        name: "Sanasar",
        description:
          "Twin villages named after lakes, offering adventure activities like paragliding, trekking, and camping in a tranquil meadow setting.",
        images: [
          {
            title: "Sanasar Lake",
            link: "https://upload.wikimedia.org/wikipedia/commons/7/73/Sanasar_Lake_Jammu.jpg",
          },
        ],
      },
      {
        name: "Magnetic Hill, Ladakh",
        description:
          "A gravity hill creating an optical illusion where vehicles appear to roll uphill, surrounded by barren Himalayan terrain.",
        images: [
          {
            title: "Magnetic Hill in Ladakh",
            link: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Ladakh_-_Magnetic_Hill.jpg",
          },
        ],
      },
      {
        name: "Hall of Fame, Leh",
        description:
          "A museum honoring Indian soldiers, displaying war memorabilia, weapons, and photos from conflicts in the region.",
        images: [
          {
            title: "Hall of Fame Museum in Leh",
            link: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Hall_of_fame%2C_Leh.jpg",
          },
        ],
      },
    ],
  },
  Punjab: {
    info: "Punjab, the 'Land of Five Rivers,' is a vibrant state in northern India, celebrated for its fertile agricultural lands, rich history, and the spiritual heart of Sikhism. From the sacred Golden Temple to the electrifying Wagah Border ceremony, Punjab offers a journey through profound spirituality, valiant history, and hearty culture. It's a land of lively festivals, delicious cuisine, and warm, welcoming people.",
    title: "Punjab",
    thingsToDo: [
      {
        name: "Golden Temple (Harmandir Sahib), Amritsar",
        description:
          "The holiest shrine in Sikhism, a serene spiritual center known for its stunning golden architecture, sacred sarovar (pool), and the world's largest free community kitchen (langar).",
        images: [
          {
            title: "Golden Temple in Amritsar",
            link: "https://upload.wikimedia.org/wikipedia/commons/0/00/Golden_Temple_(Harmandir_Sahib),_Amritsar,_Punjab.jpg",
          },
        ],
      },
      {
        name: "Wagah Border, Amritsar",
        description:
          "The international border between India and Pakistan, famous for its daily 'Beating Retreat' ceremony, a patriotic and highly coordinated military parade.",
        images: [
          {
            title: "Indian soldiers parade at Wagah Border",
            link: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Indian_Soldiers_parade_at_Wagah_Border%2C_Amritsar%2C_India.jpg/640px-Indian_Soldiers_parade_at_Wagah_Border%2C_Amritsar%2C_India.jpg",
          },
        ],
      },
      {
        name: "Jallianwala Bagh, Amritsar",
        description:
          "A historic public garden and a national memorial commemorating the massacre of peaceful protestors by British forces in 1919.",
        images: [
          {
            title: "Jallianwala Bagh, Amritsar",
            link: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Jallianwala_Bagh,_Amritsar_01.jpg",
          },
        ],
      },
      {
        name: "Virasat-e-Khalsa, Anandpur Sahib",
        description:
          "A modern museum of Sikhism located in the holy city of Anandpur Sahib, showcasing the rich history and culture of the Sikh faith through stunning architecture and exhibits.",
        images: [
          {
            title: "Virasat-e-Khalsa in Anandpur Sahib",
            link: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Virasat-e-Khalsa%2C_Anandpur_Sahib.jpg/640px-Virasat-e-Khalsa%2C_Anandpur_Sahib.jpg",
          },
        ],
      },
      {
        name: "Rock Garden, Chandigarh",
        description:
          "A unique sculpture garden created by Nek Chand Saini, featuring mosaics and sculptures made from industrial and home waste and recycled materials.",
        images: [
          {
            title: "Statues at Rock Garden, Chandigarh",
            link: "https://upload.wikimedia.org/wikipedia/commons/2/24/01_Statues_at_Rock_Garden,_Chandigarh.JPG",
          },
        ],
      },
      {
        name: "Sukhna Lake, Chandigarh",
        description:
          "A serene man-made reservoir at the foothills of the Himalayas, popular for boating, jogging, and enjoying picturesque sunrises and sunsets.",
        images: [
          {
            title: "Sukhna Lake, Chandigarh",
            link: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Sukhna_Lake_Chandigarh_India.jpg",
          },
        ],
      },
      {
        name: "Qila Mubarak, Patiala",
        description:
          "A grand fort-palace complex in Patiala, showcasing a blend of Mughal and Rajput architecture and housing the impressive Sheesh Mahal (Palace of Mirrors).",
        images: [
          {
            title: "Qila Mubarak in Patiala",
            link: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Qila_Mubarak%2C_Patiala.jpg/640px-Qila_Mubarak%2C_Patiala.jpg",
          },
        ],
      },
      {
        name: "Sheesh Mahal, Patiala",
        description:
          "The 'Palace of Mirrors,' located within the Qila Mubarak complex, renowned for its exquisite mirror-work, frescoes, and a large collection of medals and artifacts.",
        images: [
          {
            title: "Sheesh Mahal from the tank in Patiala",
            link: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Sheesh_Mahal_from_other_side_of_the_tank_in_Patiala_-_Punjab_-_India.jpg/640px-Sheesh_Mahal_from_other_side_of_the_tank_in_Patiala_-_Punjab_-_India.jpg",
          },
        ],
      },
      {
        name: "Harike Wetland and Bird Sanctuary, Tarn Taran Sahib",
        description:
          "The largest wetland in northern India, a vital Ramsar site at the confluence of the Beas and Sutlej rivers, and a haven for numerous migratory bird species.",
        images: [
          {
            title: "Birds in Harike Wetlands",
            link: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Bird_at_Harike_Wetlands%2C_Punjab.jpg/640px-Bird_at_Harike_Wetlands%2C_Punjab.jpg",
          },
        ],
      },
      {
        name: "Shaheed Bhagat Singh Museum, Khatkar Kalan",
        description:
          "A memorial and museum dedicated to the life and legacy of the great Indian freedom fighter, Shaheed Bhagat Singh, located in his ancestral village.",
        images: [
          {
            title: "Shaheed Bhagat Singh Museum",
            link: "https://upload.wikimedia.org/wikipedia/commons/f/f8/BhagatMuseum.jpg",
          },
        ],
      },
      {
        name: "Pushpa Gujral Science City, Kapurthala",
        description:
          "An interactive science center offering a fun and educational experience with its dinosaur park, flight simulator, 3D theater, and various scientific exhibits.",
        images: [
          {
            title: "Pushpa Gujral Science City IMAX Theater",
            link: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Pushpa_Gujral_Science_City_-_Outside_View_of_IMAX_Theater.jpg/640px-Pushpa_Gujral_Science_City_-_Outside_View_of_IMAX_Theater.jpg",
          },
        ],
      },
      {
        name: "Devi Talab Mandir, Jalandhar",
        description:
          "An ancient temple dedicated to Goddess Durga, believed to be over 200 years old. It features a large sacred tank and a replica of the Amarnath Cave temple.",
        images: [
          {
            title: "Devi Talab Mandir temple",
            link: "https://upload.wikimedia.org/wikipedia/commons/9/96/Devi_Talab_Mandir.jpg",
          },
          {
            title: "Devi Talab Mandir, Jalandhar City, Punjab, India",
            link: "https://upload.wikimedia.org/wikipedia/commons/6/64/Devi_Talab_Jalandhar_01.jpg",
          },
        ],
      },
    ],
  },
  "Himachal Pradesh": {
    info: "Himachal Pradesh, the 'Abode of Snow,' is a mesmerizing state in the Western Himalayas, celebrated for its towering snow-capped peaks, lush green valleys, rushing rivers, and serene spiritual retreats. From the colonial charm of Shimla to the adventurous allure of Manali and the tranquil Buddhist culture of Dharamshala, Himachal offers a sanctuary for nature lovers, adventure enthusiasts, and peace seekers. It's a land of breathtaking landscapes, vibrant local festivals, and warm hospitality.",
    title: "Himachal Pradesh",
    thingsToDo: [
      {
        name: "Shimla",
        description:
          "The state capital, known for its colonial-era architecture, the bustling Mall Road and The Ridge, and the historic Jakhoo Temple perched atop a hill.",
      },
      {
        name: "Manali",
        description:
          "A popular resort town nestled in the Kullu Valley, offering adventure sports, access to Solang Valley and Rohtang Pass, and the ancient Hadimba Devi Temple.",
      },
      {
        name: "Dharamshala & McLeod Ganj",
        description:
          "The home of the Dalai Lama, this spiritual hub features the Tsuglagkhang Complex, Namgyal Monastery, and is a starting point for the famous Triund trek.",
      },
      {
        name: "Spiti Valley",
        description:
          "A cold desert mountain valley known for its stark, lunar-like landscapes, ancient Buddhist monasteries like Key and Tabo, and high-altitude villages.",
      },
      {
        name: "Rohtang Pass, near Manali",
        description:
          "A high-altitude mountain pass offering stunning views and snow activities. It serves as a gateway to the Lahaul and Spiti valleys.",
      },
      {
        name: "Great Himalayan National Park, Kullu",
        description:
          "A UNESCO World Heritage site, home to diverse flora and fauna, including the elusive snow leopard. It's a paradise for trekkers and wildlife enthusiasts.",
      },
      {
        name: "Kasol",
        description:
          "A serene village situated on the banks of the Parvati River, famous as a hub for backpackers and a base for treks like Kheerganga and Malana.",
      },
      {
        name: "Khajjiar, near Dalhousie",
        description:
          "Often called the 'Mini Switzerland of India,' this picturesque meadow is surrounded by dense pine and deodar forests with a serene lake at its center.",
      },
      {
        name: "Bir Billing",
        description:
          "Renowned as one of the best sites in the world for paragliding, offering breathtaking aerial views of the Dhauladhar mountain range.",
      },
      {
        name: "Key Monastery, Spiti Valley",
        description:
          "A magnificent Tibetan Buddhist monastery, perched on a hilltop, it is one of the oldest and biggest monasteries in the Spiti Valley.",
      },
      {
        name: "Chandratal Lake",
        description:
          "A stunning crescent-shaped high-altitude lake in the Spiti part of the Lahaul and Spiti district, known for its crystal-clear turquoise water.",
      },
      {
        name: "Hadimba Devi Temple, Manali",
        description:
          "An ancient cave temple dedicated to Hidimbi Devi, wife of Bhima. It is uniquely constructed with a four-tiered pagoda-style roof amidst a cedar forest.",
      },
    ],
  },
};
