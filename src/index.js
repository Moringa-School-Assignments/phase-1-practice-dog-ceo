// console.log('%c HI', 'color: firebrick')
// // const imgUrl = "https://dog.ceo/api/breeds/image/random/4/";
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
// const breedUrl = "https://dog.ceo/api/breeds/list/all";
// const breedDrop = document.getElementById("breed-dropdown")
// function select() {
//     let select = document.getElementById("breed-dropdown");
//     select.addEventListener("select", () => {
//         fetch(breedUrl)
//             .then(res => res.json())
//             .then(data => {
//                 let breedContainer = document.getElementById("dog-breeds");
//                 const list = Object.keys(data.message);
//                 list.forEach(item => {
//                     breedLi = document.createElement("li");
//                     breedLi.innerHTML = item;
//                     breedLi.style.cursor = "pointer";
//                     breedLi.addEventListener("click", () => breedLi.style.color = "red")
//                     breedContainer.append(breedLi);
//                     console.log(breedLi.innerHTML);
//                 }).filter(breed => {
//                     breed.innerHTML.charAt(0) === select.value.charAt(0);
//                 });
//             })
//     })
// }
// async function getImages() {
//     fetch(imgUrl)
//         .then(res => res.json())
//         .then(data => {
//             data.message.map(src => {
//                 const dogContainer = document.getElementById("dog-image-container");
//                 let img = document.createElement("img");
//                 img.src = src;
//                 dogContainer.appendChild(img)
//             })
//         })
//     fetch(breedUrl)
//         .then(res => res.json())
//         .then(data => {
//             let breedContainer = document.getElementById("dog-breeds");
//             const list = Object.keys(data.message);
//             list.forEach(item => {
//                 const breedLi = document.createElement("li");
//                 breedLi.innerHTML = item;
//                 breedLi.style.cursor = "pointer";
//                 breedLi.addEventListener("click", () => breedLi.style.color = "red")
//                 breedContainer.append(breedLi);
//                 console.log(breedLi.innerHTML);
//             });
//         })
//     select()
// };
// // document.addEventListener("DOMContentLoaded", getImages)
// document.addEventListener("DOMContentLoaded", () => {
//     fetch(imgUrl)
//         .then(res => res.json())
//         .then(data => {
//             data.message.map(src => {
//                 const dogContainer = document.getElementById("dog-image-container");
//                 let img = document.createElement("img");
//                 img.src = src;
//                 dogContainer.appendChild(img)
//             })
//         })
//     fetch(breedUrl)
//         .then(res => res.json())
//         .then(data => {
//             let breedContainer = document.getElementById("dog-breeds");
//             const list = Object.keys(data.message);
//             list.forEach(item => {
//                 const breedLi = document.createElement("li");
//                 breedLi.innerHTML = item;
//                 breedLi.style.cursor = "pointer";
//                 breedLi.addEventListener("click", () => breedLi.style.color = "red")
//                 breedContainer.append(breedLi);
//                 console.log(breedLi.innerHTML);
//             });
//         })
//     select()
// })


document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(res => res.json())
        .then(data => {
            const dogContainer = document.getElementById("dog-image-container");

            data.message.map(dog => {
                const img = document.createElement("img");
                img.src = dog;
                img.height = 400;
                img.width = 400;
                dogContainer.appendChild(img);
            });

        });

    fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => res.json())
        .then(data => {
            const selectBtn = document.getElementById("breed-dropdown")
            const breedsUl = document.getElementById("dog-breeds");
            const breedArray = Object.keys(data.message)
            breedArray.map(breed => {
                const breedLi = document.createElement("li");
                breedLi.innerHTML = breed;
                breedLi.style.cursor = "pointer";
                breedLi.addEventListener("click", () => breedLi.style.color = "red")

                breedsUl.appendChild(breedLi);
            })
            selectBtn.addEventListener("change", () => {
                console.log(selectBtn.value)
                let selectBreeds = breedArray.filter(filtItem => filtItem.charAt(0) == selectBtn.value)
                breedsUl.innerHTML = '';
                selectBreeds.map(select => {
                    const breedLi = document.createElement("li");
                    breedLi.innerHTML = select;
                    breedLi.style.cursor = "pointer";
                    breedLi.addEventListener("click", () => breedLi.style.color = "red")
                    breedsUl.appendChild(breedLi);
                })
            })
        })
})


