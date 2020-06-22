// import Vue from 'vue'
// import axios from 'axios'

// Vue.prototype.$axios = axios
import axios from 'axios'
import Vue from 'vue'

const HTTPClient = axios.create({
  baseURL: `${process.env.API}`,
  headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhoast:5000/*' }
})

Vue.prototype.$axios = HTTPClient

export { HTTPClient }
