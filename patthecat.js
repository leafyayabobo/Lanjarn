document.addEventListener('DOMContentLoaded', function() {
    const characterImage = document.getElementById('characterImage');
    const sleepButton = document.getElementById('sleepButton');
    const mehButton = document.getElementById('mehButton');

    let state = '清醒';  // 初始狀態

    // 點擊睡覺按鈕
    sleepButton.addEventListener('click', function() {
        if (state != '睡覺') {
            characterImage.src = '凌萌/凌莔_睡覺.jpg';
            state = '睡覺';
        }
    });

    // 點擊角色圖片
    characterImage.addEventListener('click', function() {
        if (state === '睡覺') {
            const reactions = ['凌萌/凌莔_生氣.jpg', '凌萌/凌莔_生氣 (2).jpg', '凌萌/凌莔_驚訝.jpg'];
            const randomReaction = reactions[Math.floor(Math.random() * reactions.length)];
            characterImage.src = randomReaction;
            state = '驚訝或生氣';}
        else if (state === '清醒') {
            characterImage.src = '凌萌/凌莔_賣萌.jpg';
            state = '賣萌'
        }
        else {
            characterImage.src = '凌萌/凌莔_清醒.jpg';
            state = '清醒';
        }
    });

    // 點擊咩按鈕
    mehButton.addEventListener('click', function() {
        if (state === '清醒') {
            characterImage.src = '凌萌/凌莔_咩.jpg';
            state = '咩';
        } else if (state === '咩') {
            characterImage.src = '凌萌/凌莔_清醒.jpg';
            state = '清醒';
        }
    });
});
