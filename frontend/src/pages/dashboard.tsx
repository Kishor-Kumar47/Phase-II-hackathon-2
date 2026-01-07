import React, { useState, useEffect } from 'react';
import TaskList from '../components/tasks/TaskList';
import { useAuth } from 'better-auth/react';

const DashboardPage: React.FC = () => {
  const { data: session, isPending } = useAuth();
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    // Extract user ID from session or token
    if (session?.user) {
      // In a real app, you might get the user ID from your backend
      // For now, we'll use a placeholder ID or extract from session if available
      setUserId(session.user.id as unknown as number || 1); // Placeholder
    }
  }, [session]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <div className="dashboard-container">
        <h1>Please log in to access your dashboard</h1>
        <p>You need to be authenticated to view your tasks.</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Todo Dashboard</h1>
        <div className="user-info">
          <p>Welcome, {session.user?.name || session.user?.email}!</p>
        </div>
      </header>

      <main className="dashboard-main">
        {userId ? (
          <TaskList userId={userId} />
        ) : (
          <div>Unable to retrieve user information</div>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;