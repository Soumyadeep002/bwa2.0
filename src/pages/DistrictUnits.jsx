function DistrictUnits() {
  // Sample data - replace with actual data
  const districtUnits = [
    { id: 1, district: 'Patna', unitName: 'Patna Wushu Unit', contact: 'patna@biharwushu.org', phone: '+91 XXX XXX XXXX', status: 'Active' },
    { id: 2, district: 'Gaya', unitName: 'Gaya Wushu Unit', contact: 'gaya@biharwushu.org', phone: '+91 XXX XXX XXXX', status: 'Active' },
    { id: 3, district: 'Bhagalpur', unitName: 'Bhagalpur Wushu Unit', contact: 'bhagalpur@biharwushu.org', phone: '+91 XXX XXX XXXX', status: 'Active' },
    { id: 4, district: 'Muzaffarpur', unitName: 'Muzaffarpur Wushu Unit', contact: 'muzaffarpur@biharwushu.org', phone: '+91 XXX XXX XXXX', status: 'Active' },
    { id: 5, district: 'Darbhanga', unitName: 'Darbhanga Wushu Unit', contact: 'darbhanga@biharwushu.org', phone: '+91 XXX XXX XXXX', status: 'Active' },
    { id: 6, district: 'Purnia', unitName: 'Purnia Wushu Unit', contact: 'purnia@biharwushu.org', phone: '+91 XXX XXX XXXX', status: 'Active' },
  ]

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">District Units</h1>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="text-white" style={{ backgroundColor: '#017cc2' }}>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">S.No</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">District</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Unit Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Contact Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {districtUnits.map((unit, index) => (
                  <tr key={unit.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{unit.district}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{unit.unitName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{unit.contact}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{unit.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        unit.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {unit.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DistrictUnits

