import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{ width: "200px", backgroundColor: "#f0f0f0", padding: "1rem", height: "100vh" }}>
      <h2>Gateway UI</h2>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/encryption">Encryption Handler</Link></li>
          <li><Link to="/packet">Packet Converter</Link></li>
          <li><Link to="/protocol">Protocol Bridge</Link></li>
          <li><Link to="/qos">QoS Simulator</Link></li>
          <li><Link to="/voice">Voice Codec</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
