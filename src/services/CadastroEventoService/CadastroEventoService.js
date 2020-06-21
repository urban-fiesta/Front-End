import Base from '../base'

class CadastroEventoService extends Base {
  constructor () {
    super('/events')
  }
}

export default new CadastroEventoService()
