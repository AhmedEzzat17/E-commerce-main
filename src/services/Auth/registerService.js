// src/services/sregisterService.js
import ApiFunctions from '../ApiFunctions';

class RegisterService extends ApiFunctions {
  constructor() {
    super('register/');
  }

  // دالة تسجيل مستخدم جديد
  register = async (userData) => {
    return this.post(userData);
  };


}

export default new RegisterService();