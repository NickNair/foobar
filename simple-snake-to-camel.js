export default snakeToCamel

const regex = /(\-\w)/g

function snakeToCamel(s) {
    return s.replace(regex, function(m) {
      return m[1].toUpperCase()
    })
}
