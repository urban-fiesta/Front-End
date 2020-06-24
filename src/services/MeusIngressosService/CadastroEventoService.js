import Base from '../base'

class MeuIngressosService extends Base {
  constructor () {
    super('/Tickets')
  }
}

export default new MeuIngressosService()
