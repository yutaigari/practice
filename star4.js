(() => {

  class StarClickHandler {

    constructor(object) {
      this.$doc          = document;
      this.$stars        = this.$doc.getElementById(object.starId);
      this.$star_buttons = this.$stars.querySelectorAll("[data-star]");
      this.$stars_on     = this.$stars.querySelectorAll("[data-star-on]");
      this.$stars_off    = this.$stars.querySelectorAll("[data-star-off]");
      this.numberOfStars = object.numberOfStars;

      const starScore    = Number(this.$stars.dataset.starScore);
      console.log(starScore)
      for (let i = 0; i < this.numberOfStars; i++) {
        if (i < starScore) {
          this.$stars_off[i].style.display = "none";
          this.$stars_on[i].style.display = "inline";
        } else {
          this.$stars_off[i].style.display = "inline";
          this.$stars_on[i].style.display = "none";
        }
      }
    }

    handleStarClick(e) {
      for (let i = 0; i < this.numberOfStars; i++) {
        this.$star_buttons[i].addEventListener("click", (e) => this.changeStar(e));
      }
    }

    changeStar(e) {
      const $this = e.target;
      const targetValue = $this.dataset.starOn | $this.dataset.starOff;
      let score = 0
      for (let i = 0; i < this.$star_buttons.length; i++) {
        if (i <= targetValue) {
          this.$stars_on[i].style.display = "inline";
          this.$stars_off[i].style.display = "none";
          score++
        } else {
          this.$stars_on[i].style.display = "none";
          this.$stars_off[i].style.display = "inline";
        }
      }
      this.$stars.dataset.starScore = score;
    };

  }

  const starClickHandler = new StarClickHandler({
    starId: "js-star-form",
    numberOfStars: 5
  });
  starClickHandler.handleStarClick();

})();