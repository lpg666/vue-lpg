(function (win) {
  const doc = win.document
  const docEl = doc.documentElement
  const objhtml = doc.getElementsByTagName('html')[0]
  const width = docEl.clientWidth
  const size = 'fontSize'
  const html = function (obj, key, value) {
    let rem = obj.style[key] = value + 'px'
    return rem
  }
  html(objhtml, size, width / 7.5)
  win.onresize = function () {
    html(objhtml, size, width / 7.5)
    console.log(html(objhtml, size, width / 7.5))
  }
})(window)
