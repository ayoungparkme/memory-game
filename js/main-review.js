Array.prototype.shuffle = function () {
  for (let i = 0; i < this.length; i++) {
    let select = Math.floor(Math.random() * this.length);
    let temp = this[i];
    this[i] = this[select];
    this[select] = temp;
  }
  return this;
};

const cardArr = [
  { idx: 0, title: "mouse", img: "images/12jisin/mouse.svg" },
  { idx: 1, title: "cow", img: "images/12jisin/cow.svg" },
  { idx: 2, title: "tiger", img: "images/12jisin/tiger.svg" },
  // { idx: 3, title: "rabbit", img: "images/12jisin/rabbit.svg" },
  // { idx: 4, title: "dragon", img: "images/12jisin/dragon.svg" },
  // { idx: 5, title: "snake", img: "images/12jisin/snake.svg" },
  // { idx: 6, title: "horse", img: "images/12jisin/horse.svg" },
  // { idx: 7, title: "sheep", img: "images/12jisin/sheep.svg" },
  // { idx: 8, title: "monkey", img: "images/12jisin/monkey.svg" },
  // { idx: 9, title: "chicken", img: "images/12jisin/chicken.svg" },
  // { idx: 10, title: "dog", img: "images/12jisin/dog.svg" },
  // { idx: 11, title: "pig", img: "images/12jisin/pig.svg" },
];

const doubleCardArr = [...cardArr, ...cardArr].shuffle();
const main = document.querySelector("#main");
const ul = document.createElement("ul");
doubleMemorys.forEach(function (item, idx) {
  const li = document.createElement("li");
  li.innerHTML = `
  <div class="card on" data-idx="${item.idx}">
    <div class="front face">
      <img src="${item.img}" alt="" />
      <p>${item.title}</p>
    </div>
    <div class="back face"></div>
  </div>
`;
  ul.appendChild(li);
});
main.appendChild(ul);
const items = document.querySelectorAll("#main ul li");
