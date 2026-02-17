import AssetTable from './AssetTable';
import AssetsMap from './AssetsMap';

const Device = ({ minimal = false }) => {
  const data = [
    { id: 'MTR-882194', type: 'Smart Meter', status: 'Active' },
    { id: 'GTW-441022', type: 'Gateway', status: 'Active' },
    { id: 'MTR-119283', type: 'Three Phase Meter', status: 'Maintenance' },
    { id: 'MTR-772611', type: 'Smart Meter', status: 'Inactive' },
    { id: 'COL-552109', type: 'DCU', status: 'Active' },
  ];

  const columns = [
    { header: 'Device ID', accessor: 'id' },
    { header: 'Type', accessor: 'type' },
    { header: 'Status', accessor: 'status' },
  ];

  return (
    <div className={minimal ? '' : "p-4 pt-1"}>
      <AssetTable 
        title="Device List" 
        columns={columns} 
        data={data} 
        minimal={minimal}
        onAdd={!minimal ? () => console.log('Add Device clicked') : undefined}
        addButtonLabel="Add Device"
      />
      
      {!minimal && (
        <div className="mt-8">
          <AssetsMap />
        </div>
      )}
    </div>
  );
};

export default Device;
