import React from 'react';
import { MdEdit, MdDelete, MdSearch } from 'react-icons/md';

const AssetTable = ({ columns, data, title, actions = false, minimal = false }) => {
  return (
    <div className={`w-full ${!minimal ? 'bg-white rounded-xl shadow-lg border border-gray-100' : ''}`}>
      {!minimal && (
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-10 pr-4 py-2 border border-cyan-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-cyan-50/30 w-full md:w-64"
            />
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-cyan-50/50 text-cyan-800">
              {columns.map((col, idx) => (
                <th key={idx} className="p-4 font-semibold text-sm tracking-wide border-b border-cyan-100 first:rounded-tl-lg last:rounded-tr-lg">
                  {col.header}
                </th>
              ))}
              {actions && <th className="p-4 font-semibold text-sm tracking-wide border-b border-cyan-100 text-right last:rounded-tr-lg">Action</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-cyan-50/20 transition-colors duration-150">
                  {columns.map((col, colIndex) => (
                    <td key={colIndex} className="p-4 text-sm text-gray-600 font-medium">
                      {row[col.accessor]}
                    </td>
                  ))}
                  {actions && (
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                         <button className="p-1.5 text-blue-500 bg-blue-50 rounded hover:bg-blue-100 transition-colors">
                           <MdEdit />
                         </button>
                         <button className="p-1.5 text-red-500 bg-red-50 rounded hover:bg-red-100 transition-colors">
                           <MdDelete />
                         </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))
            ) : (
               <tr>
                <td colSpan={columns.length + (actions ? 1 : 0)} className="p-8 text-center text-gray-400 italic">
                  No Rows To Show
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {!minimal && data.length > 0 && (
         <div className="p-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
            <span>Showing 1 to {Math.min(10, data.length)} of {data.length} entries</span>
            <div className="flex gap-1">
                <button className="px-3 py-1 border rounded hover:bg-gray-50">Prev</button>
                <button className="px-3 py-1 bg-cyan-500 text-white rounded">1</button>
                <button className="px-3 py-1 border rounded hover:bg-gray-50">2</button>
                <button className="px-3 py-1 border rounded hover:bg-gray-50">Next</button>
            </div>
         </div>
      )}
    </div>
  );
};

export default AssetTable;
