function arrOfDays() {
    let arrOfDays = [];
    for(let i = 1; i <= 31; i++) {
        arrOfDays.push(i);
    }
    return arrOfDays;
}

function arrOfYears() {
    let arrOfYears = [];
    for(let i = 1970; i <= 2022; i++) {
        arrOfYears.push(i);
    }
    return arrOfYears.reverse();
}

export const trends = [
    {
        primary: "Trending",
        secondary: "#ElonMuskIsATroll"
    },
    {
        primary: "Trending in Business & finance",
        secondary: "#cryptocrash"
    },
    {
        primary: "Business & Finance - Trending",
        secondary: "#Dogechain"
    },
    {
        primary: "Trending in Philippines",
        secondary: "Bella Poarch"
    },
    {
        primary: "Trending in Philippines",
        secondary: "La Salle"
    },
    {
        primary: "Trending",
        secondary: "Tailwind"
    },
    {
        primary: "Trending in Business & finance",
        secondary: "#CoinbaseListLunc"
    },
    {
        primary: "Trending in Philippines",
        secondary: "kendall"
    },
    {
        primary: "Business & finance - Trending",
        secondary: "#bearmarket"
    },
];

export const signupBirthDate = [
    {
        name: "month",
        label: "Month",
        list: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },
    {
        name: "day",
        label: "Day",
        list: arrOfDays()
    },
    {
        name: "year",
        label: "Year",
        list: arrOfYears()
    }
];

export const footerCreds = [
    "About", 
    "Help Center", 
    "Terms of Service", 
    "Privacy Policy", 
    "Cookie Policy", 
    "Accessibility", 
    "Ads info", 
    "Blog", 
    "Status", 
    "Careers", 
    "Brand Resources", 
    "Advertising", 
    "Marketing", 
    "Twitter for Business", 
    "Developers", 
    "Directory", 
    "Settings", 
    "© 2022 Twitter, Inc."
];