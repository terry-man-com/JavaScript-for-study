// コールバック関数
const foo = (callback) => {
  console.log("work A");
  callback();
};

const bar = () => {
  console.log("work B");
};

foo(bar);

// 戻り値
const changeDarkMode = (time) => {
  if(new Date().getHours() > time){
    document.body.style.backgroundColor = "#333";
  }
};
const getSeason = () => {
  const month = new Date().getMonth() + 1;
  if(month >= 3 && month <= 5){
    return "spring";
  } else if (month >= 6 && month <= 8){
    return "summer";
  } else if (month >= 9 && month <= 11){
    return "autumn";
  } else {
    return "winter";
  }
};
const season = getSeason();
if (season == "autumn"){
  changeDarkMode(18);
} else {
  changeDarkMode(20);
};
// オブジェクト
const snsUser = {
  id: 1,
  username: "taro"
  // 以下はオブジェクト内で関数を定義可能である例
  // 関数は処理が未記載のためコメントアウト。
  // like: () => {...},
  // count: () => {...}
};
console.log(snsUser.username);
// 以下はオブジェクト内からの関数呼び出しの例
// 処理が未記載によるエラーが出るので、コメントアウト
// snsUser.like();

let snsUser2 = {
  id: 1,
  username: "taro"
};
snsUser2.username = "jiro";
console.log(snsUser2.username);

const snsUser3 = {
  id: 1,
  username: "taro",
  followers: ["Yamada","Suzuki","Tanaka"],
  following: ["Yamada", "Suzuki"],
  posts: null,
  settings: {
    premium: true,
    darkMode: false,
  }
  // actions: {
  //   like: () => {...},
  //   post: () => {...},
  // }
};
console.log(snsUser3.settings.premium);
console.log(snsUser3.followers[2]);