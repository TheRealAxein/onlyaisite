// получаем все кнопки вкладок и сохраняем их в переменную
const tabButtons = document.querySelectorAll(".tablinks");

// получаем все вкладки и сохраняем их в переменную
const tabContent = document.querySelectorAll(".tabcontent");

// добавляем обработчик события click на каждую кнопку вкладки
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // удаляем класс "active" у всех кнопок вкладок
    tabButtons.forEach((tabButton) => {
      tabButton.classList.remove("active");
    });

    // добавляем класс "active" для выбранной кнопки вкладки
    button.classList.add("active");

    // скрываем все вкладки
    tabContent.forEach((tab) => {
      tab.style.display = "none";
    });

    // получаем ID вкладки, на которую нажали, и показываем ее
    const tabId = button.getAttribute("data-tabid");
    document.getElementById(tabId).style.display = "block";
  });
});

// по умолчанию отображаем первую вкладку
document.getElementById("latest").style.display = "block";
