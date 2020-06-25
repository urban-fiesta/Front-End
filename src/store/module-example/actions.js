const adicionaItem = ({ commit }) => {
  commit('ADICIONAR_ITEM')
}
const retiraItem = ({ commit }) => {
  commit('RETIRAR_ITEM')
}
const somaPreco = ({ commit }, payload) => {
  commit('SOMAR_PRECO', payload)
}
const diminuirPreco = ({ commit }, payload) => {
  commit('DIMINUIR_PRECO', payload)
}
const somarPrecoIngresso = ({ commit }, payload) => {
  commit('SOMAR_PRECO_INGRESSO', payload)
}
const diminuirPrecoIngresso = ({ commit }, payload) => {
  commit('DIMINUIR_PRECO_INGRESSO', payload)
}
const adicionarItemDataIngresso = ({ commit }, payload) => {
  commit('ADICIONAR_ITEM_DATA_INGRESSO', payload)
}
const diminuirItemDataIngresso = ({ commit }, payload) => {
  commit('RETIRAR_ITEM_DATA_INGRESSO', payload)
}
const adicionarItemNomeIngresso = ({ commit }, payload) => {
  commit('ADICIONAR_ITEM_NOME_INGRESSO', payload)
}
const removerItemNomeIngresso = ({ commit }, payload) => {
  commit('REMOVER_ITEM_NOME_INGRESSO', payload)
}

export {
  adicionaItem,
  retiraItem,
  somaPreco,
  diminuirPreco,
  somarPrecoIngresso,
  diminuirPrecoIngresso,
  adicionarItemDataIngresso,
  diminuirItemDataIngresso,
  adicionarItemNomeIngresso,
  removerItemNomeIngresso
}
