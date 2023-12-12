// 画面サイズを変更する
window.resizeTo(800, 600);

// Excelを操作するために必要
var excel = new ActiveXObject("Excel.Application");

// 初期化処理
function fileOpen() {
    // 画面からの入力値を取得
    var file = document.getElementById("file").value;

    // 画面を描画
    document.open();
    document.write("<html><head><meta charset='utf-8' />");
    document.write("<title>JavaScriptでExcelファイルからデータ取得</title></head>");
    document.write("<body style='background-color:#cccccc'>");

    // ブックを開く
    var workBook = excel.Workbooks.Open(file);

    // シートは一番左のシートで固定
    var workSheet = workBook.Sheets(1);

    // 1行目の出力（1行目に値が存在している列までを対象に出力）
    document.write("<table border='1'><tr>");
    var max_col = 1;

    while (1) {
        var cell = workSheet.Cells(1, max_col);
        // 対象セルの値が無い場合は処理を抜ける
        if (cell == null || cell.Value == undefined)
            break;
        // 値を出力する
        document.write("<th style='text-align: center;'>" + cell.Value + "</th>");
        // 次の列の値へ
        max_col++;
    }

    document.write("</tr>");

    // 2行目以降の出力（1列目に値が存在している行までを対象に出力）
    var max_row = 2;
    while (1) {
        var cell = workSheet.Cells(max_row, 1);
        // 対象セルの値が無い場合は処理を抜ける
        if (cell == null || cell.Value == undefined)
            break;
        // 1行目の最終列までを対象に値を出力する
        document.write("<tr>");
        for ( i = 1; i < max_col; i++) {
            cell = workSheet.Cells(max_row, i);
            document.write("<td>" + cell.Value + "</td>");
        }
        document.write("</tr>");
        // 次の行へ
        max_row++;
    }

    document.write("</table></body></html>");
    document.close();

    // Excelファイルを閉じる
    workBook.Close();
}