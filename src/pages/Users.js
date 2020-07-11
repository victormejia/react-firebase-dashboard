import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase/config';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersRef = firestore.collection('users');
    const unsubscribe = usersRef.onSnapshot((querySnapshot) => {
      const users = querySnapshot.docs.map((doc) => doc.data());
      console.log(users);
    });
    return unsubscribe;
  }, []);

  return <div>Users</div>;
};

export default Users;
