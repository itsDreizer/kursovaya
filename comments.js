const form = document.querySelector(`.form`);

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = form.querySelector(`.form__input`);

  const formData = new FormData(form);
  if (input.value) {
    const response = await fetch("sendData.php", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      location.reload();
    }
  } else {
    alert("Заполните поле!");
  }
});
