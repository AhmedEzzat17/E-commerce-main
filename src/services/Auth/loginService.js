// src/services/sregisterService.js
import ApiFunctions from '../ApiFunctions';

class LoginService extends ApiFunctions {
  constructor() {
    super('login/');
  }

  // دالة تسجيل مستخدم جديد
  register = async (userData) => {
    return this.post(userData);
  };
}

export default new LoginService();