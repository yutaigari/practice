(() => {

  class StarButtonsGenerator {

    constructor(object) {
      this.$doc = document;
      this.$starForm = this.$doc.getElementById(object.starId);
      this.numberOfStars = object.numberOfStars;
    }

    createStarButtons() {
      for (let i = 0; i < this.numberOfStars; i++) {
        const $star_button = this.$doc.createElement("button");
        $star_button.type = "button";
        $star_button.classList.add("star");
        $star_button.dataset.star = i;
        this.$starForm.appendChild($star_button);

        const $star_on_image = this.$doc.createElement("img");
        $star_on_image.src   = "./star-on.png";
        $star_on_image.alt   = "star-on";
        $star_on_image.dataset.starOn = i;
        $star_button.appendChild($star_on_image);

        const $star_off_image = this.$doc.createElement("img");
        $star_off_image.src   = "./star-off.png";
        $star_off_image.alt   = "star-off";
        $star_off_image.dataset.starOff = i;
        $star_button.appendChild($star_off_image);
      }
    }
  }

  const starButtonsGenerator = new StarButtonsGenerator({
    starId: "js-star-form",
    numberOfStars: 5
  });
  starButtonsGenerator.createStarButtons();

})();