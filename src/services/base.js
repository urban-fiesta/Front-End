import { HTTPClient } from '../boot/axios'
export default class Base {
  constructor (api) {
    this.api = api
    this.service = HTTPClient
  }

  list = async ($params = '') => {
    try {
      const response = await this.service.get(this.api, { params: $params })
      return response
    } catch (error) {
    }
  }

  get = async ($id) => {
    try {
      const response = await this.service.get(`${this.api}/${$id}`)
      return response
    } catch (error) {
    }
  }

  create = async ($data) => {
    try {
      const response = await this.service.post(this.api, $data)
      return response
    } catch (error) {
    }
  }

  createNoId = async ($data, $id) => {
    try {
      const response = await this.service.post(`${this.api}/${$id}`, $data)
      return response
    } catch (error) {
    }
  }

  update = async ($data, $id) => {
    try {
      const response = await this.service.put(`${this.api}/${$id}`, $data)
      return response
    } catch (error) {
    }
  }

  updateNoId = async ($data) => {
    try {
      const response = await this.service.put(`${this.api}`, $data)
      return response
    } catch (error) {
    }
  }

  remove = async ($id) => {
    try {
      const response = await this.service.delete(`${this.api}/${$id}`)
      return response
    } catch (error) {
    }
  }

  reportPdfGet = async (api, $params) => {
    try {
      const response = await this.service.get(api, { params: $params, headers: { Accept: 'application/pdf' }, responseType: 'arraybuffer' })
      return response
    } catch (error) {
    }
  }

  reportExcelGet = async (api, $params) => {
    try {
      const response = await this.service.get(api, { params: $params, headers: { Accept: 'application/excel' }, responseType: 'arraybuffer' })
      return response
    } catch (error) {
    }
  }

  reportPdfPost = async (api, $params) => {
    try {
      const response = await this.service.post(api, $params, { headers: { Accept: 'application/pdf' }, responseType: 'arraybuffer' })
      return response
    } catch (error) {
    }
  }

  reportExcelPost = async (api, $params) => {
    try {
      const response = await this.service.post(api, $params, { headers: { Accept: 'application/excel' }, responseType: 'arraybuffer' })
      return response
    } catch (error) {
    }
  }
}
