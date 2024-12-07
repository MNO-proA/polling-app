// app/admin/account/page.tsx
// 'use client';

// import { useState } from 'react';
// import { useSession } from 'next-auth/react';

export default function Account() {
  // const { data: session } = useSession();
  // const [password, setPassword] = useState('');
  // const [newPassword, setNewPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState('');

  // const handlePasswordChange = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (newPassword !== confirmPassword) {
  //     setMessage('New passwords do not match');
  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     const response = await fetch('/api/admin/change-password', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         currentPassword: password,
  //         newPassword,
  //       }),
  //     });

  //     const data = await response.json();
  //     if (response.ok) {
  //       setMessage('Password updated successfully');
  //       setPassword('');
  //       setNewPassword('');
  //       setConfirmPassword('');
  //     } else {
  //       setMessage(data.error || 'Failed to update password');
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     setMessage('An error occurred');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    // <div className="p-6">
    //   <h1 className="text-2xl font-bold mb-6">Account Settings</h1>

    //   <div className="bg-white rounded-lg shadow p-6 max-w-md">
    //     <div className="mb-6">
    //       <h2 className="text-lg font-semibold mb-2">Account Information</h2>
    //       <p className="text-gray-600">Email: {session?.user?.email}</p>
    //       <p className="text-gray-600">Role: Administrator</p>
    //     </div>

    //     <div>
    //       <h2 className="text-lg font-semibold mb-4">Change Password</h2>
    //       <form onSubmit={handlePasswordChange} className="space-y-4">
    //         <div>
    //           <label className="block text-sm font-medium text-gray-700">
    //             Current Password
    //           </label>
    //           <input
    //             type="password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             required
    //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
    //           />
    //         </div>

    //         <div>
    //           <label className="block text-sm font-medium text-gray-700">
    //             New Password
    //           </label>
    //           <input
    //             type="password"
    //             value={newPassword}
    //             onChange={(e) => setNewPassword(e.target.value)}
    //             required
    //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
    //           />
    //         </div>

    //         <div>
    //           <label className="block text-sm font-medium text-gray-700">
    //             Confirm New Password
    //           </label>
    //           <input
    //             type="password"
    //             value={confirmPassword}
    //             onChange={(e) => setConfirmPassword(e.target.value)}
    //             required
    //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
    //           />
    //         </div>

    //         {message && (
    //           <div className={`text-sm ${
    //             message.includes('success') ? 'text-green-600' : 'text-red-600'
    //           }`}>
    //             {message}
    //           </div>
    //         )}

    //         <button
    //           type="submit"
    //           disabled={loading}
    //           className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
    //         >
    //           {loading ? 'Updating...' : 'Update Password'}
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div>account</div>
  )
}