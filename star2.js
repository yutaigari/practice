(()=>{

  class StarScoreGenerator {

    constructor(object) {
      this.$doc          = document;
      this.$starsScore   = this.$doc.getElementsByClassName(object.starClass);
      this.numberOfStars = object.numberOfStars;
    }

    createStars() {
      for (let i = 0; i < this.$starsScore.length; i++) {
        const $starScore         = this.$starsScore[i];
        const starScore          = Number(this.$starsScore[i].dataset.starScore);
        console.log(starScore);
        const integerPartOfScore = Math.floor(starScore);
        console.log(integerPartOfScore);
        const floatPartOfScore   = starScore - integerPartOfScore;
        console.log(floatPartOfScore);

        for (let j = 0; j < this.numberOfStars; j++) {
          const $starImage = this.$doc.createElement("img");

          if (j < integerPartOfScore) {
            $starImage.src   = "./star-on.png";
            $starImage.alt   = "star-on";
            $starImage.dataset.starOn = j;
          } else if (floatPartOfScore && !this.$doc.querySelector("#" + $starScore.id + " " +"[data-star-half]")) {
            $starImage.src   = "./star-half.png";
            $starImage.alt   = "star-half";
            $starImage.dataset.starHalf = floatPartOfScore;
          } else {
            $starImage.src   = "./star-off.png";
            $starImage.alt   = "star-off";
            $starImage.dataset.starOff = j;
          }

          this.$starsScore[i].appendChild($starImage);
        }
      }


    }

  };

  const starScoreGenerator = new StarScoreGenerator({
    starClass: "js-star-score",
    numberOfStars: 5
  });
  starScoreGenerator.createStars();

})();