import React from 'react';
import AssetTable from './AssetTable';
import { div } from 'framer-motion/client';

const InstalledMeterSummary = () => {
    // Placeholder Data
    const data = [];

    const columns = [
        { header: 'Subdivision', accessor: 'subdivision' },
        { header: 'Substation', accessor: 'substation' },
        { header: 'Feeder', accessor: 'feeder' },
        { header: 'Consumer Count', accessor: 'count' },
        { header: 'Installed Meters', accessor: 'installed' }
    ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
         <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Installed Meter Summary</h1>
        </div>
         <AssetTable 
            title="Installed Meter Summary"
            columns={columns}
            data={data}
         />
    </div>
  );
};


export default InstalledMeterSummary;
