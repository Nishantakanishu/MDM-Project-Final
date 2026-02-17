import AssetTable from './AssetTable';
import AssetsMap from './AssetsMap';

const Division = ({ minimal = false }) => {
  const divisions = [
    { id: 1, name: 'Connaught Place', code: 'DIV001', zone: 'North Zone', circle: 'Delhi Central' },
    { id: 2, name: 'Anna Nagar', code: 'DIV002', zone: 'South Zone', circle: 'Chennai North' },
    { id: 3, name: 'Salt Lake', code: 'DIV003', zone: 'East Zone', circle: 'Kolkata East' },
    { id: 4, name: 'Andheri East', code: 'DIV004', zone: 'West Zone', circle: 'Mumbai Suburban' },
    { id: 5, name: 'Arera Colony', code: 'DIV005', zone: 'Central Zone', circle: 'Bhopal City' },
  ];

  const columns = [
    { header: 'Zone', accessor: 'zone' },
    { header: 'Circle', accessor: 'circle' },
    { header: 'Division Name', accessor: 'name' },
  ];

  const formattedData = divisions;

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-fadeIn ${minimal ? '' : 'h-full'}`}>
      <div className={`${minimal ? '' : 'p-4 pt-1'}`}>
        {!minimal ? (
          <AssetTable 
            title="Division List"
            columns={columns}
            data={formattedData}
            onAdd={() => console.log('Add Division clicked')}
            addButtonLabel="Add Division"
            actions={true}
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50/50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 font-bold text-sm text-gray-900">Zone</th>
                  <th className="px-6 py-4 font-bold text-sm text-gray-900">Circle</th>
                  <th className="px-6 py-4 font-bold text-sm text-gray-900">Division Name</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {divisions.slice(0, 5).map((division) => (
                  <tr key={division.id} className="hover:bg-cyan-50/30 transition-colors group">
                    <td className="px-6 py-4 font-medium text-gray-800">{division.zone}</td>
                    <td className="px-6 py-4 font-medium text-gray-800">{division.circle}</td>
                    <td className="px-6 py-4 font-medium text-gray-800">{division.name}</td>
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

export default Division;

