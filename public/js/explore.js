const exploreData = [
    {
        title: "Home",
        description: "Sayori Home Page.",
        category: "Landing Page",
        url: "/shadowveil-studioz/sayori/",
        keywords: [
            "main", "back"
        ],
        commands: [
            "/help"
        ]
    },
    {
        title: "Endgame",
        description: "Global Endgame command, works for almost all the games..",
        category: "Misc",
        url: "/shadowveil-studioz/sayori",
        keywords: [
            "finish"
        ],
        commands: [
            "/endgame"
        ]
    },
    {
        title: "Guess",
        description: "Discover guessing games.",
        category: "Category",
        url: "/shadowveil-studioz/sayori/guess-games#guess",
        keywords: [
            "numbers", "words", "hidden", "secrets"
        ],
        commands: [
            "/guessword /guesstime /gta"
        ]
    },
    {
        title: "Tea",
        description: "Discover tea games.",
        category: "Category",
        url: "/shadowveil-studioz/sayori/tea-games",
        keywords: [
            "trivia", "questions"
        ],
        commands: [
            "/mathtea /gktea /countrytea /jumbletea +more"
        ]
    },
    {
        title: "Trivia",
        description: "Discover trivia games.",
        category: "Category",
        url: "/shadowveil-studioz/sayori/trivia-games",
        keywords: [
            "tea", "questions"
        ],
        commands: [
            "/mathtrivia /gktrivia /countrytrivia +more"
        ]
    },
    {
        title: "Social Deduction",
        description: "Games which require your observational skills and intuitions.",
        category: "Category",
        url: "/shadowveil-studioz/sayori/socialdeduction",
        keywords: [
            "final nights", "gut feeling", "paranoia"
        ],
        commands: [
            "/mafia /gta +more"
        ]
    },
    {
        title: "Word Games",
        description: "Enhance your vocabulary, and become a word wizard.",
        category: "Category",
        url: "/shadowveil-studioz/sayori/word-games",
        keywords: [
            "dictionariy"
        ],
        commands: [
            "/guessword /wordcahin /wordlechallenge +more"
        ]
    },
    {
        title: "Simple Fun [Single Player]",
        description: "Casual and easy gameplay.",
        category: "Category",
        url: "/shadowveil-studioz/sayori/simplefun/single-player",
        keywords: [
            "Easy"
        ],
        commands: [
            "blackjack +more"
        ]
    },
    {
        title: "Simple Fun [Two Player]",
        description: "Casual 2 player casal games",
        category: "Category",
        url: "/shadowveil-studioz/sayori/simplefun/two-player",
        keywords: [
            "Easy"
        ],
        commands: [
            "/battleship /wordlechallenge /connect4 +more"
        ]
    },
    {
        title: "Simple Fun [Multiplayer Player]",
        description: "Easy games to play in a group",
        category: "Category",
        url: "/shadowveil-studioz/sayori/simplefun/multiplayer",
        keywords: [
            "Easy"
        ],
        commands: [
            "/fam /uno +more"
        ]
    },

    {
        title: "Guess",
        description: "Channel guessing game. 1-100000 range.",
        category: "Guess",
        url: "/shadowveil-studioz/sayori/guess-games#guess",
        keywords: [
            "number"
        ],
        commands: [
            "/guess"
        ]
    },
    {
        title: "Guesstime",
        description: "Guess the number fast forward. Smaller range, quick gameplay.",
        category: "Guess",
        url: "/shadowveil-studioz/sayori/guess-games#gt",
        keywords: [
            "30s", "competitive"
        ],
        commands: [
            "/guesstime"
        ]
    },
    {
        title: "Guessword",
        description: "Guess the word, your friend is the hint giver.",
        category: "Guess",
        url: "/shadowveil-studioz/sayori/guess-games#gw",
        keywords: [
            "quick", "competitive"
        ],
        commands: [
            "/guessword"
        ]
    },
    {
        title: "Guess the agent",
        description: "Whose the imposter among us? Is it you, or is it me?",
        category: "Guess",
        url: "/shadowveil-studioz/sayori/guess-games#gta",
        keywords: [
            "black", "red", "white"
        ],
        commands: [
            "/gta"
        ]
    },

    {
        title: "Anime Tea",
        description: "Rapid-fire anime questions. First correct answer gets the point.",
        category: "Tea",
        url: "/shadowveil-studioz/sayori/tea-games#anime",
        keywords: [
            "anime", "attack on titan", "naruto", "death note", "one piece", "jujutsu kaisen"
        ],
        commands: [
            "/animetea"
        ]
    },
    {
        title: "Country Tea",
        description: "Questions about countries, capitals, landmarks and more.",
        category: "Tea",
        url: "/shadowveil-studioz/sayori/tea-games#country",
        keywords: [
            "country", "capital", "flags", "geography"
        ],
        commands: [
            "/countrytea"
        ]
    },
    {
        title: "Geo Tea",
        description: "A harder geography quiz for map lovers.",
        category: "Tea",
        url: "/shadowveil-studioz/sayori/tea-games#geo",
        keywords: [
            "geography", "maps", "continents", "mountains", "rivers"
        ],
        commands: [
            "/geotea"
        ]
    },
    {
        title: "General Knowledge Tea",
        description: "Questions from science, sports, history, geography and more.",
        category: "Tea",
        url: "/shadowveil-studioz/sayori/tea-games#gk",
        keywords: [
            "general knowledge", "gk", "history", "sports", "science"
        ],
        commands: [
            "/gktea"
        ]
    },
    {
        title: "Jumble Tea",
        description: "Unscramble the word before everyone else does.",
        category: "Tea",
        url: "/shadowveil-studioz/sayori/tea-games#jumble",
        keywords: [
            "scramble", "unscramble", "words", "letters"
        ],
        commands: [
            "/jumbletea"
        ]
    },
    {
        title: "Math Tea",
        description: "Solve maths questions as quickly as you can.",
        category: "Tea",
        url: "/shadowveil-studioz/sayori/tea-games#math",
        keywords: [
            "math", "arithmetic", "numbers", "equation"
        ],
        commands: [
            "/mathtea"
        ]
    },
    {
        title: "Science Tea",
        description: "Rapid-fire science questions covering different fields.",
        category: "Tea",
        url: "/shadowveil-studioz/sayori/tea-games#science",
        keywords: [
            "science", "physics", "chemistry", "biology"
        ],
        commands: [
            "/sciencetea"
        ]
    },

    {
        title: "Anime Trivia",
        description: "Wohoo, anime trivia. Challenge your friends and find out who have better anime knowledge.",
        category: "Trivia",
        url: "/shadowveil-studioz/sayori/trivia-games#anime",
        keywords: [
            "anime", "attack on titan", "naruto", "death note", "one piece", "jujutsu kaisen", "spyxfamily", "bleach"
        ],
        commands: [
            "/animetrivia"
        ]
    },
    {
        title: "Country Trivia",
        description: "Questions about countries, capitals, landmarks and more.",
        category: "Trivia",
        url: "/shadowveil-studioz/sayori/trivia-games#country",
        keywords: [
            "country", "capital", "flags", "geography"
        ],
        commands: [
            "/countrytrivia"
        ]
    },
    {
        title: "Math Trivia",
        description: "Solve maths questions as quickly as you can.",
        category: "Trivia",
        url: "/shadowveil-studioz/sayori/trivia-games#math",
        keywords: [
            "math", "arithmetic", "numbers", "equation"
        ],
        commands: [
            "/mathtrivia"
        ]
    },

    {
        title: "Mafia",
        description: "Find the Mafia before they eliminate the Civilians.",
        category: "Social Deduction",
        url: "/shadowveil-studioz/sayori/socialdeduction#mafia",
        keywords: [
            "mafia", "doctor", "reviver", "detective", "revenger", "targeter", "killer", "vote"
        ],
        commands: [
            "/mafia", "/mafia Skip"
        ]
    },
    {
        title: "Guess the agent",
        description: "Whose the imposter among us? Is it you, or is it me?",
        category: "Social Dedution",
        url: "/shadowveil-studioz/sayori/socialdedction#gta",
        keywords: [
            "black", "red", "white"
        ],
        commands: [
            "/gta"
        ]
    },
    {
        title: "Final Night",
        description: "Play and figure out",
        category: "Social Dedution",
        url: "/shadowveil-studioz/sayori/guess-games#fn",
        keywords: [
            "rooms"
        ],
        commands: [
            "/fn"
        ]
    },

    {
        title: "Guessword",
        description: "Guess the word, your friend is the hint giver.",
        category: "Word games",
        url: "/shadowveil-studioz/sayori/word-games#gw",
        keywords: [
            "quick", "competitive"
        ],
        commands: [
            "/guessword"
        ]
    },
    {
        title: "Word Chain",
        description: "Type a word starting with the last letter of the previous word.",
        category: "Word Game",
        url: "/shadowveil-studioz/sayori/word-games#wc",
        keywords: [
            "dictionary", "spelling"
        ],
        commands: [
            "/wc"
        ]
    },
    {
        title: "Wordle",
        description: "Decode the word using colourful tiles",
        category: "Word Game",
        url: "/shadowveil-studioz/sayori/word-games#wordle",
        keywords: [
            "green" ,"yellow", "gray", "grey", "nyt"
        ],
        commands: [
            "/wordle"
        ]
    },
    {
        title: "Wordle Challenge",
        description: "Decode the word using colourful tiles, 2player.",
        category: "Word Game",
        url: "/shadowveil-studioz/sayori/word-games#wordlec",
        keywords: [
            "green" ,"yellow", "gray", "grey", "nyt"
        ],
        commands: [
            "/wordlechallenge"
        ]
    },

    {
        title: "Blackjack",
        description: "Beat the dealer by getting closer to 21 without going over.",
        category: "Simple Fun",
        url: "/shadowveil-studioz/sayori/simplefun/single-player#blackjack",
        keywords: [
            "21", "cards", "dealer", "ace", "hit", "stand"
        ],
        commands: [
            "/blackjack"
        ]
    },
    {
        title: "Minesweeper",
        description: "Reveal every safe tile without stepping on a mine.",
        category: "Simple Fun",
        url: "/shadowveil-studioz/sayori/simplefun/single-player#minesweeper",
        keywords: [
            "mine", "tiles", "numbers", "bomb", "safe"
        ],
        commands: [
            "/minesweeper"
        ]
    },
    {
        title: "Rock Paper Scissors",
        description: "The classic game of Rock, Paper and Scissors.",
        category: "Simple Fun",
        url: "/shadowveil-studioz/sayori/simplefun/two-player#rps",
        keywords: [
            "rock", "paper", "scissors", "rps", "duel"
        ],
        commands: [
            "/rps"
        ]
    },
    {
        title: "Connect 4",
        description: "Connect four discs before your opponent does.",
        category: "Simple Fun",
        url: "/shadowveil-studioz/sayori/simplefun/two-player#connect4",
        keywords: [
            "connect", "board", "four", "strategy", "grid"
        ],
        commands: [
            "/connect4"
        ]
    },
    {
        title: "Tic Tac Toe",
        description: "Get three in a row before your opponent.",
        category: "Simple Fun",
        url: "/shadowveil-studioz/sayori/simplefun/two-player#ttt",
        keywords: [
            "tic tac toe", "xo", "x", "o", "grid"
        ],
        commands: [
            "/ttt"
        ]
    },
    {
        title: "Wordle Challenge",
        description: "Challenge your friends to guess the hidden word.",
        category: "Simple Fun",
        url: "/shadowveil-studioz/sayori/simplefun/two-player#wordlec",
        keywords: [
            "wordle", "guess word", "letters", "green", "yellow"
        ],
        commands: [
            "/wordlechallenge"
        ]
    },
    {
        title: "Battleship",
        description: "Deploy your fleet, crash enemies.",
        category: "Simple Fun",
        url: "/shadowveil-studioz/sayori/simplefun/two-player#bs",
        keywords: [
            "hit", "miss", "cruiser", "blaster"
        ],
        commands: [
            "/uno"
        ]
    },
    {
        title: "Form A Majority",
        description: "Vote for the best.",
        category: "Simple Fun",
        url: "/shadowveil-studioz/sayori/simplefun/multiplayer#fam",
        keywords: [
            "cards", "reverse", "skip", "draw four", "wild"
        ],
        commands: [
            "/uno"
        ]
    },
    {
        title: "Uno",
        description: "Play the classic card game with your friends.",
        category: "Simple Fun",
        url: "/shadowveil-studioz/sayori/simplefun/multiplayer#uno",
        keywords: [
            "cards", "reverse", "skip", "draw four", "wild"
        ],
        commands: [
            "/uno"
        ]
    },
];

