/* MiG — Muzeu i Gruas | Women's Museum Albania
   JavaScript — script.js
   Translations, language switcher, mobile menu, scroll animations
*/

const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
      if (el.isIntersecting) { el.target.classList.add('visible'); observer.unobserve(el.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ─────────────────────────────────────────

const translations = {
    en: {
      // Nav
      navVisit: "Visit", navMuseum: "The Museum", navExhibitions: "Exhibitions",
      navCollections: "Collections", navEvents: "Events & News", navStore: "Store", navBlog: "Blog", navDonate: "Donate",
      // Visit dropdown
      dropHowFind: "How to Find Us", dropPlanVisit: "Plan Your Visit", dropReview: "Leave a Review",
      // Museum dropdown
      dropAbout: "About Us", dropStory: "Our Story", dropTeam: "Team", dropBoard: "Board of Directors",
      // Exhibitions dropdown
      dropCurrent: "Current", dropSoon: "Coming Soon", dropArchives: "Archives",
      // Collections dropdown
      dropAntiquity: "Antiquity / Illyria", dropByzantine: "Byzantine", dropOttoman: "Ottoman", dropMonarchy: "Monarchy", dropCommunism: "Communism",
      // Hero
      eyebrow: "Celebrating Albanian Women · Tirana, Albania",
      title: "Women's History —", titleEm: "Preserved & Told",
      sub: "A journey through the centuries, honouring the role of women across Albania's history — from ancient Illyria to the present day.",
      planVisit: "Plan Your Visit", discover: "Discover the Museum",
      badge1: "🏳️‍🌈 LGBTQ+ Friendly", badge2: "♀ Women Owned", badge3: "📍 Tirana, Albania",
      // About
      aboutHead: "The Museum", learnMore: "Learn More →",
      whoTitle: "Who We Are",
      whoBody: "The Women's Museum Albania — MiG (Muzeu i Gruas) — is dedicated to exploring the contributions of women throughout Albania's history. From ancient Illyria to post-communist times, the museum highlights the role of women across different historical periods: Byzantine, Ottoman, Monarchy, and Communist.<br><br>We believe history is incomplete without the stories of women. MiG exists to fill that gap — one story, one artifact, one voice at a time.",
      collectTitle: "Our Collections",
      collectBody: "Five permanent collections trace the full arc of women's experience in Albania and the region:<br><br><strong>Antiquity &nbsp;·&nbsp; Byzantine &nbsp;·&nbsp; Ottoman &nbsp;·&nbsp; Monarchy &nbsp;·&nbsp; Communism</strong><br><br>Each era tells a different story. All of them matter.",
      numbersTitle: "By the Numbers", firstSub: "Women's museum in Albania", fiveSub: "Permanent historical collections",
      // Founder
      founderHead: "Our Story", founderMore: "Read More →",
      founderLabel: "Founded by",
      founderTitle: "A testament to the strength<br>and <em>resilience of Albanian women</em>",
      founderBody1: "The Women's Museum Albania was founded by <strong>Elsa Ballauri</strong> — an avid collector, journalist, and human rights advocate. She created the museum to preserve the memory of the often-overlooked struggles and achievements of women throughout Albania's diverse and tumultuous history.",
      founderBody2: "Located in the heart of Tirana, this private institution offers a unique look into Albania's social and political transformation — with a special focus on the hardships faced by women during Communist rule, as well as their contributions across every period of the country's history.",
      founderName: "Elsa Ballauri", founderRole: "Founder & Director, Women's Museum Albania",
      // Editorial
      editorialLabel: "Our Mission",
      editorialTitle: "History is incomplete<br>without <em>the stories of women</em>",
      editorialBody: "For centuries, the contributions, struggles, and triumphs of Albanian women have gone unrecorded. MiG was founded to change that — to create a permanent, dedicated space where these stories are not only preserved, but celebrated. From the ancient Illyrian world to life under communism, we document the full, unedited arc of women's experience in this region.",
      readStory: "Read Our Story",
      // Exhibitions
      exhHead: "Exhibitions", viewAll: "View All →",
      exh1Tag: "● On view now", exh1Title: "Women Through the Ages", exh1Desc: "An exploration of Albanian women's roles from antiquity to modernity — told through objects, photographs, and personal stories.",
      exh2Tag: "Coming Soon", exh2Title: "New Exhibition", exh2Desc: "In development. Follow us on Instagram @mig_albania for announcements and previews.",
      exh3Tag: "Archives", exh3Title: "Past Exhibitions", exh3Desc: "Browse our archive of past exhibitions. Available for research and educational purposes.",
      // Collections
      collHead: "Collections", exploreAll: "Explore All →",
      col1Era: "Antiquity", col1Dates: "Ancient Illyria", col1Desc: "Women of the Illyrian world — their leadership, influence, and daily lives in ancient Albanian societies.",
      col2Era: "Byzantine", col2Dates: "4th – 15th century", col2Desc: "The powerful women who shaped the Byzantine Empire and left their mark on Albanian history.",
      col3Era: "Ottoman", col3Dates: "15th – 20th century", col3Desc: "The challenges and triumphs of Albanian women during five centuries of Ottoman rule.",
      col4Era: "Monarchy", col4Dates: "1912 – 1939", col4Desc: "Women's lives during the Kingdom of Albania — the first schools, new freedoms, and ongoing struggles.",
      col5Era: "Communism", col5Dates: "1944 – 1992", col5Desc: "A critical examination of persecution, resilience, and the role of women under Albania's Communist regime.",
      // Events
      eventsHead: "Events & News", fullCal: "Full Calendar →",
      ev1Date: "Ongoing", ev1Title: "Guided Tours — Albanian & English. For individuals, groups, and school classes.", ev1Tag: "Tour",
      ev2Date: "Coming Soon", ev2Title: "New Exhibition Opening — Follow @mig_albania on Instagram for updates", ev2Tag: "Exhibition",
      ev3Date: "By Appointment", ev3Title: "Private Group Bookings — Reserve your visit for groups of 6 or more", ev3Tag: "Group",
      ev4Date: "Year-Round", ev4Title: "Educational Programs — Workshops and talks for students and researchers", ev4Tag: "Education",
      // Visit
      visitHead: "Plan Your Visit", visitorInfo: "All Visitor Info →",
      howFind: "How to Find Us",
      dir1: "Head to <strong>Rruga Shyqyri Berxolli</strong> — a small side street off <strong>Myslym Shyri</strong> in central Tirana. Look for our signs on Myslym Shyri and at the corner of Shyqyri Berxolli, across the street from the museum.",
      dir2: "At the apartment building entrance, find the buzzer marked <strong>MiG</strong> and ring it — even if the building door is already open.",
      dir3: "Climb <strong>four flights of stairs</strong> to <strong>Apt. 8</strong>. Signage along the stairway will guide you all the way to the door.",
      dir4: "<strong>Welcome to MiG!</strong> You've arrived at Albania's first Women's Museum.",
      goodToKnow: "Good to Know",
      infoBox: "🪧 &nbsp;Signs on Myslym Shyri and Rruga Shyqyri Berxolli will guide you.<br>🔔 &nbsp;Always ring the <strong>MiG buzzer</strong>, even if the building door is open.<br>🚶 &nbsp;No elevator — access is via four flights of stairs only.<br>♿ &nbsp;Unfortunately the museum is not accessible to visitors with reduced mobility.<br>🚗 &nbsp;No parking available on site.<br>📞 &nbsp;Lost? Call <a href='tel:+355682023950'>+355 68 202 3950</a>",
      bookTour: "Book a Tour",
      addrLabel: "Address", addrText: "Rruga Shyqyri Berxolli, Tiranë, Albania", mapsLink: "Open in Google Maps →",
      hoursLabel: "Opening Hours", monFri: "Monday – Friday", monFriHours: "10:00 am – 5:00 pm", sat: "Saturday", satHours: "10:00 am – 3:00 pm", sun: "Sunday", sunHours: "Closed",
      contactLabel: "Contact",
      tipsLabel: "Visitor Tips", tip1: "", tip2: "👨‍👩‍👧 Family-friendly environment", tip3: "🧭 5-minute walk from Skanderbeg Square",
      linksLabel: "Useful Links", link1: "Visitor Guidelines & Policies", link2: "FAQs", link3: "Book a Group Tour",
      // Blog
      blogHead: "Blog", allPosts: "All Posts →",
      blog1Date: "March 2026", blog1Title: "The Illyrian Queens: Women Who Ruled Before History Remembered Them", blog1Excerpt: "Long before the word 'queen' entered the Albanian lexicon, Illyrian women commanded armies, negotiated treaties, and shaped the ancient world.",
      blog2Date: "February 2026", blog2Title: "Life Under the Bunker: Women's Daily Existence in Communist Albania", blog2Excerpt: "From forced labor to secret acts of resistance — what did daily life actually look like for women during Albania's decades of isolation?",
      blog3Date: "January 2026", blog3Title: "Collecting Memory: How MiG Gathers Stories from Across Albania", blog3Excerpt: "Every object in our collection was once someone's everyday life. Our founder Elsa Ballauri shares the deeply human process of building a museum.",
      readMore: "Read More →",
      // Footer
      footerVisit: "Visit", footerMuseum: "The Museum", footerConnect: "Connect",
    },
    sq: {
      navVisit: "Vizitë", navMuseum: "Muzeu", navExhibitions: "Ekspozita", navCollections: "Koleksione", navEvents: "Ngjarje & Lajme", navStore: "Dyqan", navBlog: "Blog", navDonate: "Donacione",
      dropHowFind: "Si të Na Gjeni", dropPlanVisit: "Planifikoni Vizitën", dropReview: "Lini një Vlerësim",
      dropAbout: "Rreth Nesh", dropStory: "Historia Jonë", dropTeam: "Ekipi", dropBoard: "Bordi Drejtues",
      dropCurrent: "Aktuale", dropSoon: "Së Shpejti", dropArchives: "Arkiva",
      dropAntiquity: "Antikiteti / Iliria", dropByzantine: "Bizantine", dropOttoman: "Osmane", dropMonarchy: "Monarkia", dropCommunism: "Komunizmi",
      eyebrow: "Nderohet Gruaja Shqiptare · Tiranë, Shqipëri",
      title: "Historia e Gruas —", titleEm: "Ruajtur & Treguar",
      sub: "Një udhëtim nëpër shekuj, duke nderuar rolin e gruas në historinë e Shqipërisë — nga Iliria e lashtë deri në ditët tona.",
      planVisit: "Planifikoni Vizitën", discover: "Zbuloni Muzeun",
      badge1: "🏳️‍🌈 LGBTQ+ Miqësor", badge2: "♀ Në pronësi të gruas", badge3: "📍 Tiranë, Shqipëri",
      aboutHead: "Muzeu", learnMore: "Mëso Më Shumë →",
      whoTitle: "Kush Jemi",
      whoBody: "Muzeu i Gruas Shqiptare — MiG — është i dedikuar eksplorimit të kontributeve të gruas në historinë e Shqipërisë. Nga Iliria e lashtë deri në periudhën postkomuniste, muzeu nxjerr në pah rolin e gruas në periudha të ndryshme historike.<br><br>Besojmë se historia është e paplotë pa historitë e grave. MiG ekziston për të mbushur atë boshllëk — një histori, një artefakt, një zë njëherësh.",
      collectTitle: "Koleksionet Tona",
      collectBody: "Pesë koleksione të përhershme gjurmojnë harkun e plotë të përvojës së gruas në Shqipëri:<br><br><strong>Antikiteti &nbsp;·&nbsp; Bizantine &nbsp;·&nbsp; Osmane &nbsp;·&nbsp; Monarkia &nbsp;·&nbsp; Komunizmi</strong><br><br>Çdo epokë tregon një histori të ndryshme. Të gjitha kanë rëndësi.",
      numbersTitle: "Në Numra", firstSub: "Muzeu i gruas në Shqipëri", fiveSub: "Koleksione historike të përhershme",
      founderHead: "Historia Jonë", founderMore: "Lexo Më Shumë →",
      founderLabel: "Themeluar nga",
      founderTitle: "Një dëshmi e fuqisë<br>dhe <em>qëndrueshmërisë së gruas shqiptare</em>",
      founderBody1: "Muzeu i Gruas Shqiptare u themelua nga <strong>Elsa Ballauri</strong> — koleksioniste, gazetare dhe aktiviste e të drejtave të njeriut. Ajo krijoi muzeun për të ruajtur kujtesën e luftërave dhe arritjeve shpesh të harruara të grave.",
      founderBody2: "I vendosur në zemër të Tiranës, ky institucion privat ofron një pamje unike të transformimit shoqëror dhe politik të Shqipërisë — me fokus të veçantë te vështirësitë e grave gjatë regjimit komunist.",
      founderName: "Elsa Ballauri", founderRole: "Themeluese & Drejtoreshë, Muzeu i Gruas Shqiptare",
      editorialLabel: "Misioni Ynë",
      editorialTitle: "Historia është e paplotë<br>pa <em>historitë e grave</em>",
      editorialBody: "Për shekuj me radhë, kontributet, luftërat dhe triumfet e grave shqiptare kanë mbetur të paregjistruara. MiG u themelua për të ndryshuar këtë — për të krijuar një hapësirë të përhershme ku këto histori jo vetëm ruhen, por edhe festohen.",
      readStory: "Lexo Historinë Tonë",
      exhHead: "Ekspozita", viewAll: "Shiko të Gjitha →",
      exh1Tag: "● Aktualisht", exh1Title: "Gratë Nëpër Shekuj", exh1Desc: "Një eksplorim i roleve të gruas shqiptare nga antikiteti deri në modernitet.",
      exh2Tag: "Së Shpejti", exh2Title: "Ekspozitë e Re", exh2Desc: "Në zhvillim. Ndiqni @mig_albania në Instagram për njoftime.",
      exh3Tag: "Arkiva", exh3Title: "Ekspozita të Kaluara", exh3Desc: "Shfletoni arkivën tonë të ekspozitave të kaluara. Disponibile për hulumtim.",
      collHead: "Koleksione", exploreAll: "Eksploroni të Gjitha →",
      col1Era: "Antikiteti", col1Dates: "Iliria e Lashtë", col1Desc: "Gratë e botës ilire — udhëheqja, ndikimi dhe jeta e tyre e përditshme.",
      col2Era: "Bizantine", col2Dates: "Shek. IV – XV", col2Desc: "Gratë e fuqishme që formësuan Perandorinë Bizantine.",
      col3Era: "Osmane", col3Dates: "Shek. XV – XX", col3Desc: "Sfidat dhe triumfet e grave shqiptare gjatë pesë shekujve të sundimit osman.",
      col4Era: "Monarkia", col4Dates: "1912 – 1939", col4Desc: "Jeta e grave gjatë Mbretërisë së Shqipërisë.",
      col5Era: "Komunizmi", col5Dates: "1944 – 1992", col5Desc: "Persekutimi, rezistenca dhe roli i gruas nën regjimin komunist shqiptar.",
      eventsHead: "Ngjarje & Lajme", fullCal: "Kalendari i Plotë →",
      ev1Date: "Vazhdimisht", ev1Title: "Ture të Udhëhequra — Shqip & Anglisht. Për individë, grupe dhe klasa shkollore.", ev1Tag: "Tur",
      ev2Date: "Së Shpejti", ev2Title: "Hapja e Ekspozitës së Re — Ndiqni @mig_albania në Instagram", ev2Tag: "Ekspozitë",
      ev3Date: "Me Rezervim", ev3Title: "Rezervime për Grupe Private — Rezervoni vizitën tuaj për grupe 6+", ev3Tag: "Grup",
      ev4Date: "Gjatë Gjithë Vitit", ev4Title: "Programe Edukative — Punëtori dhe biseda për studentë dhe studiues", ev4Tag: "Edukim",
      visitHead: "Planifikoni Vizitën", visitorInfo: "Të Gjitha Informacionet →",
      howFind: "Si të Na Gjeni",
      dir1: "Drejtohuni tek <strong>Rruga Shyqyri Berxolli</strong> — një rrugë e vogël anësore pranë <strong>Myslym Shyrit</strong> në qendër të Tiranës.",
      dir2: "Në hyrje të ndërtesës, gjeni zilen e shënuar <strong>MiG</strong> dhe shtypni — edhe nëse dera e ndërtesës është e hapur.",
      dir3: "Ngjitni <strong>katër kate shkallë</strong> deri tek <strong>Apt. 8</strong>. Sinjalistika do t'ju udhëzojë.",
      dir4: "<strong>Mirë se vini në MiG!</strong> Keni arritur në muzeun e parë të gruas në Shqipëri.",
      goodToKnow: "Të Dini",
      infoBox: "🪧 &nbsp;Shenjat në Myslym Shyri dhe Rruga Shyqyri Berxolli do t'ju udhëzojnë.<br>🔔 &nbsp;Gjithmonë shtypni zilin <strong>MiG</strong>, edhe nëse dera është e hapur.<br>🚶 &nbsp;Pa ashensor — aksesi është vetëm nëpërmjet katër kateve shkallë.<br>♿ &nbsp;Fatkeqësisht muzeu nuk është i aksesueshëm për persona me lëvizshmëri të kufizuar.<br>🚗 &nbsp;Nuk ka parking të disponueshëm.<br>📞 &nbsp;Humbur? Telefononi <a href='tel:+355682023950'>+355 68 202 3950</a>",
      bookTour: "Rezervo një Tur",
      addrLabel: "Adresa", addrText: "Rruga Shyqyri Berxolli, Tiranë, Shqipëri", mapsLink: "Hap në Google Maps →",
      hoursLabel: "Orari", monFri: "E Hënë – E Premte", monFriHours: "10:00 – 17:00", sat: "E Shtunë", satHours: "10:00 – 15:00", sun: "E Diel", sunHours: "Mbyllur",
      contactLabel: "Kontakt",
      tipsLabel: "Këshilla", tip1: "🎓 Zbritje për studentë, pensionistë & grupe", tip2: "👨‍👩‍👧 Miqësor për familje", tip3: "🧭 5 minuta në këmbë nga Sheshi Skënderbej",
      linksLabel: "Lidhje të Dobishme", link1: "Udhëzime & Politika", link2: "Pyetjet e Shpeshta", link3: "Rezervo Tur Grupi",
      blogHead: "Blog", allPosts: "Të Gjitha Postimet →",
      blog1Date: "Mars 2026", blog1Title: "Mbretëreshat Ilire: Gratë që Sunduan Para se Historia t'i Kujtonte", blog1Excerpt: "Para se fjala 'mbretëreshë' të hynte në leksikun shqiptar, gratë ilire komanduan ushtri dhe formësuan botën e lashtë.",
      blog2Date: "Shkurt 2026", blog2Title: "Jeta Nën Bunker: Ekzistenca e Përditshme e Gruas në Shqipërinë Komuniste", blog2Excerpt: "Nga puna e detyruar deri te aktet sekrete të rezistencës — si dukej jeta e vërtetë për gratë?",
      blog3Date: "Janar 2026", blog3Title: "Mbledhja e Kujtesës: Si MiG Grumbullon Histori nga i Gjithë Shqipëria", blog3Excerpt: "Çdo objekt në koleksionin tonë dikur ishte jeta e përditshme e dikujt. Themeluese Elsa Ballauri ndan procesin.",
      readMore: "Lexo Më Shumë →",
      footerVisit: "Vizitë", footerMuseum: "Muzeu", footerConnect: "Kontakt",
    },
    fr: {
      navVisit: "Visiter", navMuseum: "Le Musée", navExhibitions: "Expositions", navCollections: "Collections", navEvents: "Événements & Actualités", navStore: "Boutique", navBlog: "Blog", navDonate: "Faire un Don",
      dropHowFind: "Comment Nous Trouver", dropPlanVisit: "Planifier votre Visite", dropReview: "Laisser un Avis",
      dropAbout: "À Propos", dropStory: "Notre Histoire", dropTeam: "Équipe", dropBoard: "Conseil d'Administration",
      dropCurrent: "Actuelles", dropSoon: "Prochainement", dropArchives: "Archives",
      dropAntiquity: "Antiquité / Illyrie", dropByzantine: "Byzantine", dropOttoman: "Ottoman", dropMonarchy: "Monarchie", dropCommunism: "Communisme",
      eyebrow: "Célébrant les Femmes Albanaises · Tirana, Albanie",
      title: "L'Histoire des Femmes —", titleEm: "Préservée & Racontée",
      sub: "Un voyage à travers les siècles, honorant le rôle des femmes dans l'histoire de l'Albanie — de l'Illyrie antique à nos jours.",
      planVisit: "Planifier votre Visite", discover: "Découvrir le Musée",
      badge1: "🏳️‍🌈 Accueillant LGBTQ+", badge2: "♀ Géré par des femmes", badge3: "📍 Tirana, Albanie",
      aboutHead: "Le Musée", learnMore: "En savoir plus →",
      whoTitle: "Qui Sommes-Nous",
      whoBody: "Le Musée des Femmes d'Albanie — MiG — est dédié à l'exploration des contributions des femmes tout au long de l'histoire de l'Albanie. De l'Illyrie antique à l'ère post-communiste, le musée met en lumière le rôle des femmes à travers différentes périodes historiques.<br><br>Nous croyons que l'histoire est incomplète sans les récits des femmes. MiG existe pour combler ce vide — une histoire, un artefact, une voix à la fois.",
      collectTitle: "Nos Collections",
      collectBody: "Cinq collections permanentes tracent l'arc complet de l'expérience des femmes en Albanie:<br><br><strong>Antiquité &nbsp;·&nbsp; Byzantine &nbsp;·&nbsp; Ottoman &nbsp;·&nbsp; Monarchie &nbsp;·&nbsp; Communisme</strong><br><br>Chaque époque raconte une histoire différente. Toutes comptent.",
      numbersTitle: "En Chiffres", firstSub: "Musée des femmes en Albanie", fiveSub: "Collections historiques permanentes",
      founderHead: "Notre Histoire", founderMore: "Lire Plus →",
      founderLabel: "Fondé par",
      founderTitle: "Un témoignage de la force<br>et de la <em>résilience des femmes albanaises</em>",
      founderBody1: "Le Musée des Femmes d'Albanie a été fondé par <strong>Elsa Ballauri</strong> — collectionneuse, journaliste et militante des droits humains. Elle a créé le musée pour préserver la mémoire des luttes et réalisations souvent méconnues des femmes.",
      founderBody2: "Situé au cœur de Tirana, cette institution privée offre un regard unique sur la transformation sociale et politique de l'Albanie — avec un focus particulier sur les épreuves vécues par les femmes sous le régime communiste.",
      founderName: "Elsa Ballauri", founderRole: "Fondatrice & Directrice, Musée des Femmes d'Albanie",
      editorialLabel: "Notre Mission",
      editorialTitle: "L'histoire est incomplète<br>sans <em>les récits des femmes</em>",
      editorialBody: "Pendant des siècles, les contributions, les luttes et les triomphes des femmes albanaises sont restés sans trace. MiG a été fondé pour changer cela — créer un espace permanent où ces histoires sont non seulement préservées, mais célébrées.",
      readStory: "Lire Notre Histoire",
      exhHead: "Expositions", viewAll: "Voir Tout →",
      exh1Tag: "● En ce moment", exh1Title: "Les Femmes à Travers les Âges", exh1Desc: "Une exploration des rôles des femmes albanaises de l'antiquité à la modernité.",
      exh2Tag: "Prochainement", exh2Title: "Nouvelle Exposition", exh2Desc: "En développement. Suivez @mig_albania sur Instagram pour les annonces.",
      exh3Tag: "Archives", exh3Title: "Expositions Passées", exh3Desc: "Parcourez nos archives d'expositions passées. Disponibles à des fins de recherche.",
      collHead: "Collections", exploreAll: "Explorer Tout →",
      col1Era: "Antiquité", col1Dates: "Illyrie Antique", col1Desc: "Les femmes du monde illyrien — leur leadership et leur vie quotidienne.",
      col2Era: "Byzantine", col2Dates: "IVe – XVe siècle", col2Desc: "Les femmes puissantes qui ont façonné l'Empire byzantin.",
      col3Era: "Ottoman", col3Dates: "XVe – XXe siècle", col3Desc: "Les défis et triomphes des femmes albanaises sous cinq siècles de domination ottomane.",
      col4Era: "Monarchie", col4Dates: "1912 – 1939", col4Desc: "La vie des femmes sous le Royaume d'Albanie.",
      col5Era: "Communisme", col5Dates: "1944 – 1992", col5Desc: "Persécution, résilience et rôle des femmes sous le régime communiste albanais.",
      eventsHead: "Événements & Actualités", fullCal: "Calendrier Complet →",
      ev1Date: "En continu", ev1Title: "Visites Guidées — Albanais & Anglais. Pour individus, groupes et classes.", ev1Tag: "Visite",
      ev2Date: "Prochainement", ev2Title: "Ouverture d'une Nouvelle Exposition — Suivez @mig_albania sur Instagram", ev2Tag: "Exposition",
      ev3Date: "Sur Réservation", ev3Title: "Réservations Privées — Pour groupes de 6 personnes ou plus", ev3Tag: "Groupe",
      ev4Date: "Toute l'Année", ev4Title: "Programmes Éducatifs — Ateliers et conférences pour étudiants et chercheurs", ev4Tag: "Éducation",
      visitHead: "Planifier votre Visite", visitorInfo: "Toutes les Infos →",
      howFind: "Comment Nous Trouver",
      dir1: "Dirigez-vous vers la <strong>Rruga Shyqyri Berxolli</strong> — une petite rue adjacente à <strong>Myslym Shyri</strong> dans le centre de Tirana.",
      dir2: "À l'entrée de l'immeuble, trouvez la sonnette marquée <strong>MiG</strong> et sonnez — même si la porte est déjà ouverte.",
      dir3: "Montez <strong>quatre étages</strong> jusqu'à l'<strong>Apt. 8</strong>. La signalétique vous guidera.",
      dir4: "<strong>Bienvenue chez MiG!</strong> Vous êtes arrivé au premier musée des femmes d'Albanie.",
      goodToKnow: "Bon à Savoir",
      infoBox: "🪧 &nbsp;Des panneaux sur Myslym Shyri et Rruga Shyqyri Berxolli vous guideront.<br>🔔 &nbsp;Sonnez toujours la sonnette <strong>MiG</strong>, même si la porte est ouverte.<br>🚶 &nbsp;Pas d'ascenseur — accès uniquement par quatre étages d'escaliers.<br>♿ &nbsp;Malheureusement le musée n'est pas accessible aux personnes à mobilité réduite.<br>🚗 &nbsp;Pas de parking disponible.<br>📞 &nbsp;Perdu(e)? Appelez <a href='tel:+355682023950'>+355 68 202 3950</a>",
      bookTour: "Réserver une Visite",
      addrLabel: "Adresse", addrText: "Rruga Shyqyri Berxolli, Tiranë, Albanie", mapsLink: "Ouvrir dans Google Maps →",
      hoursLabel: "Horaires", monFri: "Lundi – Vendredi", monFriHours: "10h00 – 17h00", sat: "Samedi", satHours: "10h00 – 15h00", sun: "Dimanche", sunHours: "Fermé",
      contactLabel: "Contact",
      tipsLabel: "Conseils", tip1: "🎓 Tarifs réduits pour étudiants, seniors & groupes", tip2: "👨‍👩‍👧 Adapté aux familles", tip3: "🧭 À 5 minutes à pied de la Place Skanderbeg",
      linksLabel: "Liens Utiles", link1: "Règles & Politiques", link2: "FAQ", link3: "Réserver une Visite de Groupe",
      blogHead: "Blog", allPosts: "Tous les Articles →",
      blog1Date: "Mars 2026", blog1Title: "Les Reines Illyriennes: Femmes qui Régnèrent Avant que l'Histoire ne s'en Souvienne", blog1Excerpt: "Bien avant que le mot 'reine' entre dans le lexique albanais, les femmes illyriennes commandaient des armées.",
      blog2Date: "Février 2026", blog2Title: "La Vie sous les Bunkers: L'Existence Quotidienne des Femmes en Albanie Communiste", blog2Excerpt: "Du travail forcé aux actes secrets de résistance — à quoi ressemblait vraiment la vie des femmes?",
      blog3Date: "Janvier 2026", blog3Title: "Collecter la Mémoire: Comment MiG Recueille les Histoires à travers l'Albanie", blog3Excerpt: "Chaque objet de notre collection était autrefois la vie quotidienne de quelqu'un.",
      readMore: "Lire Plus →",
      footerVisit: "Visiter", footerMuseum: "Le Musée", footerConnect: "Contact",
    },
    it: {
      navVisit: "Visita", navMuseum: "Il Museo", navExhibitions: "Mostre", navCollections: "Collezioni", navEvents: "Eventi & Notizie", navStore: "Negozio", navBlog: "Blog", navDonate: "Dona",
      dropHowFind: "Come Trovarci", dropPlanVisit: "Pianifica la Visita", dropReview: "Lascia una Recensione",
      dropAbout: "Chi Siamo", dropStory: "La Nostra Storia", dropTeam: "Team", dropBoard: "Consiglio di Amministrazione",
      dropCurrent: "Attuali", dropSoon: "Prossimamente", dropArchives: "Archivi",
      dropAntiquity: "Antichità / Illiria", dropByzantine: "Bizantino", dropOttoman: "Ottomano", dropMonarchy: "Monarchia", dropCommunism: "Comunismo",
      eyebrow: "Celebrando le Donne Albanesi · Tirana, Albania",
      title: "La Storia delle Donne —", titleEm: "Preservata & Raccontata",
      sub: "Un viaggio attraverso i secoli, onorando il ruolo delle donne nella storia dell'Albania — dall'antica Illiria ai giorni nostri.",
      planVisit: "Pianifica la Visita", discover: "Scopri il Museo",
      badge1: "🏳️‍🌈 LGBTQ+ Friendly", badge2: "♀ A gestione femminile", badge3: "📍 Tirana, Albania",
      aboutHead: "Il Museo", learnMore: "Scopri di più →",
      whoTitle: "Chi Siamo",
      whoBody: "Il Museo delle Donne d'Albania — MiG — è dedicato all'esplorazione dei contributi delle donne nella storia dell'Albania. Dall'antica Illiria all'era post-comunista, il museo valorizza il ruolo delle donne in diversi periodi storici.<br><br>Crediamo che la storia sia incompleta senza le storie delle donne. MiG esiste per colmare questo divario — una storia, un artefatto, una voce alla volta.",
      collectTitle: "Le Nostre Collezioni",
      collectBody: "Cinque collezioni permanenti tracciano l'arco completo dell'esperienza delle donne in Albania:<br><br><strong>Antichità &nbsp;·&nbsp; Bizantino &nbsp;·&nbsp; Ottomano &nbsp;·&nbsp; Monarchia &nbsp;·&nbsp; Comunismo</strong><br><br>Ogni epoca racconta una storia diversa. Tutte contano.",
      numbersTitle: "In Cifre", firstSub: "Museo delle donne in Albania", fiveSub: "Collezioni storiche permanenti",
      founderHead: "La Nostra Storia", founderMore: "Leggi di più →",
      founderLabel: "Fondata da",
      founderTitle: "Una testimonianza della forza<br>e della <em>resilienza delle donne albanesi</em>",
      founderBody1: "Il Museo delle Donne d'Albania è stato fondato da <strong>Elsa Ballauri</strong> — collezionista, giornalista e attivista per i diritti umani. Ha creato il museo per preservare la memoria delle lotte e dei successi spesso trascurati delle donne.",
      founderBody2: "Situato nel cuore di Tirana, questa istituzione privata offre uno sguardo unico sulla trasformazione sociale e politica dell'Albania — con un focus speciale sulle difficoltà vissute dalle donne durante il regime comunista.",
      founderName: "Elsa Ballauri", founderRole: "Fondatrice & Direttrice, Museo delle Donne d'Albania",
      editorialLabel: "La Nostra Missione",
      editorialTitle: "La storia è incompleta<br>senza <em>le storie delle donne</em>",
      editorialBody: "Per secoli, i contributi, le lotte e i trionfi delle donne albanesi sono rimasti senza traccia. MiG è stato fondato per cambiare questo — creare uno spazio permanente dove queste storie non solo vengono preservate, ma celebrate.",
      readStory: "Leggi la Nostra Storia",
      exhHead: "Mostre", viewAll: "Vedi Tutte →",
      exh1Tag: "● In mostra ora", exh1Title: "Le Donne Attraverso i Secoli", exh1Desc: "Un'esplorazione dei ruoli delle donne albanesi dall'antichità alla modernità.",
      exh2Tag: "Prossimamente", exh2Title: "Nuova Mostra", exh2Desc: "In sviluppo. Segui @mig_albania su Instagram per annunci.",
      exh3Tag: "Archivi", exh3Title: "Mostre Passate", exh3Desc: "Sfoglia il nostro archivio di mostre passate. Disponibile per ricerca.",
      collHead: "Collezioni", exploreAll: "Esplora Tutto →",
      col1Era: "Antichità", col1Dates: "Illiria Antica", col1Desc: "Le donne del mondo illirico — la loro leadership e vita quotidiana.",
      col2Era: "Bizantino", col2Dates: "IV – XV secolo", col2Desc: "Le donne potenti che hanno plasmato l'Impero Bizantino.",
      col3Era: "Ottomano", col3Dates: "XV – XX secolo", col3Desc: "Le sfide e i trionfi delle donne albanesi durante cinque secoli di dominio ottomano.",
      col4Era: "Monarchia", col4Dates: "1912 – 1939", col4Desc: "La vita delle donne nel Regno d'Albania.",
      col5Era: "Comunismo", col5Dates: "1944 – 1992", col5Desc: "Persecuzione, resilienza e ruolo delle donne sotto il regime comunista albanese.",
      eventsHead: "Eventi & Notizie", fullCal: "Calendario Completo →",
      ev1Date: "Continuo", ev1Title: "Visite Guidate — Albanese & Inglese. Per individui, gruppi e classi scolastiche.", ev1Tag: "Visita",
      ev2Date: "Prossimamente", ev2Title: "Apertura Nuova Mostra — Segui @mig_albania su Instagram", ev2Tag: "Mostra",
      ev3Date: "Su Prenotazione", ev3Title: "Prenotazioni Gruppi Privati — Per gruppi di 6 o più persone", ev3Tag: "Gruppo",
      ev4Date: "Tutto l'Anno", ev4Title: "Programmi Educativi — Workshop e conferenze per studenti e ricercatori", ev4Tag: "Educazione",
      visitHead: "Pianifica la Visita", visitorInfo: "Tutte le Info →",
      howFind: "Come Trovarci",
      dir1: "Dirigiti verso <strong>Rruga Shyqyri Berxolli</strong> — una piccola strada laterale di <strong>Myslym Shyri</strong> nel centro di Tirana.",
      dir2: "All'ingresso del palazzo, trova il citofono con scritto <strong>MiG</strong> e suonalo — anche se il portone è già aperto.",
      dir3: "Sali <strong>quattro piani di scale</strong> fino all'<strong>Apt. 8</strong>. La segnaletica ti guiderà.",
      dir4: "<strong>Benvenuto/a al MiG!</strong> Sei arrivato/a al primo museo delle donne in Albania.",
      goodToKnow: "Informazioni Utili",
      infoBox: "🪧 &nbsp;Segnali su Myslym Shyri e Rruga Shyqyri Berxolli ti guideranno.<br>🔔 &nbsp;Suona sempre il campanello <strong>MiG</strong>, anche se il portone è aperto.<br>🚶 &nbsp;Nessun ascensore — accesso solo tramite quattro piani di scale.<br>♿ &nbsp;Purtroppo il museo non è accessibile ai visitatori con mobilità ridotta.<br>🚗 &nbsp;Nessun parcheggio disponibile.<br>📞 &nbsp;Perso/a? Chiama <a href='tel:+355682023950'>+355 68 202 3950</a>",
      bookTour: "Prenota un Tour",
      addrLabel: "Indirizzo", addrText: "Rruga Shyqyri Berxolli, Tiranë, Albania", mapsLink: "Apri in Google Maps →",
      hoursLabel: "Orari", monFri: "Lunedì – Venerdì", monFriHours: "10:00 – 17:00", sat: "Sabato", satHours: "10:00 – 15:00", sun: "Domenica", sunHours: "Chiuso",
      contactLabel: "Contatti",
      tipsLabel: "Consigli", tip1: "🎓 Sconti per studenti, anziani & gruppi", tip2: "👨‍👩‍👧 Ambiente a misura di famiglia", tip3: "🧭 A 5 minuti a piedi da Piazza Skanderbeg",
      linksLabel: "Link Utili", link1: "Linee Guida & Politiche", link2: "FAQ", link3: "Prenota Tour di Gruppo",
      blogHead: "Blog", allPosts: "Tutti gli Articoli →",
      blog1Date: "Marzo 2026", blog1Title: "Le Regine Illiriche: Donne che Governarono Prima che la Storia le Ricordasse", blog1Excerpt: "Prima che la parola 'regina' entrasse nel lessico albanese, le donne illiriche comandavano eserciti e plasmavano il mondo antico.",
      blog2Date: "Febbraio 2026", blog2Title: "La Vita sotto i Bunker: L'Esistenza Quotidiana delle Donne nell'Albania Comunista", blog2Excerpt: "Dal lavoro forzato agli atti segreti di resistenza — com'era davvero la vita delle donne?",
      blog3Date: "Gennaio 2026", blog3Title: "Raccogliere la Memoria: Come MiG Raccoglie Storie da Tutta l'Albania", blog3Excerpt: "Ogni oggetto della nostra collezione era un tempo la vita quotidiana di qualcuno.",
      readMore: "Leggi di più →",
      footerVisit: "Visita", footerMuseum: "Il Museo", footerConnect: "Contatti",
    }
  };

  function setLang(lang) {
    const t = translations[lang];
    if (!t) return;

    // Update active buttons (both desktop and mobile)
    document.querySelectorAll('.lang-btn, .lang-switcher-mobile button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll(`[onclick="setLang('${lang}')"], [onclick="setLang('${lang}');toggleMenu()"]`).forEach(b => b.classList.add('active'));

    // ── NAV LINKS (desktop) ──
    const navSpans = document.querySelectorAll('.nav-links > li > span');
    const navAs = document.querySelectorAll('.nav-links > li > a');
    const navLabels = [t.navVisit, t.navMuseum, t.navExhibitions, t.navCollections, t.navEvents, t.navBlog, t.navStore];
    let si = 0, ai = 0;
    document.querySelectorAll('.nav-links > li').forEach(li => {
      const span = li.querySelector(':scope > span');
      const a = li.querySelector(':scope > a');
      if (span) { span.textContent = navLabels[si++] + ' ↓'; }
      else if (a) { a.textContent = navLabels[si++]; }
    });

    // ── DROPDOWN LINKS ──
    const drops = document.querySelectorAll('.drop');
    if (drops[0]) { drops[0].children[0].textContent = t.dropHowFind; drops[0].children[1].textContent = t.dropPlanVisit; drops[0].children[2].textContent = t.dropReview; }
    if (drops[1]) { drops[1].children[0].textContent = t.dropAbout; drops[1].children[1].textContent = t.dropStory; drops[1].children[2].textContent = t.dropTeam; drops[1].children[3].textContent = t.dropBoard; }
    if (drops[2]) { drops[2].children[0].textContent = t.dropCurrent; drops[2].children[1].textContent = t.dropSoon; drops[2].children[2].textContent = t.dropArchives; }
    if (drops[3]) { drops[3].children[0].textContent = t.dropAntiquity; drops[3].children[1].textContent = t.dropByzantine; drops[3].children[2].textContent = t.dropOttoman; drops[3].children[3].textContent = t.dropMonarchy; drops[3].children[4].textContent = t.dropCommunism; }

    // ── NAV BUTTON ──
    const donateBtn = document.querySelector('.nav-btn.filled');
    if (donateBtn) donateBtn.textContent = t.navDonate;

    // ── HERO ──
    const eyebrow = document.querySelector('.hero-eyebrow');
    if (eyebrow) eyebrow.textContent = t.eyebrow;
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.innerHTML = t.title + '<br><em>' + t.titleEm + '</em>';
    const heroSub = document.querySelector('.hero-sub');
    if (heroSub) heroSub.textContent = t.sub;
    const heroBtns = document.querySelectorAll('.hero-btns .btn');
    if (heroBtns[0]) heroBtns[0].textContent = t.planVisit;
    if (heroBtns[1]) heroBtns[1].textContent = t.discover;

    // ── BADGES ──
    const badgeSpans = [...document.querySelectorAll('.badges-bar span')].filter(s => s.textContent !== '·');
    if (badgeSpans[0]) badgeSpans[0].textContent = t.badge1;
    if (badgeSpans[1]) badgeSpans[1].textContent = t.badge2;
    if (badgeSpans[2]) badgeSpans[2].textContent = t.badge3;

    // ── ABOUT ──
    const aboutHead = document.querySelector('#about .sec-head h2');
    if (aboutHead) aboutHead.textContent = t.aboutHead;
    const aboutLearn = document.querySelector('#about .sec-head a');
    if (aboutLearn) aboutLearn.textContent = t.learnMore;
    const aboutCols = document.querySelectorAll('.about-col h3');
    if (aboutCols[0]) aboutCols[0].textContent = t.whoTitle;
    if (aboutCols[1]) aboutCols[1].textContent = t.collectTitle;
    if (aboutCols[2]) aboutCols[2].textContent = t.numbersTitle;
    const aboutPs = document.querySelectorAll('.about-col:first-child p');
    if (aboutPs[0]) aboutPs[0].innerHTML = t.whoBody;
    const collectP = document.querySelector('.about-col:nth-child(2) p:first-of-type');
    if (collectP) collectP.innerHTML = t.collectBody;
    const statSubs = document.querySelectorAll('.about-col:last-child p');
    if (statSubs[0]) statSubs[0].textContent = t.firstSub;
    if (statSubs[1]) statSubs[1].textContent = t.fiveSub;

    // ── FOUNDER ──
    const founderHead = document.querySelector('#founder .sec-head h2');
    if (founderHead) founderHead.textContent = t.founderHead;
    const founderMore = document.querySelector('#founder .sec-head a');
    if (founderMore) founderMore.textContent = t.founderMore;
    const founderLabel = document.querySelector('.founder-label');
    if (founderLabel) founderLabel.textContent = t.founderLabel;
    const founderTitle = document.querySelector('.founder-title');
    if (founderTitle) founderTitle.innerHTML = t.founderTitle;
    const founderBodies = document.querySelectorAll('.founder-body');
    if (founderBodies[0]) founderBodies[0].innerHTML = t.founderBody1;
    if (founderBodies[1]) founderBodies[1].innerHTML = t.founderBody2;
    const founderName = document.querySelector('.founder-name');
    if (founderName) founderName.textContent = t.founderName;
    const founderRole = document.querySelector('.founder-role');
    if (founderRole) founderRole.textContent = t.founderRole;

    // ── EDITORIAL ──
    const editLabel = document.querySelector('.editorial-label');
    if (editLabel) editLabel.textContent = t.editorialLabel;
    const editTitle = document.querySelector('.editorial-title');
    if (editTitle) editTitle.innerHTML = t.editorialTitle;
    const editBody = document.querySelector('.editorial-body');
    if (editBody) editBody.textContent = t.editorialBody;
    const readStoryBtn = document.querySelector('#editorial .btn');
    if (readStoryBtn) readStoryBtn.textContent = t.readStory;

    // ── EXHIBITIONS ──
    const exhHead = document.querySelector('#exhibitions .sec-head h2');
    if (exhHead) exhHead.textContent = t.exhHead;
    const exhMore = document.querySelector('#exhibitions .sec-head a');
    if (exhMore) exhMore.textContent = t.viewAll;
    const exhCards = document.querySelectorAll('.exh-card');
    if (exhCards[0]) { exhCards[0].querySelector('.exh-tag').textContent = t.exh1Tag; exhCards[0].querySelector('.exh-title').textContent = t.exh1Title; exhCards[0].querySelector('.exh-desc').textContent = t.exh1Desc; }
    if (exhCards[1]) { exhCards[1].querySelector('.exh-tag').textContent = t.exh2Tag; exhCards[1].querySelector('.exh-title').textContent = t.exh2Title; exhCards[1].querySelector('.exh-desc').textContent = t.exh2Desc; }
    if (exhCards[2]) { exhCards[2].querySelector('.exh-tag').textContent = t.exh3Tag; exhCards[2].querySelector('.exh-title').textContent = t.exh3Title; exhCards[2].querySelector('.exh-desc').textContent = t.exh3Desc; }

    // ── COLLECTIONS ──
    const collHead = document.querySelector('#collections .sec-head h2');
    if (collHead) collHead.textContent = t.collHead;
    const collMore = document.querySelector('#collections .sec-head a');
    if (collMore) collMore.textContent = t.exploreAll;
    const collCards = document.querySelectorAll('.collection-card');
    const collData = [
      [t.col1Era, t.col1Dates, t.col1Desc], [t.col2Era, t.col2Dates, t.col2Desc],
      [t.col3Era, t.col3Dates, t.col3Desc], [t.col4Era, t.col4Dates, t.col4Desc],
      [t.col5Era, t.col5Dates, t.col5Desc]
    ];
    collCards.forEach((c, i) => {
      if (collData[i]) {
        c.querySelector('.collection-era').textContent = collData[i][0];
        c.querySelector('.collection-dates').textContent = collData[i][1];
        c.querySelector('.collection-desc').textContent = collData[i][2];
      }
    });

    // ── EVENTS ──
    const evHead = document.querySelector('#events .sec-head h2');
    if (evHead) evHead.textContent = t.eventsHead;
    const evMore = document.querySelector('#events .sec-head a');
    if (evMore) evMore.textContent = t.fullCal;
    const evRows = document.querySelectorAll('.event-row');
    const evData = [
      [t.ev1Date, t.ev1Title, t.ev1Tag], [t.ev2Date, t.ev2Title, t.ev2Tag],
      [t.ev3Date, t.ev3Title, t.ev3Tag], [t.ev4Date, t.ev4Title, t.ev4Tag]
    ];
    evRows.forEach((r, i) => {
      if (evData[i]) {
        r.querySelector('.ev-date').textContent = evData[i][0];
        r.querySelector('.ev-title').textContent = evData[i][1];
        r.querySelector('.ev-tag').textContent = evData[i][2];
      }
    });

    // ── VISIT ──
    const visitHead = document.querySelector('#visit .sec-head h2');
    if (visitHead) visitHead.textContent = t.visitHead;
    const visitMore = document.querySelector('#visit .sec-head a');
    if (visitMore) visitMore.textContent = t.visitorInfo;
    const howFindH = document.querySelector('.visit-left h3');
    if (howFindH) howFindH.textContent = t.howFind;
    const dirTxts = document.querySelectorAll('.dir-txt');
    if (dirTxts[0]) dirTxts[0].innerHTML = t.dir1;
    if (dirTxts[1]) dirTxts[1].innerHTML = t.dir2;
    if (dirTxts[2]) dirTxts[2].innerHTML = t.dir3;
    if (dirTxts[3]) dirTxts[3].innerHTML = t.dir4;
    const infoBoxLabel = document.querySelector('.info-box-label');
    if (infoBoxLabel) infoBoxLabel.textContent = t.goodToKnow;
    const infoBoxP = document.querySelector('.info-box p');
    if (infoBoxP) infoBoxP.innerHTML = t.infoBox;
    const visitBtns = document.querySelectorAll('#visit .btn-dark');
    if (visitBtns[0]) visitBtns[0].textContent = t.bookTour;

    // vblocks
    const vblocks = document.querySelectorAll('.vblock');
    if (vblocks[0]) { vblocks[0].querySelector('.vblock-label').textContent = t.addrLabel; vblocks[0].querySelector('p').textContent = t.addrText; const mapsA = vblocks[0].querySelector('a[href*="google"]'); if(mapsA) mapsA.textContent = t.mapsLink; }
    if (vblocks[1]) {
      vblocks[1].querySelector('.vblock-label').textContent = t.hoursLabel;
      const hRows = vblocks[1].querySelectorAll('.hours-row');
      if (hRows[0]) { hRows[0].children[0].textContent = t.monFri; hRows[0].children[1].textContent = t.monFriHours; }
      if (hRows[1]) { hRows[1].children[0].textContent = t.sat; hRows[1].children[1].textContent = t.satHours; }
      if (hRows[2]) { hRows[2].children[0].textContent = t.sun; hRows[2].children[1].textContent = t.sunHours; }
    }
    if (vblocks[2]) vblocks[2].querySelector('.vblock-label').textContent = t.contactLabel;
    if (vblocks[3]) {
      vblocks[3].querySelector('.vblock-label').textContent = t.tipsLabel;
      const tipPs = vblocks[3].querySelectorAll('p');
      if (tipPs[0]) tipPs[0].textContent = t.tip2;
      if (tipPs[1]) tipPs[1].textContent = t.tip3;
    }
    if (vblocks[4]) {
      vblocks[4].querySelector('.vblock-label').textContent = t.linksLabel;
      const linkAs = vblocks[4].querySelectorAll('a');
      if (linkAs[0]) linkAs[0].textContent = t.link1;
      if (linkAs[1]) linkAs[1].textContent = t.link2;
      if (linkAs[2]) linkAs[2].textContent = t.link3;
    }

    // ── BLOG ──
    const blogHead = document.querySelector('#blog .sec-head h2');
    if (blogHead) blogHead.textContent = t.blogHead;
    const blogMore = document.querySelector('#blog .sec-head a');
    if (blogMore) blogMore.textContent = t.allPosts;
    const blogCards = document.querySelectorAll('.blog-card');
    const blogData = [
      [t.blog1Date, t.blog1Title, t.blog1Excerpt], [t.blog2Date, t.blog2Title, t.blog2Excerpt],
      [t.blog3Date, t.blog3Title, t.blog3Excerpt]
    ];
    blogCards.forEach((c, i) => {
      if (blogData[i]) {
        c.querySelector('.blog-date').textContent = blogData[i][0];
        c.querySelector('.blog-title').textContent = blogData[i][1];
        c.querySelector('.blog-excerpt').textContent = blogData[i][2];
        c.querySelector('.blog-read').textContent = t.readMore;
      }
    });

    // ── FOOTER ──
    const fcolLabels = document.querySelectorAll('.fcol-label');
    if (fcolLabels[1]) fcolLabels[1].textContent = t.footerVisit;
    if (fcolLabels[2]) fcolLabels[2].textContent = t.footerMuseum;
    if (fcolLabels[3]) fcolLabels[3].textContent = t.footerConnect;
  }

// ─────────────────────────────────────────

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('hamburger');
    menu.classList.toggle('open');
    btn.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  }
  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) {
      document.getElementById('mobileMenu').classList.remove('open');
      document.getElementById('hamburger').classList.remove('open');
      document.body.style.overflow = '';
    }
  });
  // Sync mobile lang buttons with desktop
  const origSetLang = setLang;
  window.setLang = function(lang) {
    origSetLang(lang);
    // Sync mobile lang buttons
    document.querySelectorAll('#mLang button').forEach((b, i) => {
      b.classList.remove('active');
    });
    const langs = ['en','sq','fr','it'];
    const idx = langs.indexOf(lang);
    const mBtns = document.querySelectorAll('#mLang button');
    if (mBtns[idx]) mBtns[idx].classList.add('active');
  };