import React from 'react';
import AssetTable from './AssetTable';

const Feeder = ({ minimal = false }) => {
  const data = []; // Empty as per dashboard image

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Substation', accessor: 'substation' },
  ];

  return (
    <div className={minimal ? '' : "p-6"}>
       {!minimal && <h1 className="text-2xl font-bold text-gray-800 mb-6">Manage Feeder</h1>}
      <AssetTable 
        title="Feeder List" 
        columns={columns} 
        data={data} 
        minimal={minimal}
      />
    </div>
  );
};

export default Feeder;
