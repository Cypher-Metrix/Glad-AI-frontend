'use client'

import Icon from '../Icon'

export default function UserFilters() {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-end bg-card-dark/50 p-4 rounded-xl border border-border-dark backdrop-blur-sm">
      {/* Search */}
      <div className="w-full md:w-96">
        <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">Search Users</label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon name="search" className="text-gray-400 group-focus-within:text-primary transition-colors" />
          </div>
          <input 
            className="block w-full pl-10 pr-3 py-2.5 bg-[#141118] border border-border-dark rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm" 
            placeholder="Search by name, email, or ID..." 
            type="text"
          />
        </div>
      </div>

      {/* Filters Group */}
      <div className="flex flex-wrap gap-4 w-full md:w-auto">
        {/* Status Filter */}
        <div className="w-full sm:w-40">
          <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">Status</label>
          <div className="relative">
            <select className="block w-full pl-3 pr-10 py-2.5 bg-[#141118] border border-border-dark rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none text-sm">
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="banned">Banned</option>
              <option value="pending">Pending</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-400">
              <Icon name="expand_more" />
            </div>
          </div>
        </div>

        {/* Plan Filter */}
        <div className="w-full sm:w-40">
          <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">Plan</label>
          <div className="relative">
            <select className="block w-full pl-3 pr-10 py-2.5 bg-[#141118] border border-border-dark rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none text-sm">
              <option value="all">All Plans</option>
              <option value="free">Free Tier</option>
              <option value="pro">Pro Plan</option>
              <option value="enterprise">Enterprise</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-400">
              <Icon name="expand_more" />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full sm:w-auto mt-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-[0_0_15px_rgba(127,13,242,0.3)] hover:shadow-[0_0_20px_rgba(127,13,242,0.6)]">
          <Icon name="person_add" size={20} />
          <span>Add User</span>
        </button>
      </div>
    </div>
  )
}