import axios from "axios";

class HttpService {
  /**
   * Get request
   * @param {string} url - api url
   * @param {{}} options - headers, params, ...
   * @returns {Promise<any>} result - headers, params, ...
   */
  async get(url, options = {}) {
    try {
      const result = this.request(url, options);
      return result;
    } catch (error) {
      throw new Error({ error: error.message });
    }
  }

  post(url, options = {}) {}

  async request(url, options = {}) {
    const response = await axios.request({
      url,
      params: options.params,
      data: options.body,
    });

    return response.data;
  }
}

export default new HttpService();
