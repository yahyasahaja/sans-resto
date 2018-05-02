//MODULES
import { observable } from 'mobx'

//STORE
class Token {
  @observable raw = ''

  get getFormatted() {
    return `Bearer ${this.raw}`
  }
}

export default new Token()