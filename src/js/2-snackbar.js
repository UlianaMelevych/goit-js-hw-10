import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#promise-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const delay = parseInt(document.querySelector("#delay").value, 10);
    const shouldResolve = document.querySelector("input[name='state']:checked").value === "fulfilled";

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    promise
      .then((delay) => {
        iziToast.success({
          title: "Success",
          message: `✅ Fulfilled promise in ${delay}ms`,
          position: "topRight",
        });
      })
      .catch((delay) => {
        iziToast.error({
          title: "Error",
          message: `❌ Rejected promise in ${delay}ms`,
          position: "topRight",
        });
      });
  });
});
