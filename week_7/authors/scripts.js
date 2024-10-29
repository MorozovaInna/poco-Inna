let authors = [
    {
        firstName: 'Andreas',
        lastName: 'Neeser',
        imageURL: "img/tile_andreas_neeser.jpg",
    },
    {
        firstName: 'Anna',
        lastName: 'Ruchat',
        imageURL: "img/tile_anna_ruchat.jpg",
    },
    {
        firstName: 'Marius',
        lastName: 'Popescu',
        imageURL: "img/tile_marius_popescu.jpg",
    },
    {
        firstName: 'Franco',
        lastName: 'Supino',
        imageURL: "img/tile_franco_supino.jpg",
    },
    {
        firstName: 'Barbara',
        lastName: 'Schibli',
        imageURL: "img/tile_barbara_schibli.jpg",
    },
    {
        firstName: 'Flurina',
        lastName: 'Badel',
        imageURL: "img/tile_flurina_bader.jpg",
    },
    {
        firstName: 'Simon',
        lastName: 'Libsig',
        imageURL: "img/tile_simon_libsig.jpg",
    },
    {
        firstName: 'Demian',
        lastName: 'Leinhard',
        imageURL: "img/tile_demian_leinhard.jpg",
    },
    {
        firstName: 'Lukas',
        lastName: 'Hartmann',
        imageURL: "img/tile_lukas_hartmann.jpg",
    },
    {
        firstName: 'Reto',
        lastName: 'Haenny',
        imageURL: "img/tile_reto_haenny.jpg",
    },
    {
        firstName: 'Sandra',
        lastName: 'Kuenzi',
        imageURL: "img/tile_sandra_kuenzi.jpg",
    },
    {
        firstName: 'Arno',
        lastName: 'Camenisch',
        imageURL: "img/tile_arno_camenisch.jpg",
    },
    
];

let listOfAuthors = document.getElementById("authorList");

function createAuthorList() {

    for (let i = 0; i < authors.length; i++) {
    let author = authors[i];
    let listItem = document.createElement("li");
    let authorImage = document.createElement("img");
    authorImage.src = author.imageURL;
    authorImage.alt = `${author.firstName} ${author.lastName}`;
    let authorName = document.createElement("span");
    authorName.textContent = `${author.firstName} ${author.lastName}`
    listItem.appendChild(authorImage);
    listItem.appendChild(authorName);
    listOfAuthors.appendChild(listItem);
    }
}

createAuthorList();