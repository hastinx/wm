import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const Register = () => {
  //*validasi form rwgistrasi menggunakan formik dan yup
  const addUsers = async () => {

    try {
      await axios.post('http://localhost:9000/user', {

        username: formik.values.username,
        email: formik.values.email,
        password: formik.values.password

      }).then(() => {
        alert("Register user sukses")
      })
    } catch (error) {
      alert(error)
    }
  };

  const formik = useFormik({
    //useFormik adalah fitur dari formik yang sudah di import di atas

    /**initial value adalah value awal dari form registrasi
     * untuk initial value terserah developer mau di isi seperti apa
     * dan di sini untuk value awalnya adalah empty string
     */
    initialValues: {
      username: '',
      email: '',
      password: '',
    },

    /**OnSubmit merupakan event bawaan dari formik yang berfungsi
     * mengekseskusi submit data dan memberikan feedback proses validasi  */
    onSubmit: addUsers,

    /**
     * pattern validasi yang akan kita gunakan pada form input
     * valisasi di lakukan dengan mengidentifikasi property name dari element input yang kita punya
     */
    validationSchema: yup.object().shape({
      username: yup
        .string()
        .required('Username harus diisi')
        .min(3, 'Minimal 3 karakter'),
      email: yup
        .string()
        .required('Email harus diisi')
        .email('contoh : user@contoh.com'),
      password: yup
        .string()
        .required('Password harus diisi')
        .min(6, 'Minimal 6 karakter'),
    }),
  });

  const handleChange = (e) => {
    const { target } = e;
    //untuk setvalue yang akan di validasi oleh formik berdasarkan property name pada saat event onChange
    formik.setFieldValue(target.name, target.value);
  };

  return (
    <div className="container p-5">
      <div className="row vh-100">
        <div className="col-md-6"></div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="card">
            <div className="cord-body p-2">
              <div className="w-100 mb-4 d-flex justify-content-center">
                Already has an account? let's &nbsp;
                <Link className="text-decoration-none" to="/wm/login">
                  Login
                </Link>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="row mb-2">
                  <div className="col-md-4">
                    <label htmlFor="">Username</label>
                  </div>
                  <div className="col-md-8">
                    <input
                      className={`form-control ${formik.errors.username ? 'is-invalid' : ''
                        }`}
                      type="text"
                      name="username"
                      onChange={handleChange}
                    />
                    {formik.errors.username ? (
                      <div class="invalid-feedback">
                        {formik.errors.username}
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-4">
                    <label htmlFor="">Email</label>
                  </div>
                  <div className="col-md-8">
                    <input
                      className={`form-control ${formik.errors.email ? 'is-invalid' : ''
                        }`}
                      type="email"
                      name="email"
                      onChange={handleChange}
                    />
                    {formik.errors.email ? (
                      <div class="invalid-feedback">{formik.errors.email}</div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-4">
                    <label htmlFor="">Password</label>
                  </div>
                  <div className="col-md-8">
                    <input
                      className={`form-control ${formik.errors.password ? 'is-invalid' : ''
                        }`}
                      type="password"
                      name="password"
                      onChange={handleChange}
                    />
                    {formik.errors.password ? (
                      <div class="invalid-feedback">
                        {formik.errors.password}
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <button className="btn btn-dark rounded-pill w-100">
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
