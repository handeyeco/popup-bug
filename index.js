function popup(path) {
  const img = new Image()
  img.onload = function () {
    window.open(path, 'Popup', `width=${this.width},height=${this.height}`)
  }
  img.src = path
}

const svg = document.getElementById('svg')
svg.onclick = () => popup('circle.svg')
const png = document.getElementById('png')
png.onclick = () => popup('squares.png')
