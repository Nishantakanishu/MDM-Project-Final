import React from 'react';
import AssetTable from './AssetTable';

const Subdivision = ({ minimal = false }) => {
  // Mock Data mimicking the image
  const data = [
    { name: 'Polo Distribution Subdivision', lat: '25.582548', long: '91.886625' },
    { name: 'Nongpoh Subdivision', lat: '25.9207712', long: '91.8741' },
    { name: 'Mendipathar Distribution Sub-Division', lat: '25.914646', long: '90.644075' },
    { name: 'Khliehtyrshi Sub-division', lat: '25.468069', long: '92.186632' },
    { name: 'Ampati Distribution Sub-Division', lat: '25.462371', long: '89.922782' },
    { name: 'Baghmara Distribution Sub-Division', lat: '25.197468', long: '90.63444' },
    { name: 'Nongalbibra DSD', lat: '25.451', long: '90.123' },
  ];

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Lat', accessor: 'lat' },
    { header: 'Long', accessor: 'long' },
  ];

  return (
    <div className={minimal ? '' : "p-6"}>
        {!minimal && (
            <div className="mb-6 flex justify-between items-center">
                 <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Manage Subdivision</h1>
                 <button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:shadow-lg hover:scale-105 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 flex items-center gap-2">
                    + Add Subdivision
                 </button>
            </div>
        )}
      <AssetTable 
        title="Subdivision List" 
        columns={columns} 
        data={data} 
        actions={!minimal} // Show edit/delete only in full view
        minimal={minimal}
      />
    </div>
  );
};

export default Subdivision;
