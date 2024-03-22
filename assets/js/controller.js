const faqs = [
  {
    question: "Quali tecnologie utilizzi per lo sviluppo web?",
    answer:
      "Per ogni progetto vanno utilizzate le tecnologie più adatte. Alcuni dei linguaggi e framework che utilizzo includono HTML5, CSS3, JavaScript, React.js, Node.js e MongoDB, tra gli altri.",
  },
  {
    question: "Qual è il processo di sviluppo di un sito web?",
    answer:
      "Il processo di sviluppo di un sito web dipende dalle esigenze specifiche del cliente e dalla complessità del progetto. Tuttavia, di solito, il processo include fasi come la pianificazione e l'analisi dei requisiti, la progettazione, lo sviluppo, il testing e il rilascio. Mi assicurerò di mantenerti informato lungo ogni fase del processo.",
  },
  {
    question: "Fornisci anche servizi di manutenzione del sito web?",
    answer:
      "Sì, offro servizi di manutenzione del sito web per garantire che il tuo sito rimanga aggiornato, sicuro e funzionale nel tempo. Questi servizi possono includere aggiornamenti software, backup regolari, monitoraggio della sicurezza e altro ancora.",
  },
  {
    question: "Quali sono i tuoi tempi di consegna? ",
    answer:
      "I tempi di consegna dipendono dalla complessità del progetto e dagli impegni attuali. Cerco sempre di rispettare le scadenze concordate con i miei clienti e ti fornirò una stima accurata dei tempi di consegna durante la fase di pianificazione del progetto.",
  },
];

function populateFAQs() {
  const faqSection = document.getElementById("FAQs");

  faqs.forEach((faq, index) => {
    const faqItem = document.createElement("div");
    faqItem.classList.add("faq-item");

    const question = document.createElement("h3");
    question.classList.add("question");
    question.textContent = faq.question + " +";

    const answer = document.createElement("div");
    answer.classList.add("answer");
    answer.textContent = faq.answer;

    let isOpen = false;

    question.addEventListener("click", () => {
      answer.classList.toggle("show");
      question.classList.toggle("QuestionOpen");

      // Toggle between "+" and "-" based on the question's state
      if (isOpen) {
        question.textContent = faq.question + " +";
      } else {
        question.textContent = faq.question + " -";
      }

      isOpen = !isOpen;
    });

    faqItem.appendChild(question);
    faqItem.appendChild(answer);

    faqSection.appendChild(faqItem);
  });
}

// Call the function to populate FAQs when the page loads
populateFAQs();
const $cards = document.querySelectorAll(".card");

$cards.forEach(($card) => {
  let bounds;

  function rotateToMouse(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    $card.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `;

    $card.querySelector(".glow").style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff55,
          #0000000f
        )
      `;
  }

  $card.addEventListener("mouseenter", () => {
    bounds = $card.getBoundingClientRect();
    document.addEventListener("mousemove", rotateToMouse);
  });

  $card.addEventListener("mouseleave", () => {
    document.removeEventListener("mousemove", rotateToMouse);
    $card.style.transform = "";
    $card.style.background = "";
  });
});


document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.navList').classList.toggle('active'); // Toggle the 'active' class on nav ul
  this.classList.toggle('active'); // Toggle the 'active' class on the menu toggle button
  document.querySelector('.menu-toggle').textContent = document.querySelector('.menu-toggle').textContent === "✕" ? "☰" : "✕";
});