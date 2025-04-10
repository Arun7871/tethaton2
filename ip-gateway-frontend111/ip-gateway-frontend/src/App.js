import React from 'react';
import Dashboard from './components/Dashboard';
import LogFeed from './components/LogFeed';
import MessageFlow from './components/MessageFlow';
import DummySimulator from './components/DummySimulator';

function App() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-4">🛰️ IP Gateway Control Center</h1>
      <Dashboard />
      <MessageFlow />
      <LogFeed />
      <DummySimulator />
    </div>
  );
}

export default App;