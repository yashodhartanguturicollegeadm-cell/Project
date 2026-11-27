const fragances = [
  {
    id: 1, 
    Fragance:  "Parfums De Marly Althair EDP",
    DupeFragance:  "Liquid Brun", 
    brand: "French Avenue",
    DupeImage: "Image/LiquidBurn.jpg",
    TopNotes: [
        {name: "Cinnamon", image: "Image/Cinnamon.jpg" },
        {name: "Orange Blossom", image: "Image/OrangeBlossom.jpg"},
        {name: "Cardamom", image: "Image/Cardamom.jpg"}, 
        {name: "Bergamot", image: "Image/Bergamot.jpg"}
              ],
    MiddleNotes: [
        {name: "Bourbon Vanilla", image: "Image/BourbonVanilla.jpg"}, 
        {name: "Elemi", image: "Image/elemi.jpg"}
    ], 
    BaseNotes: [
        {name: "Praline", image: "Image/Praline.jpg"}, 
        {name: "Ambroxan", image: "Image/Ambroxan.jpg"}, 
        {name: "Musk", image: "Image/Musk.jpg"}, 
        {name: "Guaiac Wood", image: "Image/GuaiacWood.jpg"}
    ],
  
    Similarlyscore: "90%-95%",
    Buylink: "https://www.jomashop.com/fragrance-world-mens-french-avenue-liquid-brun-edp-spray-3-4-oz-fragrances-6290360375694.html"
  }
];
const container = document.getElementById("container");
container.innerHTML = "";
fragances.forEach(fragrance => {
  const createNotesHTML = (notesArray) => {
    return notesArray.map(note => `
     <div class = "note-icon-container d-flex flex-column align-items-center">
       <img src = "${note.image}" alt="${note.name}" class = "note-img shadow-sm">
       <span class = "note-label">${note.name}</span>
     </div>
     `).join(""); 
  }; 
  container.innerHTML += ` 
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm h-100 bg-dark text-light p-3">
        <img src="${fragrance.DupeImage}" class="card-img-top rounded" alt="${fragrance.DupeFragance}" style=" margin: 0 auto; display: block; width: auto; max-height: 280px; max-width:100%; object-fit: contain; background: #000; padding: 10px; border-radius: 12px;">
        <div class="card-body px-0">
          <h4 class="card-title fw-bold">${fragrance.DupeFragance}</h4>
          <p class="text-light small mb-3">${fragrance.brand} • Dupe of ${fragrance.Fragance}</p>
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
              ${createNotesHTML(fragrance.BaseNotes)}
            </div>
          </div>
          <!-- Similarity Score -->
          <p class="small mt-3 mb-0">Similarity: <strong>${fragrance.Similarlyscore}</strong></p>
          <!-- Buy Button -->
          <a href="${fragrance.Buylink}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light btn-sm mt-3">Buy the dupe</a>
        </div>
      </div>
    </div>
    `;                                                                                 
});
