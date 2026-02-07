import React from 'react';
import AssetTable from './AssetTable';

const DT = ({ minimal = false }) => {
  // Mock Data mimicking the "Manage DT" image
  const data = [
      { name: '(Lang) Himpala', substation: '33/11 kv Nongpoh s/s, Nongpoh', subdivision: 'Nongpoh Subdivision', feeder: '11 kv Umden Feeder', lat: '25.920846', long: '91.8' },
      { name: '4111A001041', substation: '33/11 KV Garobadha_Ghoramara S/S', subdivision: 'Garobadha Distribution Sub Division', feeder: '11 KV Mankachar feeder', lat: '25.600095', long: '90.0' },
      { name: '4111A001042', substation: '33/11 kv Nongpoh s/s, Nongpoh', subdivision: 'Nongpoh Subdivision', feeder: '11 kv Umden Feeder', lat: '25.920846', long: '91.9' },
      { name: '4111A001043', substation: '33/11KV Ialong S/S', subdivision: 'Shangpung Sub-Division', feeder: 'Phramer Feeder', lat: '25.466208', long: '92.3' },
      { name: '4111A001045', substation: '33/11 KV Williamnagar substation', subdivision: 'Williamnagar Distribution Sub-Division', feeder: '11 KV Rongsak Feeder', lat: '25.506449', long: '90.6' },
      { name: '4111A001047', substation: 'UMJARAIN 33/11 KV SUBSTATION', subdivision: 'UMJARAIN DISTRIBUTION SUB DIVISION', feeder: 'KYNTON MASSAR 11 KV', lat: '25.5074605', long: '90.9' },
      { name: '4122A01600V', substation: '33/11 KV Mendipathar substation', subdivision: 'Mendipathar Distribution Sub-Division', feeder: '11 Kv Resulbelpara Feeder', lat: '25.914646', long: '90.6' },
      { name: '4122A01600W', substation: 'UMJARAIN 33/11 KV SUBSTATION', subdivision: 'UMJARAIN DISTRIBUTION SUB DIVISION', feeder: 'KYNTON MASSAR 11 KV', lat: '25.5074605', long: '90.9' },
  ];

  const columns = [
    { header: 'DT Name', accessor: 'name' },
    { header: 'Substation', accessor: 'substation' },
    { header: 'Subdivision', accessor: 'subdivision' },
    { header: 'Feeder', accessor: 'feeder' },
    { header: 'Latitude', accessor: 'lat' },
    { header: 'Longitude', accessor: 'long' },
  ];

  return (
    <div className={minimal ? '' : "p-6"}>
       {!minimal && (
            <div className="mb-6 flex justify-between items-center">
                 <h1 className="text-2xl font-bold text-gray-800">Manage DT</h1>
                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition-colors flex items-center gap-2">
                    + ADD DT
                 </button>
            </div>
       )}
      <AssetTable 
        title="Manage DT" 
        columns={columns} 
        data={data} 
        minimal={minimal}
        actions={!minimal} // Assuming actions exist generally, though screenshot cropped the action column mainly
      />
    </div>
  );
};

export default DT;
