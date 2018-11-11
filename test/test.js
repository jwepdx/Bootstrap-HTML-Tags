class Card extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({
      mode: "open"
    });
    $("bs-card h4").attr("slot", "header");
    $("bs-card img").attr("slot", "img");
    const style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("src", "../test/card.css");
    shadow.appendChild(style);
    const container = document.createElement("div");
    container.classList.add("card");
    const header = document.createElement("slot");
    header.setAttribute("name", "header");
    container.appendChild(header);
    const img = document.createElement("slot");
    img.setAttribute("name", "img");
    container.appendChild(img);
    const body = document.createElement("div");
    body.classList.add("card-body");
    const slot = document.createElement("slot");
    body.appendChild(slot);
    container.appendChild(body);
    shadow.appendChild(container);
  }
}
customElements.define("bs-card", Card);
