export function initialPageLoad() {
    const contentDiv = document.querySelector("#content");
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to site";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const topImage = document.createElement("img");
    topImage.classList.add("top-image");
    topImage.src = "https://s-trojmiasto.pl/zdj/c/n/9/3255/750x600/3255691-W-zabytkowym-kompleksie-dawnego-Browaru-Hevelius-miesci-sie-restauracja-i.jpg";
    topImage.alt = "Image of restaurant";
    contentDiv.appendChild(topImage);

    const para1 = document.createElement("p");
    para1.classList.add("landing-page-copy");
    para1.textContent = "this is an upscale restaurant";
    contentDiv.appendChild(para1);

    const para2 = document.createElement("p");
    para2.classList.add("landing-page-copy");
    para2.textContent = "Attire required for this shit";
    contentDiv.appendChild(para2);

    const para3 = document.createElement("p");
    para3.classList.add("landing-page-copy");
    para3.textContent = "Thanks management";
    contentDiv.appendChild(para3);
}