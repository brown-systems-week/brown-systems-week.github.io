const organizers = [
    { name: "Akshay Narayan", role: "Faculty", photo: "assets/akshay.jpg", website: "https://akshayn.xyz/" },
    { name: "Deepti Raghavan", role: "Faculty", photo: "assets/deepti.jpg", website: "https://deeptir.me/" },
    { name: "Malte Schwarzkopf", role: "Faculty", photo: "assets/malte.jpg", website: "https://cs.brown.edu/people/malte/" },
    { name: "Milda Zizyte", role: "Faculty", photo: "assets/milda.jpg", website: "https://cs.brown.edu/people/faculty/mzizyte/" },
    { name: "Nick DeMarinis", role: "Faculty", photo: "assets/nick.jpg", website: "https://vty.sh" },
    { name: "Nikos Vasilakis", role: "Faculty", photo: "assets/nikos.jpg", website: "https://nikos.vasilak.is/" },
    { name: "Robert Y. Lewis", role: "Faculty", photo: "assets/robert.jpg", website: "https://robertylewis.com/" },
    { name: "Shriram Krishnamurthi", role: "Faculty", photo: "assets/shriram.jpg", website: "https://cs.brown.edu/~sk/" },
    { name: "Tim Nelson", role: "Faculty", photo: "assets/tim.jpg", website: "https://cs.brown.edu/~tbn/" },
    { name: "Ugur Cetintemel", role: "Faculty", photo: "assets/ugur.jpg", website: "https://cs.brown.edu/people/faculty/ugur/" },
    { name: "Vasileios P. Kemerlis", role: "Faculty", photo: "assets/vasilis.jpg", website: "https://cs.brown.edu/~vpk/" },
    { name: "Will P.L. Crichton", role: "Faculty", photo: "assets/will.jpg", website: "https://willcrichton.net" }
];
const gallery = document.getElementById("gallery");

gallery.classList.add("w-100", "d-flex", "justify-content-center", "align-items-center", "flex-column"); // Center gallery properly

gallery.innerHTML = ""; // Clear any previous content

const gridContainer = document.createElement("div");
gridContainer.classList.add("d-flex", "justify-content-center", "flex-wrap", "w-100");
gallery.appendChild(gridContainer);

organizers.forEach((organizer) => {
    const item = document.createElement("div");
    item.classList.add("gallery-item", "text-center", "mx-3");
    item.innerHTML = `
        <a href="${organizer.website}" target="_blank" style="text-decoration: none; color: inherit;">
            <img class="imgStuff" src="${organizer.photo}" alt="${organizer.name}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 50%; margin-bottom: 10px;" />
            <br>
            <strong style="color: #ED1C24;">${organizer.name}</strong>
        </a>
        <br>${organizer.role}
    `;
    gridContainer.appendChild(item);
});