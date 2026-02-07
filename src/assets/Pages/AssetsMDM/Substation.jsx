import React from 'react';
import AssetTable from './AssetTable';

const Substation = ({ minimal = false }) => {
  // Mock Data mimicking the "Manage Substation" image
  const data = [
      { subdivision: 'Amlarem Sub-division', substation: '33/11 KV Sohkha s/s', lat: '25.63214', long: '90.36214' },
      { subdivision: 'Amlarem Sub-division', substation: 'Amlarem Sub-station', lat: '25.293739', long: '92.118241' },
      { subdivision: 'Amlarem Sub-division', substation: '33/11 KV syndai Sub-Station', lat: '25.6397', long: '90.2518' },
      { subdivision: 'Ampati Distribution Sub-Division', substation: '33/11 KV Ampati S/S', lat: '25.459345', long: '89.924208' },
      { subdivision: 'Ampati Distribution Sub-Division', substation: '33/11 KV Boldamgre S/S', lat: '25.3267', long: '90.25487' },
      { subdivision: 'Baghmara Distribution Sub-Division', substation: '33/11 KV Baghmara substation', lat: '25.197468', long: '90.63444' },
      { subdivision: 'Baghmara Distribution Sub-Division', substation: '33/11 KV Rongara S/S', lat: '25.1997557', long: '90.6839765' },
      { subdivision: 'Baghmara Distribution Sub-Division', substation: 'DUMMY SUBSTATION', lat: '25.6123278', long: '90.0086' },
  ];

  const columns = [
    { header: 'Subdivision', accessor: 'subdivision' },
    { header: 'Substation', accessor: 'substation' },
    { header: 'Latitude', accessor: 'lat' },
    { header: 'Longitude', accessor: 'long' },
  ];

  return (
     <div className={minimal ? '' : "p-6"}>
        {!minimal && (
            <div className="mb-6 flex justify-between items-center">
                 <h1 className="text-2xl font-bold text-gray-800">Manage Substation</h1>
                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition-colors flex items-center gap-2">
                    + ADD SUBSTATION
                 </button>
            </div>
        )}
      <AssetTable 
        title="Manage Substation" 
        columns={columns} 
        data={data} 
        minimal={minimal}
        actions={!minimal}
      />
    </div>
  );
};

export default Substation;
