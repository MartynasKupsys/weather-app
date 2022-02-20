console.log("Hello World");

const uzkrautiDuomenisIFronta = () => {
  fetch(`http://localhost:5000`)
    .then((data) => data)
    .then((response) => response.json())
    .then((dataObject) => dataObject)
    .then((data) => {
      const keys = Object.keys(data);
      let html1 = document.getElementById("container-1");
      let html2 = document.getElementById("container-2");
      keys.forEach((el, i) => {
        if (el === "status" || el === "degrees") {
          html1.innerHTML += `<div class=${el}><div id=${el}>${data[el]}</div></div>`;
        } else {
          html2.innerHTML += `<div class=img-${i}></div>`;
          html2.innerHTML += `<div class=${el}><div id=${el}>${data[el]}</div><div>${
            el.charAt(0).toUpperCase() + el.slice(1)
          }</div></div>`;
        }
      });
      document.getElementById("degrees").innerHTML += `<img src='./img/celsius2.png'>`;
      document.getElementById("feeling").innerHTML += `<img src='./img/celsius3.png'>`;
      document.getElementById("humidity").innerHTML += `<img src='./img/percentage16.png'>`;
      document.querySelector(".img-2").innerHTML = `<img src='./img/temperature64.png'>`;
      document.querySelector(".img-3").innerHTML = `<img src='./img/humidity64.png'>`;
      // const img
      // insertBefore(newItem, list.childNodes[0]);

      if (data.status === "Broken Clouds") {
        document.getElementById(
          "container-1"
        ).innerHTML += `<div><img src='./img/cloudy.png' ></div>`;
      } else {
        document.getElementById("container-1").innerHTML += `<div><img src='./img/sun.png' ></div>`;
      }
    });
};

// const html = document.getElementById("container-2");
// // const childElement1 = document.querySelector(".feeling");
// let newElement1 = document.createElement("div");
// html.insertAdjacentElement("afterbegin", newElement1);

// console.log(html);

// html.insertBefore(newElement1, html.childNodes[1]);

uzkrautiDuomenisIFronta();
