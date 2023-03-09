import React from 'react';
import Header from '../header';
import { useFormik } from 'formik';
import * as yup from 'yup';

const AddProduct = () => {
  const addItems = () => {
    fetch('http://localhost:9000/products', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        brand: formik.values.brand,
        img_src: formik.values.img_src,
        desc: formik.values.desc,
        price: formik.values.price,
      }),
    })
      .then((res) => {
        {
          alert('sukses');
          document.getElementById('form-submit').reset();
        }
      })
      .catch((err) => {
        console.log('Error     ', err);
      });
  };
  const formik = useFormik({
    initialValues: {
      brand: '',
      img_src: '',
      desc: '',
      price: '',
    },
    onSubmit: addItems,
    validationSchema: yup.object().shape({
      brand: yup.string().required().min(3),
      img_src: yup.string().required().min(3),
      price: yup.number().required().min(3),
    }),
  });

  const handleForm = (e) => {
    const { target } = e;
    formik.setFieldValue(target.name, target.value);
  };
  return (
    <div>
      <Header />
      <div className="container-fluid bg-dark d-flex gap-5 justify-content-center flex-wrap vh-100">
        <div className="row">
          <div className="col-md-12">
            <div className="card mt-5">
              <div className="card-body">
                <form
                  id="form-submit"
                  onSubmit={formik.handleSubmit}
                  className=""
                >
                  <div className="row mb-2">
                    <div className="col-md-4">
                      <label className="form-label">Brand</label>
                    </div>
                    <div className="col-md-8">
                      <input
                        onChange={handleForm}
                        className={`form-control ${
                          formik.errors.brand ? 'is-invalid ' : ''
                        }`}
                        type="text"
                        placeholder="Brand"
                        name="brand"
                      />
                      {formik.errors.brand ? (
                        <div className="invalid-feedback">
                          This field is required
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-md-4">
                      <label className="form-label">Image Source</label>
                    </div>
                    <div className="col-md-8">
                      <input
                        onChange={handleForm}
                        className={`form-control ${
                          formik.errors.img_src ? 'is-invalid ' : ''
                        }`}
                        type="text"
                        placeholder="Image Source"
                        name="img_src"
                      />
                      {formik.errors.img_src ? (
                        <div className="invalid-feedback">
                          This field is required
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-md-4">
                      <label className="form-label">Description</label>
                    </div>
                    <div className="col-md-8">
                      <input
                        onChange={handleForm}
                        className={`form-control ${
                          formik.errors.desc ? 'is-invalid ' : ''
                        }`}
                        type="text"
                        placeholder="Description"
                        name="desc"
                      />
                      {formik.errors.desc ? (
                        <div className="invalid-feedback">
                          This field is required
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-md-4">
                      <label className="form-label">Price</label>
                    </div>
                    <div className="col-md-8">
                      <input
                        onChange={handleForm}
                        className={`form-control ${
                          formik.errors.price ? 'is-invalid ' : ''
                        }`}
                        type="text"
                        placeholder="Price"
                        name="price"
                      />
                      {formik.errors.price ? (
                        <div className="invalid-feedback">
                          This field is required
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-md-12">
                      <button className="btn-dark btn rounded-pill w-100">
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
