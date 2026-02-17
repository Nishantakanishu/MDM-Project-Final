import AssetTable from './AssetTable';
import AssetsMap from './AssetsMap';

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
    <div className="p-4 pt-1 bg-gray-50 min-h-screen">
       <AssetTable 
          title="Faulty/Damage Meter List"
          columns={columns}
          data={data}
          onAdd={() => console.log('Add Faulty Meter clicked')}
       />
        <div className="mt-8">
          <AssetsMap />
        </div>
    </div>
  );
};

export default FaultyDamageMeter;
