//import 'babel-polyfill/dist/polyfill'
import 'babel-polyfill'

const foo = [1, 2, 3, 4, 5]


$(() => {
  const $root = $('#root')

  for (let bar of foo) {
    $root.append(`<li>${bar}</li>`)
  }
})
