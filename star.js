document.addEventListener("DOMContentLoaded", function() {
  // function createParagraph() {
  //   let para = document.createElement('p');
  //   para.textContent = 'ボタンが押されました!';
  //   document.body.appendChild(para);
  // }

  // const buttons = document.querySelectorAll('button');

  // for(let i = 0; i < buttons.length ; i++) {
  //   buttons[i].addEventListener('click', createParagraph);
  // }

  // function changeImage() {
  //   let image = document.createElement('img');


  // }

  let star_off_path = './star-off.png';
  let star_on_path  = './star-on.png';

  let stars = document.getElementById('stars');

  // let stars_off = ["star-off-1", "star-off-2", "star-off-3", "star-off-4", "star-off-5"]
  // let stars_on  = ["star-on-1", "star-on-2", "star-on-3", "star-on-4", "star-on-5"]

  let star_1_button = document.getElementById('star-1');
  let star_2_button = document.getElementById('star-2');
  let star_3_button = document.getElementById('star-3');
  let star_4_button = document.getElementById('star-4');
  let star_5_button = document.getElementById('star-5');

  function hogeHoge(e) {
    // divタグを認識した場合errorになる、buttonタグをclickした場合のみに動作するようにする
    if (e.target.id != "stars") {
      // clickした要素
      console.log(e.target)
      /* <img src="./star-off.png" alt="star-off" id="star-off-1"> */
      console.log(e.target.id)
      // start-off-1
      console.log(e.target.closest("button").id)
      // star-1
      console.log("-----------------------------------------")
      // すべての要素
      console.log(stars.childNodes)
      // div.star以下のnodeを取得
      console.log(document.querySelectorAll("div#stars > button > img"))
      // div.star配下のbutton配下のnodeを取得
      // nodeを下記で回す
      document.querySelectorAll("div#stars > button > img").forEach(function(i) {
        console.log(i)
      });

      let stars_id = []
      document.querySelectorAll("div#stars > button").forEach(function(i) {
        console.log(i.id)
        stars_id.push(i.id)
      })
      console.log(stars_id)
      // ["star-1", "star-2", "star-3", "star-4", "star-5"]

      // clickした星のindexを求める
      click_star_id = e.target.closest("button").id
      number_of_click_star = stars_id.indexOf(click_star_id)
      console.log(number_of_click_star)

      createStars(number_of_click_star, stars_id)
    }

  }

  function createStars(number_of_click_star, stars_id) {
    for (let i = 0; i < stars_id.length; i++) {
      let star_button   = document.getElementById(stars_id[i])
      let star_image = document.createElement('img')

      if (i <= number_of_click_star) {
        star_image.src = star_on_path
        star_image.alt = "star-on"
        star_image.id  = "star-on" + "-" + String( i )
      } else {
        star_image.src = star_off_path
        star_image.alt = "star-off"
        star_image.id  = "star-off" + "-" + String( i )
      }

      while (star_button.firstChild) {
        // NodeListは不変ではないので、毎処理ごとにbox.firstChildは変化します
        star_button.removeChild(star_button.firstChild);
      }

      star_button.appendChild(star_image)
    }
  }

  stars.addEventListener('click', hogeHoge, false)
});