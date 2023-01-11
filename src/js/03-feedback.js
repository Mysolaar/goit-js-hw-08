import { throttle } from "lodash";

const form = document.querySelector(".feedback-form");
form.addEventListener("input", () => {
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  localStorage.setItem("feedback-form-state", JSON.stringify({ email, message }));
});

window.addEventListener("load", () => {
  const formState = localStorage.getItem("feedback-form-state");
  if (formState) {
    const { email, message } = JSON.parse(formState);
    form.elements.email.value = email;
    form.elements.message.value = message;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.reset();
  localStorage.removeItem("feedback-form-state");
  console.log({ email: form.elements.email.value, message: form.elements.message.value });
});

form.addEventListener("input", throttle(() => {
  const email = form.elements.email.value;
}, 500));