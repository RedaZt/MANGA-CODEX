let shonenMagazinesCharts = [
    "WEEKLY SHONEN JUMP.jpg",
    "SHONEN MAGAZINE.jpg",
    "SHONEN SUNDAY.jpg",
    "SHONEN CHAMPION.jpg",
]

let seinenMagazinesCharts = [
    "Big Comics Spirits.jpg",
    "Morning.jpg",
    "Weekly Young Jump.jpg",
    "Weekly Young Magazine.jpg",
]

let mangakasCharts = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
]

let lightNovelsCharts = [
    "TOP circulation Light Novels part 01.jpg",
    "TOP circulation Light Novels part 02.jpg",
    "TOP circulation Light Novels part 03.jpg",
    "TOP circulation Light Novels part 04.jpg",
    "TOP circulation Light Novels part 05.jpg",
    "TOP circulation Light Novels part 06.jpg",
    "TOP circulation Light Novels part 07.jpg",
]

let otherCharts = [
    "Thorfinn Journey.jpg",
]

function fillSection(arr: string[], className: string, folder: string) {
    const container = document.querySelector(`.${className}`);

    arr.forEach(image => {
        const parentElement = document.createElement('div');
        parentElement.classList.add("card");

        const childImgElement = document.createElement('img');
        childImgElement.setAttribute("src", `${folder}/${image}`);

        const childDivelement = document.createElement('div');
        childDivelement.classList.add("image-overlay");

        const imageTitle = image.split('.')[0]
        const elementText = document.createElement('h3');
        elementText.innerText = imageTitle;

        parentElement.appendChild(childDivelement);
        parentElement.appendChild(childImgElement);
        parentElement.appendChild(elementText);

        if (container !== null){
            container.appendChild(parentElement);
        } else {
            console.log("Error");
        }
    });
}

fillSection(mangakasCharts, "mangakas", "charts/mangakas");
fillSection(shonenMagazinesCharts, "shonen-magazines", "charts/shonen magazines");
fillSection(seinenMagazinesCharts, "seinen-magazines", "charts/seinen magazines");
fillSection(lightNovelsCharts, "light-novels", "charts/light novels");
fillSection(otherCharts, "other-charts", "charts/other charts");
