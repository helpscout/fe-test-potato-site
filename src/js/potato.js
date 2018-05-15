// Add your JS here
(function(global) {
  const potato = 'Indeed!'

  // Exports for Node (Testing)
  if (typeof module !== 'undefined' && typeof module.exports) {
    module.exports = potato
  // Exports for Browser
  } else {
    global.potato = potato
  }
})(this)
