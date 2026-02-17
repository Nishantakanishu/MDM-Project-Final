import React from 'react';
import { MdEdit, MdDelete, MdAdd, MdInfoOutline } from 'react-icons/md';

const AssetTable = ({ columns, data = [], title, actions = false, minimal = false, onAdd, addButtonLabel }) => {
  const safeColumns = Array.isArray(columns) ? columns : [];
  const safeData = Array.isArray(data) ? data : [];

  return (
    <div 
      className={`w-full animate-fadeIn ${!minimal ? 'bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden' : ''}`}
    >
      {!minimal && (
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-white via-cyan-50/10 to-white backdrop-blur-md">
          <h2 className="text-2xl font-bold text-gray-800 tracking-normal font-sans">{title}</h2>
          {onAdd && (
            <button 
              onClick={onAdd}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-lg hover:from-cyan-700 hover:to-teal-700 shadow-md hover:shadow-lg transition-all text-sm font-semibold"
            >
              <MdAdd className="text-lg" /> {addButtonLabel || `Add ${title.replace(' List', '')}`}
            </button>
          )}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-0">
          <thead>
            <tr className="bg-gray-50/50 backdrop-blur-sm text-cyan-900">
              {safeColumns.map((col, idx) => (
                <th key={idx} className="px-6 py-4 font-bold text-sm text-gray-900 border-b border-gray-100 first:rounded-tl-xl last:rounded-tr-xl">
                  {col?.header || 'Column'}
                </th>
              ))}
              {actions && <th className="px-6 py-4 font-bold text-sm text-gray-900 border-b border-gray-100 text-right w-32 min-w-[140px]">Action</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50/50 bg-white">
            {safeData.length > 0 ? (
              safeData.map((row, rowIndex) => (
                <tr 
                  key={row?.id || rowIndex}
                  className="group hover:bg-gradient-to-r hover:from-cyan-50/30 hover:to-transparent transition-all duration-300"
                >
                  {safeColumns.map((col, colIndex) => {
                    if (!col || !col.accessor) return <td key={colIndex}></td>;
                    const content = row[col.accessor];
                    const isStatus = col.header && col.header.toLowerCase() === 'status';
                    
                    return (
                      <td key={colIndex} className="px-6 py-4 text-sm text-gray-600 font-medium">
                        {isStatus && typeof content === 'string' ? (
                          <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${
                            content === 'Active' 
                              ? 'bg-emerald-50 text-emerald-600 border-emerald-100 shadow-sm shadow-emerald-100/50'
                              : content === 'Maintenance'
                              ? 'bg-amber-50 text-amber-600 border-amber-100 shadow-sm shadow-amber-100/50'
                              : 'bg-rose-50 text-rose-600 border-rose-100 shadow-sm shadow-rose-100/50'
                          }`}>
                            {content}
                          </span>
                        ) : content}
                      </td>
                    );
                  })}
                  {actions && (
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-3 transition-opacity duration-300">
                         <button className="p-2 text-cyan-600 bg-cyan-50 rounded-lg hover:bg-cyan-100 hover:text-cyan-700 transition-all shadow-sm active:scale-90">
                           <MdEdit className="text-lg" />
                         </button>
                         <button className="p-2 text-rose-500 bg-rose-50 rounded-lg hover:bg-rose-100 hover:text-rose-600 transition-all shadow-sm active:scale-90">
                           <MdDelete className="text-lg" />
                         </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))
            ) : (
               <tr>
                <td colSpan={safeColumns.length + (actions ? 1 : 0)} className="py-24 text-center text-gray-400">
                  <div className="flex flex-col items-center justify-center space-y-4 opacity-30">
                    <MdInfoOutline className="text-7xl text-gray-300" />
                    <div>
                      <p className="text-2xl font-bold text-gray-400 tracking-normal font-sans">No data records found</p>
                      <p className="text-sm text-gray-400 mt-1">Try adjusting your filters or adding a new record</p>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {!minimal && safeData.length > 0 && (
         <div className="p-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500 bg-gray-50/30">
            <span>Showing 1 to {Math.min(10, safeData.length)} of {safeData.length} entries</span>
            <div className="flex gap-1">
                <button className="px-3 py-1 border rounded hover:bg-gray-50 bg-white shadow-sm disabled:opacity-50">Prev</button>
                <button className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded shadow-md font-bold">1</button>
                <button className="px-3 py-1 border rounded hover:bg-gray-50 bg-white shadow-sm">2</button>
                <button className="px-3 py-1 border rounded hover:bg-gray-50 bg-white shadow-sm">Next</button>
            </div>
         </div>
      )}
    </div>
  );
};

export default AssetTable;
