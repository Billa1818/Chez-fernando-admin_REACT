import { TrendingUp, TrendingDown } from 'lucide-react';

export default function StatCard({ title, value, change, icon: Icon }) {
  const isPositive = change.startsWith('+');

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-600 font-medium text-sm">{title}</h3>
        <div className="p-2 bg-orange-100 rounded-lg">
          <Icon className="w-6 h-6 text-orange-600" />
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>

      <div className="flex items-center">
        {isPositive ? (
          <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
        ) : (
          <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
        )}
        <span className={`text-sm font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {change}
        </span>
        <span className="text-gray-500 text-sm ml-1">depuis hier</span>
      </div>
    </div>
  );
}
