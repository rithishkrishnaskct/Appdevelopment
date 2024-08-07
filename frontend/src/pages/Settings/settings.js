import React, { useState } from 'react';
import '../Settings/setting.css';

const Settings = () => {
  const [profile, setProfile] = useState({
    username: 'john_doe',
    email: 'john.doe@example.com',
    password: '',
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications({ ...notifications, [name]: checked });
  };

  const handleSaveProfile = () => {
    // Handle saving profile logic
    alert('Profile settings saved!');
  };

  const handleSaveNotifications = () => {
    // Handle saving notification settings logic
    alert('Notification settings saved!');
  };

  return (
    <div className="settings">
      <h3>Settings</h3>
      <div className="settings-section">
        <h4>Profile Settings</h4>
        <form className="profile-form">
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleProfileChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={profile.password}
              onChange={handleProfileChange}
            />
          </label>
          <button type="button" onClick={handleSaveProfile}>Save Profile</button>
        </form>
      </div>
      <div className="settings-section">
        <h4>Notification Preferences</h4>
        <form className="notification-form">
          <label>
            Email Notifications:
            <input
              type="checkbox"
              name="emailNotifications"
              checked={notifications.emailNotifications}
              onChange={handleNotificationChange}
            />
          </label>
          <label>
            SMS Notifications:
            <input
              type="checkbox"
              name="smsNotifications"
              checked={notifications.smsNotifications}
              onChange={handleNotificationChange}
            />
          </label>
          <label>
            Push Notifications:
            <input
              type="checkbox"
              name="pushNotifications"
              checked={notifications.pushNotifications}
              onChange={handleNotificationChange}
            />
          </label>
          <button type="button" onClick={handleSaveNotifications}>Save Notifications</button>
        </form>
      </div>
      <div className="settings-section">
        <h4>Account Settings</h4>
        <p>
          Manage your account settings here. This could include options like
          account deletion, deactivation, or privacy settings.
        </p>
        {/* Add additional account settings controls as needed */}
      </div>
    </div>
  );
};

export default Settings;