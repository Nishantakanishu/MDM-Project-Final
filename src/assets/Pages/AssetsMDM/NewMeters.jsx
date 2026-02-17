import AssetTable from './AssetTable';
import AssetsMap from './AssetsMap';

const NewMeters = () => {
  // Mock data based on New Meters List image
  const data = [
    { customerNo: '52000094905', name: 'VINCENT R.MARAK', address: 'TAMBO ADING', subdiv: 'Williamnagar Distribution Sub-Division', substation: '33/11 KV Williamnagar substation' },
    { customerNo: 'JC05P222995', name: 'Parma Koch', address: 'Ampatigiri', subdiv: 'Ampati Distribution Sub-Division', substation: '33/11 KV Ampati S/S' },
    { customerNo: 'JC05R080546', name: 'Renubala Koch', address: 'Gofraigaon', subdiv: 'Mahendraganj Distribution Sub-Division', substation: '33/11 KV Mahendraganj S/S' },
    { customerNo: '52000094759', name: 'ANUP SANGMA', address: 'WARIMAGRE', subdiv: 'Williamnagar Distribution Sub-Division', substation: '33/11 KV Williamnagar substation' },
    { customerNo: 'JC05P223002', name: 'Lehon Koch', address: 'Ampatigiri', subdiv: 'Ampati Distribution Sub-Division', substation: '33/11 KV Ampati S/S' },
  ];

  const columns = [
    { header: 'Customer No', accessor: 'customerNo' },
    { header: 'Customer Name', accessor: 'name' },
    { header: 'Customer Address', accessor: 'address' },
    { header: 'Subdivision ID', accessor: 'subdiv' },
    { header: 'Substation ID', accessor: 'substation' },
  ];

  return (
    <div className="p-4 pt-1">
      <AssetTable 
        title="New Meters List" 
        columns={columns} 
        data={data} 
        onAdd={() => console.log('Add New Meter clicked')}
      />
      <div className="mt-8">
        <AssetsMap />
      </div>
    </div>
  );
};

export default NewMeters;
