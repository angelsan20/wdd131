const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Caracas Venezuela",
      location: "Caracas, Capital District, Venezuela",
      dedicated: "2000, August, 20",
      area: 15332,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/caracas-venezuela/400x225/caracas_venezuela_temple_detail_1691066_2400x1200.jpg"
      
    },
    {
      templeName: "Curitiba Brazil",
      location: "Curitiba, Parana, Brazil",
      dedicated: "2008, June, 1",
      area: 27850,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/curitiba-brazil-temple/curitiba-brazil-temple-18837.jpg"
      
    },
    {
      templeName: "Provo City Center",
      location: "Provo, Utah, United States",
      dedicated: "2016, March, 20",
      area: 85084,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple03.jpg"
      
    },
    {
      templeName: "Salt Lake",
      location: "Salk Lake City, Utah, United States",
      dedicated: "1893, April, 6-24",
      area: 382207,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
      
    },
];

  function templeCard(temple) {
    return ` 
            <div class="card">
                <h3>${temple.templeName}</h3>
                <p><span> Location: </span> ${temple.location}</p>
                <p><span> Dedicated: </span> ${temple.dedicated}</p>
                <p><span> Area: </span> ${temple.area}</p>
                <img src="${temple.imageUrl}" loading="lazy" alt="${temple.templeName}" width="400" min-height="250" />
            </div>`;
}


function showTemple(temples) {
  const mainContainer = document.querySelector('.container');
  const templeCards = temples.map(templeCard).join("");
  mainContainer.innerHTML = templeCards;
}

showTemple(temples);

// [array].filter([individual item inside temple] => [convert to date].getFullYear [< condition])

document.querySelector("#home").addEventListener("click", () => {
    showTemple(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    let oldTemple = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    showTemple(oldTemple);
});

document.querySelector("#new").addEventListener("click", () => {
    let newTemple = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    showTemple(newTemple);
});

document.querySelector("#large").addEventListener("click", () => {
    let largeTemple = temples.filter(temple => temple.area > 90000);
    showTemple(largeTemple);
});


document.querySelector("#small").addEventListener("click", () => {
    let smallTemple = temples.filter(temple => temple.area < 10000);
    showTemple(smallTemple);
});
