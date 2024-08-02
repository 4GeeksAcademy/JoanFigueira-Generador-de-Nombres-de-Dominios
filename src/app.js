/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext = [".com", ".org", ".es"];

function domain() {
  let fulldomain = "";
  for (let index1 = 0; index1 < pronoun.length; index1++) {
    const element1 = pronoun[index1];

    for (let index2 = 0; index2 < adj.length; index2++) {
      const element2 = element1 + adj[index2];

      for (let index3 = 0; index3 < noun.length; index3++) {
        const element3 = element2 + noun[index3];

        for (let index4 = 0; index4 < ext.length; index4++) {
          const element4 = element3 + ext[index4];

          let mytag = `<li class="list-group-item" id="generator">${element4}</li>`;
          fulldomain += mytag;
        }
      }
    }
  }
  document.querySelector("#generator").innerHTML = fulldomain;
}
domain();
