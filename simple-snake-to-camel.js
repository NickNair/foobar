export default snakeToCamel

function snakeToCamel(s) {
    return s.replace(/(\-\w)/g, function(m) {
      return m[1].toUpperCase()
    })
}
