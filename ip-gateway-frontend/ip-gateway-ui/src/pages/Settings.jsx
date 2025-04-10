import React from "react";
import "./Settings.css";

const Settings = () => {
  return (
    <div className="settings-container">
      <h2>Settings</h2>

      <form className="settings-form">
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label>
            <input type="checkbox" />
            Enable Notifications
          </label>
        </div>

        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;
