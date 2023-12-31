import { Component } from '@angular/core';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})


export class ReviewsComponent {


  
    constructor(){}

  allreviews: Array<any> =
  [
    {
      property_name: "Apex London Wall Hotel",
      review_rating: 5,
      review_title: "Ottima qualitÃ  prezzo",
      review_text:
        "Siamo stati a Londra per un week end ed abbiamo alloggiato in questo ottimo Hotel prenotato da amici. | Personale molto gentile e disponibile, camere sufficientemente grandi ma soprattutto pulite e confortevoli con un letto matrimoniale grande e comodo, tv grande, impianto stereo Bose, . | Bagno grande con asciugacapelli, vasca da bagno, doccia, accappatoio, ciabatte, ecc. ma soprattutto pulito! | Ottima posizione sebbene sia nella zona finanziaria e quindi il fine settimana praticamente deserta ma per noi Ã¨ stato forse un vantaggio per la tranquillitÃ  e visto che in pochi minuti si raggiungono zone molto vivaci. | In ogni caso muoversi non Ã¨ un problema: la metro di Moorgate Ã¨ a due passi cosÃ¬ come la stazione della metro e dei treni Liverpool Street (treno con collegamento diretto all'aeroporto di Stansted). | Nel periodo in cui siamo stati noi stavano ristrutturando e quindi probabilmente oggi sarÃ  ancora meglio, da tornare e da consigliare! | Abbiamo speso per 2 notti senza colazione (evitata visto il costo e le opinioni negative) 257Sterline.",
      reviewer_location: "Casale Monferrato, Italy",
      review_date: "10/20/2012",
    },
    {
      property_name: "Corinthia Hotel London",
      review_rating: 5,
      review_title: "By far, my best hotel in the world",
      review_text:
        "I had a pleasure of staying in this hotel for 7 nights recently. This hotel was perfect in every way. Communication with the hotel before staying was prompt, and very efficient. Checking in was a breeze. You go through the spectacular lobby with modern glass chandeliers and take the elevator to your room. My room, they gave me an upgrade to junior suite, was spectacular. We had a walk-in closet of the size where you could have put a small bed in there; it served us nicely for the seven day stay. The decor was very refined, and oh the bathroom! Carrera marble floor was heated throughout, rain shower was to die for! | Location, as it turned out, was as good as it can be. We were 5 minutes walk to Trafalgar Square, but it was very quiet. Right outside was Embankment tube stop. We would walk to theater area and to numerous restaurants, and many major sites, such as London Eye or Westminster Abbey were within walking distance. | We had buffet breakfast or room service every morning. It was pricy, but my rate included it. Couple of nights, we had glass of wine sitting in front of fire place in the lobby. I used the spa, which is included in the room rate, almost every night. After a windchill day of sightseeing, the steam sauna and jacuzzi would soften my weary muscles. | I have stayed in many 5 star hotels around the world, but this hotel tops it. I would return here in a heartbeat next time I am in London.",
      reviewer_location: "Savannah, Georgia",
      review_date: "3/23/2016",
    },
    {
      property_name: "The Savoy",
      review_rating: 5,
      review_title: "First visit to the American Bar at the Savoy",
      review_text:
        "A very lovely first visit to this iconic hotel bar! | Wonderful service, without being intrusive at all! Very delicious cocktails and just generally all round, a very indulgent experience. | Well worth visiting only for that 'once in a lifetime' experience, though do make sure you are feeling 'flush' it doesn't come cheap!",
      reviewer_location: "London",
      review_date: "7/30/2013",
    },
    {
      property_name: "Rhodes Hotel",
      review_rating: 4,
      review_title: "Nice stay",
      review_text:
        "3 of us stayed at the Rhodes Hotel for 4 nights, its a great location for taking the Paddington Express from Heathrow. We like the location clost to the partk and in walking distance of most locations. The room and bath were small compared to American Hotels but very clean. We enjoyed the free WIFI. The owners and the staff were very friendly and helpful with taxi's and resturant recomendations. We would stay there again.",
      reviewer_location: "Maui, Hawaii",
      review_date: "6/2/2012",
    },
    {
      property_name: "The Savoy",
      review_rating: 5,
      review_title: "Perfection",
      review_text:
        "Form the moment we arrived until we left we experienced absolute perfection in service excellance by every member of The Savoy staff. Famous for its personalise service and rich heritage the Savoy is truly won of the best hotels in the world to stay at. For eating and dining woud highly recommend Kaspers restaurant. For ourselves we cannot wait until we return.",
      reviewer_location: "London, United Kingdom",
      review_date: "11/24/2017",
    },
    {
      property_name: "Corinthia Hotel London",
      review_rating: 1,
      review_title: "Staff stole from me!!",
      review_text:
        "Well I am no strange to London's 5star hotels and when a new one comes along I am eager to try. So I heard about the corinthia via some friends who work in the industry and said their bar was really something. Until the incident I had stay there a total of 3 times but on the 4th time in June I was on my second of 4 nights and was about get some cash from my room as I was going to exchange money for some dollars as I was flying to the US pretty soon. When I came to my money it felt light. When I counted it, it was almost Â£1000 down. Obviously shocked I contacted reception. They started an investigation! | Well a couple of days later I had to checkout and the matter was not resolved. I was made to pay my bill in full. | Upon my return to London I met up with a manager at the hotel Jean Louis. He said the matter was still under investigation and he gave me his card to get in touch. Nothing was ever resolved. | This hotel does not only boast to be one of the best hotels in London but one of the best in the world. You pay premium for this reason and you expect a premium service. This hotel epically failed me and dented my confidence in the hotel industry. I didn't even get a formal apology. | It's a lovely hotel but I would have to say stay at your own risk but for over Â£500 a night should there be any risk?",
      reviewer_location: "NA",
      review_date: "3/1/2013",
    },
    {
      property_name: "Apex London Wall Hotel",
      review_rating: 5,
      review_title: "Great customer service and comfy bed",
      review_text:
        "The hotel staff were very helpful, I booked the wrong hotel by mistake and they changed it without any hassle. The staff were great. Greeted with a glass of prosecco and a lovely comfortable room. Bed was very comfortable. Would definitely stay there again.",
      reviewer_location: "Lostwithiel, United Kingdom",
      review_date: "10/22/2017",
    },
    {
      property_name: "Mondrian London at Sea Containers",
      review_rating: 5,
      review_title: "Yes, it's really good!",
      review_text:
        "Already stepping out of the taxi you get that very special feeling of welcome. A friendly smile, a helping hand and yet with lot's of attitude. Who ever organises this, its very well done. | At the front desk it's, as almost everywhere, very complicated and slow to check-in. All has been done already when reserving the room. How difficult can it be to swipe the card and get the key card? | But that's is quickly forgotten when using the room, the Bar and the Restaurant. Everything is smart and comfy and nicely designed. And the service is excellent. Well done.",
      reviewer_location: "Stockholm",
      review_date: "12/16/2014",
    },
    {
      property_name: "Mondrian London at Sea Containers",
      review_rating: 5,
      review_title: "Incredible",
      review_text:
        "What an incredibly cool place. Had the most delicious and interesting cocktails at Dandelion (bar) followed by an incredible meal at Sea Containers (restaurant). The staff were so friendly and the service was exceptional. Rumpus Room (top floor bar) is the perfect place for a night cap - very cool and with a great atmosphere. I could not recommend Mondrian more!",
      reviewer_location: "London, England, United Kingdom",
      review_date: "3/5/2016",
    },
    {
      property_name: "Rhodes Hotel",
      review_rating: 5,
      review_title: "Ottima scelta!",
      review_text:
        "Ottimo rapporto qualitÃ  - prezzo, ottima la posizione, a due passi dal centro e ben servita di metro e bus.Letti comodi e stanza sempre pulita..Ho provato solo la colazione Italiana e non quella Inglese, ma come posso dimenticarmi di quei cornetti con dentro spalmata la nutella!!..Ho detto tutto!Ottima anche la cortesia e la disponibilitÃ  di tutti i dipendenti.",
      reviewer_location: "Cagliari",
      review_date: "2/7/2011",
    },
    {
      property_name: "The Savoy",
      review_rating: 5,
      review_title: "Best in Town",
      review_text:
        "The Savoy is The Savoy, every time I came back the real surprise is that all it's the same, same top services, same astonishing place, same awesome rooms. | I have been in the city for work several time and try many different places, same level, and every time I came back here I ask myself why to chose another one! | Living here is like a travel back in time, when gentlemen was gentlemen, and London was the heart | of the world.",
      reviewer_location: "Milan, Italy",
      review_date: "5/18/2017",
    },
    {
      property_name: "Mandarin Oriental Hyde Park, London",
      review_rating: 4,
      review_title:
        "Good hotel, but needs touch-up and improved layout of entrance floor",
      review_text:
        "The location next to the park and close to Harvey Nic and Harrods means that you not only have great shopping nearby, but also great restaurants. Mandarin Oriental is on of the best hotel groups, perhaps even the best, but their London property needs some TLC. I got great service, a nice upgrade (large room), but it was too used to feel like a real MO. Its like getting the old BA first class vs. the new; its good, but dated. And you know they can do better. The bar was nicer before the redid it some time ago, and its more drunk biz-pople than a mixed crowd there. Dinner by Heston was closed due to flew issues?? for a week, and Baloud in the basement is not very cozy or elegant. Comparing London to the still great NYC property, or the fantastic Bangkok property, its not worthy of the MO-brand. But its still a good hotel, make no mistake. Call in the designers and redo the reception, bar and first floor area with some seating, touch-up the rooms, and the impression will be so much better!",
      reviewer_location: "Oslo, Norway",
      review_date: "2/17/2014",
    },
    {
      property_name: "The Savoy",
      review_rating: 2,
      review_title: "what a disappointment",
      review_text:
        "was so looking forward to staying here had high expections, what a let down it was we had a connecting room as we took the children, rooms are small they are clean but for over Â£1000 a night u expect a bit more there was five of us altogether and felt like we was crammed in | staff are rude I've stayed a cheaper hotels and got treated better",
      reviewer_location: "Derby, United Kingdom",
      review_date: "6/5/2016",
    },
    {
      property_name: "The Dorchester",
      review_rating: 4,
      review_title: "Great hotel needs to up its game to compete today",
      review_text:
        "Just a short stay mainly focussed around the Alain Ducasse restaurant with friends | The rooms are quite nice not dissimilar to Claridges, I think there is room for improvement in in room facilities escpaially at this price point (when the rates go up around other city activities) | I do think it would be incredibly costly to modernise the hotel so a tasteful refurb would be great as some hall carpets are very tired.",
      reviewer_location: "Cheshire",
      review_date: "1/4/2017",
    },
    {
      property_name: "Corinthia Hotel London",
      review_rating: 5,
      review_title: "a true five star hotel",
      review_text:
        "The Corinthia is a hotel that I expect when I read that a hotel is five stars. The rooms are spacious, the bed was as comfortable as home. The bathroom was large with two sinks and a great shower as well as a separate bath and soft fluffy towels. Of course everything was very clean. The service and the concierge were accessible and always helpful. The location in Westminster was ideal for touring, shopping and of course to the Underground. The only negative was the price of the food in the restaurants. A tiny caesar salad that was nothing special for 22 pounds is not memorable. Regardless, I would be delighted to stay there again.",
      reviewer_location: "Pittsburgh",
      review_date: "10/6/2016",
    },
    {
      property_name: "Apex London Wall Hotel",
      review_rating: 5,
      review_title: "Surprisingly quiet in Central London",
      review_text:
        "I booked 1 night DBB choosing this hotel as it was so close to the Barbican where my daughter was graduating. We stayed Sunday night and I have never know London so quiet! | We were upgraded on arrival to a room with a balcony which was great as it was also our wedding anniversary and we enjoyed sitting on the balcony sipping wine - absolutely loved the HUGE bathroom and complimentary toiletries including my first rubber duck. Modern decor but with everything you need eg iron etc. | Dinner was tasty as was breakfast. | City streets were busier the following morning but it's definitely a hotel chain I would seek out again",
      reviewer_location: "Lincolnshire",
      review_date: "11/13/2014",
    },
    {
      property_name: "Mondrian London at Sea Containers",
      review_rating: 5,
      review_title: "Amazing proposal venue!",
      review_text:
        "Well, what can I say...I chose this venue to propose to my girlfriend (now fiance!) as it was a brand new hotel and has had excellent reviews since it's been open. I wasn't disappointed! | Before I booked the room, I got in touch with the hotel to let them know my plans. The Guest Experience Manager (Luke Neill) was more than happy to personally show me around the hotel, show me the various room types and also the bars and restaurants available. | I went for the River View Balcony Suite, as it was very spacious, beautifully decorated and offered one of the best views of the river and London, right from it's very own private balcony. The balcony overlooks St Pauls, and as most visitors to London will know, central London at night is a must see! | Before I proposed, we went for a few drinks in the Rumpus Room, which is the Mondrian's rooftop terrace bar which offers 360 degree views around London. The atmosphere of the bar is very chic and sophisticated, offering an excellent signature cocktail list. | Throughout the trip, the staff were all incredibly attentive and really did all they could to help me with the proposal and make sure that the whole experience was a magical one. | Really would recommend the hotel and we'll definitely be back.",
      reviewer_location: "London, United Kingdom",
      review_date: "1/8/2015",
    },
    {
      property_name: "Mandarin Oriental Hyde Park, London",
      review_rating: 5,
      review_title: "Beautiful",
      review_text:
        "The Mandarin in London lives up to the five star rating that it deserves. Beautiful and spacious room with wonderful decorations. Great service and staff and perfectly located next to the Knightsbridge subway. Even when my room was not quite ready for check-in, the staff made sure I could use their spa facilities in the interim (which was also quite lovely). I plan on returning to this hotel for my future trips to London. Oh and I loved their Japanese breakfast. Delish!",
      reviewer_location: "Los Angeles, California",
      review_date: "8/31/2014",
    },
    {
      property_name: "Mondrian London at Sea Containers",
      review_rating: 5,
      review_title: "Beautiful hotel in a great location",
      review_text:
        "We had an amazing time staying at the Mondrian for our wedding. In total we had 20+ rooms and the feedback from everyone was fantastic. The staff couldn't have been more welcoming and they went out of their way to add little touches to our stay that really helped make our wedding weekend. The hotel is gorgeous and has amazing views out onto the river. The bars and the restaurant are great fun",
      reviewer_location: "London",
      review_date: "12/10/2015",
    },
    {
      property_name: "Mondrian London at Sea Containers",
      review_rating: 5,
      review_title: "Very stylish accommodation",
      review_text:
        "A nice and stylish hotel with a very impressive lobby. Staff is extremely helpful. Splendid location alongside the Thames. Just across the One Blackfriars train station and within short walking distance from the underground.",
      reviewer_location: "Galmaarden",
      review_date: "6/13/2016",
    },
    {
      property_name: "The Dorchester",
      review_rating: 2,
      review_title: "The brand is bigger than the experience",
      review_text:
        "I had always wanted to stay at The Dorchester. It seems so grand and quintessentially British. Well, the lobby is anyway. We stayed six nights and after the first night asked to change rooms. We were staying in a standard king room and all I can say is it was shabby without the chic. Furniture is worn out, rug unraveling, and really no light as there was only a small window. For the pleasure of $100 USD more per night, we got moved to a refurbished room (ask when you check in). | The hallways really smell like grandma's attic - no kidding. | The service was also very hit and miss (as it turns out). | -- We tried on two separate evenings to get a bottle of champagne put on ice before we returned to the hotel but both times we returned to the room with no ice bucket (and this was with several hours notice). To be fair, after whining about it (because I was not happy), two complimentary glasses of champagne did show up with a nice bowl of nuts. | -- Thinking it was an apology, a fruit plate also showed up (it was put in our room but not meant for us). Sorry Mr. Smith but you will not be getting your welcome fruit plate. | -- When we moved rooms they didn't bring the guard railing for the toddler bed. We called and called. When we got back to the room late, there was a guard rail but it was literally in about 20 pieces laying on the ground by the door with the box next to it. Where we suppose to put it together for them? | On the plus side, the housekeeping staff are really good. Your room looks great when you return. They adjust the number of towels you need based on how you use them. The sheets are also extremely soft. | I've read all the reviews of how fabulous the service is and how special they make you feel -- we just didn't get that. We have been fortunate to stay in some fabulous five-star hotels around the world and this experience just didn't stack up.",
      reviewer_location: "Hong Kong",
      review_date: "10/3/2013",
    },
    {
      property_name: "Mondrian London at Sea Containers",
      review_rating: 3,
      review_title: "Nice rooms but not quite wow",
      review_text:
        "Nice visit but didn't feel special. Upgraded to superior room on top floor (extra Â£35) so big room &amp; nice drencher shower. Room was very nicely done out. Didn't have a bar just for residents, so meant we couldn't get a table for pre dinner cocktails but sat at the bar and was fine. Rooftop bar doesn't open on Sundays even at bank hols which was a shame. For the rate we got it was good, but didn't have anything of a wow factor to justify top price. Didn't feel the service made it feel like a special experience. In summary, nothing wrong with it but feel there are nicer places to stay for time away together.",
      reviewer_location: "Woking",
      review_date: "5/31/2016",
    },
    {
      property_name: "Rhodes Hotel",
      review_rating: 4,
      review_title: "Great Hosts",
      review_text:
        "Chris and Maria were wonderful hosts. We stayed at the Rhodes during our honeymoon and they bought us champagne the first night we were there because they wanted to make our stay a little more special. Both were incredibly friendly and they were especially helpful in directing us around London and booking tickets for us for different attractions right from their front desk. Would reccomend this hotel to anyone who wants a more personable stay.",
      reviewer_location: "Rochester NY girl in Harrisburg, PA",
      review_date: "5/17/2007",
    },
    {
      property_name: "A To Z Hotel",
      review_rating: 5,
      review_title: "Excellent rapport qualitÃ© prix",
      review_text:
        "A 15 mn Ã  pied, 5 en bus (passage frÃ©quent) de la station de mÃ©tro north acton (central line), un hotel simple mais suffisant pour petits budgets. C'est vrai, les tiroirs du petit bureau sont cassÃ©s , il n'y a pas de table de nuit.... C'est petit mais suffisant pour dormir et se laver. C'est tres propre, draps et serviettes comme le sol et la salle d'eau. Nettoyage tous les matins et serviettes propres. Accueil timide (tenu par des indiens) mais serviable (nous ont gardÃ© une journee nos bagages le dernier jour). Petit dÃ©jeuner ok, toasts, beurre, cafÃ© ou thÃ©, jus d'orange, pot de lait, confitures. Tres calme, on a bien dormi pendant 6 nuits. Bref, Ã  recommander, pour le prix c'est tres bien, meme plus propre que des hotels beaucoup plus chers dans le centre!",
      reviewer_location: "Paris, France",
      review_date: "1/5/2016",
    },
    {
      property_name: "Mondrian London at Sea Containers",
      review_rating: 5,
      review_title:
        "Fantastic nights stay, one of the best hotels I've ever been to!",
      review_text:
        "My partner and I found this hotel by chance and saw it had good reviews. We couldn't have made a better choice! Every member of staff that we came into contact with were amazingly helpful and would go out of their way to make your stay as fantastic as possible!! The room was incredible, especially as it was only a \"standard room\". Very good price for what you get, the breakfast was faultless and wouldn't second guess going there again! I would recommend phoning them to book a room as you can make them aware of any special requirements needed.",
      reviewer_location: "NA",
      review_date: "6/20/2015",
    },
    {
      property_name: "Corinthia Hotel London",
      review_rating: 5,
      review_title: "Corinthia Hotel London - WOW",
      review_text:
        "I have just returned from a very quick trip to London. I stayed at the Corinthia Hotel which was just spectacular. Located very conveniently at Whitehall Place. Warm welcome after a long flight from San Francisco. Check in very friendly and effcient. Room was terrific. Spacious, extremely comfortable and stunning to look at. Bathroom is great with a huge bathtub. Dressing room with convenient full length mirror - plentiful hanging space and hangers. Hotel has free wi-fi . Spa is pretty much beyond description. Be ready for an experience !! Lounges and restaruants are excellent. Hotel staff - everyone goes the extra mile to be friendly and still very professional. My only complaint - I wasn't there long enough. I am a Travel Consultant and would recommend this Hotel to my clients with total confidence.",
      reviewer_location: "san francisco",
      review_date: "11/28/2011",
    },
    {
      property_name: "Apex London Wall Hotel",
      review_rating: 4,
      review_title: "Excellent service",
      review_text:
        "It's a family trip by staying at a business district hotel. The location is convenient to get connection to shopping areas with the tube. Rooms are nice and clean. | I appreciate very much about the reception staff and restaurant staff. They are very helpful and friendly especially the ladies (one named Eva at the reception). The restaurant staff do remember what drink we have ordered on the 2nd visit for BKF. They do a very good welcoming and we enjoy the stay a lot.",
      reviewer_location: "Hong Kong, China",
      review_date: "1/31/2017",
    },
    {
      property_name: "Ridgemount Hotel",
      review_rating: 5,
      review_title: "Excellent",
      review_text:
        "Nous avons pris l'habitude de descendre dans cet hotel familial Ã  chaque escapade Ã  Londres, situation au top, propretÃ© impÃ©cable, service sans faille du personnel, et un excelent petit dejeuner (et la gentillesse de Rita). | Mr &amp; Mrs Rees, les propriÃ©taires sont la pour vous conseiller et endossent l'habit de concierge Ã  la perfection. | Les chambres sont petites, certes, avec un deco decalÃ©e qui semble ne pas avoir Ã©voluÃ©e depuis des annÃ©es, nous qui sommes plus attirÃ©s par le Vintage et des hotels plus \"tendance\" (nous sommes d'ailleurs Ã  Paris ce weekend pour le salon du Vintage), mais tres confortables et suffisantes pour y dormir. | Quant aux prix, nous sommes Ã  londres ... | Un hotel Ã  ne pas manquer que nous recommandons avec plaisir !!!",
      reviewer_location: "Zurich, Switzerland",
      review_date: "10/30/2011",
    },
    {
      property_name: "Rhodes Hotel",
      review_rating: 5,
      review_title: "It's All True!",
      review_text:
        "I'm always a little skeptical about what I read, but the glowing reviews of the Rhodes Hotel are all true. The location could not be better; Paddinton Station, Hyde Park and good food are all steps away. The rooms are quaint, comfortable and extremely clean. There's no elevator, which is probably good because it gives you a chance to walk off some of the ample breakfast. (Chris usually made a little something special for everyone to taste.) Our bags were carried up and down for us and there are conveniences that the big hotels don't offer like free wi-fi or use of their computer, free direct dial telephone and a frig in the room. But certainly the best thing about the Rhodes is not a thing, it's Chris and Maria. Maria is a fount of useful helpful information about where to go and how to get there. She takes each guest under her wing and treats them as if they are the only one staying with them. She arranged for a car to take us to Heathrow that was cheaper than the tube. Chris is not only an excellent chef but very interested in his guests and the world around him. They make a great pair and together they run a quiet, comfortable and affordable hotel. We were sorry to say good-bye to them and will definitely stay with them again.",
      reviewer_location: "San Diego",
      review_date: "10/5/2006",
    },
    {
      property_name: "The Savoy",
      review_rating: 5,
      review_title: "Exceeded All My Expectations",
      review_text:
        "This was the most wonderful stay. Every little detail was attended to with alacrity and grace. From the warm welcome at the door by everyone on staff to the elegance of the room, we found ourselves lavished with Old World British service and attention. The suite we had (River View) was simply stunning. Very comfortable and elegant. After having been in a couple of other countries, the punctuality of our room service deliveries was appreciated. There was a leak from the ceiling of our suite and after it was reported, we were moved to another suite while we were out for dinner. Everything was moved and set up exactly as it had been in the previous suite! Right down to a little something which had been on the floor under the writing table. Amazing! We loved it and hope we have the opportunity to stay at the Savoy again on another trip to London.",
      reviewer_location: "Claremont, California",
      review_date: "10/14/2013",
    },
    {
      property_name:
        "The Wellesley Knightsbridge, a Luxury Collection Hotel, London",
      review_rating: 3,
      review_title: "Great location, fine hotel, odd service",
      review_text:
        "We stayed for a few days in October, and it was a perfectly adequate hotel for our needs (a few days of leisurely sightseeing/shopping/eating). The location is wonderful- right at the Hyde Park corner tube stop, and across the street from Hyde Park. We enjoyed morning walks/runs/coffee every morning of our stay. There are a few pubs/restaurants nearby, as well as the bar/restaurant of the hotels in that area, but it's more of a residential/embassy area. Our room was fine, although on the first floor and a mostly frosted glass window with not much light coming through. The marble bathroom with heated floor is a nice touch! Everything was clean. The reason I gave it 3 stars is actually the service. Most people were polite, but there was were a few distinctive &amp; unhelpful interactions during our stay. First, we arrived pretty early from an international, overnight flight. We were obviously kind of tired and hoping they might have a room available, although fully aware they may not. We arrived to the hotel around 8:30am, and a room was not offered to us until 2:15pm. We had a very overpriced breakfast in the hotel, went for a long walk, and came back around 11:30, at which point we needed to change for a lunch. They offered us the stairwell &amp; lobby bathrooms to change in...which was really not very useful, although we did it. The other main issue I had was that their service in terms of our room &amp; belongings was rather invasive. They sent a butler to show the \"room features\", and then at turn down on the first night, they did quite a bit of unnecessary &amp; unwelcome unpacking of our clothes. They put things in the closet that we had to search for when we returned, and even put some clothes (some of which were our pajamas!) into the hotel laundry bag. I don't know if most people use the laundry service, but we were there for only a few days and it was most annoying for them to presume (and select which clothes) that we would send out our laundry. These were minor incidents, but because the place prides itself on service, I found this incongruous. We also asked twice to use the hotel car, and it was not available either time. We got a fairly good deal, and with the comfortable bed, clean bath &amp; great location, I would have felt like it was a place I could recommend. The invasive nature of the daily cleaning &amp; turndown services however truly detracted from our experience.",
      reviewer_location: "NC",
      review_date: "11/8/2016",
    },
    {
      property_name: "Mandarin Oriental Hyde Park, London",
      review_rating: 5,
      review_title: "exceptional service. great location. brilliant food.",
      review_text:
        "mandarin oriental hyde park has pretty much everything. as astounding location at knightsbridge/hyde park makes access to london simple. first class service from staff makes a stay thoroughly enjoyable. two great in-house restaurants add much to the package. dinner by heston blumenthal is a must-do.",
      reviewer_location: "england",
      review_date: "5/17/2015",
    },
    {
      property_name: "The Dorchester",
      review_rating: 5,
      review_title: "Outstanding",
      review_text:
        "One of the best ever. You really think you have arrived. Great dining. Clearly one of the worlds best. Rooms elegant ; most luxurious baths you have ever seen. Staff outstanding. Can't say too much about this hotel.",
      reviewer_location: "Saint Louis, Missouri",
      review_date: "11/15/2014",
    },
    {
      property_name: "Apex London Wall Hotel",
      review_rating: 5,
      review_title: "Apex London Wall repeat visit",
      review_text:
        "This is really just to provide another 5-star rating for this hotel and the staff who work there. I echo all of the other good reviews that the accommodation/cleanliness and staff have received and are looking forward to a return visit. Two recommendations for food and drink are the Brasserie Zedel in Piccadilly and the Princess of Wales in Primrose Hill - pretty random but two excellent places to stop by.",
      reviewer_location: "Edinburgh, United Kingdom",
      review_date: "12/8/2015",
    },
    {
      property_name: "Mondrian London at Sea Containers",
      review_rating: 5,
      review_title: "Just as good second time around!",
      review_text:
        "After an amazing experience the first time we stayed, we went back to the mondrian for a family birthday. It did not disappoint. The place is beautiful, great location with wonderful views, and the food and service is amazing. We were in touch with the lovely Luke in guest services who looked after us seamlessly throughout the organising process and really showed us an incredible and special time. He went above and beyond for us to make our day run perfectly. Thank you! We had a wonderful day and will definitely be back!",
      reviewer_location: "NA",
      review_date: "10/15/2015",
    },
    {
      property_name: "Corinthia Hotel London",
      review_rating: 5,
      review_title: "Felt like a princess",
      review_text:
        "Took my mum here for a treat weekend in March - and what a treat it was. | We both felt like royalty not only because the surroundings are so plush but the staff make you feel like you're the only guest there and you're the most important. | Amazing service, good quality, beautiful surroundings.",
      reviewer_location: "london",
      review_date: "10/20/2013",
    },
    {
      property_name: "The Savoy",
      review_rating: 3,
      review_title: "Safety concerns.....",
      review_text:
        'Lovely furnishings, amenities and service. However, when returning to my suite early one afternoon, I discovered an unexpected visitor. Unbeknownst to the "visitor", I had observed him entering my room from a distance. He appeared to be a maintenance person but later I realized he may have had more in mind than maintenance. | Some indicators: He did not place notification of his presence on the door so I would be aware of him before I entered; when I entered I called out and he did not reply or in any way acknowledge his presence (he may have thought I was housekeeping and would leave without discovering him in this fairly large 4 room suite); even as I entered the sitting room, he did not make himself known; once I observed him, he did not identify himself; his stance and location in the very center of the bedroom with no tools in hand was awkward; his explanation of repairing the ceiling chandelier which was - and had been - working perfectly was obviously fabricated on the spot; his sardonic remark as he quickly left was frightening. In hind sight I believe this person had malicious intentions. | All was reported to management. I requested a change of locking mechanisms but this request was declined. I was offered a fresh pot of tea. | After returning home, I had a brief email communication with the head of maintenance who assured me it was a maintenance employee who had entered to replace a light bulb. However he failed to explain why the man did not have a ladder with him as the light bulbs would not be visible without being able to see above the shades which were about 7 to 8 feet above the floor, much less be able to replace the bulbs. | I also sent an email to the regional office about two weeks ago and have yet to receive a reply. | Add to my experience the feeble fairy tale told by maintenance, the failure of a response from regional, and the casual attitude of the manager on site, it does appear there are security issues. Management does not want to discuss the problem, of course, because of negative publicity. | In hindsight I should have reported this to the police. I would advise not to stay at this hotel.',
      reviewer_location: "British Columbia",
      review_date: "10/22/2015",
    },
    {
      property_name: "The Rembrandt",
      review_rating: 5,
      review_title: "Good Hotel - Great Area",
      review_text:
        "Very good hotel in a lovely area. Handy to the tube, Harrods and museums. Breakfast was good - coffee was the best bit. We found the towels in our room were slightly dirty the first night but apart from that, can't complain. Comfy bed and pillow :)",
      reviewer_location: "NA",
      review_date: "11/4/2016",
    },
  
    {
      property_name: "The Savoy",
      review_rating: 5,
      review_title: "The gift of a lifetime and a memory to last for ever",
      review_text:
        "A weekend at The Savoy-what more could a mother ask for as a special birthday present? My biggest fear was that as we didn't fit into the usual demograph of Savoy customers we would feel uncomfortable-not so at all.Our son who is a frequent business traveler used his 'points' for our weekend -it gave him the opportunity to assess the hotel for his business too.We were welcomed personally and check in was smooth. Shown up to our adjoining rooms-first hiccup only one child bed but that was easily remedied-the children were each given a toy cat-nice touch.. The rooms are lovely- warm and spotless of course with loads of fluffy towels and interesting toiletries-the bathrooms were huge! There isn't time to list all the ways in which the concierge service helped us-they were amazing directing us to perfectly acceptable eating places nearby, booking tickets and generally making sure that we wanted for nothing. Also amazing was the service-I had to do a double take when I saw a man in a tail coat making the morning tea-he was the butler. A small birthday treat had been arranged but when it didn't materialise the apology included a bottle of champagne! I don't suppose I'll ever stay there again but what I would say is if you do get the chance to go don't be intimidated-go for it. Well done all at The Savoy-a reputation very well deserved-now where's that lottery ticket!",
      reviewer_location: "Leeds England",
      review_date: "5/14/2013",
    },
    {
      property_name: "Apex London Wall Hotel",
      review_rating: 4,
      review_title: "Very good hotel in the City",
      review_text:
        "Very good hotel when travelling for business. Staff friendly. rooms are Clean and the bathroom was pretty big. Only negative was breakfast which is served at the table and you had to wait for quite some time to get it served.",
      reviewer_location: "Saint-Germain-en-Laye, France",
      review_date: "12/19/2016",
    },
    {
      property_name: "London Guest House",
      review_rating: 5,
      review_title: "Good stay",
      review_text:
        "We had a good stay here the host are great and help you in every aspect and way they can. the place was nice and clean, it is value for money and is situated in a nice area. the staff are friendly too",
      reviewer_location: "united kingdom",
      review_date: "8/9/2018",
    },
    {
      property_name: "Mandarin Oriental Hyde Park, London",
      review_rating: 5,
      review_title: "Amazing 5 star hotel!",
      review_text:
        "Just came back from a marvelous stay at Mandarin Oriental Hyde Park. Everything was perfect, from the warm reception to the quick check out. | Congratulations to all staff members, which were extremely helpful and cared for our every need. We had a room upgrade, which was very thoughtful of them, and stayed at a room with a view to Knightsbridge and not only was the decoration beautiful, but organization and cleaning were also spot on. | The hotel location is also superb, just a few steps from Knightsbridge tube station and Harvey Nichols. Harrods is also just around the corner. | Make sure to try one of their restaurants as well. My fiance and I booked a table at Bar Boulud and the food was exceptional! | We had an amazing time in London and staying at Mandarin Oriental only enhanced the experience. We shall most definitely come back in our next visit to London!",
      reviewer_location: "Sao Paulo, SP",
      review_date: "11/19/2015",
    },
    {
      property_name: "Mondrian London at Sea Containers",
      review_rating: 4,
      review_title: "Excellent location, great staff",
      review_text:
        "Based at the Mondrian for 2 days on business. The rooms were excellent and the staff courteous and helpful. A special mention to Amy and the rest of the concierge team for their local insight and things to do! A great clientele to mix with after work | Highly recommended",
      reviewer_location: "Colwyn Bay, United Kingdom",
      review_date: "2/16/2016",
    },
    {
      property_name: "Ridgemount Hotel",
      review_rating: 4,
      review_title: "Great value in perfect location",
      review_text:
        "This is a cozy hotel. The rooms are small (read 'tiny') and not the most modern, but spotlessly clean. The location is good, service friendly and helpful. Breakfast is all right and wifi is free of charge (reception could be better, though). I'd warmly recommend this hotel to anyone who just wants a decent place to stay.",
      reviewer_location: "Lund, Sweden",
      review_date: "4/5/2011",
    },
    {
      property_name: "Apex London Wall Hotel",
      review_rating: 4,
      review_title: "Eccellente",
      review_text:
        "In tutto, dalla struttura nuova in stile moderno, alla dotazione di tutti i comfort, al personale gentilissimo, professionale e molto disponibile. Elevato livello di pulizia, bagno pulitissimo e completo ( vasca + doccia) di generose dimensioni. Unica pecca la scarsa insonorizzazione della camera, in particolare della porta di accesso. | Il quartiere a molto tranquillo,nei fine settimana poco frequentato,ma si popola negli altri giorni. | La posizione a comodissima, ci sono ben quattro fermate della metro nel raggio di cinquecento metri. Ottimi anche i collegamenti di superficie. Liverpool station ( per chi arriva da Stansted in bus) dista soli cinque minuti a piedi. | Sempre a piedi si raggiungono facilmente London e Tower Bridge. | Maxpar64",
      reviewer_location: "NA",
      review_date: "4/30/2013",
    },
    {
      property_name: "The Savoy",
      review_rating: 5,
      review_title: "Superior in every respect",
      review_text:
        "There is good reason for The Savoy Hotel attracting the reputation of superiority that they do. They are committed to excellence in every aspect of their hospitality. From the moment you arrive you are made to feel welcome, important and that nothing is too much trouble. The decor is comfortable and suitably English, plus their location cannot be faulted for convenience. Certainly to be recommended.",
      reviewer_location: "Johannesburg, Gauteng, South Africa",
      review_date: "7/24/2017",
    },
    {
      property_name: "Mondrian London at Sea Containers",
      review_rating: 5,
      review_title: "Excellent hotel all round",
      review_text:
        "Have stayed many times before and keep coming back. Best value for money I can find in London and very attentive and helpful staff. Free steam room in the spa is very nice and open good hours. Breakfast is amazing and available until 11am weekdays I think, which is nice for a lie in. Location is brilliant - close to stations we use a lot (Blackfriars, Southwark and Waterloo) and love the short stroll to South Bank and everything around there. | Also big thanks to the staff for helping me retrieve something I'd accidentally left in the room - I called them when I realised at the airport and they rushed to the room, got a taxi to drive over and deliver it to me at the terminal in super quick time! | Excellent cot for our 4 month old baby too!",
      reviewer_location: "NA",
      review_date: "7/4/2016",
    },
    {
      property_name: "The Dorchester",
      review_rating: 2,
      review_title: "Disappointing ...",
      review_text:
        "Having tried the Dorchester hotel in LA and Paris and was very satisfied, I decided to give it try at the iconic Dorchester in London, and what a disappointment. I booked a deluxe king bed room, 2 categories above the standard room, and I was given a room facing a big air conditioning unit and the room was designed for handicapped guests. My request to change the room was rejected till the following day when I made a fuss that they agreed to change the room, and was moved to a smaller room overlooking the air conditioning unit from the 3rd floor :) ... The description in the room on the web site clearly indicated that a deluxe king should be facing Mayfair or the Park. This a deceiving description, and most certainly this property is not good value for money and for the budget better stay at the four season next door.",
      reviewer_location: "Muscat, Oman",
      review_date: "6/8/2014",
    },
  ];

  newlist: Array<any> = this.allreviews;

  onSubmit(val: string): void {
    if (!val) {
      this.newlist = this.allreviews;
    }
    this.newlist = this.allreviews.filter(allreviews => allreviews?.property_name.toLowerCase().includes(val.toLowerCase()));
  }
}
