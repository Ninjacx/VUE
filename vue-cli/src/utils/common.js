export default {
  ToFixed (data) {
    return parseFloat(data).toFixed(2)
  },
  Time (dataTime) {
    var d = new Date(dataTime)
    var Minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
    var Seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()
    var time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + Minutes + ':' + Seconds
    return time
  }
}
