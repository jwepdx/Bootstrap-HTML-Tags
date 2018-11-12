class Card extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({
      mode: "open"
    });
    $("bs-card h6").attr("slot", "body");
    $("bs-card h6").addClass("card-subtitle");
    $(this).children("p").attr("slot", "body");
    $(this).children("p").addClass("card-text");
    $(this).children("ul").attr("slot", "body");
    $(this).children("ul").addClass("list-group list-group-flush");
    $(this).children("ul").children("li").addClass("list-group-item");
    $(this).children("a").attr("slot", "body");
    $(this).children("a").addClass("card-link");

    const headerText = $(this).children("h4").text();;
    const imgSrc = $(this).children("img").attr("src");
    const imgAlt = $(this).children("img").attr("alt");
    const imgPosition = $(this).children("img").attr("pos");
    const titleText = $(this).children("h5").text();
    const footerText = $(this).children("footer").html();

    // Set Stylesheet
    const style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute(
      "src",
      "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    );
    shadow.appendChild(style);
    // Define other elements
    // Main container
    const containerStyle = this.getAttribute("style");
    const container = document.createElement("div");
    container.classList.add("card");
    container.setAttribute("style", containerStyle);
    // Header
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("card-header");
    headerContainer.innerHTML = headerText;
    container.appendChild(headerContainer);
    // Image
    const imgContainer = document.createElement("img");
    imgContainer.setAttribute("src", imgSrc);
    imgContainer.setAttribute("alt", imgAlt);
    // Body
    const body = document.createElement("div");
    // Title
    const titleContainer = document.createElement("h5");
    titleContainer.classList.add("card-title");
    titleContainer.textContent = titleText;
    body.appendChild(titleContainer);
    // Body Slot
    const slot = document.createElement("slot");
    slot.setAttribute("name", "body");
    slot.setAttribute("class", "card-body");
    body.appendChild(slot);
    // Define Order of Elements
    if(imgPosition == "top") {
      body.classList.add("card-body");
      imgContainer.classList.add("card-img-top");
      container.appendChild(imgContainer);
      container.appendChild(body);
      //container.appendChild(footerContainer);
    }
    if(imgPosition == "bottom") {
      body.classList.add("card-body");
      imgContainer.classList.add("card-img-bottom");
      container.appendChild(body);
      container.appendChild(imgContainer);
      //container.appendChild(footerContainer);
    }
    if(imgPosition == "overlay") {
      body.classList.add("card-img-overlay");
      imgContainer.classList.add("card-img");
      container.appendChild(imgContainer);
      container.appendChild(body);
      //container.appendChild(footerContainer);
    }
    shadow.appendChild(container);
  }
}
customElements.define("bs-card", Card);
