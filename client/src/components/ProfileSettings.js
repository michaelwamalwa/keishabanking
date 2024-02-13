import React, { useState } from 'react';
import './ProfileSettings.css';

const ProfileSettings = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    language: '',
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the form submission logic, e.g., send API request to update the profile
    saveProfileChanges(profile);
  };

  const handleDelete = () => {
    // Perform the delete profile logic, e.g., send API request to delete the profile
    deleteProfile();
  };

  const saveProfileChanges = (updatedProfile) => {
    // Simulating the API call to save the profile changes
    fetch('/api/save-profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProfile),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('Profile changes saved successfully:', responseData);
        // Optionally, show a success message or perform additional actions
      })
      .catch((error) => {
        console.error('Error saving profile changes:', error);
        // Optionally, show an error message or perform error handling
      });
  };

  const deleteProfile = () => {
    // Simulating the API call to delete the profile
    fetch('/api/delete-profile', {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('Profile deleted successfully:', responseData);
        // Optionally, perform additional actions after deleting the profile
      })
      .catch((error) => {
        console.error('Error deleting profile:', error);
        // Optionally, show an error message or perform error handling
      });
  };

  return (
    <div className='profile-settings-container'>
      <h1>Profile and Settings</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="language">Language:</label>
          <select id="language" name="language" value={profile.language} onChange={handleChange}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>
        <div>
          <label htmlFor="notifications">Notifications:</label>
          <input
            type="checkbox"
            id="notifications"
            name="notifications"
            checked={profile.notifications}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
        <button type="button" onClick={handleDelete}>
          Delete Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileSettings;
