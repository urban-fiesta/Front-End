const ADICIONAR_ITEM = (state) => {
  state.total_de_itens++
}
const RETIRAR_ITEM = (state) => {
  state.total_de_itens--
}
const SOMAR_PRECO = (state, payload) => {
  state.total_a_pagar += payload
}
const DIMINUIR_PRECO = (state, payload) => {
  state.total_a_pagar -= payload
}

export {
  ADICIONAR_ITEM,
  RETIRAR_ITEM,
  SOMAR_PRECO,
  DIMINUIR_PRECO
}
