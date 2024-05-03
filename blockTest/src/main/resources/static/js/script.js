document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById("grid-container");

    // 그리드 생성
    for (let row = 0; row < 20; row++) {
        for (let col = 0; col < 10; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = row;
            cell.dataset.col = col;
            gridContainer.appendChild(cell);
        }
    }

    // 블럭 랜덤 위치에 삽입
    const randomRow = Math.floor(Math.random() * 17); // 블럭이 격자에서 넘어가지 않도록 하기 위해 17로 제한
    const randomCol = Math.floor(Math.random() * 7); // 7로 제한하여 넘어가지 않도록
    const startingCell = gridContainer.querySelector(`[data-row="${randomRow}"][data-col="${randomCol}"]`);
    startingCell.classList.add("block");

    // 확인 버튼 클릭 시 블럭이 적절한 위치에 삽입되었는지 확인
    function checkPlacement() {
        if (startingCell.nextSibling && startingCell.nextSibling.classList.contains("block")) {
            alert("블럭이 적절한 위치에 맞추어졌습니다!");
        } else {
            alert("블럭이 적절하지 않은 위치에 삽입되었습니다.");
        }
    }
});