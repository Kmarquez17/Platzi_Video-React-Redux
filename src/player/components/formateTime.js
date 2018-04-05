function leftPad(num) {
  const pad = '00'
  return pad.substring(0,pad.length - num.length) + num
}

function formateTime(seg) {
  const minutos = parseInt(seg/60,10)
  const segundos = parseInt(seg % 60, 10)
  return `${leftPad(minutos.toString())} : ${leftPad(segundos.toString())}`
}

export default formateTime
