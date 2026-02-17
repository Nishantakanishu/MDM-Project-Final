import AssetTable from './AssetTable';
import AssetsMap from './AssetsMap';

const DT = ({ minimal = false }) => {
  // Mock Data mimicking the "Manage DT" image
  const data = [
      { zone: 'North Zone', circle: 'Delhi Central', division: 'Connaught Place', subdivision: 'Nongpoh Subdivision', substation: '33/11 kv Nongpoh s/s', substationCode: 'SUB001', feeder: '11 kv Umden Feeder', feederCode: 'FDR001', name: '(Lang) Himpala', code: 'DT001', lat: '25.920846', long: '91.8' },
      { zone: 'South Zone', circle: 'Chennai North', division: 'Anna Nagar', subdivision: 'Garobadha Distribution Sub Division', substation: '33/11 KV Garobadha_Ghoramara S/S', substationCode: 'SUB004', feeder: '11 KV Mankachar feeder', feederCode: 'FDR004', name: '4111A001041', code: 'DT002', lat: '25.600095', long: '90.0' },
      { zone: 'North Zone', circle: 'Delhi Central', division: 'Connaught Place', subdivision: 'Nongpoh Subdivision', substation: '33/11 kv Nongpoh s/s', substationCode: 'SUB001', feeder: '11 kv Umden Feeder', feederCode: 'FDR001', name: '4111A001042', code: 'DT003', lat: '25.920846', long: '91.9' },
      { zone: 'North Zone', circle: 'Delhi Central', division: 'Connaught Place', subdivision: 'Shangpung Sub-Division', substation: '33/11KV Ialong S/S', substationCode: 'SUB005', feeder: 'Phramer Feeder', feederCode: 'FDR005', name: '4111A001043', code: 'DT004', lat: '25.466208', long: '92.3' },
      { zone: 'West Zone', circle: 'Mumbai Suburban', division: 'Andheri East', subdivision: 'Williamnagar Distribution Sub-Division', substation: '33/11 KV Williamnagar substation', substationCode: 'SUB006', feeder: '11 KV Rongsak Feeder', feederCode: 'FDR006', name: '4111A001045', code: 'DT005', lat: '25.506449', long: '90.6' },
      { zone: 'West Zone', circle: 'Mumbai Suburban', division: 'Andheri East', subdivision: 'UMJARAIN DISTRIBUTION SUB DIVISION', substation: 'UMJARAIN 33/11 KV SUBSTATION', substationCode: 'SUB007', feeder: 'KYNTON MASSAR 11 KV', feederCode: 'FDR007', name: '4111A001047', code: 'DT006', lat: '25.5074605', long: '90.9' },
      { zone: 'East Zone', circle: 'Kolkata East', division: 'Salt Lake', subdivision: 'Mendipathar Distribution Sub-Division', substation: '33/11 KV Mendipathar substation', substationCode: 'SUB008', feeder: '11 Kv Resulbelpara Feeder', feederCode: 'FDR008', name: '4122A01600V', code: 'DT007', lat: '25.914646', long: '90.6' },
      { zone: 'West Zone', circle: 'Mumbai Suburban', division: 'Andheri East', subdivision: 'UMJARAIN DISTRIBUTION SUB DIVISION', substation: 'UMJARAIN 33/11 KV SUBSTATION', substationCode: 'SUB007', feeder: 'KYNTON MASSAR 11 KV', feederCode: 'FDR007', name: '4122A01600W', code: 'DT008', lat: '25.5074605', long: '90.9' },
  ];

  const columns = [
    { header: 'Zone', accessor: 'zone' },
    { header: 'Circle', accessor: 'circle' },
    { header: 'Division', accessor: 'division' },
    { header: 'Subdivision', accessor: 'subdivision' },
    { header: 'Substation', accessor: 'substation' },
    { header: 'Substation Code', accessor: 'substationCode' },
    { header: 'Feeder Name', accessor: 'feeder' },
    { header: 'Feeder Code', accessor: 'feederCode' },
    { header: 'DT Name', accessor: 'name' },
    { header: 'DT Code', accessor: 'code' },
    { header: 'Latitude', accessor: 'lat' },
    { header: 'Longitude', accessor: 'long' },
  ];

  return (
    <div className={minimal ? '' : "p-4 pt-1"}>
      <AssetTable
        title="DT List"
        columns={columns}
        data={data}
        minimal={minimal}
        actions={!minimal}
        onAdd={!minimal ? () => console.log('Add DT clicked') : undefined}
        addButtonLabel="Add DT"
      />
      
      {!minimal && (
        <div className="mt-8">
          <AssetsMap />
        </div>
      )}
    </div>
  );
};

export default DT;
