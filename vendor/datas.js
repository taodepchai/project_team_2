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
//   {
//     name: "Mission: Impossible 8",
//     img: "https://images.metahub.space/logo/medium/tt9603212/img",
//     release_year: 2023,
//     genres: ["Action", "Adventure", "Thriller"],
//     runtime: "",
//     rating: "",
//     poster: "https://images.metahub.space/poster/small/tt9603212/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt9603212/img",
//     director: "Christopher McQuarrie",
//     cast: ["Tom Cruise", "Hayley Atwell", "Ving Rhames"],
//     nationality: "Anh",
//     summary:
//       "Ethan Hunt and his IMF team must track down a dangerous weapon before it falls into the wrong hands.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "White Christmas",
//     img: "https://images.metahub.space/logo/medium/tt0047673/img",
//     release_year: 2023,
//     genres: ["Comedy", "Musical", "Romance"],
//     runtime: "",
//     rating: "",
//     poster: "https://images.metahub.space/poster/small/tt0047673/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt0047673/img",
//     director: "Michael Curtiz",
//     cast: ["Bing Crosby", "Danny Kaye", "Rosemary Clooney"],
//     nationality: "Anh",
//     summary:
//       "A successful song-and-dance team become romantically involved with a sister act and team up to save the failing Vermont inn of their former commanding general.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Past Live",
//     img: "https://images.metahub.space/logo/medium/tt13238346/img",
//     release_year: 2023,
//     genres: ["Drama", "Romance"],
//     runtime: "",
//     rating: "",
//     poster: "https://images.metahub.space/poster/small/tt13238346/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt13238346/img",
//     director: "Celine Song",
//     cast: ["Greta Lee", "Teo Yoo", "John Magaro"],
//     nationality: "Anh",
//     summary:
//       "Nora and Hae Sung, two deeply connected childhood friends, are wrested apart after Nora's family emigrates from South Korea. Twenty years later, they are reunited for one fateful week as they confront notions of love and destiny.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Barbie Land",
//     img: "https://images.metahub.space/logo/medium/tt1517268/img",
//     release_year: 2023,
//     genres: ["Adventure", "Comedy", "Fantasy"],
//     runtime: "",
//     rating: "",
//     poster: "https://images.metahub.space/poster/small/tt1517268/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt1517268/img",
//     director: "Greta Gerwig",
//     cast: ["Margot Robbie", "Ryan Gosling", "Issa Rae"],
//     nationality: "Anh",
//     summary:
//       "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Love After Death",
//     img: "https://images.metahub.space/logo/medium/tt21188080/img",
//     release_year: 2023,
//     genres: ["Comedy", "Horror", "Romance"],
//     runtime: "",
//     rating: "",
//     poster: "https://images.metahub.space/poster/small/tt21188080/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt21188080/img",
//     director: "Greta Gerwig",
//     cast: ["Kathryn Newton", "Liza Soberano", "Jenna Davis"],
//     nationality: "Anh",
//     summary:
//       "A coming of RAGE love story about a teenager and her crush, who happens to be a corpse. After a set of horrific circumstances bring him back to life, the two embark on a journey to find love, happiness - and a few missing body parts.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Alive",
//     img: "https://images.metahub.space/logo/medium/tt16277242/img",
//     release_year: 2023,
//     genres: ["Adventure", "Drama", "History"],
//     runtime: "",
//     rating: "",
//     poster: "https://images.metahub.space/poster/small/tt16277242/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt16277242/img",
//     director: "J.A. Bayona",
//     cast: ["Enzo Vogrincic", "Agustín Pardella", "Matías Recalt"],
//     nationality: "Anh",
//     summary:
//       "The flight of a rugby team crashes on a glacier in the Andes. The few passengers who survive the crash find themselves in one of the world's toughest environments to survive.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "The Rescuer",
//     img: "https://images.metahub.space/logo/medium/tt13097932/img",
//     release_year: 2023,
//     genres: ["Biography", "Drama", "History"],
//     runtime: "",
//     rating: "",
//     poster: "https://images.metahub.space/poster/small/tt13097932/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt13097932/img",
//     director: "James Hawes",
//     cast: ["Anthony Hopkins", "Helena Bonham Carter", "Johnny Flynn"],
//     nationality: "Anh",
//     summary:
//       "The story of Sir Nicholas 'Nicky' Winton, a young London broker who, in the months leading up to World War II, rescued Jewish children from the Nazis.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "The Adults",
//     img: "https://images.metahub.space/logo/medium/tt13097932/img",
//     release_year: 2023,
//     genres: ["Horror", "Mystery", "Mystery"],
//     runtime: "",
//     rating: "",
//     poster: "https://images.metahub.space/poster/small/tt13560574/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt13560574/img",
//     director: "Ti West",
//     cast: ["Mia Goth", "Jenna Ortega", "Brittany Snow"],
//     nationality: "Anh",
//     summary:
//       "In 1979, a group of young filmmakers set out to make an adult film in rural Texas, but when their reclusive, elderly hosts catch them in the act, the cast find themselves fighting for their lives.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "The Andes Flight Disaster",
//     img: "https://images.metahub.space/logo/medium/tt16277242/img",
//     release_year: 2023,
//     genres: ["Adventure", "Drama", "History"],
//     runtime: "",
//     rating: "",
//     poster: "https://images.metahub.space/poster/small/tt16277242/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt16277242/img",
//     director: "J.A. Bayona",
//     cast: ["Enzo Vogrincic", "Agustín Pardella", "Matías Recalt"],
//     nationality: "Anh",
//     summary:
//       "The flight of a rugby team crashes on a glacier in the Andes. The few passengers who survive the crash find themselves in one of the world's toughest environments to survive.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },

//   {
//     name: "The Flash",
//     img: "https://images.metahub.space/logo/medium/tt0439572/img",
//     release_year: 2023,
//     genres: ["Action", "Adventure", "Fantasy"],
//     runtime: "",
//     rating: "",
//     poster: "https://images.metahub.space/poster/small/tt0439572/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt0439572/img",
//     director: "Andy Muschietti",
//     cast: ["Ezra Miller", "Saoirse Ronan", "Michael Keaton"],
//     nationality: "Anh",
//     summary:
//       "The Flash, a superhero with super speed, navigates through time to prevent catastrophic events and battles villains who also possess extraordinary powers.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "The Umbrella Academy",
//     img: "https://images.metahub.space/logo/medium/tt1312171/img",
//     release_year: 2023,
//     genres: ["Action", "Adventure", "Comedy"],
//     runtime: "",
//     rating: "",
//     poster: "https://images.metahub.space/poster/small/tt1312171/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt1312171/img",
//     director: "Steve Blackman",
//     cast: ["Ellen Page", "Tom Hopper", "David Castañeda"],
//     nationality: "Anh",
//     summary:
//       "A dysfunctional family of adopted sibling superheroes reunites to solve the mystery of their father's death and the threat of an impending apocalypse.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Doctor Strange in the Multiverse of Madness",
//     img: "https://images.metahub.space/logo/medium/tt9419884/img",
//     release_year: 2023,
//     genres: ["Action", "Adventure", "Fantasy"],
//     runtime: "",
//     rating: "",
//     poster: "https://images.metahub.space/poster/small/tt9419884/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt9419884/img",
//     director: "Sam Raimi",
//     cast: ["Benedict Cumberbatch", "Elizabeth Olsen", "Benedict Wong"],
//     nationality: "Anh",
//     summary:
//       "Doctor Strange must confront the multiverse of madness when a friend-turned-enemy threatens to unravel reality itself.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Fantastic Beasts: The Secrets of Dumbledore",
//     img: "https://images.metahub.space/logo/medium/tt4123430/img",
//     release_year: 2022,
//     genres: ["Adventure", "Family", "Fantasy"],
//     runtime: "",
//     rating: "",
//     poster: "https://images.metahub.space/poster/small/tt4123430/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt4123430/img",
//     director: "David Yates",
//     cast: ["Eddie Redmayne", "Jude Law", "Mads Mikkelsen"],
//     nationality: "Anh",
//     summary:
//       "In the wizarding world, Newt Scamander and Albus Dumbledore team up to take on the growing threat of Gellert Grindelwald.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Jurassic World: Dominion",
//     img: "https://images.metahub.space/logo/medium/tt8041270/img",
//     release_year: 2022,
//     genres: ["Action", "Adventure", "Sci-Fi"],
//     runtime: "",
//     rating: "",
//     poster: "https://images.metahub.space/poster/small/tt8041270/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt8041270/img",
//     director: "Colin Trevorrow",
//     cast: ["Chris Pratt", "Bryce Dallas Howard", "Laura Dern"],
//     nationality: "Anh",
//     summary:
//       "Jurassic World: Dominion continues the saga as dinosaurs roam freely on the mainland, threatening human existence.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Untitled John Wick Sequel",
//     img: "https://images.metahub.space/logo/medium/tt10366206/img",
//     release_year: 2023,
//     genres: ["Action", "Crime", "Thriller"],
//     runtime: "",
//     rating: "",
//     poster: "https://images.metahub.space/poster/small/tt10366206/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt10366206/img",
//     director: "Chad Stahelski",
//     cast: ["Keanu Reeves", "Laurence Fishburne", "Asia Kate Dillon"],
//     nationality: "Anh",
//     summary:
//       "The legendary hitman John Wick is on the run after killing a member of the international assassin's guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Untitled Transformers Prequel",
//     img: "https://images.metahub.space/logo/medium/tt10228134/img",
//     release_year: 2023,
//     genres: ["Action", "Adventure", "Sci-Fi"],
//     runtime: "",
//     rating: "",
//     poster: "https://images.metahub.space/poster/small/tt10228134/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt10228134/img",
//     director: "Angel Manuel Soto",
//     cast: ["Anthony Ramos", "Dominique Fishback", "Luna Lauren Velez"],
//     nationality: "Anh",
//     summary:
//       "A 'Transformers' prequel that explores the origins of Optimus Prime and Megatron on their home planet of Cybertron.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Untitled Indiana Jones Sequel",
//     img: "https://images.metahub.space/logo/medium/tt1462764/img",
//     release_year: 2023,
//     genres: ["Action", "Adventure"],
//     runtime: "",
//     rating: "",
//     poster: "https://images.metahub.space/poster/small/tt1462764/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt1462764/img",
//     director: "James Mangold",
//     cast: ["Harrison Ford", "Phoebe Waller-Bridge", "Mads Mikkelsen"],
//     nationality: "Anh",
//     summary:
//       "The next installment in the Indiana Jones franchise, starring Harrison Ford reprising his iconic role.",
//   },