let exploreOpen = false;
let selectedIndex = 0;
let currentResults = [];
let exploreModal;
let exploreInput;
let exploreResults;

document.addEventListener("DOMContentLoaded", initExplore);

function initExplore() {
    createExplore();
    registerEvents();
    const url = new URL(window.location);
    if (url.searchParams.has("explore")) {
        openExplore();
    }
}

function createExplore() {
    exploreModal = document.createElement("div");
    exploreModal.id = "sayori-explore";
    exploreModal.className = ` fixed inset-0 z-[100] bg-[rgba(10,10,18,.75)] items-start justify-center pt-20 px-4 `;
    exploreModal.style.display = "none";
    exploreModal.innerHTML = `
        <div class=" w-full max-w-4xl max-h-[80vh] rounded-3xl border border-[var(--sayori-border)]
        bg-[rgba(34,28,52,.32)] overflow-hidden shadow-2xl flex flex-col ">
            <!-- Header -->
            <div class=" flex items-center gap-4 px-6 py-5 border-b border-[var(--sayori-border)] ">
                <span class="text-xl">
                    🔎
                </span>
                <input
                    id="explore-search"
                    type="text"
                    placeholder="Search games, commands or categories..."
                    class=" flex-1 bg-transparent outline-none text-lg ">
                <span class=" rounded-lg border border-[var(--sayori-border)] px-3 py-1 text-xs text-[var(--sayori-muted)] ">
                    <button id="explore-close" class="rounded-lg border border-[var(--sayori-border)] px-3 py-1 text-xs text-[var(--sayori-muted)] transition duration-150 hover:bg-[rgba(185,163,230,.08)] hover:border-[var(--sayori-lavender)] hover:text-white active:scale-95">
                        ESC X
                    </button>
                </span>
            </div>

            <div id="explore-results" class=" flex-1 overflow-y-auto p-3 space-y-2 "> </div>

            <div class=" flex items-center justify-between px-6 py-4 border-t border-[var(--sayori-border)] text-xs text-[var(--sayori-muted)] ">
                <div> ↑ ↓ Navigate </div>

                <div> ⏎ Open </div>

                <div> <span class="rounded-md border px-2 py-1 text-[11px]">Esc</span> Close </div>
            </div>
        </div>
    `;
    document.body.appendChild(exploreModal);
    exploreInput = document.getElementById("explore-search");
    exploreResults = document.getElementById("explore-results");
    const exploreClose =
        document.getElementById("explore-close");

    exploreClose.addEventListener(
        "click",
        closeExplore
    );
}

