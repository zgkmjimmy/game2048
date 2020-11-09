//键盘被按下
$(document).keydown(function (event) {
  //event是keydown事件自带的
  switch (event.keyCode) {
    case 37://left
      if (moveLeft()) {
        getScore();
        generateOneNumber();
        setTimeout("isGameOver()", 400);
      }
      break;
    case 38://up
      if (moveUp()) {
        getScore();
        generateOneNumber();
        setTimeout("isGameOver()", 400);
      }
      break;
    case 39://right
      if (moveRight()) {
        getScore();
        generateOneNumber();
        setTimeout("isGameOver()", 400);
      }
      break;
    case 40://down
      if (moveDown()) {
        getScore();
        generateOneNumber();
        setTimeout("isGameOver()", 400);
      }
      break;
  }
})


function moveLeft () {
  if (!canMoveLeft(board)) {
    return false;
  }
  isaddedArray();//每次循环判断前调用
  for (var i = 0; i < 4; i++) {
    for (var j = 1; j < 4; j++) {
      if (board[i][j] != 0) {
        for (var k = 0; k < j; k++) {
          //向左移动
          if (board[i][k] == 0 && noBlokHorizontalCol(i, k, j, board)) {
            showMoveAnimation(i, j, i, k)
            board[i][k] = board[i][j]
            board[i][j] = 0;
          } else if (board[i][k] == board[i][j] && noBlokHorizontalCol(i, k, j, board)) {
            showMoveAnimation(i, j, i, k)
            if (added[i][k] != 0) {//目标落脚点是否完成过合并
              board[i][k + 1] = board[i][j];
              board[i][j] = 0;
            }
            else {
              board[i][k] += board[i][j];
              board[i][j] = 0;
              added[i][k] = 1;
              score += board[i][k];//分数变更
            }
          }
        }
      }
    }
  }
  setTimeout("updateBoardView();", 200);
  return true;
}

function moveRight () {
  if (!canMoveRight(board)) {
    return false;
  }
  isaddedArray();//每次循环判断前调用
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 3; j++) {
      if (board[i][j] != 0) {
        for (var k = 3; k > j; k--) {
          //向右移动
          if (board[i][k] == 0 && noBlokHorizontalColRight(i, k, j, board)) {
            showMoveAnimation(i, j, i, k)
            board[i][k] = board[i][j]
            board[i][j] = 0;
          } else if (board[i][k] == board[i][j] && noBlokHorizontalColRight(i, k, j, board)) {
            showMoveAnimation(i, j, i, k)
            if (added[i][k] != 0) {//目标落脚点是否完成过合并
              board[i][k - 1] = board[i][j];
              board[i][j] = 0;
            }
            else {
              board[i][k] += board[i][j];
              board[i][j] = 0;
              added[i][k] = 1;
              score += board[i][k];//分数变更
            }
          }
        }
      }
    }
  }
  setTimeout("updateBoardView();", 200);
  return true;
}

function moveUp () {
  if (!canMoveUp(board)) {
    return false;
  }
  isaddedArray();//每次循环判断前调用
  for (var i = 1; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (board[i][j] != 0) {
        for (var k = 0; k < i; k++) {
          //向左移动
          if (board[k][j] == 0 && noBlokHorizontalColUp(i, k, j, board)) {
            showMoveAnimation(i, j, k, j)
            board[k][j] = board[i][j]
            board[i][j] = 0;
          } else if (board[k][j] == board[i][j] && noBlokHorizontalColUp(i, k, j, board)) {
            showMoveAnimation(i, j, k, j)
            if (added[k][j] != 0) {//目标落脚点是否完成过合并
              board[k + 1][j] = board[i][j];
              board[i][j] = 0;
            }
            else {
              board[k][j] += board[i][j];
              board[i][j] = 0;
              added[k][j] = 1;
              score += board[k][j];//分数变更
            }
          }
        }
      }
    }
  }
  setTimeout("updateBoardView();", 200);
  return true;
}

function moveDown () {
  if (!canMoveDown(board)) {
    return false;
  }
  isaddedArray();//每次循环判断前调用
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 4; j++) {
      if (board[i][j] != 0) {
        for (var k = 3; k > i; k--) {
          //向左移动
          if (board[k][j] == 0 && noBlokHorizontalColDown(i, k, j, board)) {
            showMoveAnimation(i, j, k, j)
            board[k][j] = board[i][j]
            board[i][j] = 0;
          } else if (board[k][j] == board[i][j] && noBlokHorizontalColDown(i, k, j, board)) {
            showMoveAnimation(i, j, k, j)
            if (added[k][j] != 0) {//目标落脚点是否完成过合并
              board[k - 1][j] = board[i][j];
              board[i][j] = 0;
            }
            else {
              board[k][j] += board[i][j];
              board[i][j] = 0;
              added[k][j] = 1;
              score += board[k][j];//分数变更
            }
          }
        }
      }
    }
  }
  setTimeout("updateBoardView();", 200);
  return true;
}
