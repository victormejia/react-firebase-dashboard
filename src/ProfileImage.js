import React from 'react';

export const ProfileImage = ({ id }) => {
  return (
    <div className="four wide column profile-image">
      <img className="ui image" src="/profile-placeholder.png" alt="profile" />
      <input class="file-input" type="file" accept=".png,.jpg" />
      <button class="ui grey button upload-button">Upload Photo</button>
    </div>
  );
};