function registerEvents() {
    document.addEventListener("keydown", handleKeyboard);
    exploreInput.addEventListener("input", handleSearch);
}

function handleKeyboard(e) {
    if (e.ctrlKey && e.key.toLowerCase() == "k") {
        e.preventDefault();
        openExplore();
    }
    if (!exploreOpen) return;
    if (e.key === "ArrowDown") {
        e.preventDefault();
        selectedIndex++;
        updateSelection();
    }
    if (e.key === "ArrowUp") {
        e.preventDefault();
        selectedIndex--;
        updateSelection();
    }
    if (e.key === "Enter") {
        e.preventDefault();
        openSelected();
    }
    if (e.key === "Escape") {
        closeExplore();
    }
}

function openExplore() {
    if (exploreOpen) {
        closeExplore();
        return;
    }
    exploreOpen = true;
    exploreModal.style.display = "flex";
    const url = new URL(window.location);
    url.searchParams.set("explore", "");
    history.pushState({}, "", url);
    exploreInput.focus();
    renderResults(exploreData);
}

function closeExplore() {
    if (!exploreOpen) return;
    exploreOpen = false;
    exploreModal.style.display = "none";
    exploreInput.value = "";
    const url = new URL(window.location);
    url.searchParams.delete("explore");
    history.replaceState({}, "", url);
    exploreResults.innerHTML = "";
    currentResults = [];
    selectedIndex = 0;
}

