import AssetTable from './AssetTable';
import AssetsMap from './AssetsMap';

const Feeder = ({ minimal = false }) => {
  const data = [
    { zone: 'North Zone', circle: 'Delhi Central', division: 'Connaught Place', subdivision: 'Nongpoh Subdivision', substation: '33/11 KV Nongpoh S/S', substationCode: 'SUB001', name: '11KV Nongpoh Feeder', code: 'FDR001', lat: '25.9208', long: '91.8' },
    { zone: 'North Zone', circle: 'Delhi Central', division: 'Connaught Place', subdivision: 'Nongpoh Subdivision', substation: '33/11 KV Nongpoh S/S', substationCode: 'SUB001', name: '11KV Umden Feeder', code: 'FDR002', lat: '25.9207', long: '91.87' },
    { zone: 'North Zone', circle: 'Delhi Central', division: 'Connaught Place', subdivision: 'Polo Distribution Subdivision', substation: '132/33 KV Barapani S/S', substationCode: 'SUB003', name: '33KV Barapani Line', code: 'FDR003', lat: '25.58', long: '91.88' },
    { zone: 'North Zone', circle: 'Delhi Central', division: 'Connaught Place', subdivision: 'Khliehtyrshi Sub-division', substation: '33/11 KV Ialong S/S', substationCode: 'SUB004', name: '11KV Shangpung Feeder', code: 'FDR004', lat: '25.46', long: '92.18' },
    { zone: 'West Zone', circle: 'Mumbai Suburban', division: 'Andheri East', subdivision: 'Baghmara Distribution Sub-Division', substation: '33/11 KV Williamnagar S/S', substationCode: 'SUB005', name: '11KV Williamnagar Feeder', code: 'FDR005', lat: '25.50', long: '90.6' },
  ];

  const columns = [
    { header: 'Zone', accessor: 'zone' },
    { header: 'Circle', accessor: 'circle' },
    { header: 'Division', accessor: 'division' },
    { header: 'Subdivision', accessor: 'subdivision' },
    { header: 'Substation', accessor: 'substation' },
    { header: 'Substation Code', accessor: 'substationCode' },
    { header: 'Feeder Name', accessor: 'name' },
    { header: 'Feeder Code', accessor: 'code' },
    { header: 'Latitude', accessor: 'lat' },
    { header: 'Longitude', accessor: 'long' },
  ];

  return (
    <div className={minimal ? '' : "p-4 pt-1"}>
      <AssetTable 
        title="Feeder List"
        columns={columns}
        data={data}
        minimal={minimal}
        onAdd={!minimal ? () => console.log('Add Feeder clicked') : undefined}
        addButtonLabel="Add Feeder"
      />
      
      {!minimal && (
        <div className="mt-8">
          <AssetsMap />
        </div>
      )}
    </div>
  );
};

export default Feeder;
