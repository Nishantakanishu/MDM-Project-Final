
import AssetTable from './AssetTable';
import AssetsMap from './AssetsMap';

const Circle = ({ minimal = false }) => {
  const circles = [
    { id: 1, name: 'Delhi Central', code: 'CLC001', zone: 'North Zone' },
    { id: 2, name: 'Chennai North', code: 'CLC002', zone: 'South Zone' },
    { id: 3, name: 'Kolkata East', code: 'CLC003', zone: 'East Zone' },
    { id: 4, name: 'Mumbai Suburban', code: 'CLC004', zone: 'West Zone' },
    { id: 5, name: 'Bhopal City', code: 'CLC005', zone: 'Central Zone' },
  ];
  
  const columns = [
    { header: 'Zone Name', accessor: 'zone' },
    { header: 'Circle Name', accessor: 'name' },
  ];

  const formattedData = circles;

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-fadeIn ${minimal ? '' : 'h-full'}`}>
      <div className={`${minimal ? '' : 'p-4 pt-1'}`}>
        {!minimal ? (
          <AssetTable 
            title="Circle List"
            columns={columns}
            data={formattedData}
            onAdd={() => console.log('Add Circle clicked')}
            addButtonLabel="Add Circle"
            actions={true}
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50/50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 font-bold text-sm text-gray-900">Zone Name</th>
                  <th className="px-6 py-4 font-bold text-sm text-gray-900">Circle Name</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {circles.slice(0, 5).map((circle) => (
                  <tr key={circle.id} className="hover:bg-cyan-50/30 transition-colors group">
                    <td className="px-6 py-4 font-medium text-gray-800">{circle.zone}</td>
                    <td className="px-6 py-4 font-medium text-gray-800">{circle.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {!minimal && (
        <div className="p-4 pt-4 border-t border-gray-50 bg-gray-50/10">
          <AssetsMap />
        </div>
      )}
    </div>
  );
};

export default Circle;