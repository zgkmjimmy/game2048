//定义一个js数组
var score = 0;
var top = 240;
var board = new Array();
var added = new Array();
$(function () {
  newGame();
})

function newGame () {
  //初始化棋盘格
  init();
  //生成两个随机位置的随机数字
  generateOneNumber()
  generateOneNumber()
}

function init () {
  score = 0;
  document.getElementById("score").innerHTML = score;
  $("#gameover").css('display', 'none');
  for (let i = 0; i < 4; i++) {
    //定义了一个二维数组
    board[i] = new Array();
    for (var j = 0; j < 4; j++) {
      //初始化小格子
      board[i][j] = 0;
      var gridCell = $("#grid-cell-" + i + "-" + j);
      gridCell.css('top', getPosTop(i, j));
      gridCell.css('left', getPosLeft(i, j));
    }
  }
  for (var i = 0; i < 4; i++) {
    board[i] = new Array();
    for (var j = 0; j < 4; j++) {
      board[i][j] = 0;
    }
  }
  for (var i = 0; i < 4; i++) {
    added[i] = new Array();
    for (var j = 0; j < 4; j++) {
      added[i][j] = 0;
    }
  }
  updateBoardView()
}

function updateBoardView () {
  $(".number-cell").remove()
  for (let i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      $("#grid-container").append("<div class='number-cell' id='number-cell-" + i + "-" + j + "'></div>")
      var numberCell = $("#number-cell-" + i + "-" + j)
      //如果棋盘格的值为0的话，设置数字格为高宽都为0
      if (board[i][j] == 0) {
        numberCell.css("width", "0px");
        numberCell.css("height", "0px");
        numberCell.css("top", getPosTop(i, j) + 50)
        numberCell.css("left", getPosLeft(i, j) + 50)
      }
      //如果棋盘格的值不为0的话，设置数字格的高度为75并设置背景色和前景色及数字值
      else {
        numberCell.css("width", "100px");
        numberCell.css("height", "100px");
        numberCell.css("top", getPosTop(i, j))
        numberCell.css("left", getPosLeft(i, j))
        numberCell.css("background-color", getNumberBackgroundColor(board[i][j]));
        numberCell.css("color", getNumberColor(board[i][j]));
        numberCell.text(board[i][j]);
      }
    }
  }
}


function generateOneNumber () {
  //生成一个随机位置的随机数字
  //1.生成一个随机的位置
  var randx = parseInt(Math.floor(Math.random() * 4))
  var randy = parseInt(Math.floor(Math.random() * 4))
  while (true) {
    if (board[randx][randy] == 0) {
      break;
    }
    var randx = parseInt(Math.floor(Math.random() * 4))
    var randy = parseInt(Math.floor(Math.random() * 4))
  }
  //2.生成随机的数字(2048游戏规则，新生成的数字只能是2或4)
  var randNumber = Math.random() < 0.5 ? 2 : 4;

  //在随机的位置显示随机的数字
  board[randx][randy] = randNumber;
  //实现随机数字显示的动画
  showNumberWithAnimation(randx, randy, randNumber)
}
