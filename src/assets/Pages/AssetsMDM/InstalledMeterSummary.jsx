import AssetTable from './AssetTable';
import AssetsMap from './AssetsMap';

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
    <div className="p-4 pt-1 bg-gray-50 min-h-screen">
       <AssetTable 
          title="Installed Meter Summary"
          columns={columns}
          data={data}
       />
        <div className="mt-8">
          <AssetsMap />
        </div>
    </div>
  );
};


export default InstalledMeterSummary;
