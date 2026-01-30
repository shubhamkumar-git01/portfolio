const form = document.querySelector("form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const errorMsg = document.createElement("p");
errorMsg.style.color = "red";
errorMsg.style.fontWeight = "bold";

form.prepend(errorMsg);

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (nameInput.value.trim() === "") {
        errorMsg.innerText = "Name is required!";
        return;
    }

    if (nameInput.value.trim().length < 4) {
        errorMsg.innerText = "Name should be at least 4 characters!";
        return;
    }

    if (emailInput.value.trim() === "") {
        errorMsg.innerText = "Email is required!";
        return;
    }

    if (messageInput.value.trim() === "") {
        errorMsg.innerText = "Message cannot be empty!";
        return;
    }

    errorMsg.innerText = "";
    alert("Form submitted successfully!");
    form.reset();
});
