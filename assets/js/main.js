let mobileMenu = document.getElementById("mobMenu");

let humBars = document.getElementById("mobNav");

let closeBtn = document.getElementById("close");

humBars.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  setTimeout(() => {
    mobileMenu.classList.remove("opacity-0");
    document.getElementById("mobileNav").classList.add("opacity-0");
  }, 300);
});

closeBtn.addEventListener("click", () => {
  document.getElementById("mobileNav").classList.remove("opacity-0");
  mobileMenu.classList.add("opacity-0");
  setTimeout(() => {
    mobileMenu.classList.add("hidden");
  }, 300);
});

// tabs

let tabs = document.querySelectorAll(".tab");
let img = document.getElementById("img");
let tabtxt = document.getElementsByClassName("tab-txt")[0];

tabs.forEach((e) => {
  tabs[0].classList.add("before:w-[40%]");
  e.addEventListener("click", () => {
    tabs.forEach((el) => {
      el.classList.remove("before:w-[40%]");
    });
    e.classList.add("before:w-[40%]");
    // change-content
    if (e.id === "tab_1") {
      img.classList.add("opacity-0");
      tabtxt.classList.add("opacity-0");

      setTimeout(() => {
        img.src = "./assets/images/illustration-features-tab-1.svg";
        img.style.marginBottom = "0px";
        tabtxt.children[0].textContent = "Bookmark in one click";
        tabtxt.children[1].textContent = `Organize your bookmarks however you like. Our simple drag-and-drop
        interface gives you complete control over how you manage your
        favourite sites.`;

        img.classList.remove("opacity-0", "mb-[50px]");
        tabtxt.classList.remove("opacity-0", "mb-[50px]");
      }, 700);
    } else if (e.id === "tab_2") {
      img.classList.add("opacity-0");
      tabtxt.classList.add("opacity-0");

      setTimeout(() => {
        img.src = "./assets/images/illustration-features-tab-2.svg";
        img.style.marginBottom = "0px";

        tabtxt.children[0].textContent = " More Info Intelligent search";
        tabtxt.children[1].textContent = `Our powerful search feature
        will help you find saved sites in no time at all. No need to trawl through
        all of your bookmarks.`;

        img.classList.remove("opacity-0", "mb-[50px]");
        tabtxt.classList.remove("opacity-0", "mb-[50px]");
      }, 700);
    } else if (e.id === "tab_3") {
      img.classList.add("opacity-0");
      setTimeout(() => {
        img.src = "./assets/images/illustration-features-tab-3.svg";
        img.style.marginBottom = "0px";

        tabtxt.children[0].textContent = "Share your bookmarks";
        tabtxt.children[1].textContent = `Easily share your
        bookmarks and collections with others. Create a shareable link that you can
        send at the click of a button.`;

        img.classList.remove("opacity-0", "mb-[50px]");
        tabtxt.classList.remove("opacity-0", "mb-[50px]");
      }, 700);
    }
  });
});

//////////////////////////////////////////////////////////////////////////////////////////
let arrowImg = document.querySelectorAll(".qu svg");

arrowImg.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("rotate-180") === false) {
      e.classList.add("rotate-180");
      e.children[0].style.stroke = "#fa5757";
      e.parentElement.parentElement.children[1].classList.remove("hidden");
    } else {
      e.classList.remove("rotate-180");
      e.children[0].style.stroke = "#5267DF";
      e.parentElement.parentElement.children[1].classList.add("hidden");
    }
  });
});
//////////////////////////////////////////////////////////////////////////////////////////

let form = document.forms[0];
let emailInput = document.getElementById("email");
let errorDiv = document.getElementById("error");
let imgError = document.createElement("img");

form.onsubmit = (e) => {
  e.preventDefault();
  if (
    emailInput.value == 0 ||
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value) ===
      false
  ) {
    imgError.src = "./assets/images/icon-error.svg";
    imgError.style.cssText = "transform: translateY(-40px);";

    errorDiv.classList.add("block");
    errorDiv.classList.remove("hidden");

    setTimeout(() => {
      errorDiv.classList.remove("opacity-0");
      errorDiv.style.cssText = `display: flex;
      justify-content: space-between;
      align-items: center;`;

      emailInput.style.cssText = `border: 4px solid #fa5757;
      border-radius: 5px 5px 0px 0px;`;

      errorDiv.append(imgError);
    }, 700);
  } else {
    errorDiv.remove();
    let contact_div = document.getElementById("contact");
    for (let i = 0; i < contact_div.children.length; i++) {
      contact_div.children[i].style.opacity = 0;
      setTimeout(() => {
        contact_div.children[i].remove();
      }, 1000);
    }

    setTimeout(() => {
      let div_done = document.createElement("div");
      div_done.innerHTML = `
        <h1 class="text-white font-medium text-[1.5em] mb-7">Email has sent Sucssfully</h1>
          <?xml version="1.0" encoding="iso-8859-1"?>
            <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
            <svg class="animate-bounce" height="80px" width="80px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 17.837 17.837" xml:space="preserve">
                <g>
                  <path style="fill:#fff;" d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27
                  c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0
                  L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"/>
              </g>
      </svg>
    `;
      div_done.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    `;
      contact_div.append(div_done);
    }, 1000);
  }
};
