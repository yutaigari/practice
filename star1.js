(()=>{
  // Button生成

  const $doc   = document;
  const number_of_stars = 5;

  const createFormStarButtons = () => {
    const $form_stars = $doc.getElementById("js-form-stars");

    for (let i = 0; i < number_of_stars; i++) {
      const $star_button = $doc.createElement("button");
      $star_button.type = "button";
      $star_button.classList.add("star");
      $star_button.dataset.star = i;
      $form_stars.appendChild($star_button);

      const $star_on_image = $doc.createElement("img");
      $star_on_image.src   = "./star-on.png";
      $star_on_image.alt   = "star-on";
      $star_on_image.dataset.starOn = i;
      $star_button.appendChild($star_on_image);

      const $star_off_image = $doc.createElement("img");
      $star_off_image.src   = "./star-off.png";
      $star_off_image.alt   = "star-off";
      $star_off_image.dataset.starOff = i;
      $star_button.appendChild($star_off_image);
    }
  };
  createFormStarButtons();

  const createResultStars = () => {
    const $result_stars = $doc.getElementById("js-result-stars");
    const integer_part_of_score = Math.floor(Number($result_stars.dataset.starScore));
    const float_part_of_score = Number($result_stars.dataset.starScore) - integer_part_of_score;

    for (let i = 0; i < number_of_stars; i++) {
      const $star_image = $doc.createElement("img");

      if (i < integer_part_of_score) {
        $star_image.src   = "./star-on.png";
        $star_image.alt   = "star-on";
        $star_image.dataset.starOn = i;
        // document.querySelector("[data-star-half]") => 要素がなければnullを返す
        // document.querySelectorAll("[data-star-half]") => 要素がなければnode list（配列）を返す
      } else if (float_part_of_score && !$doc.querySelector("[data-star-half]")) {
        $star_image.src   = "./star-half.png";
        $star_image.alt   = "star-half";
        $star_image.dataset.starHalf = float_part_of_score;
      } else {
        $star_image.src   = "./star-off.png";
        $star_image.alt   = "star-off";
        $star_image.dataset.starOff = i;
      }

      $result_stars.appendChild($star_image);
    }
  };
  createResultStars();


  // Tips 即時関数 | グローバルを汚染しないように
  // Tips コーディングルール| 変数名に「$」をつけると変数はDOM要素と明示する
  // Tips カスタムデータを活用、id名はjsから始める

  // ###############################

  // DOM要素取得
  // const $doc   = document;
  const $stars = $doc.getElementById("js-form-stars");
  const $star_buttons  = $stars.querySelectorAll("[data-star]");
  const $stars_on = $stars.querySelectorAll("[data-star-on]");
  const $stars_off = $stars.querySelectorAll("[data-star-off]");

  // console.log("$doc", $doc);
  // console.log("$stars", $stars);
  // console.log("$star", $star_buttons);
  // console.log("$stars_on", $stars_on);
  // console.log("$stars_off", $stars_off);

  // ###############################

  // 初期化
  const init = () => {
    for (let i = 0; i < $stars_on.length; i++) {
      $stars_on[i].style.display = "none";
    }
  };
  init();

  // ###############################

  // 全ボタンにクリックしたらイベント起こる
  // Tips e.preventDefault(); | リンク要素を無効化
  // Tips e.target | クリックしたDOM要素を取得する

  const handleStarClick = (e) => {

    const $this = e.target;
    const targetValue = $this.dataset.starOn | $this.dataset.starOff;

    console.log('targetValue', targetValue.toString());
    console.log("star-score", $stars.dataset.starScore);
    // console.log($this);

    // if (targetValue.toString() === $stars.dataset.starScore;) {
    //   console.log("okkk")
    // };

    // starのアクティブ化・scoreのセット
    score = 0
    for (let i = 0; i < $star_buttons.length; i++) {
      if (i <= targetValue) {
        $stars_on[i].style.display = "inline";
        $stars_off[i].style.display = "none";
        score++
      } else {
        $stars_on[i].style.display = "none";
        $stars_off[i].style.display = "inline";
      }
    }

    $stars.dataset.starScore = score;
    console.log(score);
  };

  for (let i = 0; i < $star_buttons.length; i++) {
    $star_buttons[i].addEventListener("click", (e) => handleStarClick(e));
  }
})();


// Tips クラス内でのthisと定数（const）定義