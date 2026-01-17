import React, { useState, useEffect } from 'react';
import MetricCard from "../ui/MetricCard";
import { CheckCircle, XCircle, Flame, Lock, Activity } from 'lucide-react';

const DecisionOverview = () => {
  const [metrics, setMetrics] = useState({
    allow: "0",
    blocked: "0",
    throttled: "0",
    penalized_keys: "0",
    active_rules: "0",
    loading: true
  });

  const fetchMetrics = async () => {
    try {
      // Replace with your actual FastAPI URL
      const response = await fetch('http://localhost:8000/v1/monitoring/summary');
      const data = await response.json();
      
      setMetrics({
        allow: data.allow.toLocaleString(), // Formats 84200 as 84.2k
        blocked: data.blocked.toLocaleString(),
        throttled: data.throttled.toLocaleString(),
        penalized_keys: data.penalized_keys.toString(),
        active_rules: data.active_rules.toString(),
        loading: false
      });
    } catch (error) {
      console.error("Error fetching metrics:", error);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchMetrics();

    // Poll every 5 seconds to show real-time changes from Postman
    const interval = setInterval(fetchMetrics, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Decision Overview</h2>
        <p className="text-sm text-gray-500">System performance based on your recent configurations.</p>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap gap-6">
        <MetricCard 
          title="Allow" 
          value={metrics.allow} 
          subtitle="Approved" 
          trend="up" 
          trendValue="--" 
          icon={CheckCircle} 
          variant="success" 
        />
        <MetricCard 
          title="Blocked" 
          value={metrics.blocked} 
          subtitle="Security Blocks" 
          trend="down" 
          trendValue="--" 
          icon={XCircle} 
          variant="danger" 
        />
        <MetricCard 
          title="Throttled" 
          value={metrics.throttled} 
          subtitle="Rate Limited" 
          trend="up" 
          trendValue="--" 
          icon={Flame} 
          variant="warning" 
        />
        <MetricCard 
          title="Penalized Keys" 
          value={metrics.penalized_keys} 
          subtitle="FSM Penalties" 
          trend="up" 
          trendValue="--" 
          icon={Lock} 
          variant="danger" 
        />
        <MetricCard 
          title="Active Rules" 
          value={metrics.active_rules} 
          subtitle="Live Rules" 
          icon={Activity} 
          variant="info" 
        />
      </div>

      <div className="mt-10 bg-white dark:bg-gray-800 rounded-xl p-20 border border-dashed border-gray-300 dark:border-gray-600 text-center text-gray-400">
        Rate Limiting Insights (Charts: Requests vs Limits) will be rendered here.
      </div>
    </div>
  );
};

export default DecisionOverview;