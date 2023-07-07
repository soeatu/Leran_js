import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得して初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //buttonタグを生成
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
    //buttonタグを生成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    addTarget.appendChild(li);
    addTarget.appendChild(returnButton);
    document.getElementById("completelist").appendChild(addTarget);

    //押された削除ボタンのdivを削除
    deleteFotmIncompleteList(deleteButton.parentNode);
  });

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

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

//リストから要素を削除
const deleteFotmIncompleteList = (target) => {
  document.getElementById("incompletelist").removeChild(target);
};
