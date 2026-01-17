# Icon Migration Guide

## Quick Find & Replace for Material Symbols to React Icons

To quickly update all remaining components, use these find & replace patterns in your editor:

### 1. Import Statement
**Find:** (at the top of files that use icons)
```
// Add this import
import Icon from '../Icon' // or './Icon' or '@/components/Icon' depending on path
```

### 2. Basic Icon Replacement
**Find:** `<span className="material-symbols-outlined">{iconName}</span>`
**Replace:** `<Icon name="{iconName}" />`

**Find:** `<span className="material-symbols-outlined text-[20px]">{iconName}</span>`
**Replace:** `<Icon name="{iconName}" size={20} />`

### 3. Icon with Classes
**Find:** `<span className="material-symbols-outlined {classes}">{iconName}</span>`
**Replace:** `<Icon name="{iconName}" className="{classes}" />`

### 4. Common Patterns to Replace:

```jsx
// OLD
<span className="material-symbols-outlined text-[20px]">search</span>
// NEW  
<Icon name="search" size={20} />

// OLD
<span className="material-symbols-outlined text-gray-500">expand_more</span>
// NEW
<Icon name="expand_more" className="text-gray-500" />

// OLD
<span className="material-symbols-outlined text-primary animate-pulse text-base">terminal</span>
// NEW
<Icon name="terminal" className="text-primary animate-pulse" />
```

## Files that need updating:
- components/users/UserFilters.tsx
- components/users/UserTable.tsx  
- components/transactions/TransactionHeader.tsx
- components/transactions/TransactionTable.tsx
- components/revenue/RevenueHeader.tsx
- components/revenue/RevenueMetrics.tsx
- components/revenue/RevenueCharts.tsx
- components/revenue/RecentPayments.tsx
- components/ai-performance/AIPerformanceHeader.tsx
- components/ai-performance/PerformanceGauges.tsx
- components/ai-performance/CostChart.tsx
- components/ai-performance/LiveTerminal.tsx
- components/dashboard/RecentActivities.tsx

## Installation Steps:
1. Run: `npm install react-icons@^5.4.0`
2. Update imports in each component file
3. Replace material-symbols-outlined spans with Icon components
4. Test the application

The Icon component automatically maps material symbol names to React Icons, so you don't need to change the icon names themselves.