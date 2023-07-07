import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得して初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createInncompleteList(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

//リストから要素を削除
const deleteFotmIncompleteList = (target) => {
  document.getElementById("incompletelist").removeChild(target);
};

//未完了リストに追加する関数
const createInncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //完了buttonタグを生成
  const completButton = document.createElement("button");
  completButton.innerText = "完了";
  completButton.addEventListener("click", () => {
    //完了リストに追加する要素
    const addTarget = completButton.parentNode;
    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化
    addTarget.textContent = null;
    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    //戻るbuttonタグを生成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      //押された戻すボタンのdivを完了リストから削除
      const deleteTraget = returnButton.parentNode;
      document.getElementById("completelist").removeChild(deleteTraget);
      //TODO内容テキストを取得
      const text = returnButton.parentNode.firstElementChild.innerText;
      createInncompleteList(text);
    });
    addTarget.appendChild(li);
    addTarget.appendChild(returnButton);
    document.getElementById("completelist").appendChild(addTarget);

    //押された削除ボタンのdivを削除
    deleteFotmIncompleteList(completButton.parentNode);
  });
  //削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンのdivを削除
    deleteFotmIncompleteList(deleteButton.parentNode);
  });
  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completButton);
  div.appendChild(deleteButton);
  //未完了リストに追加
  document.getElementById("incompletelist").appendChild(div);
};
