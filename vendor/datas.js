// const films = [
//   {
//     name: "Oppenheimer",
//     img: "https://images.metahub.space/logo/medium/tt15398776/img",
//     release_year: 2023,
//     genres: ["Biography", "Drama", "History"],
//     poster: "https://images.metahub.space/poster/small/tt15398776/img",
//     runtime: "100m",
//     rating: "8.4",
//     background_img:
//       "https://images.metahub.space/background/medium/tt15398776/img",
//     director: "Christopher Nolan",
//     cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon"],
//     nationality: "American",
//     summary:
//       "The story of American scientist J. Robert Oppenheimer and his pivotal role in the development of the atomic bomb.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "The Reunion Wedding",
//     img: "https://images.metahub.space/logo/medium/tt26047818/img",
//     release_year: 2023,
//     genres: ["Comedy", "Romance"],
//     runtime: "100m",
//     rating: "8.4",
//     poster: "https://images.metahub.space/poster/small/tt26047818/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt26047818/img",
//     director: "Will Gluck",
//     cast: ["Sydney Sweeney", "Glen Powell", "Alexandra Shipp"],
//     nationality: "American",
//     summary:
//       "After an amazing first date, Bea and Ben's fiery attraction turns ice-cold--until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",

//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "The Zone of Interest",
//     img: "https://images.metahub.space/logo/medium/tt7160372/img",
//     release_year: 2023,
//     genres: ["War", "Drama", "History"],
//     runtime: "100m",
//     rating: "8.4",
//     poster: "https://images.metahub.space/poster/small/tt7160372/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt7160372/img",
//     director: "Jonathan Glazer",
//     cast: ["Cristian Friedel", "Sandra Huller", "Johann Karthaus"],
//     nationality: "German",
//     summary:
//       "Auschwitz commandant Rudolf Höss and his wife Hedwig strive to build a dream life for their family in a house and garden beside the camp.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Dune",
//     img: "https://images.metahub.space/logo/medium/tt1160419/img",
//     release_year: 2021,
//     runtime: "100m",
//     rating: "8.4",
//     genres: ["Adventure", "Drama", "Action"],
//     poster: "https://images.metahub.space/poster/small/tt1160419/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt1160419/img",
//     director: "Denis Villeneuve",
//     cast: ["Timothée Chalamet", "Rebecca Ferguson", "Zendaya"],
//     nationality: "American",
//     summary:
//       "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Marley",
//     img: "https://images.metahub.space/logo/medium/tt8521778/img",
//     release_year: 2024,
//     runtime: "100m",
//     rating: "8.4",
//     genres: ["Biography", "Drama", "Music"],
//     poster: "https://images.metahub.space/poster/small/tt8521778/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt8521778/img",
//     director: "Reinaldo Marcus Green",
//     cast: ["Kingsley Ben-Adir", "James Norton", "Lashana Lynch"],
//     nationality: "American",
//     summary:
//       "The story of how reggae icon Bob Marley overcame adversity, and the journey behind his revolutionary music.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Air Force",
//     img: "https://images.metahub.space/logo/medium/tt19864802/img",
//     release_year: 2024,
//     runtime: "100m",
//     rating: "8.4",
//     genres: ["Action", "Thriller"],
//     poster: "https://images.metahub.space/poster/small/tt19864802/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt19864802/img",
//     director: "William Eubank",
//     cast: ["Milo Ventimiglia", "Russell Crowe", "Liam Hemsworth"],
//     nationality: "American",
//     summary:
//       "A rookie air force combat controller and a seasoned drone pilot support a Delta Force team as they try to shift a mission gone wrong into a rescue operation.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Summer Estate",
//     img: "https://images.metahub.space/logo/medium/tt17351924/img",
//     release_year: 2023,
//     runtime: "100m",
//     rating: "8.4",
//     genres: ["Comedy", "Drama", "Thriller"],
//     poster: "https://images.metahub.space/poster/small/tt17351924/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt17351924/img",
//     director: "Emerald Fennell",
//     cast: ["Barry Keoghan", "Jacob Elordi", "Rosamund Pike"],
//     nationality: "British",
//     summary:
//       "A student at Oxford University finds himself drawn into the world of a charming and aristocratic classmate, who invites him to his eccentric family's sprawling estate for a summer never to be forgotten.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Von Erich",
//     img: "https://images.metahub.space/logo/medium/tt21064584/img",
//     release_year: 2023,
//     runtime: "100m",
//     rating: "8.4",
//     genres: ["Biography", "Drama", "Sport"],
//     poster: "https://images.metahub.space/poster/small/tt21064584/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt21064584/img",
//     director: "Sean Durkin",
//     cast: ["Zac Efron", "Jeremy Allen White", "Harris Dickinson"],
//     nationality: "American",
//     summary:
//       "The true story of the inseparable Von Erich brothers, who made history in the intensely competitive world of professional wrestling in the early 1980s.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "One Day",
//     img: "https://images.metahub.space/logo/medium/tt1563738/img",
//     release_year: 2011,
//     runtime: "100m",
//     rating: "8.4",
//     genres: ["Drama", "Romance"],
//     poster: "https://images.metahub.space/poster/small/tt1563738/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt1563738/img",
//     director: "Lone Scherfig",
//     cast: ["Anne Hathaway", "Jim Sturgess", "Patricia Clarkson"],
//     nationality: "British",
//     summary:
//       "After spending the night together on the night of their college graduation, Dexter and Emma are shown each year on the same date to see where they are in their lives. They are sometimes together, sometimes not, on that day.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "The Cranky Teacher",
//     img: "https://images.metahub.space/logo/medium/tt14849194/img",
//     release_year: 2023,
//     runtime: "100m",
//     rating: "8.4",
//     genres: ["Drama", "Comedy"],
//     poster: "https://images.metahub.space/poster/small/tt14849194/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt14849194/img",
//     director: "Alexander Payne",
//     cast: ["Paul Giamatti", "Da'Vine Joy Randolph", "Dominic Sessa"],
//     nationality: "American",
//     summary:
//       "A cranky history teacher at a remote prep school is forced to remain on campus over the holidays with a troubled student who has no place to go and a grieving cook.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Beekeepers",
//     img: "https://images.metahub.space/logo/medium/tt15314262/img",
//     release_year: 2024,
//     runtime: "100m",
//     rating: "8.4",
//     genres: ["Action", "Thriller"],
//     poster: "https://images.metahub.space/poster/small/tt15314262/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt15314262/img",
//     director: "David Ayer",
//     cast: ["Jason Statham", "Emmy Raver-Lampman", "Bobby Naderi"],
//     nationality: "American",
//     summary:
//       "One man's brutal campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as 'Beekeepers'.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "30 Years Later",
//     img: "https://images.metahub.space/logo/medium/tt21192142/img",
//     release_year: 2023,
//     runtime: "100m",
//     rating: "8.4",
//     genres: ["Drama", "Fantasy", "Romance"],
//     poster: "https://images.metahub.space/poster/small/tt21192142/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt21192142/img",
//     director: "Andrew Haigh",
//     cast: ["Andrew Scott", "Paul Mescal", "Carter John Grout"],
//     nationality: "British",
//     summary:
//       "A screenwriter drawn back to his childhood home enters into a fledgling relationship with a mysterious neighbor as he then discovers his parents appear to be living just as they were on the day they died, 30 years before.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Thanksgiving Killer",
//     img: "https://images.metahub.space/logo/medium/tt1448754/img",
//     release_year: 2023,
//     runtime: "100m",
//     rating: "8.4",
//     genres: ["Horror", "Mystery", "Thriller"],
//     poster: "https://images.metahub.space/poster/small/tt1448754/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt1448754/img",
//     director: "Eli Roth",
//     cast: ["Patrick Dempsey", "Ty Olsson", "Gina Gershon"],
//     nationality: "American",
//     summary:
//       "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the infamous holiday.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "The Son's Dilemma",
//     img: "https://images.metahub.space/logo/medium/tt17009710/img",
//     release_year: 2023,
//     runtime: "100m",
//     rating: "8.4",
//     genres: ["Crime", "Drama", "Thriller"],
//     poster: "https://images.metahub.space/poster/small/tt17009710/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt17009710/img",
//     director: "Justine Triet",
//     cast: ["Sandra Hüller", "Swann Arlaud", "Milo Machado Graner"],
//     nationality: "French",
//     summary:
//       "A woman is suspected of her husband's murder, and their blind son faces a moral dilemma as the main witness.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "First Class Fib",
//     img: "https://live.metahub.space/logo/medium/tt21830902/img",
//     release_year: 2024,
//     runtime: "100m",
//     rating: "8.4",
//     genres: ["Comedy", "Romance"],
//     poster: "https://images.metahub.space/poster/small/tt21830902/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt21830902/img",
//     director: "Carlson Young",
//     cast: ["Camila Mendes", "Archie Renaux", "Marisa Tomei"],
//     nationality: "American",
//     summary:
//       "When Ana is upgraded to first class on a work trip, she meets handsome Will, who mistakes Ana for her boss, Claire. A white lie then sets off a glamorous chain of events, romance and opportunity, until her fib threatens to surface.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Mean Girls: The Musical",
//     img: "https://images.metahub.space/logo/medium/tt11762114/img",
//     release_year: 2024,
//     runtime: "100m",
//     rating: "8.4",
//     genres: ["Comedy", "Musical"],
//     poster: "https://images.metahub.space/poster/small/tt11762114/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt11762114/img",
//     director: "Samantha Jayne, Arturo Perez Jr.",
//     cast: ["Angourie Rice", "Reneé Rapp", "Auli'i Cravalho"],
//     nationality: "American",
//     summary:
//       "Cady Heron is a hit with the Plastics, an A-list girl clique at her new school. But everything changes when she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Killers of the Flower Moon",
//     img: "https://images.metahub.space/logo/medium/tt5537002/img",
//     release_year: 2023,
//     runtime: "100m",
//     rating: "8.4",
//     genres: ["Crime", "Drama", "History"],
//     poster: "https://images.metahub.space/poster/small/tt5537002/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt5537002/img",
//     director: "Martin Scorsese",
//     cast: ["Leonardo DiCaprio", "Robert De Niro", "Lily Gladstone"],
//     nationality: "American",
//     summary:
//       "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one - until the FBI steps in to unravel the mystery.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Black Entertainment",
//     img: "https://images.metahub.space/logo/medium/tt23561236/img",
//     release_year: 2023,
//     genres: ["Comedy", "Drama"],
//     runtime: "100m",
//     rating: "8.4",
//     poster: "https://images.metahub.space/poster/small/tt23561236/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt23561236/img",
//     director: "Cord Jefferson",
//     cast: ["Jeffrey Wright", "Tracee Ellis Ross", "John Ortiz"],
//     nationality: "American",
//     summary:
//       "A novelist who's fed up with the establishment profiting from 'Black' entertainment uses a pen name to write a book that propels him into the heart of hypocrisy and the madness he claims to disdain.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Willy Wonka: A Chocolate Tale",
//     img: "https://images.metahub.space/logo/medium/tt6166392/img",
//     release_year: 2023,
//     runtime: "100m",
//     rating: "8.4",
//     genres: ["Comedy", "Adventure", "Family"],
//     poster: "https://images.metahub.space/poster/small/tt6166392/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt6166392/img",
//     director: "Paul King",
//     cast: ["Timothée Chalamet", "Gustave Die", "Murray McArthur"],
//     nationality: "American",
//     summary:
//       "With dreams of opening a shop in a city renowned for its chocolate, a young and poor Willy Wonka discovers that the industry is run by a cartel of greedy chocolatiers.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Demon Slayer: The Hashira Chronicles",
//     img: "https://live.metahub.space/logo/medium/tt30395619/img",
//     release_year: 2024,
//     genres: ["Animation"],
//     runtime: "100m",
//     rating: "8.4",
//     poster: "https://images.metahub.space/poster/small/tt30395619/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt30395619/img",
//     director: "Haruo Sotozaki",
//     cast: ["Natsuki Hanae", "Kengo Kawanishi", "Akari Kitô"],
//     nationality: "Japanese",
//     summary:
//       "Tanjiro undergoes rigorous training with the Stone Hashira, Himejima, in his quest to become a Hashira. Meanwhile, Muzan continues to search for Nezuko and Ubuyashiki.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
// ];

