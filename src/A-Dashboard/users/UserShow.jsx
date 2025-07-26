import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserShow = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async (searchQuery = '') => {
    try {
      const res = await axios.get(`/api/users?search=${searchQuery}`);
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('هل أنت متأكد من حذف هذا المستخدم؟')) return;
    try {
      await axios.delete(`/api/users/${id}`);
      setMessage('تم حذف المستخدم بنجاح');
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const printTable = () => {
    const printContents = document.getElementById('printArea').innerHTML;
    const w = window.open('', '', 'width=900,height=700');
    w.document.write(`
      <html>
      <head>
        <title>طباعة قائمة المستخدمين</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
        <style>
          body { direction: rtl; font-family: Arial, sans-serif; text-align: center; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          th, td { border: 1px solid #000; padding: 10px; text-align: center; }
          th { background-color: #343a40; color: white; }
          tr:nth-child(even) { background-color: #f8f9fa; }
        </style>
      </head>
      <body>
        <h3>قائمة المستخدمين</h3>
        ${printContents}
      </body>
      </html>
    `);
    w.document.close();
    w.print();
  };

  return (
    <div className="container mt-4" dir="rtl">
      <div className="row justify-content-center">
        <h1 className="text-center mb-4" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2c3e50' }}>
          مرحبًا بكم في إدارة المستخدمين
        </h1>
        <div className="col-md-12">
          {message && <div className="alert alert-success">{message}</div>}

          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
              <h4 className="mb-0">قائمة المستخدمين</h4>
              <Link to="/users/create" className="btn btn-light btn-sm text-dark">إضافة مستخدم</Link>
            </div>

            <div className="card-body bg-light">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <button onClick={printTable} className="btn btn-outline-dark btn-sm shadow-sm">
                  <i className="bi bi-printer"></i> طباعة
                </button>
                <form className="d-flex w-100" onSubmit={e => { e.preventDefault(); fetchUsers(search); }}>
                  <input
                    type="text"
                    className="form-control me-2"
                    placeholder="ابحث عن مستخدم..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button type="submit" className="btn btn-primary">بحث</button>
                </form>
              </div>

              <div id="printArea" className="table-responsive">
                <table className="table table-hover text-center align-middle mb-0">
                  <thead className="table-dark">
                    <tr>
                      <th>#</th>
                      <th>الاسم</th>
                      <th>البريد الإلكتروني</th>
                      <th>رقم الهاتف</th>
                      <th>العنوان</th>
                      <th>الدور</th>
                      <th>تمت الإضافة بواسطة</th>
                      <th colSpan="2">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.length > 0 ? (
                      users.map((user, index) => (
                        <tr key={user.id}>
                          <td className="fw-bold">{index + 1}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.phone}</td>
                          <td>{user.address}</td>
                          <td>{user.role === 1 ? 'أدمن' : 'مستخدم'}</td>
                          <td>{user.added_by?.name || 'غير محدد'}</td>
                          <td>
                            <Link to={`/users/edit/${user.id}`} className="btn btn-warning btn-sm">
                              <i className="bi bi-pencil"></i> تعديل
                            </Link>
                          </td>
                          <td>
                            <button onClick={() => handleDelete(user.id)} className="btn btn-danger btn-sm">
                              <i className="bi bi-trash"></i> حذف
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="9" className="text-center text-muted py-4">
                          <i className="bi bi-info-circle"></i> لا يوجد مستخدمين متاحين.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserShow;
