import React from 'react';

function DummySimulator() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">🧪 Upload Test Data</h2>
      <input type="file" className="mb-2" />
      <button className="bg-blue-500 text-white px-3 py-1 rounded">Simulate Send</button>
    </div>
  );
}

export default DummySimulator;