if (document.getElementById("page3Identifier")) {
  function toggleAdditionalProjects() {
    // Получаем ссылку на кнопку "Більше проєктів" и блоки с дополнительными проектами
    const showMoreButton = document.getElementById("show-more-projects");
    const projectGroups = document.querySelectorAll(".project-group");

    // Устанавливаем начальное состояние счетчика
    let currentBlock = 0;

    // Добавляем обработчик события клика на кнопку
    showMoreButton.addEventListener("click", function (event) {
      event.preventDefault(); // Предотвращаем переход по ссылке

      // Показываем следующий блок
      if (currentBlock < projectGroups.length) {
        projectGroups[currentBlock].style.display = "grid";
        currentBlock++;

        // Если показали все блоки, скрываем кнопку
        if (currentBlock === projectGroups.length) {
          showMoreButton.style.display = "none";
        }
      }
    });
  }

  // Вызываем функцию для инициализации
  toggleAdditionalProjects();
}
