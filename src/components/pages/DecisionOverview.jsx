import React from 'react';
import MetricCard from "../ui/MetricCard";
import { CheckCircle, XCircle, Flame, Lock, Activity } from 'lucide-react';

const DecisionOverview = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Decision Overview</h2>
        <p className="text-sm text-gray-500">System performance based on your recent configurations.</p>
      </div>

      {/* 5 Cards side-by-side as per notes */}
      <div className="flex flex-wrap lg:flex-nowrap gap-6">
        <MetricCard title="Allow" value="84.2k" subtitle="Approved" trend="up" trendValue="12%" icon={CheckCircle} variant="success" />
        <MetricCard title="Blocked" value="1.2k" subtitle="Security Blocks" trend="down" trendValue="5%" icon={XCircle} variant="danger" />
        <MetricCard title="Throttled" value="458" subtitle="Rate Limited" trend="up" trendValue="8%" icon={Flame} variant="warning" />
        <MetricCard title="Penalized Keys" value="124" subtitle="FSM Penalties" trend="up" trendValue="2%" icon={Lock} variant="danger" />
        <MetricCard title="Active Rules" value="47" subtitle="Live Rules" icon={Activity} variant="info" />
      </div>

      {/* Placeholder for Section B: Rate Limiting Insights Charts */}
      <div className="mt-10 bg-white dark:bg-gray-800 rounded-xl p-20 border border-dashed border-gray-300 dark:border-gray-600 text-center text-gray-400">
        Rate Limiting Insights (Charts: Requests vs Limits) will be rendered here.
      </div>
    </div>
  );
};

export default DecisionOverview;