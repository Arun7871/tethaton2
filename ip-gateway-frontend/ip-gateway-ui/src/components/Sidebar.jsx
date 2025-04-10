import { NavLink } from "react-router-dom";
import "./styles/Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Gateway UI</h2>
      <NavLink to="/" end>Dashboard</NavLink>
      <NavLink to="/encryption-handler">Encryption Handler</NavLink>
      <NavLink to="/packet-converter">Packet Converter</NavLink>
      <NavLink to="/protocol-bridge">Protocol Bridge</NavLink>
      <NavLink to="/qos-simulator">QoS Simulator</NavLink>
      <NavLink to="/voice-codec">Voice Codec</NavLink>
    </div>
  );
};

export default Sidebar;
