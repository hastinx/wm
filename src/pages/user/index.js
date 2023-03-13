import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccount } from '../../features/userSlice';
import Header from '../../components/header';
import axios from 'axios';

const User = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      let data = await axios.get('http://localhost:9000/user');
      let listAccount = data.data;
      console.log('account', listAccount);
      await dispatch(getAccount(listAccount));
    } catch (error) {}
  };
  const { listAccount } = useSelector((state) => state.users);
  // console.log(listAccount)
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <table className="table table-primary mt-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {listAccount.map((i) => (
            <tr key={i.id}>
              <td>{i.username}</td>
              <td>{i.email}</td>
              <td>{i.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default User;
