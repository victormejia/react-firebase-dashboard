import React, { useRef } from 'react';

export const ProfileImage = ({ id }) => {
  const fileInput = useRef(null);

  const fileChange = (files) => {
    console.log(files);
  };

  return (
    <div className="four wide column profile-image">
      <img className="ui image" src="/profile-placeholder.png" alt="profile" />
      <input
        className="file-input"
        type="file"
        accept=".png,.jpg"
        ref={fileInput}
        onChange={(e) => fileChange(e.target.files)}
      />
      <button
        className="ui grey button upload-button"
        onClick={() => fileInput.current.click()}
      >
        Upload Photo
      </button>
    </div>
  );
};