//   {
//     name: "The Batman",
//     img: "https://images.metahub.space/logo/medium/tt1877830/img",
//     release_year: 2022,
//     genres: ["Action", "Crime", "Drama"],
//     runtime: "",
//     rating: "",
//     poster: "https://images.metahub.space/poster/small/tt1877830/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt1877830/img",
//     director: "Matt Reeves",
//     cast: ["Robert Pattinson", "Zoë Kravitz", "Paul Dano"],
//     nationality: "Anh",
//     summary:
//       "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Avatar 2",
//     img: "https://images.metahub.space/logo/medium/tt1630029/img",
//     release_year: 2022,
//     genres: ["Action", "Adventure", "Fantasy"],
//     runtime: "",
//     rating: "",
//     poster: "https://images.metahub.space/poster/small/tt1630029/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt1630029/img",
//     director: "James Cameron",
//     cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
//     nationality: "Anh",
//     summary:
//       "A sequel to the 2009 blockbuster 'Avatar', set in the magical world of Pandora.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Fantastic Beasts: The Secrets of Dumbledore",
//     img: "https://images.metahub.space/logo/medium/tt4123430/img",
//     release_year: 2022,
//     genres: ["Adventure", "Family", "Fantasy"],
//     runtime: "",
//     rating: "",
//     poster: "https://images.metahub.space/poster/small/tt4123430/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt4123430/img",
//     director: "David Yates",
//     cast: ["Eddie Redmayne", "Katherine Waterston", "Mads Mikkelsen"],
//     nationality: "Anh",
//     summary:
//       "The third installment of the 'Fantastic Beasts' series, following Newt Scamander's adventures in the wizarding world.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Sonic the Hedgehog 2",
//     img: "https://images.metahub.space/logo/medium/tt3794354/img",
//     release_year: 2022,
//     genres: ["Action", "Adventure", "Comedy"],
//     runtime: "",
//     rating: "",
//     poster: "https://images.metahub.space/poster/small/tt3794354/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt3794354/img",
//     director: "Jeff Fowler",
//     cast: ["Ben Schwartz", "James Marsden", "Jim Carrey"],
//     nationality: "Anh",
//     summary:
//       "The sequel to the 2020 film 'Sonic the Hedgehog', following Sonic and his friends as they face off against the villainous Dr. Robotnik.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Thor: Love and Thunder",
//     img: "https://images.metahub.space/logo/medium/tt10648342/img",
//     release_year: 2022,
//     genres: ["Action", "Adventure", "Fantasy"],
//     runtime: "",
//     rating: "",
//     poster: "https://images.metahub.space/poster/small/tt10648342/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt10648342/img",
//     director: "Taika Waititi",
//     cast: ["Chris Hemsworth", "Natalie Portman", "Tessa Thompson"],
//     nationality: "Anh",
//     summary:
//       "The fourth installment in the 'Thor' franchise, following the Asgardian god of thunder as he faces off against new threats and reunites with Jane Foster.",
//     episode: 8,
//     status: "Normal",
//     $DATA: {
//       comments: [],
//     },
//   },
//   {
//     name: "Wrong Turn",
//     img: "https://images.metahub.space/logo/medium/tt9110170/img",
//     release_year: 2022,
//     genres: ["Action", "Adventure", "Fantasy"],
//     runtime: "",
//     rating: "",
//     poster: "https://images.metahub.space/poster/small/tt9110170/img",
//     background_img:
//       "https://images.metahub.space/background/medium/tt9110170/img",
//     director: "Ryan Coogler",
//     cast: ["Chadwick Boseman", "Letitia Wright", "Danai Gurira"],
//     nationality: "Anh",
//     summary:
//       "The sequel to 'Black Panther', continuing the story of T'Challa and the nation of Wakanda as they face new challenges.",
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
