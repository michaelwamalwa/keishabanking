import React, { useState, useEffect } from 'react';
import './SecurityMeasures.css';
const SecurityMeasures = () => {
  const [isTwoFactorAuthEnabled, setTwoFactorAuthEnabled] = useState(false);
  const [isBiometricAuthEnabled, setBiometricAuthEnabled] = useState(false);

  useEffect(() => {
    // Fetch authentication settings from the server or API
    const fetchAuthenticationSettings = async () => {
      try {
        const response = await fetch('/api/authentication-settings');
        if (response.ok) {
          const settingsData = await response.json();
          setTwoFactorAuthEnabled(settingsData.isTwoFactorAuthEnabled);
          setBiometricAuthEnabled(settingsData.isBiometricAuthEnabled);
        } else {
          console.log('Error retrieving authentication settings:', response.status);
        }
      } catch (error) {
        console.error('Error retrieving authentication settings:', error);
      }
    };

    fetchAuthenticationSettings();
  }, []);

  const handleTwoFactorAuthToggle = () => {
    // Update the authentication settings on the server or API
    const updatedSettings = {
      isTwoFactorAuthEnabled: !isTwoFactorAuthEnabled,
      isBiometricAuthEnabled,
    };
    updateAuthenticationSettings(updatedSettings);
    setTwoFactorAuthEnabled((prevValue) => !prevValue);
  };

  const handleBiometricAuthToggle = () => {
    // Update the authentication settings on the server or API
    const updatedSettings = {
      isTwoFactorAuthEnabled,
      isBiometricAuthEnabled: !isBiometricAuthEnabled,
    };
    updateAuthenticationSettings(updatedSettings);
    setBiometricAuthEnabled((prevValue) => !prevValue);
  };

  const updateAuthenticationSettings = async (updatedSettings) => {
    try {
      const response = await fetch('/api/update-authentication-settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedSettings),
      });
      if (!response.ok) {
        console.log('Error updating authentication settings:', response.status);
      }
    } catch (error) {
      console.error('Error updating authentication settings:', error);
    }
  };

  return (
    <div className='help-and-support-container'>
      <h1>Security Measures</h1>
      <div>
        <h2>Two-Factor Authentication (2FA)</h2>
        <p>
          Two-factor authentication adds an extra layer of security to your account. When enabled,
          you'll need to provide a verification code along with your password to log in. This code
          can be received through a text message, email, or an authentication app.
        </p>
        <label>
          <input
            type="checkbox"
            checked={isTwoFactorAuthEnabled}
            onChange={handleTwoFactorAuthToggle}
          />
          Enable Two-Factor Authentication
        </label>
      </div>
      <div>
        <h2>Biometric Authentication</h2>
        <p>
          Biometric authentication allows you to use your unique physical characteristics, such as
          fingerprints or facial recognition, to access your account. This provides an additional
          layer of security and convenience.
        </p>
        <label>
          <input
            type="checkbox"
            checked={isBiometricAuthEnabled}
            onChange={handleBiometricAuthToggle}
          />
          Enable Biometric Authentication
        </label>
      </div>
      <div>
        <h2>Password Complexity Requirements</h2>
        <p>
          Set strong password policies that require a combination of alphanumeric characters,
          special characters, and a minimum length. Encourage users to create unique passwords and
          regularly update them.
        </p>
      </div>
      <div>
        <h2>Account Lockouts and Suspensions</h2>
        <p>
          Implement mechanisms to detect and prevent brute-force attacks by temporarily locking or
          suspending user accounts after multiple failed login attempts.
        </p>
      </div>
      <div>
        <h2>HTTPS Encryption</h2>
        <p>
          Ensure that communication between the client and server is encrypted using HTTPS (SSL/TLS)
          to protect data transmitted over the network.
        </p>
      </div>
      <div>
        <h2>Session Management</h2>
        <p>
          Implement secure session management techniques, such as using secure HTTP-only cookies,
          setting session timeouts, and providing the option for users to manually log out of their
          sessions.
        </p>
      </div>
      <div>
        <h2>Protection Against XSS and CSRF</h2>
        <p>
          Implement measures to prevent common web application vulnerabilities like Cross-Site
          Scripting (XSS) and Cross-Site Request Forgery (CSRF) attacks. Perform input validation,
          output encoding, and use CSRF tokens to protect against unauthorized requests.
        </p>
      </div>
      <div>
        <h2>Regular Security Audits and Updates</h2>
        <p>
          Conduct regular security audits, vulnerability assessments, and keep all software and
          frameworks up to date with the latest security patches.
        </p>
      </div>
      <div>
        <h2>User Education and Awareness</h2>
        <p>
          Promote user awareness about security best practices, such as avoiding password sharing,
          using public Wi-Fi networks cautiously, and recognizing phishing attempts.
        </p>
      </div>
    </div>
  );
};

export default SecurityMeasures;
