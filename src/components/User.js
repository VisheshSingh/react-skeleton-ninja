import React, { useState, useEffect } from 'react';
import SkeletonProfile from '../skeletons/SkeletonProfile';

const User = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
      const data = await res.json();
      setProfile(data);
    }, 5000);
  }, []);

  return (
    <div className='User'>
      <h2>User details</h2>

      {profile && (
        <div className='profile'>
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <p>{profile.website}</p>
        </div>
      )}

      {!profile && <SkeletonProfile />}
    </div>
  );
};

export default User;
