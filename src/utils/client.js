const ua = navigator.userAgent
window.isChrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/)
window.isIos = ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/)
window.isAndroid = ua.match(/(Android);?[\s/]+([\d.]+)?/)
window.isWeixin = ua.indexOf('MicroMessenger') > -1
