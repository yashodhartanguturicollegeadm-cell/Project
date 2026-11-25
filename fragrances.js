const fragances = [
  {
    id: 1 
    Fragance:  "Parfums De Marly Althair EDP",
    DupeFragance:  "Liquid Brun", 
    DupeImage: "Image/LiquidBurn.jpg",
    TopNotes: [
        {name: "Cinnamon", image: "Image/Cinnamon.jpg" },
        {name: "Orange Blossom", image: "Image/OrangeBlosson.jpg"},
        {name: "Cardamom", image: "Image/Cardamom.jpg"}, 
        {name: "Bergamont", image: "Image/Bergamot.jpg"}
              ],
    MiddleNotes: [
        {name: "Bourbon Vanilla", image: "Image/BourbonVanilla.jpg"}, 
        {name: "Elemi", image: "elemi.jpg"}
    ], 
    BaseNotes: [
        {name: "Praline", image: "Image/Praline.jpg"}, 
        {name: "Ambroxan", image: "Image/Ambroxam.jpg"}, 
        {name: "Musk", image: "Image/Musk.jpg"}, 
        {name: "Guaiac Wood", image: "Image/GuaiacWood.jpg"}
    ]
  
    Similarlyscore: "90%-95%",
    Dupe_buy_link: "https://www.jomashop.com/fragrance-world-mens-french-avenue-liquid-brun-edp-spray-3-4-oz-fragrances-6290360375694.html"
  }
];
const container = document.getElementById("container");
container.innerHTML = "";
fragances.forEach(fragrance => {
  const createNotes = (notesArray) => {
    return.notesArray.map(note => `
     <div class = "note-icon-container d-flex flex-column alig-items-center">
       <img src = "${note.image}" alt="${note.name}" class = "note-img shadow-sm">
       <span class = "note-label">${note.name}</span>
     </div>)
  }
})
