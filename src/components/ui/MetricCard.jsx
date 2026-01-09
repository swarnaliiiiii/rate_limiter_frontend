import React from 'react';

const MetricCard = ({ title, value, subtitle, trend, trendValue, icon: Icon, variant = 'default' }) => {
  const variantStyles = {
    success: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
    danger: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400',
    warning: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400',
    info: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    default: 'bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400'
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 flex-1 min-w-[200px]">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">{title}</h3>
        <Icon className={`w-5 h-5 ${variantStyles[variant].split(' ')[1]}`} />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">{value}</span>
        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{subtitle}</span>
        {trendValue && (
          <div className={`text-xs font-medium mt-3 flex items-center gap-1 ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
            <span>{trend === 'up' ? '↑' : '↓'} {trendValue}</span>
            <span className="text-gray-400 font-normal ml-1">vs yesterday</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricCard;