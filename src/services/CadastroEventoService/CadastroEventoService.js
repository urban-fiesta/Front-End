import Base from '../base'

class CadastroEventoService extends Base {
  constructor () {
    super('/Events')
  }
}

export default new CadastroEventoService()