function handleSearch() {
    const query = exploreInput.value
        .trim()
        .toLowerCase();
    if (!query) {
        exploreResults.innerHTML = "";
        return;
    }
    const results = exploreData.filter(game => {
        return (
            game.title.toLowerCase().includes(query) ||
            game.category.toLowerCase().includes(query) ||
            game.description.toLowerCase().includes(query) ||
            game.keywords.some(keyword =>
                keyword.toLowerCase().includes(query)
            ) ||
            game.commands.some(command =>
                command.toLowerCase().includes(query)
            )
        );
    });
    renderResults(results);
}

function renderResults(results) {
    currentResults = results;
    selectedIndex = 0;
    exploreResults.innerHTML = "";
    if (results.length === 0) {
        exploreResults.innerHTML = `
            <div class="text-center py-8 text-[var(--sayori-muted)]">
                No results found.
            </div>
        `;
        return;
    }
    results.forEach((game, index) => {
        const card = document.createElement("a");
        card.href = game.url;
        card.className = ` block rounded-2xl border border-[var(--sayori-border)] bg-[var(--sayori-surface)] p-5 transition duration-200 hover:border-[var(--sayori-lavender)] hover:bg-[var(--sayori-raised)]
        `;
        card.innerHTML = `
            <div class="flex items-center justify-between">
            
                <h3 class="font-semibold text-lg">
                    ${game.title}
                </h3>
                <span class=" text-xs rounded-full px-3 py-1 bg-[rgba(185,163,230,.08)] text-[var(--sayori-orange)]">
                    ${game.category}
                </span>
            </div>
            <p class=" mt-3 text-sm leading-6 text-[var(--sayori-muted)]">
                ${game.description}
            </p>
            <p class=" mt-3 text-sm text-[var(--sayori-orange)]">
                ${game.commands[0]}
            </p>
        `;
        exploreResults.appendChild(card);
        card.addEventListener("click", () => {
            closeExplore();
        });
    });
    updateSelection();
}

function updateSelection() {
    const cards = exploreResults.querySelectorAll("a");
    if (cards.length === 0) return;
    if (selectedIndex < 0)
        selectedIndex = cards.length - 1;
    if (selectedIndex >= cards.length)
        selectedIndex = 0;
    cards.forEach(card => {
        card.classList.remove(
            "border-[var(--sayori-lavender)]",
            "bg-[var(--sayori-raised)]"
        );
    });
    cards[selectedIndex].classList.add(
        "border-[var(--sayori-lavender)]",
        "bg-[var(--sayori-raised)]"
    );
}
function openSelected() {
    if (currentResults.length === 0) return;
    window.location.href = currentResults[selectedIndex].url;
}