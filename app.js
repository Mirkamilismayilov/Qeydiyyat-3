
let form = document.querySelector("#form");
let name1 = document.querySelector("#ad");
let pass = document.querySelector("#parol");
let btn = document.querySelector("#btn");
let span = document.querySelectorAll("span")
let img = document.getElementsByTagName("img")[0];
let a = document.getElementsByTagName("a")[0];



let newSpan = Array.prototype.slice.call(span)





let obj = {
    name1: "",
    pass: ""
}
form?.addEventListener("submit", (e) => {
    e.preventDefault()
})
// console.log(obj.name1.innerHtml = ad.value);




btn?.addEventListener("click", () => {
    obj.name1 = name1.value;
    obj.pass = pass.value;

    localStorage.setItem("dataObj", JSON.stringify(obj));


    // console.log(localStorage.getItem("dataObj"));


    let dataN = name1.value
    let dataP = pass.value

    let Trim = dataN.trim();
    let Trim1 = dataP.trim();


    if (Trim.length == 0 && Trim1.length == 0) {
        name1.style.border = "3px solid red"
        pass.style.border = "3px solid red"
        newSpan.forEach(element => {
            a.setAttribute("href", "#")

            element.style.visibility = "visible"

        });

    } else {

        btn.style.border = "3px solid green"
        img.style.display = "inline-block"

        setInterval(() => {
            // a.setAttribute("href" , "index.html")
            window.location.href = 'Giris.html';
            console.log("Salam Dunya");
        }, 3000);

    }
})




let form1 = document.querySelector("#form1");
let girisAd = document.querySelector("#girisAd");
let girisPass = document.querySelector("#girisPass");
let Girisbtn = document.querySelector(".Girisbtn");


Girisbtn?.addEventListener("click", () => {



    console.log("salam");


});
