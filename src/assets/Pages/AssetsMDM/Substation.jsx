import AssetTable from './AssetTable';
import AssetsMap from './AssetsMap';

const Substation = ({ minimal = false }) => {
  // Mock Data mimicking the "Manage Substation" image
  const data = [
      { zone: 'North Zone', circle: 'Delhi Central', division: 'Connaught Place', subdivision: 'Amlarem Sub-division', substation: '33/11 KV Sohkha s/s', code: 'SUB001', lat: '25.63214', long: '90.36214' },
      { zone: 'North Zone', circle: 'Delhi Central', division: 'Connaught Place', subdivision: 'Amlarem Sub-division', substation: 'Amlarem Sub-station', code: 'SUB002', lat: '25.293739', long: '92.118241' },
      { zone: 'North Zone', circle: 'Delhi Central', division: 'Connaught Place', subdivision: 'Amlarem Sub-division', substation: '33/11 KV syndai Sub-Station', code: 'SUB003', lat: '25.6397', long: '90.2518' },
      { zone: 'South Zone', circle: 'Chennai North', division: 'Anna Nagar', subdivision: 'Ampati Distribution Sub-Division', substation: '33/11 KV Ampati S/S', code: 'SUB004', lat: '25.459345', long: '89.924208' },
      { zone: 'South Zone', circle: 'Chennai North', division: 'Anna Nagar', subdivision: 'Ampati Distribution Sub-Division', substation: '33/11 KV Boldamgre S/S', code: 'SUB005', lat: '25.3267', long: '90.25487' },
      { zone: 'West Zone', circle: 'Mumbai Suburban', division: 'Andheri East', subdivision: 'Baghmara Distribution Sub-Division', substation: '33/11 KV Baghmara substation', code: 'SUB006', lat: '25.197468', long: '90.63444' },
      { zone: 'West Zone', circle: 'Mumbai Suburban', division: 'Andheri East', subdivision: 'Baghmara Distribution Sub-Division', substation: '33/11 KV Rongara S/S', code: 'SUB007', lat: '25.1997557', long: '90.6839765' },
      { zone: 'West Zone', circle: 'Mumbai Suburban', division: 'Andheri East', subdivision: 'Baghmara Distribution Sub-Division', substation: 'DUMMY SUBSTATION', code: 'SUB008', lat: '25.6123278', long: '90.0086' },
  ];

  const columns = [
    { header: 'Zone', accessor: 'zone' },
    { header: 'Circle', accessor: 'circle' },
    { header: 'Division', accessor: 'division' },
    { header: 'Subdivision', accessor: 'subdivision' },
    { header: 'Substation Name', accessor: 'substation' },
    { header: 'Substation Code', accessor: 'code' },
    { header: 'Latitude', accessor: 'lat' },
    { header: 'Longitude', accessor: 'long' },
  ];

  return (
     <div className={minimal ? '' : "p-4 pt-1"}>
      <AssetTable 
        title="Substation List" 
        columns={columns} 
        data={data} 
        minimal={minimal}
        actions={!minimal}
        onAdd={!minimal ? () => console.log('Add Substation clicked') : undefined}
        addButtonLabel="Add Substation"
      />
      
      {!minimal && (
        <div className="mt-8">
          <AssetsMap />
        </div>
      )}
    </div>
  );
};

export default Substation;
