//template_q4acfqj
//service_cnqs288
//QNtVtfnOVB5g6qc4t

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs
      .sendForm(
        "service_cnqs288",
        "template_q4acfqj",
        event.target,
        "QNtVtfnOVB5g6qc4t"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly at bdavidson112@gmail.com"
        );
      });
  }

  let isModalOpen = false;
  function toggleModal() {
    if (isModalOpen) {
      isModalOpen = false;
      return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
  }


  let contrastToggle = false
  function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
  }

  const scaleFactor = 1 / 20 
  function moveBackgroung(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor
    for (let i = 0; i < shapes.length; ++i) {
      const isOdd = i % 2 !== 0;
      const boolInt = isOdd ? -1 : 1;
      shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }

  }