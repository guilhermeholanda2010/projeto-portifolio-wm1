const readMoreButton = document.querySelector("button");
const clientInfo = document.querySelector(".client_info");

readMoreButton.addEventListener("click", () => {
    const moreInfo = document.createElement("p");
    moreInfo.classList.add("more-info");
    moreInfo.innerHTML = `
        Tenho uma sólida formação em desenvolvimento de sistemas, focada na construção de aplicações eficientes e bem estruturadas. Sou especializado em projetos extensos utilizando Node.js, AngularJS, ReactJs, postgreSQL. Tecnologias como Sequelize, autenticadores como JWT e bcrypt, dentre outras ferramentas de validação como Yup e Zod. Atualmente atuo na AmigoTech, uma empresa aplicada a facilitar a jornada de saúde de médicos e clínicas.
    `;

    if (!document.querySelector(".more-info")) {
        clientInfo.appendChild(moreInfo);
        readMoreButton.textContent = "Show Less";
    } else {
        clientInfo.removeChild(document.querySelector(".more-info"));
        readMoreButton.textContent = "Read More";
    }
});

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: "smooth"
            });
        }
    });
});

const bars = document.querySelector(".bars");
const menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
    menu.classList.toggle("active");
    bars.classList.toggle("active");
});

const abrirJogoSenha = () => {
    window.location.href = 'jogo-senha/jogo-senha.html';
}
