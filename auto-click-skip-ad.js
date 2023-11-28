/**
 * youtubeの広告で「スキップ」ボタンが表示されたらクリックする
 */
const clickSkipAdButton = () => {
    var adSkipButton = document.getElementsByClassName("ytp-ad-skip-button-modern");

    if (adSkipButton !== null && adSkipButton.length > 0) {
        adSkipButton[0].click();
    }
}

/**
 * 1秒毎に処理を実行し始める
 */
const cyclicProc = () => {
    // 本スクリプトはmanifest.jsonによりURLに"https://www.youtube.com/"を含む場合起動
    // しかし、画面遷移後もタイマー処理は動作してしまうのでyoutube以外のサイトを開いている場合は
    // 次のタイマーを仕掛けないようにする
    if (location.href.startsWith("https://www.youtube.com/")) {
        clickSkipAdButton();

        setTimeout(() => { cyclicProc(); }, 1000 /* ms */);
    }
}

cyclicProc();
