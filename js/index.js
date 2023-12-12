window.onload = function(){
   
    //画像を配列に格納
    var images =['url(img/mein.png)',
                 'url(img/toukou.png)',
                 'url(img/tukurikata.png)']

    //要素をHTMLから取得
    //画像
    var target = document.getElementById('slide');
    //>,<
    var right = document.getElementById('right');
    var left = document.getElementById('left');


    //クリックしたときに変わるようにカウント変数
    var count = 0;

    //クリックしたら画像変更
   function change(){
       target.style.backgroundImage = images[count];
    }

   //>をクリックしたらcountを+1する
   function goNext(){
       if(count == 2){
           count = 0;
       }else{
           count++;
       }
       change();
   }
   
   //<をクリックしたらcountを-1する
   function goBack(){
       if(count == 0){
           count = 2;
       }else{
           count--;
       }
       change();
   }

   //クリックイベント
   right.addEventListener('click',goNext,false);
   left.addEventListener('click',goBack,false);
};

document.getElementById('right').addEventListener('click', function(event) {
    // 右矢印がクリックされた際の動作を記述する
    // ページのスクロールやリンク先へのジャンプを防止する
    event.preventDefault();
    // ここに右矢印がクリックされた際の処理を記述する
});

document.getElementById('left').addEventListener('click', function(event) {
    // 左矢印がクリックされた際の動作を記述する
    // ページのスクロールやリンク先へのジャンプを防止する
    event.preventDefault();
    // ここに左矢印がクリックされた際の処理を記述する
});
