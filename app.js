const title = document.querySelector(".titre");
const images =[
    "dodo",
    "moi",
    "belle"
]

title.innerHTML= "Eloïse, je t'aime";


const dodoMaker =()=>{

    const dodo = document.createElement('span');
    dodo.classList.add("dodo");
    document.body.appendChild(dodo);

    const size = Math.random()*300 +100 +"px";
    dodo.style.width = size;
    dodo.style.height = size;

    dodo.style.top = Math.random() *100 +50 +"%";
    dodo.style.left = Math.random() *100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1: -1;
    dodo.style.setProperty("left", Math.random()*100*plusMinus+"%"); 


    setTimeout(()=>{
        dodo.remove();
    }, 10000);


}

setInterval(dodoMaker,1000)



const oimMaker =()=>{

    const oim = document.createElement('span');
    oim.classList.add("moi");
    document.body.appendChild(oim);

    const size = Math.random()*300 +100 +"px";
    oim.style.width = size;
    oim.style.height = size;

    oim.style.top = Math.random() *200 +50 +"%";
    oim.style.left = Math.random() *200 + "%";

    const plusMinus = Math.random() > 0.5 ? 1: -1;
    oim.style.setProperty("left", Math.random()*100*plusMinus+"%"); 


    setTimeout(()=>{
        oim.remove();
    }, 10000);


}

setInterval(oimMaker, 1000)


const belleMaker =()=>{

    const belle = document.createElement('span');
    belle.classList.add("belle");
    document.body.appendChild(belle);

    const size = Math.random()*300 +100 +"px";
    belle.style.width = size;
    belle.style.height = size;

    belle.style.top = Math.random() *100 +50 +"%";
    belle.style.left = Math.random() *100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1: -1;
    belle.style.setProperty("left", Math.random()*100*plusMinus+"%"); 


    setTimeout(()=>{
        belle.remove();
    }, 10000);


}

setInterval(belleMaker, 1000)



const nousMaker =()=>{

    const nous = document.createElement('span');
    nous.classList.add("nous");
    document.body.appendChild(nous);

    const size = Math.random()*300 +100 +"px";
    nous.style.width = size;
    nous.style.height = size;

    nous.style.top = Math.random() *100 +50 +"%";
    nous.style.left = Math.random() *100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1: -1;
    nous.style.setProperty("left", Math.random()*100*plusMinus+"%"); 


    setTimeout(()=>{
        nous.remove();
    }, 10000);


}

setInterval(nousMaker, 1000)



const eloiseMaker =()=>{

    const eloise = document.createElement('span');
    eloise.classList.add("eloise");
    document.body.appendChild(eloise);

    const size = Math.random()*300 +100 +"px";
    eloise.style.width = size;
    eloise.style.height = size;

    eloise.style.top = Math.random() *100 +50 +"%";
    eloise.style.left = Math.random() *100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1: -1;
    eloise.style.setProperty("left", Math.random()*100*plusMinus+"%"); 


    setTimeout(()=>{
        eloise.remove();
    }, 10000);


}

setInterval(eloiseMaker, 1000)



const guitaresMaker =()=>{

    const guitares = document.createElement('span');
    guitares.classList.add("guitares");
    document.body.appendChild(guitares);

    const size = Math.random()*300 +100 +"px";
    guitares.style.width = size;
    guitares.style.height = size;

    guitares.style.top = Math.random() *100 +50 +"%";
    guitares.style.left = Math.random() *100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1: -1;
    guitares.style.setProperty("left", Math.random()*100*plusMinus+"%"); 


    setTimeout(()=>{
        guitares.remove();
    }, 10000);


}

setInterval(guitaresMaker, 1000)

const mamieEloMaker =()=>{

    const mamieElo = document.createElement('span');
    mamieElo.classList.add("mamieElo");
    document.body.appendChild(mamieElo);

    const size = Math.random()*300 +100 +"px";
    mamieElo.style.width = size;
    mamieElo.style.height = size;

    mamieElo.style.top = Math.random() *100 +50 +"%";
    mamieElo.style.left = Math.random() *100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1: -1;
    mamieElo.style.setProperty("left", Math.random()*100*plusMinus+"%"); 


    setTimeout(()=>{
        mamieElo.remove();
    }, 10000);


}

setInterval(mamieEloMaker, 1000)


