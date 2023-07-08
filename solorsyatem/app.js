document.body.style.backgroundImage = "url('images/galaxy.gif')";
document.body.style.fontSize = "16px";
document.body.style.fontFamily = "sansSerif";

function weightOfObjectOnPlanets() {
    let header = document.createElement("header");
    let h1 = document.createElement("h1");
    let input = document.createElement("input");
    let select = document.createElement("select");
    let planets = ["--select planet--", "EARTH", "JUPITER", "MARS", "MERCURY", "MOON", "NEPTUNE", "PLUTO", "SATURN", "URANUS", "VENUS"];
    let planetsGravityList = [9.8, 24.79, 3.71, 3.7, 1.61, 11.15, 0.62, 10.44, 8.69, 8.87];
    let planetsOptionsList = [];
    for (let a = 0 ; a < planets.length ; a++) {
        let option = document.createElement("option");
        option.innerHTML = planets[a];
        select.appendChild(option);
        planetsOptionsList.push(option);
    };
    console.log(planetsOptionsList)
    let button = document.createElement("button");
    let main = document.createElement("main");
    let img = document.createElement("img");

    function validateInputAndOption() {
        if (input.value == "") { // input.innerHTML = ""
            while (main.firstChild) {
                main.removeChild(main.firstChild);
            }
            let p = document.createElement("p");
            p.innerHTML = "Mass is required";
            Object.assign(p.style, {
                width: "36rem",
                height: "3rem",
                margin: "auto",
                padding: "1rem 0",
                backgroundColor: "rgba(211, 211, 211, 0.5)",
                textAlign: "center",
            });
            main.style.height = "7.5rem";
            main.appendChild(p);
        } else if (planetsOptionsList[0].selected) {
            while (main.firstChild) {
                main.removeChild(main.firstChild);
            }
            let p = document.createElement("p");
            p.innerHTML = "You did not select a planet yet";
            Object.assign(p.style, {
                width: "36rem",
                height: "3rem",
                margin: "auto",
                padding: "1rem 0",
                backgroundColor: "rgba(211, 211, 211, 0.5)",
                textAlign: "center",
            });
            main.style.height = "7.5rem";
            main.appendChild(p);
        } else {
            while (main.firstChild) {
                main.removeChild(main.firstChild);
            }
            let sectionOne = document.createElement("section");
            let planetImg = document.createElement("img");
            let sectionTwo = document.createElement("section");
            let div = document.createElement("div");
            let p = document.createElement("p");
            let h3 = document.createElement("h3");

            for (c = 1 ; c < planetsOptionsList.length ; c++) {
                if (planetsOptionsList[c].selected) {
                    planetImg.src = `images/${planetsOptionsList[c].innerHTML.toLowerCase()}.png`;
                    p.innerHTML = `The weight of the object on <b style="font-size: 1.25rem; font-weight: 700;"> ${planetsOptionsList[c].innerHTML}</b>`;
                    h3.innerHTML = `${(input.value * planetsGravityList[c - 1]).toFixed(2)} N`;
                }
            }

            main.style.height = "22.5rem";
            main.style.alignItems = "center";
            main.style.justifyContent = "center";
            main.style.display = "flex";
            main.style.columnGap = ".5rem";
            sectionOne.style.flex = "40%";
            sectionTwo.style.flex = "60%";
            sectionTwo.width = "10rem"
            planetImg.style.width = "17.5rem";
            div.style.backgroundColor = "rgba(211, 211, 211, 0.4)";
            div.style.margin = "auto";
            div.style.width = "30rem";
            div.style.height = "9rem";
            div.style.padding = "2rem 0";
            h3.style.marginBottom = "1rem";
            div.style.textAlign = "center";
            p.style.marginBottom = ".5rem";
            h3.style.width = "5rem";
            h3.style.height = "5rem";
            h3.style.marginLeft = "13rem";

            div.appendChild(p);
            div.appendChild(h3);
            sectionOne.appendChild(planetImg);
            sectionTwo.appendChild(div);
            main.appendChild(sectionOne);
            main.appendChild(sectionTwo);
        }
    }
    
    h1.innerHTML = "Calculate a weight of an object on a planet";
    input.placeholder = "   Mass in kilogram";
    input.type = "number";
    button.innerHTML = "Calculate weight";
    img.src = "images/earth.png";
    main.appendChild(img);

    Object.assign(header.style, {
        margin: "auto",
        padding: "1rem",
        textAlign: "center",
        color: "white"
    });
    Object.assign(h1.style, {
        margin: "auto",
        marginBottom: "2.5rem",
        fontSize: "2.5rem",
        textAlign: "center"
    });
    Object.assign(input.style, {
        marginRight: "1rem",
        fontSize: "1.1rem",
        textAlign: "center",
        width: "15rem",
        height: "2.5rem",
        border: "none",
        outline: "none"
    });
    Object.assign(select.style, {
        marginRight: "1rem",
        width: "15rem",
        height: "2.5rem",
        border: "none",
        borderRadius: ".2rem",
        outline: "none"
    });
    Object.assign(button.style, {
        backgroundColor: "lightgrey",
        color: "white",
        fontSize: "1.05rem",
        border: "none",
        borderRadius: ".2rem",
        padding: ".5rem 1.5rem"
    });
    Object.assign(main.style, {
        width: "80%",
        height: "22.5rem",
        margin: "auto",
        marginTop: "1rem",
        padding: "2rem 0",
        backgroundColor: "rgba(211, 211, 211, 0.2)"
    });
    Object.assign(img.style, {
        width: "17.5rem"
    });

    let elements = [h1, input, select, button, main];
    for (let b = 0 ; b < elements.length ; b++) {
        header.appendChild(elements[b]);
    }
    document.body.appendChild(header);

    button.addEventListener("click", () => {
        validateInputAndOption();
    });
    document.body.addEventListener("keypress", (e) => {
        if (e.key == "Enter") {
            validateInputAndOption();
        }
    });
}

