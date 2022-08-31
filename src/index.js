console.log('%c HI', 'color: firebrick')
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4/";
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
function select() {
    let select = document.getElementById("breed-dropdown");
    select.addEventListener("select", () => {
        fetch(breedUrl)
            .then(res => res.json())
            .then(data => {
                let breedContainer = document.getElementById("dog-breeds");
                const list = Object.keys(data.message);
                list.forEach(item => {
                    breedLi = document.createElement("li");
                    breedLi.innerHTML = item;
                    breedLi.style.cursor = "pointer";
                    breedLi.addEventListener("click", () => breedLi.style.color = "red")
                    breedContainer.append(breedLi);
                    console.log(breedLi.innerHTML);
                }).filter(breed => {
                    breed.innerHTML.charAt(0) === select.value.charAt(0);
                });
            })
    })
}
async function getImages() {
    fetch(imgUrl)
        .then(res => res.json())
        .then(data => {
            data.message.map(src => {
                const dogContainer = document.getElementById("dog-image-container");
                let img = document.createElement("img");
                img.src = src;
                dogContainer.appendChild(img)
            })
        })
    fetch(breedUrl)
        .then(res => res.json())
        .then(data => {
            let breedContainer = document.getElementById("dog-breeds");
            const list = Object.keys(data.message);
            list.forEach(item => {
                const breedLi = document.createElement("li");
                breedLi.innerHTML = item;
                breedLi.style.cursor = "pointer";
                breedLi.addEventListener("click", () => breedLi.style.color = "red")
                breedContainer.append(breedLi);
                console.log(breedLi.innerHTML);
            });
        })
    select()
};
document.addEventListener("DOMContentLoaded", getImages)
