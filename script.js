const storyPages = [
    "Long ago, in the land of Westeros, powerful Houses ruled. The Starks of the North, the Lannisters of the West, and the Targaryens, who once had dragons, shaped the land’s history.",
    "King Robert Baratheon rode North to ask his old friend, Lord Eddard Stark, to become Hand of the King. Ned accepted, but dark secrets waited in the capital, King's Landing.",
    "Ned discovered that Queen Cersei's children were not truly King Robert’s heirs. Before Ned could reveal the truth, King Robert died. Cersei betrayed Ned. He was executed for treason.",
    "Robb Stark, Ned's son, declared himself King in the North. The War of the Five Kings began, as several lords fought to sit on the Iron Throne.",
    "Across the Narrow Sea, Daenerys Targaryen, last daughter of a fallen dynasty, rose to power. She married Khal Drogo and received three dragon eggs — gifts that would change the world.",
    "After Khal Drogo's death, Daenerys hatched her dragon eggs. Three dragons were born into the world again, after hundreds of years.",
    "At the Wall in the far North, Jon Snow joined the Night's Watch. Strange creatures called White Walkers returned after being forgotten for thousands of years.",
    "Stannis Baratheon, brother of Robert, claimed the throne. He fought against King’s Landing at the Battle of Blackwater Bay, but was defeated by Tyrion Lannister’s clever defenses.",
    "At the Twins, the Red Wedding took place. Robb Stark, his mother Catelyn, and many of his men were betrayed and murdered by House Frey and House Bolton.",
    "Daenerys conquered cities across the sea, freeing thousands of slaves. She built a mighty army and sailed toward Westeros to reclaim her family's throne.",
    "Jon Snow was betrayed by his own brothers and killed at the Wall, but was later brought back to life by the priestess Melisandre.",
    "Jon Snow and Daenerys met. Together, they fought the Night King and his army of the dead at the Battle of Winterfell. Arya Stark killed the Night King, ending the threat.",
    "Madness took hold of Daenerys. She burned King's Landing with her dragons, destroying the city and killing thousands, even after victory.",
    "Jon Snow, heartbroken, killed Daenerys to save the realm. The Iron Throne was melted by her dragon, Drogon.",
    "Bran Stark, the boy who could see through time, was chosen as King. Sansa Stark ruled the North as queen. Jon Snow returned to the far North, beyond the Wall, as a free man."
  ];
  
  let currentPage = 0;
  const storyText = document.getElementById('story-text');
  const nextButton = document.getElementById('next-button');
  const backgroundMusic = document.getElementById('background-music');
  const startScreen = document.getElementById('start-screen');
  const storyContainer = document.getElementById('story-container');
  const startButton = document.getElementById('start-button');
  
  function showPage() {
    storyText.innerText = storyPages[currentPage];
    if (currentPage === storyPages.length - 1) {
      nextButton.innerText = "The End";
      nextButton.disabled = true;
    }
  }
  
  nextButton.addEventListener('click', () => {
    if (currentPage < storyPages.length - 1) {
      currentPage++;
      showPage();
    }
  });
  

  startButton.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    storyContainer.classList.remove('hidden');
    backgroundMusic.play();
    showPage();
  });
  