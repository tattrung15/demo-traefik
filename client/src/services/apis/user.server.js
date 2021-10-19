import HttpService from "./http.service";

class UserSevice {
  async getUserInfo() {
    const data = await HttpService.get("url");
    return data;
  }
}

export default new UserSevice();
