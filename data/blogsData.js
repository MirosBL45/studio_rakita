export const blogData = [
    {
        id: 1,
        title: "Video",
        url: "/blog/video",
        // image: webapps,
        description: 'Embark on a journey through my collection of dynamic web applications, each meticulously crafted using JavaScript, React, Next.js and Vue.js. These applications showcase my expertise in frontend development and my dedication to creating intuitive and efficient digital solutions.',
        forUrl: 'apps',
    },
    {
        id: 3,
        title: "Pictures",
        url: "/blog/pictures",
        // image: pictures,
        description: 'Indulge in the thrill of interactive entertainment with my collection of games. Developed using JavaScript these games offer experiences that captivate players because each game highlights my passion for blending creativity with technical expertise.',
        forUrl: 'games',
    },
    {
        id: 2,
        title: "Dron",
        url: "/blog/dron",
        // image: dron,
        description: 'Discover a variety of websites that showcase my emphasis on clean design and a smooth user experience, demonstrating my dedication to creating visually appealing and efficient online destinations. Explore the convergence of art and technology as you travel these engaging digital environments.',
        forUrl: 'websites',
    },
];

export const blogItems = {
    video: [
        {
            id: "jednakala",
            title: "Kala hvala",
            desc: "This React app was made so that people can express their gratitude to firefighters by posting an image and text as desired. All posts are publicly available, and at the end, the winning post is announced.",
            liveUrl: 'https://jednakala-jednohvala.hr/',
            gitUrl: 'https://github.com/MirosBL45/kala-hvala',
            // image: kala,
            techs: ['React', 'MaterialUI', 'Axios', 'JS-Cookie'],
        },
    ],
    pictures: [
        {
            id: 1,
            title: "Blackjack",
            desc: "It was crucial to implement the rules of Blackjack, including proper counting of card values, treating aces as 1 or 11, and proper management of aces. Also, I had to pay attention to the logic around `busting` when a player goes over 21.",
            liveUrl: 'https://mjblackjack.netlify.app/',
            gitUrl: 'https://github.com/MirosBL45/Blackjack',
            // image: blackjack,
            techs: ['JavaScript', 'SCSS', 'CSS', 'HTML'],
        },
    ],
    dron: [
        {
            id: "talex",
            title: "Talex",
            desc: "Talex invest is a company for the execution of works in construction, Belgrade. I did the creation of galleries, the integration of animations in Vue.js, image customization and other things.",
            liveUrl: 'https://www.talex.rs/',
            gitUrl: 'https://github.com/MirosBL45/talex',
            // image: talex,
            techs: ['Vue.js', 'Nuxt.js', 'Leaflet', 'CSS'],
        },
    ],
};