var cards = document.querySelectorAll(".activity-card");

cards.forEach(function (card) {
  card.addEventListener("mouseover", function () {
    var btnText = card.querySelector(".btnText");
    btnText.textContent = "Зв’язатись з нами";
  });

  card.addEventListener("mouseout", function () {
    var btnText = card.querySelector(".btnText");
    btnText.textContent = "Детальніше";
  });
});
