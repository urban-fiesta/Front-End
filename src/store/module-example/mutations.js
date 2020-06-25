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
const SOMAR_PRECO_INGRESSO = (state, payload) => {
  state.price += payload
}
const DIMINUIR_PRECO_INGRESSO = (state, payload) => {
  state.price -= payload
}
const ADICIONAR_ITEM_DATA_INGRESSO = (state, payload) => {
  state.date = payload
}
const RETIRAR_ITEM_DATA_INGRESSO = (state) => {
  state.date = ''
}
const ADICIONAR_ITEM_NOME_INGRESSO = (state, payload) => {
  state.name = payload
}
const REMOVER_ITEM_NOME_INGRESSO = (state) => {
  state.name = ''
}

export {
  ADICIONAR_ITEM,
  RETIRAR_ITEM,
  SOMAR_PRECO,
  DIMINUIR_PRECO,
  SOMAR_PRECO_INGRESSO,
  DIMINUIR_PRECO_INGRESSO,
  ADICIONAR_ITEM_DATA_INGRESSO,
  RETIRAR_ITEM_DATA_INGRESSO,
  ADICIONAR_ITEM_NOME_INGRESSO,
  REMOVER_ITEM_NOME_INGRESSO
}