// localStorage.setItem("films", JSON.stringify(films));

// const user = [
//   {
//     username: "admin",
//     password: "admin",
//     name: "admin",
//     email: "admin@gmail.com",
//     phone: "0877637286",
//     country: "none",
//     status: "Admin",
//     library: [],
//     avatarUrl: "/vendor/images/clone.jpg",
//     history: [],
//   },
// ];

// localStorage.setItem("userList", JSON.stringify(user));
// const national = [
//   {
//     name: "All",
//   },
//   {
//     name: "British",
//     img: "https://www.worldometers.info/img/flags/uk-flag.gif",
//   },
//   {
//     name: "American",
//     img: "https://www.worldometers.info/img/flags/us-flag.gif",
//   },
//   {
//     name: "France",
//     img: "https://www.worldometers.info/img/flags/fr-flag.gif",
//   },
//   {
//     name: "Germany",
//     img: "https://www.worldometers.info/img/flags/gm-flag.gif",
//   },
//   {
//     name: "Italy",
//     img: "https://www.worldometers.info/img/flags/it-flag.gif",
//   },
//   {
//     name: "Spain",
//     img: "https://www.worldometers.info/img/flags/sp-flag.gif",
//   },
//   {
//     name: "Japanese",
//     img: "https://www.worldometers.info/img/flags/ja-flag.gif",
//   },
//   {
//     name: "South Korea",
//     img: "https://www.worldometers.info/img/flags/ks-flag.gif",
//   },
//   {
//     name: "China",
//     img: "https://www.worldometers.info/img/flags/ch-flag.gif",
//   },
//   {
//     name: "Australia",
//     img: "https://www.worldometers.info/img/flags/as-flag.gif",
//   },
//   {
//     name: "Canada",
//     img: "https://www.worldometers.info/img/flags/ca-flag.gif",
//   },
//   {
//     name: "Russia",
//     img: "https://www.worldometers.info/img/flags/rs-flag.gif",
//   },
//   {
//     name: "India",
//     img: "https://www.worldometers.info/img/flags/in-flag.gif",
//   },
//   {
//     name: "Brazil",
//     img: "https://www.worldometers.info/img/flags/br-flag.gif",
//   },
//   {
//     name: "Mexico",
//     img: "https://www.worldometers.info/img/flags/mx-flag.gif",
//   },
//   {
//     name: "Argentina",
//     img: "https://www.worldometers.info/img/flags/ar-flag.gif",
//   },
//   {
//     name: "Indonesia",
//     img: "https://www.worldometers.info/img/flags/id-flag.gif",
//   },
//   {
//     name: "Thailand",
//     img: "https://www.worldometers.info/img/flags/th-flag.gif",
//   },
//   {
//     name: "Netherlands",
//     img: "https://www.worldometers.info/img/flags/nl-flag.gif",
//   },
//   {
//     name: "Switzerland",
//     img: "https://www.worldometers.info/img/flags/sz-flag.gif",
//   },
// ];

// localStorage.setItem("currentNational", JSON.stringify(national));

// const Genres = [
//   "Action",
//   "Adventure",
//   "Horror",
//   "Comedy",
//   "Romance",
//   "Family",
//   "Animation",
//   "Science Fiction",
//   "Thriller",
//   "Crime",
//   "War",
//   "Fantasy",
//   "Drama",
//   "Martial Arts",
//   "Sports",
//   "Music",
//   "Political",
//   "Anime",
//   "Mystery",
//   "Detective",
// ];
// localStorage.setItem("currentGenres", JSON.stringify(Genres));
