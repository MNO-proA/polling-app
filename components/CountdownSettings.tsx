'use client';

import { useState, useEffect } from 'react';

// import { useApi } from '@/hooks/useApi';

interface CountdownSettings {
  startDate: string;
  endDate: string;
}

export default function CountdownSettings() {
  const [settings, setSettings] = useState<CountdownSettings>({
    startDate: '',
    endDate: '',
  });
  const [loading, setLoading] = useState(false);

  // Dummy data for admin election setup
  const adminElectionSetup = {
    startDate: '2024-12-10T09:00:00Z',
    endDate: '2024-12-15T17:00:00Z',
  };

  // Commented out API functionality
  // const { data: electionSetup } = useApi('/api/election-setup');
  // const { data: currentSettings, refetch } = useApi('/api/countdown-settings');

  useEffect(() => {
    // Use dummy data as a fallback for election setup
    setSettings({
      startDate: adminElectionSetup.startDate,
      endDate: adminElectionSetup.endDate,
    });
  }, [adminElectionSetup.startDate, adminElectionSetup.endDate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/countdown-settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settings),
      });

      if (!response.ok) throw new Error('Failed to update settings');

      // refetch(); // Uncomment this line when the API functionality is ready
      alert('Countdown settings updated successfully');
    } catch (error) {
        console.log(error)
      alert('Failed to update countdown settings');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Election Duration Settings</h2>
      <div className="mb-4 text-sm text-gray-600">
        Default dates are set from the admin election setup. You can modify them if needed.
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Start Date and Time
            </label>
            <input
              type="datetime-local"
              value={settings.startDate}
              onChange={(e) => setSettings({ ...settings, startDate: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              End Date and Time
            </label>
            <input
              type="datetime-local"
              value={settings.endDate}
              onChange={(e) => setSettings({ ...settings, endDate: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>


        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
        >
          {loading ? 'Updating...' : 'Update Countdown Settings'}
        </button>
      </form>
    </div>
  );
}
