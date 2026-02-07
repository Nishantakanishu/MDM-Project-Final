import React from 'react';
import AssetTable from './AssetTable';

const Device = ({ minimal = false }) => {
  const data = []; // Placeholder

  const columns = [
    { header: 'Device ID', accessor: 'id' },
    { header: 'Type', accessor: 'type' },
    { header: 'Status', accessor: 'status' },
  ];

  return (
    <div className={minimal ? '' : "p-6"}>
       {!minimal && <h1 className="text-2xl font-bold text-gray-800 mb-6">Manage Devices</h1>}
      <AssetTable 
        title="Device List" 
        columns={columns} 
        data={data} 
        minimal={minimal}
      />
    </div>
  );
};

export default Device;