const miniSelleMaker =()=>{

    const miniSelle = document.createElement('span');
    miniSelle.classList.add("miniSelle");
    document.body.appendChild(miniSelle);

    const size = Math.random()*300 +100 +"px";
    miniSelle.style.width = size;
    miniSelle.style.height = size;

    miniSelle.style.top = Math.random() *100 +50 +"%";
    miniSelle.style.left = Math.random() *100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1: -1;
    miniSelle.style.setProperty("left", Math.random()*100*plusMinus+"%"); 


    setTimeout(()=>{
        miniSelle.remove();
    }, 10000);


}

setInterval(miniSelleMaker, 1000)

const mesFillesMaker =()=>{

    const mesFilles = document.createElement('span');
    mesFilles.classList.add("mesFilles");
    document.body.appendChild(mesFilles);

    const size = Math.random()*300 +100 +"px";
    mesFilles.style.width = size;
    mesFilles.style.height = size;

    mesFilles.style.top = Math.random() *100 +50 +"%";
    mesFilles.style.left = Math.random() *100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1: -1;
    mesFilles.style.setProperty("left", Math.random()*100*plusMinus+"%"); 


    setTimeout(()=>{
        mesFilles.remove();
    }, 10000);


}

setInterval(mesFillesMaker, 1000)


const mesEcritsMaker =()=>{

    const mesEcrits = document.createElement('span');
    mesEcrits.classList.add("mesEcrits");
    document.body.appendChild(mesEcrits);

    const size = Math.random()*300 +100 +"px";
    mesEcrits.style.width = size;
    mesEcrits.style.height = size;

    mesEcrits.style.top = Math.random() *100 +50 +"%";
    mesEcrits.style.left = Math.random() *100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1: -1;
    mesEcrits.style.setProperty("left", Math.random()*100*plusMinus+"%"); 


    setTimeout(()=>{
        mesEcrits.remove();
    }, 10000);


}

setInterval(mesEcritsMaker, 1000)




const escaladeMaker =()=>{

    const escalade = document.createElement('span');
    escalade.classList.add("escalade");
    document.body.appendChild(escalade);

    const size = Math.random()*300 +100 +"px";
    escalade.style.width = size;
    escalade.style.height = size;

    escalade.style.top = Math.random() *100 +50 +"%";
    escalade.style.left = Math.random() *100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1: -1;
    escalade.style.setProperty("left", Math.random()*100*plusMinus+"%"); 


    setTimeout(()=>{
        escalade.remove();
    }, 10000);


}

setInterval(escaladeMaker, 1000)




// let dodo;
// let moi;
// const el1 = "dodo";
// const el2 = "moi";

// const tousMaker = (quoi, maClass) =>{
//     quoi = document.createElement('span');
//     quoi.classList.add(`${maClass}`);
//     document.body.appendChild(quoi);

//     const size = Math.random()*300 +100 +"px";
//     quoi.style.width = size;
//     quoi.style.height = size;

//     quoi.style.top = Math.random() *100 +50 +"%";
//     quoi.style.left = Math.random() *100 + "%";

//     const plusMinus = Math.random() > 0.5 ? 1: -1;
//     quoi.style.setProperty("left", Math.random()*100*plusMinus+"%"); 


//     setTimeout(()=>{
//         quoi.remove();
//     }, 10000);


// }



// setInterval(tousMaker(dodo, el1), 1000);
// setInterval(tousMaker(moi, el2), 1000);


// let width = window.innerWidth,
//     height = window.innerHeight
//     ratio = window.devicePixelRatio

// let canvas = document.getElementById("canvas"),
//     context = canvas.getContext("2d");

// let dodoElo = new Image();
// dodoElo.onload = animate;
// dodoElo.src = "./ressources/dodo.jpeg"

// canvas.width = width * ratio;
// canvas.height = height * ratio;
// canvas.style.width = width + "px";
// canvas.style.height = height + "px";
// context.scale(ratio,ratio);


// function animate(){
//     draw();
//     update();
//     requestAnimationFrame(animate)
// }


// function draw(){
//     context.clearRect()
// }

// console.log(`la largeur est de ${width} \nla hauteur est de ${height}`);
// console.log(canvas.style.width);
// console.log(canvas.style.height);
// console.log(context.scale(ratio,ratio));
// console.log();
