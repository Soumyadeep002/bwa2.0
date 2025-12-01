function Members() {
  const members = [
    { 
      id: 1, 
      name: 'Dr. Amulya Kumar Singh', 
      designation: 'President', 
      district: 'Bihar Wushu Association', 
      email: '', 
      phone: '9431461050, 9113152954', 
      joinDate: '' 
    },
    { 
      id: 2, 
      name: 'Ms. Suman Mishra', 
      designation: 'General Secretary', 
      district: 'Bihar Wushu Association', 
      email: '', 
      phone: '7462872460', 
      joinDate: '' 
    },
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {member.email ? (
                        <a href={`mailto:${member.email}`} className="text-[#017cc2] hover:underline">
                          {member.email}
                        </a>
                      ) : '-'}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {member.phone ? (
                        <div className="flex flex-col gap-1">
                          {member.phone.split(', ').map((phone, idx) => (
                            <a 
                              key={idx}
                              href={`tel:+91${phone.trim()}`} 
                              className="text-[#017cc2] hover:underline"
                            >
                              +91 {phone.trim()}
                            </a>
                          ))}
                        </div>
                      ) : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {member.joinDate || '-'}
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

export default Members

