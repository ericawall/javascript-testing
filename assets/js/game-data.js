/**
* The game-data.js file contains the images to display for different game level selected by the user,
* phrases to be guessed and functions to select random phrase from various categories.
*/
let gameSetup = (function () {
    let easyLevelImages = [
        'assets/images/sun-image-easy0.png',
        'assets/images/sun-image-easy1.png',
        'assets/images/sun-image-easy2.png',
        'assets/images/sun-image-easy3.png',
        'assets/images/sun-image-easy4.png',
        'assets/images/sun-image-easy5.png',
        'assets/images/sun-image-easy6.png',
        'assets/images/sun-image-easy7.png'
    ];

    let mediumLevelImages = [
        'assets/images/sun-image-medium0.png',
        'assets/images/sun-image-medium1.png',
        'assets/images/sun-image-medium2.png',
        'assets/images/sun-image-medium3.png',
        'assets/images/sun-image-medium4.png',
        'assets/images/sun-image-medium5.png',

    ];

    let hardLevelImages = [
        'assets/images/sun-image-hard0.png',
        'assets/images/sun-image-hard1.png',
        'assets/images/sun-image-hard2.png',
        'assets/images/sun-image-hard3.png'
    ];

    let phrases = {
        people: [
            'Barack Obama',
            'Marilyn Monroe',
            'Elvis Presley',
            'Freddie Mercury',
            'Audrey Hepburn',
            'Michael Jackson',
            'Steven Spielberg',
            'Nelson Mandela',
            'Coco Chanel',
            'Rafael Nadal',
            'Serena Williams',
            'Ellen DeGeneres',
            'Halle Berry',
            'Alfred Hitchcock',
            'Ernest Hemingway',
            'George Orwell',
            'Oscar Wilde',
            'Justin Bieber',
            'Leonardo da Vinci',
            'Ludwig van Beethoven'
        ],

        book: [
            'One Hundred Years of Solitude',
            'Pride and Prejudice',
            'To Kill a Mockingbird',
            'Crime and Punishment',
            'The Master and Margarita',
            'The Lord of the Rings',
            'Charlie and the Chocolate Factory',
            'The Secret Garden',
            'Anna Karenina',
            'Little Women',
            'Don Quixote',
            'A Christmas Carol',
            'Anne of Green Gables',
            'Oliver Twist',
            'Ulysses',
            'War and Peace',
            'The Divine Comedy',
            'Nineteen Eighty Four',
            'Les Miserables',
            'Gone With the Wind'
        ],

        film: [
            'The Godfather',
            'No Country For Old Men',
            'The Shawshank Redemption',
            'The Last Emperor',
            'Avatar',
            'The Devil Wears Prada',
            'Silence of the Lambs',
            'Slumdog Millionaire',
            'Eternal Sunshine of the Spotless Mind',
            'Fight Club',
            'Saving Private Ryan',
            'American History X',
            'Pulp Fiction',
            'American Pie',
            'Mean Girls',
            'Back to the Future',
            'Catch Me If You Can',
            'Being John Malkovich',
            'The Hangover',
            'Requiem for a Dream'
        ],

        building: [
            'La Sagrada Familia',
            'The Colosseum',
            'Empire State Building',
            'Leaning Tower of Pisa',
            'Eiffel Tower',
            'Taj Mahal',
            'Haga Sophia',
            'Space Needle',
            'Big Ben',
            'Parthenon',
            'The White House',
            'Louvre Museum',
            'Great Pyramid of Giza',
            'Burj Al Arab',
            'Sistine Chapel',
            'Palace of Versailles',
            'Westminster Abbey',
            'Sydney Opera House',
            'Notre Dame',
            'Chrysler Building'
        ],

        proverb: [
            'A bird in the hand is worth two in the bush',
            'A barking dog never bites',
            'A good man is hard to find',
            'All good things come to an end',
            'Actions speak louder than words',
            'An apple a day keeps the doctor away',
            'Beauty is in the eye of the beholder',
            'A bad workman always blames his tools',
            'A fool and his money are soon parted',
            'Practice makes perfect',
            'Slow and steady wins the race',
            'Early bird catches the worm',
            'Good things come to those who wait',
            'Keep your mouth shut and your eyes open',
            'Laughter is the best medicine',
            'Lightning never strikes twice in the same place',
            'Never put off until tomorrow what you can do today',
            'The grass is greener on the other side of the fence',
            'The road to hell is paved with good intentions',
            'Too many cooks spoil the broth'
        ],

        brand: [
            'Nike',
            'Adidas',
            'Tommy Hilfiger',
            'Giorgio Armani',
            'Samsung',
            'Microsoft',
            'Netflix',
            'Tesla Motors',
            'Unilevel',
            'Versace',
            'Mastercard',
            'New Balance',
            'KFC',
            'Lego',
            'Honda',
            'Amazon',
            'Starbucks',
            'Porshe',
            'Visa',
            'Hilton'
        ],

        instrument: [
            'Saxophone',
            'Ukulele',
            'Electric Guitar',
            'Trumpet',
            'Clarinet',
            'Accordion',
            'Xylophone',
            'Acoustic Guitar',
            'Electronic Keyboard',
            'Trombone',
            'Bass Guitar',
            'Mandolin',
            'French Horn',
            'Bassoon',
            'Viola',
            'Tambourine',
            'Bagpipes',
            'Marimba',
            'Banjo',
            'Double Bass'
        ],

        country: [
            'Antigua and Barbuda',
            'Azerbaijan',
            'Barbados',
            'Bhutan',
            'Bosnia and Herzegovina',
            'Cameroon',
            'Costa Rica',
            'Cyprus',
            'Democratic Republic of the Congo',
            'Dominican Republic',
            'Ecuador',
            'Finland',
            'Georgia',
            'Honduras',
            'Ireland',
            'Jordan',
            'Kazakhstan',
            'Liechtenstein',
            'Mauritania',
            'Namibia',
            'Oman',
            'Poland',
            'Rwanda',
            'San Marino',
            'Spain',
            'Trinidad and Tobago',
            'Uruguay',
            'Veneuela',
            'Yemen',
            'Zimbabwe'
        ],

        sport: [
            'Volleyball',
            'Tennis',
            'Baseball',
            'Golf',
            'Basketball',
            'Swimming',
            'Table tennis',
            'Snowboarding',
            'Skiing',
            'Football',
            'Boxing',
            'Badminton',
            'Bungee jumping',
            'Sky diving',
            'Judo',
            'Scuba diving',
            'Weight lifting',
            'Fencing',
            'Gymnastics',
            'Cycling',
            'Karate',
            'Surfing',
            'Cricket',
            'Rugby',
            'Bowling'
        ],

        animal: [
            'Dog',
            'Cat',
            'Horse',
            'Sheep',
            'Goat',
            'Donkey',
            'Monkey',
            'Cow',
            'Pig',
            'Tiger',
            'Elephant',
            'Lion',
            'Zebra',
            'Camel',
            'Rabbit',
            'Alpaca',
            'Hoppopotamus',
            'Octupus',
            'Penguin',
            'Mouse',
            'Chicken',
            'Hamster',
            'Crocodile',
            'Bear',
            'Dolphin'
        ]
    };

    /**
     * Displays the relevant image depending on the level of game selected by the user
     * @param {string} gameLevel 
     * @returns images array
     */
    function showImages(gameLevel) {
        if (gameLevel === "easy") {
            return easyLevelImages;
        } else if (gameLevel === "medium") {
            return mediumLevelImages;
        } else if (gameLevel === "hard") {
            return hardLevelImages;
        } else {
            throw new Error("Sorry, images do not exist.");
        }
    }

    /**
     * Select a category and a phrase to guess and return them in an object
     * @returns {category, phrase}
     */
    function getGuessingParameters() {
        let category = getCategory();
        let phrase = getPhrase(category);
        return { category, phrase };
    }

    /**
     * Randomly select a category for the game
     * @returns {string} selected category
     */
    function getCategory() {
        let categories = Object.keys(phrases);
        let index = Math.floor(Math.random() * categories.length);
        return categories[index];
    }

    /**
     * Randomly select a guessing phrase for the game
     * @param {string} category 
     * @returns {string} phrase
     */
    function getPhrase(category) {
        let categoryPhrases = phrases[category];
        let index = Math.floor(Math.random() * categoryPhrases.length);
        return categoryPhrases[index];
    }

    return {
        showImages,
        getGuessingParameters
    };
})();