weightOfObjectOnPlanets();



// Chat GPT


// document.body.style.backgroundImage = "url('images/galaxy.gif')";
// document.body.style.fontSize = "16px";
// document.body.style.fontFamily = "sansSerif";

// function weightOfObjectOnPlanets() {
//   const planets = [
//     "--select planet--",
//     "EARTH",
//     "JUPITER",
//     "MARS",
//     "MERCURY",
//     "MOON",
//     "NEPTUNE",
//     "PLUTO",
//     "SATURN",
//     "URANUS",
//     "VENUS"
//   ];
//   const planetsGravityList = [9.8, 24.79, 3.71, 3.7, 1.61, 11.15, 0.62, 10.44, 8.69, 8.87];

//   const header = document.querySelector("header");
//   const input = document.querySelector("input");
//   const select = document.querySelector("select");
//   const button = document.querySelector("button");
//   const main = document.querySelector("main");
//   const img = document.querySelector("img");

//   const validateInputAndOption = () => {
//     const selectedOption = select.options[select.selectedIndex];
//     if (input.value === "") {
//       showError("Mass is required");
//     } else if (selectedOption === select.options[0]) {
//       showError("You did not select a planet yet");
//     } else {
//       const planetIndex = select.selectedIndex - 1;
//       const planetName = selectedOption.innerHTML.toLowerCase();
//       const weight = (input.value * planetsGravityList[planetIndex]).toFixed(2);
//       showResult(planetName, weight);
//     }
//   };

//   const showError = (message) => {
//     main.innerHTML = `
//       <p class="error">${message}</p>
//     `;
//     main.style.height = "7.5rem";
//   };

//   const showResult = (planetName, weight) => {
//     const html = `
//       <section class="result">
//         <img src="images/${planetName}.png">
//         <div class="result-info">
//           <p>The weight of the object on <b>${planetName}</b></p>
//           <h3>${weight} N</h3>
//         </div>
//       </section>
//     `;
//     main.innerHTML = html;
//     main.style.height = "22.5rem";
//   };

//   const initialize = () => {
//     const elements = [header, input, select, button, main];
//     const planetOptions = planets.map((planet) => `<option>${planet}</option>`).join("");
//     select.innerHTML = planetOptions;

//     header.innerHTML = `
//       <h1>Calculate the weight of an object on a planet</h1>
//       <input placeholder="Mass in kilogram" type="number">
//       <select>${planetOptions}</select>
//       <button>Calculate weight</button>
//     `;

//     button.addEventListener("click", validateInputAndOption);
//     document.body.addEventListener("keypress", (e) => {
//       if (e.key === "Enter") {
//         validateInputAndOption();
//       }
//     });
//   };

//   initialize();
// }

// weightOfObjectOnPlanets();
