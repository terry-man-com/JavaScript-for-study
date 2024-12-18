// ループ分
const questions = [
  "XXXXX",
  "YYYYY",
  "ZZZZZ"
];

for (i = 0; i < questions.length; i++){
  console.log(questions[i]);
}
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
    document.body.style.backgroundColor = "#fff";
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
// 標準組み込み関数・オブジェクト
console.log(Math.PI);
// 標準組み込み関数のユースケース
const challengeLottery = () => {
  const result = Math.random();
  if (result < 0.5) {
    return "あたり";
  } else {
    return "ハズレ";
  }
};
console.log(challengeLottery());

const omitPostTitle = (title) => {
  if(title.length > 20){
    return title.slice(0, 20) + "...";
  } else {
    return title;
  }
};
console.log(omitPostTitle("JavaScriptを学ぼう。あああああああああああああああああああああああ〜！"));
console.log(omitPostTitle("The Third Door"));
// メソッドチェーン
const name = ["Yamada", "Taro"];
console.log(name.join(" ").toUpperCase());

// Web API
//  window.addEventListener("load", () => {
//   alert("Hello");
//  });
// documentオブジェクトの主要なプロパティやメソッド
//使用例
//getElementById
const $fooTest1 = document.getElementById("foo");
$fooTest1.innerText = "Hello World!";
//getElementsByClassName
// const $fooTest2 = document.getElementsByClassName("foo");
// $fooTest2[0].innerText = "Hello World!!";
// $fooTest2[1].innerText = "hello world!!!!!";
// $fooTest2[2].innerText = "HELLO WORLD!!";

// parentElement, nextElementSibling, previousElementSiblingの使用例
const $previousTest = document.getElementsByClassName("bar")[0];
const nextElement = $previousTest.nextElementSibling;
nextElement.innerText = "Hello World";

const $post = document.createElement("article");
$post.setAttribute("class", "post");
$post.innerText = "明日は筋トレをしに行こう。";

const $timeline = document.getElementById("timeline");
$timeline.appendChild($post);

// クラスとインスタンス
class User {
  constructor(obj) {
    this.userName = obj.userName;
    this.birthDay = obj.birthDay;

    this.congratsBirthDay();
  }
  congratsBirthDay(){
    if (this.birthDay === new Date()) {
      return alert('お誕生日おめでとうございます。');
    }
  }
}

const user = new User ({
  userName: 'Taro Tanaka',
  birthDay: new Date()
});

// 非同期処理
// Promise
const foo1 = () => {
  return new Promise((resolve, reject) => {
    const condition =true;
    if (condition) {
      resolve("成功");
    } else {
      reject("失敗");
    }
  });
};

foo1().then((resolve) => {
  console.log(resolve);
}).catch((reject) => {
  console.log(reject);
}).finally (() => {
  console.log("リクエスト処理が完了しました。");
});

// await,async
const asyncfunction = async () => {
  try {
      await foo();
      await bar();
      await baz();
      console.log("foo,bar,bazが成功");
  } catch (error) {
      console.log("foo,bar,bazのどれかが失敗:" + error);
  } finally {
      console.log("リクエストが完了しました。");
  }
};

// fetch()：サーバーサイドとの通信処理
fetch("https://example.com");

// then(),catch()
fetch("https://example.com")
  .then((response) => {
      console.log("リクエストが成功しました。レスポンス内容は「" + response + "」です。");
  })
  .catch((error) => {
      console.log("リクエストが失敗しました。エラー内容は「" + error + "」です。");
  })
  .finally (() => {
      console.log("リクエスト処理が完了しました。");
  });
// await, async
const fooAsyncFunction = async () => {
  try {
      await fetch("...");
      await fetch("...");
      await fetch("...");
      console.log("全ての処理が完了しました。");
  } catch (error) {
      console.log("エラーが発生しました。エラー内容は" + error.massage + "」です。");
  }
};
fooAsyncFunction();

// 標準組み込みメソッド
const replace = "Hello".replaceAll("l", "a"); // 文字列検索し、全て置換
const reverseArray = [1, 2, 3]; // 配列の要素を逆順に並び替える
console.log(reverseArray.reverse());
// shift(配列の先頭の要素を削除する)
const shiftArray = [1, 2, 3];
shiftArray.shift();
console.log(shiftArray);

const num = 0;
console.log(num.toString());

console.log("Hello".indexOf("")); //文字列検索

console.log("hello".toUpperCase()); //値を大文字に変換する。

console.log("HeLLo".toLowerCase()); //値を小文字に変換する。

// 非同期処理
const isTrue = true;
const fooFunction = () =>{
  setTimeout(() => {
        console.log("work A");}, 1000);
};
fooFunction();

for(let i = 0; i < 3; i++) {
  console.log("workB" + i);
}

if (isTrue) {
  console.log("workC");
}