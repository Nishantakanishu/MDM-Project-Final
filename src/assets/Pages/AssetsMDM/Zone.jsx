import AssetTable from './AssetTable';
import AssetsMap from './AssetsMap';

const Zone = ({ minimal = false }) => {
  const zones = [
    { id: 1, name: 'North Zone' },
    { id: 2, name: 'South Zone' },
    { id: 3, name: 'East Zone' },
    { id: 4, name: 'West Zone' },
    { id: 5, name: 'Central Zone' },
  ];
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-fadeIn ${minimal ? '' : 'h-full'}`}>
      {/* Header handled by AssetTable */}
      
      {/* Search Bar Removed */}

      <div className={`${minimal ? '' : 'p-4 pt-1'}`}>
        {!minimal ? (
          <AssetTable
            title="Zone List"
            columns={[
              { header: 'Zone Name', accessor: 'name' }
            ]}
            data={zones}
            onAdd={() => console.log('Add Zone clicked')}
            addButtonLabel="Add Zone"
            actions={true}
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50/50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 font-bold text-sm text-gray-900">Zone Name</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {zones.slice(0, 5).map((zone) => (
                  <tr key={zone.id} className="hover:bg-cyan-50/30 transition-colors group">
                    <td className="px-6 py-4 font-medium text-gray-800">{zone.name}</td>
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

export default Zone;
