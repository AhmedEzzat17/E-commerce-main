import React, { useState } from 'react';
import '../shared/CreateStyle.css';

export default function UserCreate() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    password_confirmation: '',
    address: '',
    role: '0',
    user_add_id: '' // هيتملأ تلقائي حسب المستخدم الحالي لو عاوز تربطه
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'الاسم مطلوب';
    if (!formData.phone.trim()) newErrors.phone = 'رقم الهاتف مطلوب';
    if (!/^\d{10,15}$/.test(formData.phone.trim())) newErrors.phone = 'رقم الهاتف غير صحيح';
    if (!formData.email.trim()) newErrors.email = 'البريد الإلكتروني مطلوب';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email.trim())) newErrors.email = 'البريد الإلكتروني غير صحيح';
    if (!formData.password) newErrors.password = 'كلمة المرور مطلوبة';
    else if (formData.password.length < 6) newErrors.password = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
    if (!formData.password_confirmation) newErrors.password_confirmation = 'تأكيد كلمة المرور مطلوب';
    else if (formData.password !== formData.password_confirmation) newErrors.password_confirmation = 'كلمتا المرور غير متطابقتين';
    if (!formData.address.trim()) newErrors.address = 'العنوان مطلوب';
    if (!(formData.role === '0' || formData.role === '1')) newErrors.role = 'الصلاحية مطلوبة (يوزر أو أدمن)';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    // هنا تستخدم axios.post('/users', formData)
    console.log('بيانات المستخدم للإرسال:', formData);
  };

  return (
    <div className="py-12" dir="rtl">
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-header bg-primary text-white rounded-top-4">
                <h4 className="mb-0">
                  <i className="bi bi-plus-circle me-2"></i> إضافة مستخدم جديد
                </h4>
              </div>

              <div className="card-body bg-light">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    {/* الاسم */}
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label fw-bold">
                        <i className="bi bi-person me-1"></i> الاسم الكامل
                      </label>
                      <input type="text" className="form-control" name="name" id="name" value={formData.name} onChange={handleChange} required />
                      {errors.name && <div className="text-danger mt-1" style={{fontSize:'0.9em'}}>{errors.name}</div>}
                    </div>

                    {/* الهاتف */}
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label fw-bold">
                        <i className="bi bi-telephone me-1"></i> رقم الهاتف
                      </label>
                      <input type="text" className="form-control" name="phone" id="phone" value={formData.phone} onChange={handleChange} />
                      {errors.phone && <div className="text-danger mt-1" style={{fontSize:'0.9em'}}>{errors.phone}</div>}
                    </div>

                    {/* البريد */}
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label fw-bold">
                        <i className="bi bi-envelope me-1"></i> البريد الإلكتروني
                      </label>
                      <input type="email" className="form-control" name="email" id="email" value={formData.email} onChange={handleChange} required />
                      {errors.email && <div className="text-danger mt-1" style={{fontSize:'0.9em'}}>{errors.email}</div>}
                    </div>

                    {/* كلمة المرور */}
                    <div className="col-md-6 mb-3">
                      <label htmlFor="password" className="form-label fw-bold">
                        <i className="bi bi-shield-lock me-1"></i> كلمة المرور
                      </label>
                      <input type="password" className="form-control" name="password" id="password" value={formData.password} onChange={handleChange} required />
                      {errors.password && <div className="text-danger mt-1" style={{fontSize:'0.9em'}}>{errors.password}</div>}
                    </div>

                    {/* تأكيد كلمة المرور */}
                    <div className="col-md-6 mb-3">
                      <label htmlFor="password_confirmation" className="form-label fw-bold">
                        <i className="bi bi-shield-check me-1"></i> تأكيد كلمة المرور
                      </label>
                      <input type="password" className="form-control" name="password_confirmation" id="password_confirmation" value={formData.password_confirmation} onChange={handleChange} required />
                      {errors.password_confirmation && <div className="text-danger mt-1" style={{fontSize:'0.9em'}}>{errors.password_confirmation}</div>}
                    </div>

                    {/* العنوان */}
                    <div className="col-md-6 mb-3">
                      <label htmlFor="address" className="form-label fw-bold">
                        <i className="bi bi-geo-alt me-1"></i> العنوان
                      </label>
                      <input type="text" className="form-control" name="address" id="address" value={formData.address} onChange={handleChange} />
                      {errors.address && <div className="text-danger mt-1" style={{fontSize:'0.9em'}}>{errors.address}</div>}
                    </div>

                    {/* الدور */}
                    <div className="col-md-6 mb-3">
                      <label htmlFor="role" className="form-label fw-bold">
                        <i className="bi bi-person-badge me-1"></i> نوع المستخدم
                      </label>
                      <select className="form-select" name="role" id="role" value={formData.role} onChange={handleChange}>
                        <option value="0">مستخدم</option>
                        <option value="1">مدير</option>
                      </select>
                      {errors.role && <div className="text-danger mt-1" style={{fontSize:'0.9em'}}>{errors.role}</div>}
                    </div>
                  </div>

                  {/* زرار الإرسال */}
                  <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-secondary">
                      <i className="bi bi-arrow-right me-1"></i> رجوع
                    </button>
                    <button type="submit" className="btn btn-primary">
                      <i className="bi bi-check-circle me-1"></i> حفظ المستخدم
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}