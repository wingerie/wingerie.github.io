function keypress(evt) {
    console.log(evt);
    if (evt.keyCode == 27 && lightbox.classList.contains("lightbox_hidden") == false) {
        close_lightbox();
    };
}

function lightbox_this(item) {
    var lightbox = document.getElementById("lightbox");
    lightbox.insertBefore(item.cloneNode(), lightbox.childNodes[0]);
    lightbox.classList.toggle("lightbox_hidden");
    lightbox.childNodes[0].classList.toggle("interactable");
    lightbox.childNodes[0].removeAttribute("onclick");

    document.getElementsByTagName("body")[0].classList.toggle("no_scroll");
    var listen = document.addEventListener('keydown', keypress);
}

function close_lightbox() {
    setTimeout((() => lightbox.removeChild(lightbox.childNodes[0])), 300);
    lightbox.classList.toggle("lightbox_hidden");

    document.getElementsByTagName("body")[0].classList.toggle("no_scroll");
}

function localeOnLoad() {
    /*var regex = RegExp(/([a-z]+-)+/);
    var locale;

    if (window.location.search == "") {
        if (regex.test(navigator.language) == "ru-") {
            locale = "ru";
        } else {
            locale = "en";
        }
    } else {
        locale = window.location.search.slice(1);
    }
    console.log(locale);
    
    swapLocale(locale);*/

    var body = document.getElementsByClassName("article_wrapper")[0];
    body.classList.remove("faded");
}

/*function swapLocale(locale) {
    var ru = document.getElementsByClassName("ru");
    var en = document.getElementsByClassName("en");
    var body = document.getElementsByClassName("article_wrapper")[0];

    body.classList.add("faded");

    if (locale == "ru") {
        Array.from(ru).map(x => x.classList.remove("hidden"));
        Array.from(en).map(x => x.classList.add("hidden"));
        window.history.pushState("", "Радомир Купфер, продуктовый дизайнер, резюме", "?ru");
        document.title = "Радомир Купфер, продуктовый дизайнер, резюме";
    } else {
        Array.from(en).map(x => x.classList.remove("hidden"));
        Array.from(ru).map(x => x.classList.add("hidden"));
        window.history.pushState("", "Radomir Kupfer, Product Designer, CV", "?en");
        document.title = "Radomir Kupfer, Product Designer, CV";
    }

    body.classList.remove("faded");
}*/

