import "./style.css"

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // liの生成
  const li = document.createElement("li");
  
  // divの生成
  const div = document.createElement("div");
  div.className = "list-row";
  
  // pの生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = inputText;
  
  // 完了ボタンの生成
  const compliteButton = document.createElement("button");
  compliteButton.innerText = "完了";
  compliteButton.addEventListener("click", () => {
    // TODO: あとから実装する
    alert("完了");
  });
  
  // 削除ボタンの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // TODO: あとから実装する
    alert("削除");
  });

  // liタグの子要素に各要素を追加
  div.appendChild(p);
  div.appendChild(compliteButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // 未完了のTODOリストにTODOを追加
  document.getElementById("incomplete-list").appendChild(li);
}

// add-buttonというidを付与したボタンを押下した時に、onClickAdd関数を呼ぶ
document.getElementById("add-button").addEventListener("click", onClickAdd);

