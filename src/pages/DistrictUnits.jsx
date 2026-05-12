function DistrictUnits() {
  const districtUnits = [
    { id: 1, district: 'Araria', contactPerson: 'Md. Ali', phone: '7004145965', email: 'Aliwushusports@gmail.com' },
    { id: 2, district: 'Banka', contactPerson: 'Vibhishan kumar', phone: '9304428917', email: '' },
    { id: 3, district: 'Bhagalpur', contactPerson: 'Rajesh kr sah', phone: '9334190914', email: 'Rajeshbwa@gmail.com' },
    { id: 4, district: 'Buxar', contactPerson: 'Mukesh Kumar', phone: '9631916001', email: 'associationbuxarwushu@gmail.com' },
    { id: 5, district: 'Bhojpur', contactPerson: 'Rajesh Prasad thakur', phone: '9473217593', email: 'bhojpurwushuassociation@gmail.com' },
    { id: 6, district: 'Darbhanga', contactPerson: 'Sanjeev Kumar yadav', phone: '6203558395', email: 'darbhangawushuassociationkwa@gmail.com' },
    { id: 7, district: 'East Champaran', contactPerson: 'Manjay kumar', phone: '6005871481', email: 'wushuassociationeastchamparan@gmail.com' },
    { id: 8, district: 'Gopalganj', contactPerson: 'Sonu Sah', phone: '9507735233', email: 'gopalganjwushu@gmail.com'},
    { id: 9, district: 'Katihar', contactPerson: 'Satish kr', phone: '9431640935', email: 'katiharwushu@gmail.com' },
    { id: 10, district: 'Khagaria', contactPerson: 'Chandan Kumar', phone: '9162722420', email: 'khagariawushuassociation@gmail.com' },
    { id: 11, district: 'Madhepura', contactPerson: 'Vivek Kumar', phone: '9570588257', email: 'visportsacademy@gmail.com' },
    { id: 12, district: 'Madhubani', contactPerson: 'Sunny kumar', phone: '9835820643', email: 'Madhubaniwushu@gmail.com' },
    { id: 13, district: 'Muzaffarpur', contactPerson: 'Isha Mishra', phone: '7488099660', email: 'muzwushu@gmail.com' },
    { id: 14, district: 'Nalanda', contactPerson: 'Shatrudhan kumar', phone: '6207289083', email: 'nalandasports@gmail.com' },
    { id: 15, district: 'Patna', contactPerson: 'Suraj Kumar', phone: '9931918017', email: '' },
    { id: 16, district: 'Rohtas', contactPerson: 'Monu Singh', phone: '7970719662', email: '' },
    { id: 17, district: 'Saharsa', contactPerson: 'Manish Kumar', phone: '8051518887', email: 'saharsawushu@gmail.com' },
    { id: 18, district: 'Samastipur', contactPerson: 'Dileep Kumar', phone: '8709677290', email: 'samastipurwushuassociation@gmail.com' },
    { id: 19, district: 'Saran', contactPerson: 'Pandit Vinay devchant', phone: '7352473514', email: '' },
    { id: 20, district: 'Sitamarhi', contactPerson: 'Sanjay kumar', phone: '9939282274', email: 'sitamarhiwushu@gmail.com' },
    { id: 21, district: 'Siwan', contactPerson: 'Priyanka devi', phone: '9955865901', email: 'siwanwushu@gmail.com' },
    { id: 22, district: 'Vaishali', contactPerson: 'Shiv kumar', phone: '7903387848', email: '' },
    { id: 23, district: 'West Champaran', contactPerson: 'Alok Kumar', phone: '9973494665', email: 'westchamparanwushuassociation@gmail.com' },
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
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">S.No</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">District</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Contact Person</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Phone</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {districtUnits.map((unit, index) => (
                  <tr key={unit.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{unit.district}</td>
                    <td className="px-4 py-4 text-sm text-gray-700">{unit.contactPerson || '-'}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                      {unit.phone ? (
                        <a href={`tel:+91${unit.phone}`} className="text-[#017cc2] hover:underline">
                          +91 {unit.phone}
                        </a>
                      ) : '-'}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-700">
                      {unit.email ? (
                        <a href={`mailto:${unit.email}`} className="text-[#017cc2] hover:underline break-all">
                          {unit.email}
                        </a>
                      ) : '-'}
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

