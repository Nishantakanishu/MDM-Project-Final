import React, { useState, useMemo } from 'react';
import AssetTable from './AssetTable';
import AssetsMap from './AssetsMap';

const Subdivision = ({ minimal = false }) => {

  const originalData = [
    { name: 'Polo Distribution Subdivision', zone: 'North Zone', circle: 'Delhi Central', division: 'Connaught Place', lat: '25.582548', long: '91.886625' },
    { name: 'Nongpoh Subdivision', zone: 'North Zone', circle: 'Delhi Central', division: 'Connaught Place', lat: '25.9207712', long: '91.8741' },
    { name: 'Mendipathar Distribution Sub-Division', zone: 'East Zone', circle: 'Kolkata East', division: 'Salt Lake', lat: '25.914646', long: '90.644075' },
    { name: 'Khliehtyrshi Sub-division', zone: 'North Zone', circle: 'Delhi Central', division: 'Connaught Place', lat: '25.468069', long: '92.186632' },
    { name: 'Ampati Distribution Sub-Division', zone: 'South Zone', circle: 'Chennai North', division: 'Anna Nagar', lat: '25.462371', long: '89.922782' },
    { name: 'Baghmara Distribution Sub-Division', zone: 'South Zone', circle: 'Chennai North', division: 'Anna Nagar', lat: '25.197468', long: '90.63444' },
    { name: 'Nongalbibra DSD', zone: 'South Zone', circle: 'Chennai North', division: 'Anna Nagar', lat: '25.451', long: '90.123' },
  ];

  const [activeFilter, setActiveFilter] = useState(null);

  const [filters, setFilters] = useState({
    name: '',
    lat: '',
    long: '',
  });

  const [sortConfig, setSortConfig] = useState({
    key: '',
    direction: 'asc',
  });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const toggleSort = (key) => {
    setSortConfig(prev => {
      if (prev.key === key) {
        return {
          key,
          direction: prev.direction === 'asc' ? 'desc' : 'asc',
        };
      }
      return { key, direction: 'asc' };
    });
  };

  const filteredData = useMemo(() => {
    let data = originalData.filter(row =>
      Object.keys(filters).every(key =>
        (row[key]?.toString() || "").toLowerCase().includes((filters[key] || "").toLowerCase())
      )
    );

    if (sortConfig.key) {
      data = [...data].sort((a, b) => {
        const A = a[sortConfig.key].toString().toLowerCase();
        const B = b[sortConfig.key].toString().toLowerCase();
        return sortConfig.direction === 'asc'
          ? A.localeCompare(B)
          : B.localeCompare(A);
      });
    }

    return data;
  }, [filters, sortConfig]);

  const columns = [
    { header: 'Zone', accessor: 'zone' },
    { header: 'Circle', accessor: 'circle' },
    { header: 'Division', accessor: 'division' },
    { header: 'Subdivision Name', accessor: 'name' },
    { header: 'Latitude', accessor: 'lat' },
    { header: 'Longitude', accessor: 'long' },
  ];

  return (
    <div className={minimal ? '' : "p-4 pt-1"}>
      <AssetTable
        title="Subdivision List"
        columns={columns}
        data={filteredData}
        actions={!minimal}
        minimal={minimal}
        onAdd={!minimal ? () => console.log('Add Subdivision clicked') : undefined}
      />
      
      {!minimal && (
        <div className="mt-8">
          <AssetsMap />
        </div>
      )}
    </div>
  );
};

export default Subdivision;
