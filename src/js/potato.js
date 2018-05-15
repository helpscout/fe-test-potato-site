// Add your JS here
(function(global) {
  console.log('Potato!')

  const potato = 'Indeed!'

  // Exports for Node (Testing)
  if (typeof module !== 'undefined' && typeof module.exports) {
    module.exports = potato
  // Exports for Browser
  } else {
    global.potato = potato
  }
})(this)
