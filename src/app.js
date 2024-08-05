/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronoun = ["the", "our"];
const adjective = ["great", "big"];
const noun = ["jogger", "racoon"];
const extension = [".com", ".org", ".es"];

function domain() {
  let fullDomain = "";
  for (let index1 = 0; index1 < pronoun.length; index1++) {
    const pronounDomain = pronoun[index1];

    for (let index2 = 0; index2 < adjective.length; index2++) {
      const adjectiveDomain = +adjective[index2];

      for (let index3 = 0; index3 < noun.length; index3++) {
        const nounDomain = element2 + noun[index3];

        for (let index4 = 0; index4 < extension.length; index4++) {
          const extensionDomain = element3 + extension[index4];

          let mytag = `<li class="list-group-item" id="generator">${element4}</li>`;
          fullDomain += mytag;
        }
      }
    }
  }
  document.querySelector("#generator").innerHTML = fullDomain;
}
domain();
