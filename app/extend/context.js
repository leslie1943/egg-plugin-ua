'use strict'

module.exports = {
  get isIOS() {
    const iosReg = /iphone|ipod|ipod/i
    return iosReg.test(this.get('user-agent'))
  },

  get uerAgent() {
    return this.get('user-agent')
  },

  get userName() {
    const msg = 'Leslie'
    return msg
  }
}