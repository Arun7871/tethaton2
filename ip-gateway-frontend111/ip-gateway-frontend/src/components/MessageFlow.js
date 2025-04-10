import React from 'react';

function MessageFlow() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">🔄 Message Transformation</h2>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <h3 className="font-bold mb-1">🔓 Before Encryption</h3>
          <p>Hello from SDR-A</p>
          <p>Base64 Encoded: SGVsbG8gZnJvbSBB</p>
        </div>
        <div>
          <h3 className="font-bold mb-1">🔐 After Encryption</h3>
          <pre>
            {logs.map((log, idx) => (
              <div key={idx}>{log}</div>
            ))}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default MessageFlow;