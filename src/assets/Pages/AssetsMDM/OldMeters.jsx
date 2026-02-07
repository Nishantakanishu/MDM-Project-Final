import React from 'react';
import AssetTable from './AssetTable';

const OldMeters = () => {
  // Mock data based on Old Meters List image
  const data = [
    { customerNo: '1B001065103', name: 'Kongka Lyngdoh', address: 'West Jaintia Hills District Lad Mukhla', serial: '617938', make: 'Maxwell' },
    { customerNo: '3C02A013979', name: 'Hamkamkmynti Mukhim', address: 'East Khasi Hills Pomura Mawryngkneng', serial: '275164', make: 'Richa' },
    { customerNo: '52000094743', name: 'primar sangma', address: 'warimagre', serial: '13522', make: 'Other' },
    { customerNo: '3C02A013997', name: 'Thiodar Nongrum', address: 'East Khasi Hills Pomura Mawryngkneng', serial: '231740', make: 'Other' },
    { customerNo: '3C02A013994', name: 'Klotida Nongspung', address: 'East Khasi Hills Pomura Mawryngkneng', serial: '332559', make: 'Richa' },
  ];

  const columns = [
    { header: 'Customer Number', accessor: 'customerNo' },
    { header: 'Customer Name', accessor: 'name' },
    { header: 'Address', accessor: 'address' },
    { header: 'Old Meter Serial Number', accessor: 'serial' },
    { header: 'Meter Make', accessor: 'make' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Old Meters List</h1>
      <AssetTable 
        title="Old Meters List"
        columns={columns}
        data={data}
      />
    </div>
  );
};

export default OldMeters;
