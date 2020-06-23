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

export {
  adicionaItem,
  retiraItem,
  somaPreco,
  diminuirPreco
}
