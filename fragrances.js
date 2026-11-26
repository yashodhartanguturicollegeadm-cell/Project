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
     </div>
     ').join(""); 
  }; 
  container.innerHTML += ` 
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm h-100 bg-dark text-light p-3">
        <img src="${fragrance.bottleImage}" class="card-img-top rounded" alt="${fragrance.name}" style="height: 220px; object-fit: cover;">
        <div class="card-body px-0">
          <h4 class="card-title fw-bold">${fragrance.name}</h4>
          <p class="text-muted small mb-3">${fragrance.brand} • Dupe of ${fragrance.original</p>
          <!-- Top Notes -->
          <div class="mb-2">
            <span class="text-uppercase text-secondary fw-bold" style="font-size: 0.7rem;">Top Notes</span>
            <div class="d-flex flex-wrap gap-2 mt-1">
              ${createNotesHTML(fragrance.TopNotes)}
            </div>
          </div>
          <!-- Middle Notes -->
          <div class="mb-2">
            <span class="text-uppercase text-secondary fw-bold" style="font-size: 0.7rem;">Middle Notes</span>
            <div class="d-flex flex-wrap gap-2 mt-1">
              ${createNotesHTML(fragrance.MiddleNotes)}
            </div>
          </div>
          <!-- Base Notes -->
          <div class="mb-2">
            <span class="text-uppercase text-secondary fw-bold" style="font-size: 0.7rem;">Base Notes</span>
            <div class="d-flex flex-wrap gap-2 mt-1">
              ${createNotesHTML(fragrance.baseNotes)}
            </div>
          </div>
        </div>
      </div>
    </div>
    `;                                                                                 
});
