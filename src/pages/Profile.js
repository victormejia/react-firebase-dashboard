import React, { useEffect, useState } from 'react';
import { useSession } from '../firebase/UserProvider';
import { firestore } from '../firebase/config';

const Profile = () => {
  const { user } = useSession();
  const [userDocument, setUserDocument] = useState(null);

  useEffect(() => {
    const docRef = firestore.collection('users').doc(user.uid);
    const unsubscribe = docRef.onSnapshot((doc) => {
      if (doc.exists) {
        const documentData = doc.data();
        setUserDocument(documentData);
      }
    });
    return unsubscribe;
  }, [user.uid]);

  if (!userDocument) {
    return null;
  }

  return (
    <div>
      <p>{JSON.stringify(userDocument)}</p>
    </div>
  );
};

export default Profile;
