import React from 'react';
import AssetTable from './AssetTable';

const FaultyDamageMeter = () => {
    // Placeholder Data
    const data = []; 

    const columns = [
        { header: 'Meter No', accessor: 'meterNo' },
        { header: 'Customer Name', accessor: 'name' },
        { header: 'Address', accessor: 'address' },
        { header: 'Fault Type', accessor: 'type' },
        { header: 'Reported Date', accessor: 'date' }
    ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
         <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Faulty/Damage Meter List</h1>
        </div>
         <AssetTable 
            title="Faulty/Damage Meters"
            columns={columns}
            data={data}
         />
    </div>
  );
};

export default FaultyDamageMeter;
