# JavaScript-for-study
JavaScriptの学習用
### 関数
<details><summary>コールバック関数</summary>

```
const foo = (callback) => {
  console.log("work A");
  callback();
};

const bar = () => {
  console.log("work B");
};

foo(bar);
```
- 関数の引数にさらに関数を渡す。
- barはfooを呼び出した時にcallbackに代入される。
- foo内のcallback()にて呼び出されて、実行される。

</details>
<details><summary>戻り値</summary>

- 関数の処理結果を変数に代入したり、他の関数の引数にしたりできる。
```
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
const season = getSeason(); //関数の結果を変数に代入している。
if (season == "autumn"){　// getSeasonの結果を条件式にして分岐処理
  changeDarkMode(3);
} else {
  changeDarkMode(20);
};
```
</details>
<details><summary>オブジェクト</summary>

- データをまとめて管理するための箱のようなもの
```例
const snsUser3 = {
  id: 1,
  username: "taro",
  followers: ["Yamada","Suzuki","Tanaka"],
  following: ["Yamada", "Suzuki"],
  posts: null,
  settings: { // オブジェクト内のオブジェクト
    premium: true,
    darkMode: false,
  }
  // actions: {
  //   like: () => {...},
  //   post: () => {...},
  // }
};
console.log(snsUser3.username); // 呼び出し
console.log(snsUser3.settings.premium); // オブジェクト呼び出し
console.log(snsUser3.followers[2]);　// 配列呼び出し
snsUser3.actions.like(); // likeメソッドを実行
```
</details>

### ブラウザ-API
- ブラウザーAPIとはWebブラウザ上でJavaScriptを実行し、Webページを操作することを可能とするAPI。
```
window.innerWidth; // 現在のウィンドウの横幅を取得
window.innerHeight; // 現在のウィンドウの縦幅を取得
```

```javascript:具体例

if(window.innerWidth > window.innerHeight){
  //PC用の処理
} else {
  //スマホ用の処理
}
```
### documentのオブジェクト・メソッド
- 要素追加方法　TIPS
1. insertBefore
- 指定した要素の前に新しい要素を挿入する
```
parentElement.insertBefore(newElement, referenceElement);
```
1. insertAdjacentHTML
- 指定した位置にHTML文字列を挿入する。
```
element.insertAdjacentHTML('position', 'HTMLString');
```
- positionの値
 - 'beforebegin': 要素の直前
 - 'afterbegin': 要素の最初の子要素の前
 - 'beforeend': 要素の最後の子要素の後（appendChildに近い）
 - 'afterend': 要素の直後

使用例
```
const $timeline = document.getElementById('timeline');

// timelineの最後に新しい投稿を追加
$timeline.insertAdjacentHTML('beforeend', `
  <article class="post">
    新しい投稿です！
  </article>
`);

// timelineの最初に新しい投稿を追加
$timeline.insertAdjacentHTML('afterbegin', `
  <article class="post">
    一番新しい投稿です！
  </article>
`);
```