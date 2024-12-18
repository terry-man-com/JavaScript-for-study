# JavaScript-for-study
JavaScriptの学習用(自分用のメモです。)
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
### 中間メモ（本１週で読んで理解できていないこと。）
- Javascriptの導入
  -　メタ構成変数：foo,bar(サンプルコードを記載する際に書かれる変数)
- 変数と定数と宣言
  - constで宣言した変数の値を上書きしようとするとエラーが起こり、処理が進まない。下記の場合は、`console.log(foo2)`で`1`が出力されるわけではない。
  ```
  const foo2 = 1;
  const = 2; // エラー発生
  console.log(foo2);
  ```
- データ型について
  - データ型の表

  | データ型 | 英語表記 | 説明 | 例 |
  | ---- | ---- | ---- | ---- |
  | 数値 | Number | 数字を表す | 1, 2, 3, 4, 5 |
  | 文字列 | String | 文字を表す | "Hello", "World" |
  | 論理値 | Boolean | 論理値を表す | true, false |
  | null | null | 値が存在しないことを表す | null |
  | 未定義 | undefined | 値が未定義であることを表す | undefined |
  | オブジェクト | Object | キーと値を対で格納できるまとまり | {foo: 1, bar: 2} |
- 条件文（if文）
  - `=== true`や`=== false`は下記のコードのように省略できる。（変数はisLogin）
  ```
  if(isLogin){.....}; // isLoginがtrueの場合、を意味する
  if(!isLogin){.....}; // isLoginがfalseの場合、を意味する
  ```
- 標準組み込み関数と標準組み込みオブジェクト
  - Math：数学的な計算を行うためのプロパティやメソッドを所持

  | オブジェクト名 | メソッドまたは<br>プロパティ名 | 説明 | 例 | 結果 |
  | ---- | ---- | ---- | ---- |---- |
  | Math | PI | 円周率を表す | Math.PI | 3.141592|
  | Math | ceil(数値) | 小数点以下を切り上げ | Math.ceil(5.3) | 6 |
  | Math | floor(数値) | 小数点以下を切り下げ | Math.floor(5.3) | 5 |
  | Math | round(数値) | 小数点以下を四捨五入 | Math.round(5.3) | 5 |
  | Math | random() | 0以上1未満のランダムな数値を返す | Math.random() | 0.123132 |

  - 標準メソッド

  | メソッド名 | 説明 | 例 | 結果 |
  | ---- | ---- | ---- | ---- |
  | join(区切り文字) | 配列の要素を区切り文字で結合 | ["Hi", "Tom"].join("") | "HiTom"|
  | split(区切り文字) | 文字列を区切り文字で分割する | "Hi Tom".split(" ") | ["Hi" "Tom"]|
  | slice(開始位置, 終了位置) | 指定した位置の要素を取得する | "HiTom".slice(0, 2) | "Hi"|
  | replaceAll(検索文字列, 置換文字列) | 検索文字列を全て置換文字列に置き換える | "Hello".replaceAll("l", "a"); | "Heaao"|
  | reverse(配列) | 配列の要素を逆順に並び替える | [1, 2, 3].reverse() | [3, 2, 1] |
  | shift(配列) | 配列の先頭の要素を削除する。 | [1, 2, 3].shift() | [2, 3]※ 使用例の操作を行った場合は削除された数、１が出力される。 |
  | indexOf(検索文字列) | 値の中で検索文字列が最初に出現する位置を返す | "Hello".indexOf("o") | 4 |
  | toUpperCase() | 対象の文字列を大文字にする。 | "hello".toUpperCase() | HELLO |
  | toLowerCase() | 対象の文字列を小文字にする。 | "HELLO".toLowerCase() | hello |

  - ブラウザーAPI
    - location：URLに関するプロパティを複数有しているためURLの操作を可能。リダイレクトの設定などができる。
    ```
    window.location // URLの情報を持つオブジェクトを取得
    ```
    - navigation：ブラウザの情報（ChromeやEdgeなのかなど）に関する複数のプロパティを有しているため、ユーザーがどのブラウザを使用しているかなどを特定できる。
    ```
    window.navigation //ブラウザの情報を持つオブジェクトを取得
  
  - documentオブジェクト：WebページのHTML、CSSの情報を持つ
  - documentオブジェクトが持つ主要なプロパティやメソッドについて
    - 使用方：HTML要素に何か操作を加えたい場合は,まず<span style="color: red; ">getElementById()やgetElementsByClassName()を使用し、対象の要素を取得する必要</span>がある。取得後にHTMLを操作するメソッドやプロパティが使用可能となる。
  - parentElement, nextElementSibling, previousElementSiblingで詰まった部分
  ```
  const $previousTest = document.getElementsByClassName("bar")[0];// 配列を取得するのでインデックス失念注意
  const nextElement = $previousTest.nextElementSibling;//処理後の変数の格納を忘れない。
  nextElement.innerText = "Hello World";
  ```