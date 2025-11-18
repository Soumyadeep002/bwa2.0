function Members() {
  // Sample data - replace with actual data
  const members = [
    { id: 1, name: 'Rajesh Kumar', designation: 'President', district: 'Patna', email: 'rajesh@biharwushu.org', phone: '+91 XXX XXX XXXX', joinDate: '2020-01-15' },
    { id: 2, name: 'Priya Sharma', designation: 'Vice President', district: 'Gaya', email: 'priya@biharwushu.org', phone: '+91 XXX XXX XXXX', joinDate: '2020-02-20' },
    { id: 3, name: 'Amit Singh', designation: 'Secretary', district: 'Bhagalpur', email: 'amit@biharwushu.org', phone: '+91 XXX XXX XXXX', joinDate: '2020-03-10' },
    { id: 4, name: 'Sunita Devi', designation: 'Treasurer', district: 'Muzaffarpur', email: 'sunita@biharwushu.org', phone: '+91 XXX XXX XXXX', joinDate: '2020-04-05' },
    { id: 5, name: 'Vikash Kumar', designation: 'Member', district: 'Darbhanga', email: 'vikash@biharwushu.org', phone: '+91 XXX XXX XXXX', joinDate: '2021-01-12' },
    { id: 6, name: 'Anjali Kumari', designation: 'Member', district: 'Purnia', email: 'anjali@biharwushu.org', phone: '+91 XXX XXX XXXX', joinDate: '2021-02-18' },
    { id: 7, name: 'Ramesh Yadav', designation: 'Member', district: 'Patna', email: 'ramesh@biharwushu.org', phone: '+91 XXX XXX XXXX', joinDate: '2021-03-22' },
    { id: 8, name: 'Kavita Singh', designation: 'Member', district: 'Gaya', email: 'kavita@biharwushu.org', phone: '+91 XXX XXX XXXX', joinDate: '2021-04-30' },
  ]

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Members</h1>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="text-white" style={{ backgroundColor: '#017cc2' }}>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">S.No</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Designation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">District</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Join Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {members.map((member, index) => (
                  <tr key={member.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{member.designation}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{member.district}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{member.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{member.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{member.joinDate}</td>
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

export default Members

