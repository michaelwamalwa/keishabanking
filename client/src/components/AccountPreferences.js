import React, { useState } from 'react';
import './AccountPreferences.css';

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    emailNotifications: false,
    pushNotifications: false,
    smsAlerts: false,
    twoFactorAuth: false,
    language: 'en',
    timezone: 'UTC',
    currency: 'USD',
    theme: 'light',
    privacy: {
      showPersonalInfo: true,
      allowDataCollection: true,
    },
    passwordExpiration: false,
    accessibility: {
      fontSize: 'medium',
      highContrast: false,
      screenReader: false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Perform validation and update user preferences/settings

    // Save the values to the backend or perform other necessary actions
    saveChanges(formData);
  };

  const saveChanges = (data) => {
    // Simulating the API call to save the changes
    fetch('/api/save-account-settings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('Changes saved successfully:', responseData);
        // Optionally, show a success message or perform additional actions
      })
      .catch((error) => {
        console.error('Error saving changes:', error);
        // Optionally, show an error message or perform error handling
      });
  };

  return (
    <div className="account-settings-container">
      <h2>Account Preferences and Settings</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <h3>Notification Preferences</h3>
          <div>
            <label>
              <input
                type="checkbox"
                name="emailNotifications"
                checked={formData.emailNotifications}
                onChange={handleInputChange}
              />
              Email Notifications
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="pushNotifications"
                checked={formData.pushNotifications}
                onChange={handleInputChange}
              />
              Push Notifications
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="smsAlerts"
                checked={formData.smsAlerts}
                onChange={handleInputChange}
              />
              SMS Alerts
            </label>
          </div>
        </div>

        <div>
          <h3>Security Settings</h3>
          <div>
            <label>
              <input
                type="checkbox"
                name="twoFactorAuth"
                checked={formData.twoFactorAuth}
                onChange={handleInputChange}
              />
              Two-Factor Authentication (2FA)
            </label>
          </div>
          {/* Additional security settings options */}
        </div>

        <div>
          <h3>General Settings</h3>
          <div>
            <label htmlFor="language">Language:</label>
            <select
              id="language"
              name="language"
              value={formData.language}
              onChange={handleInputChange}
            >
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              {/* Add more language options as needed */}
            </select>
          </div>
          <div>
            <label htmlFor="timezone">Timezone:</label>
            <select
              id="timezone"
              name="timezone"
              value={formData.timezone}
              onChange={handleInputChange}
            >
              <option value="UTC">UTC</option>
              <option value="EST">EST</option>
              <option value="PST">PST</option>
              {/* Add more timezone options as needed */}
            </select>
          </div>
          <div>
            <label htmlFor="currency">Currency:</label>
            <select
              id="currency"
              name="currency"
              value={formData.currency}
              onChange={handleInputChange}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              {/* Add more currency options as needed */}
            </select>
          </div>
          <div>
            <label htmlFor="theme">Theme:</label>
            <select
              id="theme"
              name="theme"
              value={formData.theme}
              onChange={handleInputChange}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="blue">Blue</option>
              {/* Add more theme options as needed */}
            </select>
          </div>
        </div>

        <div>
          <h3>Privacy Settings</h3>
          <div>
            <label>
              <input
                type="checkbox"
                name="privacy.showPersonalInfo"
                checked={formData.privacy.showPersonalInfo}
                onChange={handleInputChange}
              />
              Show Personal Information
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="privacy.allowDataCollection"
                checked={formData.privacy.allowDataCollection}
                onChange={handleInputChange}
              />
              Allow Data Collection
            </label>
          </div>
        </div>

        <div>
          <h3>Password Management</h3>
          <div>
            <label>
              <input
                type="checkbox"
                name="passwordExpiration"
                checked={formData.passwordExpiration}
                onChange={handleInputChange}
              />
              Enable Password Expiration
            </label>
          </div>
          {/* Additional password management options */}
        </div>

        <div>
          <h3>Accessibility Settings</h3>
          <div>
            <label htmlFor="fontSize">Font Size:</label>
            <select
              id="fontSize"
              name="accessibility.fontSize"
              value={formData.accessibility.fontSize}
              onChange={handleInputChange}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              {/* Add more font size options as needed */}
            </select>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="accessibility.highContrast"
                checked={formData.accessibility.highContrast}
                onChange={handleInputChange}
              />
              High Contrast Mode
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="accessibility.screenReader"
                checked={formData.accessibility.screenReader}
                onChange={handleInputChange}
              />
              Screen Reader Compatibility
            </label>
          </div>
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default AccountSettings;