function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

window.onscroll = function () { myFunction() };
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

const content = {
    about: {
        en: `I'm Simeon Pavlov, a passionate freeride skier from Sofia, Bulgaria. At the young age of 4, I strapped on my first pair of skis, 
        thanks to my ski-loving parents. Little did I know that those early glides down the slopes would ignite a lifelong love affair with 
        freeride skiing.<br>My journey into freeride skiing officially began at 15 when I attended my first competition. I've been carving my 
        way through the snow ever since, taking part in an average three to four competitions a season. The thrill of competition became a 
        familiar companion. It culminated in my first victory in the junior category at the age of 17. I've made a name for myself in the 
        freeride community.<br>Outside of the snow-capped mountains, my off-seasons are filled with a variety of outdoor adventures. Surfing, 
        climbing, hiking – you name it, I've probably tried it. As a proponent of an active lifestyle, I find joy in constant movement and 
        keep myself fit through fit through a range of different sports. Notably, I proudly held the title of Bulgarian national champion in
        both Freeride skiing and Enduro Mountain Biking. I even ventured into the World Enduro Series, where I faced one of the most challenging 
        competitions of my career, finishing 24th.<br>The big screen has also showcased a glimpse of my skiing skills. I co-starred in the ski movie <a href='https://vimeo.com/656207361' target="_blank"><strong>\"Зима\"</strong></a>, 
        filmed right here in Bulgaria. Our efforts were rewarded with the distinction of the best Bulgarian outdoor movie, a testament to the raw beauty 
        of our mountainous landscapes.`,

        bg: `Аз съм Симеон Павлов, фрийрайд скиор от София, България. На ранната възраст от 4 години се качих на първите си ски, благодарение
            на моите родители, които обичат ските. Никога не съм знаел, че тези ранни спускания ще запалят любовта ми към свободните ски за цял 
            живот. <br>Началото на свободното каране на ски официално започна на 15 години, когато участвах в първото си състезание. Оттогава си 
            проправям път през снега, като участвам всеки сезон средно на три до четири състезания. Тръпката от състезанията се превърна в 
            навик и от тогава не съм спирал да участвам по състезания. Кулминацията беше когато спечелих първото ми състезание в юношеска 
            категория на 17-годишна възраст и започнах да си изграждам име в общността на фрийрайдърите. <br>Отвъд покритите със сняг върхове, 
            практикувам много на брой спортове и приключения на открито. Сърф, катерене, колоездене, туризъм - както и да го наречете, 
            вероятно съм го пробвал. Привърженик съм на активния начин на живот, намирам радост в постоянното движение и поддържам 
            физическата си форма чрез различни спортове. По-специално, с гордост притежавам титлата на български национален шампион 
            по фрийрайд ски и ендуро планинско колоездене. Участвах дори в световното състезание по ендуро с колела, където се изправих 
            пред едно от най-предизвикателните състезания в кариерата си и завърших на 24-то място. <br>Сребърният екран също запечата 
            част от скиорските ми умения. Участвах в ски филма <a href='https://vimeo.com/656207361' target="_blank"><strong>\"Зима\"</strong></a>, заснет тук, в България. Усилията ни бяха възнаградени с 
            отличието за най-добър български филм на открито, свидетелство за суровата красота на нашите планински пейзажи.`
    },
    aboutText2: {
        en: `Most recently, I reached a new milestone by qualifying for the Freeride World Challenger Tour, becoming the first Bulgarian ever to compete at this level of freeride skiing. It was a season filled with both challenges and breakthroughs — from tough starts and canceled stops to moments where everything clicked and I stood my ground among some of the world’s best riders. Step by step, I found consistency and confidence, finishing 14th overall and securing my spot for the upcoming season — a proud moment not just for me, but for Bulgarian freeride as a whole.
         Currently, my sights are set on an even more ambitious goal — to become the first Bulgarian ever to qualify for the prestigious Freeride World Tour. I’ve already made significant strides toward that dream, with back-to-back victories at the Bansko 3-star competition and several top 10 finishes at 4-star events. Each result brings me closer, but more importantly, it fuels the fire that keeps me pushing my limits.
         For me, skiing isn’t just a sport — it’s a passion, a way of life. Whether I’m flying down the slopes, conquering new peaks, or testing how far I can go, every moment in the mountains is a celebration of who I am. And the journey is far from over — the adventure never stops.`
        ,
        bg: `Наскоро постигнах нов важен етап в кариерата си, като се класирах за Freeride World Challenger Tour, ставайки първият българин, който някога е участвал на такова ниво във фрийрайд ските. Сезонът беше изпълнен както с предизвикателства — от трудни стартове и отменени състезания до моменти, в които всичко се получаваше и успявах да се изправя достойно срещу някои от най-добрите състезатели в света. Стъпка по стъпка намерих постоянство и увереност и завърших на 14-то място в генералното класиране, осигурявайки си място за следващия сезон — горд момент не само за мен, но и за българския фрийрайд като цяло. В момента погледът ми е насочен към още по-амбициозна цел — да стана първият българин, който се класира за престижния Freeride World Tour. Вече направих значителни крачки към тази мечта, с две поредни победи в Bansko 3-star състезанието и няколко класирания в топ 10 на 4-star стартове. Всеки резултат ме доближава до целта, но по-важното е, че подхранва огъня, който ме кара непрекъснато да надскачам границите си. За мен ските не са просто спорт — те са страст, начин на живот.`
    },
    futurePlans: {
        en: `Throughout the upcoming season, I'll be traveling across the Alps to compete in the Freeride World Tour Challengers. This competition is
            the crucial next step toward my goal of qualifying for the Freeride World Tour, the pinnacle of freeride skiing. To earn a spot in the 
            Challengers, I had to place in the top 25 of the Freeride World Qualifiers, securing my position for the next year. With only 25 men 
            competing in the Challengers, no Bulgarian has achieved this yet. In between competitions, I also plan to film and showcase the beauty 
            of Bulgaria's untouched mountains, highlighting our incredible terrain. I need your support to help me reach my dream 
            of becoming the first Bulgarian to qualify for the Freeride World Tour!`,

        bg: `През предстоящия сезон ще пътувам из Алпите, за да се състезавам в Freeride World Tour Challengers. 
            Това са серия от състезания и е решаваща следваща стъпка към целта ми да се класирам за 
            Freeride World Tour - върхът на фрийрайд ски спорта. За да спечеля място в Challengers, трябваше да се 
            класирам в топ 25 на Freeride World Qualifiers, с което да си осигуря позиция за 
            следващата година. С само 25 мъже, които се състезават в Challengers, никой българин все 
            още не е постигнал това. Между състезанията също така планирам да снимам и да показвам 
            невероятния терен и условия, която нашата планина предлага.
            Имам нужда от вашата подкрепа, за да ми помогнете да постигна мечтата си да стана първият българин, който се класира за Freeride World Tour!`
    },
    latest: {
        en: `<i>Explore the thrill and beauty of my recent skiing escapades through these captivating snapshots. Whether gracefully navigating pristine powder or conquering challenging slopes, each image tells a story of passion, perseverance, and the sheer joy of freeride skiing. Take a visual journey with me through the world of snow-covered peaks and adrenaline-pumping descents.</i>`,

        bg: `<i>Разгледайте снимките от последните ми ски приключения и състезания.<br>
             Всяка снимка разказва за страстта, упоритостта и чистата радост от свободното каране на ски.</i>`
    },
    clickPicture: {
        en: `<i>Click on the image to make them bigger</i>`,

        bg: `<i>Кликнете върху изображенията, за да ги увеличите</i>`
    }
}

document.getElementById('aboutText').innerHTML = content.about.bg;
document.getElementById('aboutText2').innerText = content.aboutText2.bg;
document.getElementById('futurePlans').innerText = content.futurePlans.bg;
document.getElementById('latest').innerHTML = content.latest.bg;
document.getElementById('clickPicture').innerHTML = content.clickPicture.bg;

let currentLanguage = 'en';

function switchLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'bg' : 'en';
    document.getElementById('aboutText').innerHTML = content.about[currentLanguage];
    document.getElementById('aboutText2').innerText = content.aboutText2[currentLanguage];
    document.getElementById('futurePlans').innerText = content.futurePlans[currentLanguage];
    document.getElementById('latest').innerHTML = content.latest[currentLanguage];
    document.getElementById('clickPicture').innerHTML = content.clickPicture[currentLanguage];
}