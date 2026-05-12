const executiveCommittee = [
  {
    id: 1,
    name: 'Dr. Amulya Kr Singh',
    designation: 'President',
    email: 'dramukyaksingh@gmail.com',
    phone: '9334118686'
  },
  {
    id: 2,
    name: 'Mukut Mani Barno',
    designation: 'Senior Vice President',
    email: 'Mukutmani23@gmail.com',
    phone: '9431411176'
  },
  {
    id: 3,
    name: 'Dr. B. Priyam',
    designation: 'Vice President',
    email: 'babypriyam4@gmail.com',
    phone: '9334258373'
  },
  {
    id: 4,
    name: 'Rana Amrendra Kumar',
    designation: 'Vice President',
    email: 'Amrendra28singh@gmail.com',
    phone: '9334122086'
  },
  {
    id: 5,
    name: 'Dr. Satish Kr Jha',
    designation: 'Vice President',
    email: 'Skjhamtv@gmail.com',
    phone: '8789134339'
  },
  {
    id: 6,
    name: 'Suman Mishra',
    designation: 'General Secretary',
    email: 'sumandinesh0000@gmail.com',
    phone: '7462872460'
  },
  {
    id: 7,
    name: 'Sunil Kumar',
    designation: 'Joint Secretary',
    email: 'Sunil.wushu@gmail.com',
    phone: '9431282312'
  },
  {
    id: 8,
    name: 'Suraj Kumar',
    designation: 'Joint Secretary',
    email: 'surajwushu@gmail.com',
    phone: '9931918017'
  },
  {
    id: 9,
    name: 'Pandit Vinay Kr Devchant',
    designation: 'Joint Secretary',
    email: 'Mr.vinaywushu@gmail.com',
    phone: '7352473514'
  },
  {
    id: 10,
    name: 'Pawan Kr Sah',
    designation: 'Treasurer',
    email: 'Pawankumarsah2410@gmail.com',
    phone: '9279681300'
  },
  {
    id: 11,
    name: 'Rajesh Kr Sah',
    designation: 'Executive Member',
    email: 'rajeshbwa@gmail.com',
    phone: '9334190914'
  },
  {
    id: 12,
    name: 'Md Ali',
    designation: 'Executive Member',
    email: 'Aliwushusports@gmail.com',
    phone: '7004145965'
  },
  {
    id: 13,
    name: 'Alok Kumar',
    designation: 'Executive Member',
    email: 'Alokgupta0101@gmail.com',
    phone: '9973493665'
  },
  {
    id: 14,
    name: 'Priyanka Devi',
    designation: 'Executive Member',
    email: 'Priyankadevi167@gmail.com',
    phone: '9955865901'
  },
  {
    id: 15,
    name: 'Sonu Sah',
    designation: 'Executive Member',
    email: 'fightersonusah@gmail.com',
    phone: '9507735233'
  }
]

const committeeSections = [
  {
    id: 'athlete',
    title: 'Athlete Committee',
    rows: [
      { name: 'Isha Mishra', designation: 'Chairman', district: 'Muzaffarpur', phone: '7488099660' },
      { name: 'Manjay Kumar', designation: 'Member', district: 'East Champaran', phone: '6005871481' },
      { name: 'Ashish Kumar', designation: 'Member', district: 'Gopalganj', phone: '8318338578' },
      { name: 'Ashutosh Kumar', designation: 'Member', district: 'Saran', phone: '7779968411' },
      { name: 'Kumar Anand', designation: 'Member', district: 'Muzaffarpur', phone: '9155865687' }
    ]
  },
  {
    id: 'ethics',
    title: 'Ethics Committee',
    rows: [
      { name: 'Satish Jha', designation: 'Chairman', district: 'Muzaffarpur', phone: '8789134339' },
      { name: 'Rajesh Sah', designation: 'Member', district: 'Bhagalpur', phone: '9334190914' },
      { name: 'Anup Kumar Sinha', designation: 'Member', district: 'Patna', phone: '9472869421' }
    ]
  },
  {
    id: 'technical',
    title: 'Technical Committee',
    rows: [
      { name: 'Sunil Kumar', designation: 'Chairman', district: 'Muzaffarpur', phone: '9431282312' },
      { name: 'Suraj Kumar', designation: 'Vice President', district: 'Patna', phone: '9931918017' },
      { name: 'Sanjay Kumar', designation: 'Vice President', district: 'Sitamarhi', phone: '9939282274' },
      { name: 'Sonu Sah', designation: 'Member', district: 'Gopalganj', phone: '9507735233' },
      { name: 'Vinay Pandit', designation: 'Member', district: 'Saran', phone: '7352473514' },
      { name: 'Md. Ali', designation: 'Member', district: 'Araria', phone: '7004145965' },
      { name: 'Bhanu Priya', designation: 'Member', district: 'Muzaffarpur', phone: '8406875503' }
    ]
  },
  {
    id: 'media',
    title: 'Media Committee',
    rows: [
      { name: 'Alok Kumar', designation: 'Chairman', district: 'West Champaran', phone: '9973494665' },
      { name: 'Shiv Kumar', designation: 'Member', district: 'Vaishali', phone: '7903387848' },
      { name: 'Rajesh Sah', designation: 'Member', district: 'Bhagalpur', phone: '9334190914' }
    ]
  },
  {
    id: 'disciplinary',
    title: 'Disciplinary Committee',
    rows: [
      { name: 'Dr. Amulya Kr Singh', designation: 'Chairman', district: 'Patna', phone: '9334118686' },
      { name: 'Dr. Sanjay Shrivastava', designation: 'Vice Chairman', district: 'Muzaffarpur', phone: '7859039626' },
      { name: 'Alok Kumar', designation: 'Member', district: 'West Champaran', phone: '9973494665' },
      { name: 'Mukut Mani', designation: 'Member', district: 'Muzaffarpur', phone: '9431411176' },
      { name: 'Rajesh Sah', designation: 'Member', district: 'Bhagalpur', phone: '9334190914' },
      { name: 'Satish Kumar', designation: 'Member', district: 'Katihar', phone: '9431640935' },
      { name: 'Vinay Pandit', designation: 'Member', district: 'Saran', phone: '7352473514' }
    ]
  },
  {
    id: 'tournament',
    title: 'Tournament Committee',
    rows: [
      { name: 'Sanjay Kumar', designation: 'Chairman', district: 'Sitamarhi', phone: '9939282274' },
      { name: 'Anup Kumar Sinha', designation: 'Vice Chairman', district: 'Patna', phone: '9472869421' },
      { name: 'Vinay Pandit', designation: 'Member', district: 'Saran', phone: '7352473514' },
      { name: 'Alok Kumar', designation: 'Member', district: 'West Champaran', phone: '9973494665' },
      { name: 'Mukesh Kumar', designation: 'Member', district: 'Buxar', phone: '9631916001' },
      { name: 'Sunny Kumar', designation: 'Member', district: 'Madhubani', phone: '9708345363' }
    ]
  },
  {
    id: 'selection',
    title: 'Selection Committee',
    rows: [
      { name: 'Sunil Kumar', designation: 'Chairman', district: 'Muzaffarpur', phone: '9431282132' },
      { name: 'Sanjay Kumar', designation: 'Vice Chairman', district: 'Sitamarhi', phone: '9939282274' },
      { name: 'Isha Mishra', designation: 'Member', district: 'Muzaffarpur', phone: '7488099660' },
      { name: 'Varun', designation: 'Member', district: 'Saran', phone: '9006390920' },
      { name: 'Sonu Sah', designation: 'Member', district: 'Gopalganj', phone: '9507735233' }
    ]
  },
  {
    id: 'anti-doping',
    title: 'Anti-Doping Committee',
    rows: [
      { name: 'Mukesh Kumar', designation: 'Chairman', district: 'Buxar', phone: '9631916001' },
      { name: 'Sunny Kumar', designation: 'Member', district: 'Madhubani', phone: '9708345363' },
      { name: 'Shatraudhan Kumar', designation: 'Member', district: 'Nalanda', phone: '6207289083' },
      { name: 'Manish Kumar', designation: 'Member', district: 'Saharsa', phone: '8051518887' }
    ]
  },
  {
    id: 'age-fraud',
    title: 'Age Fraud Cell Committee',
    rows: [
      { name: 'Rajesh Prasad Thakur', designation: 'Chairman', district: 'Bhojpur', phone: '9334399814' },
      { name: 'Sanjeev Kumar Yadav', designation: 'Member', district: 'Darbhanga', phone: '8271214356' },
      { name: 'Dilip Kumar', designation: 'Member', district: 'Samastipur', phone: '8709677290' }
    ]
  },
  {
    id: 'women-harassment',
    title: 'Women Harassment Committee',
    rows: [
      { name: 'Dr. B Priyam', designation: 'Chairman', district: 'Patna', phone: '8083998001' },
      { name: 'Sapna Kumari', designation: 'Member', district: 'Muzaffarpur', phone: '9801909141' },
      { name: 'Nutan Kumari', designation: 'Member', district: 'Bhojpur', phone: '8210775514' },
      { name: 'Priyanka Devi', designation: 'Member', district: 'Siwan', phone: '9955865901' },
      { name: 'Rakhi Gupta', designation: 'Member', district: 'Saran', phone: '' }
    ]
  }
]

function PhoneCell({ phone }) {
  const digits = phone?.replace(/\D/g, '')
  if (!digits) return <span className="text-gray-500">—</span>
  return (
    <a href={`tel:+91${digits}`} className="text-[#017cc2] hover:underline whitespace-nowrap">
      +91 {digits}
    </a>
  )
}

function Members() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Committee Members</h1>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Bihar Wushu Association — executive committee and sub-committee members
        </p>

        <div className="space-y-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <h2
              className="text-lg md:text-xl font-bold text-white px-6 py-4"
              style={{ backgroundColor: '#017cc2' }}
            >
              Executive Committee
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                      S.No
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                      Designation
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                      Email
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                      Phone
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {executiveCommittee.map((member, index) => (
                    <tr key={member.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{member.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{member.designation}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {member.email ? (
                          <a href={`mailto:${member.email}`} className="text-[#017cc2] hover:underline break-all">
                            {member.email}
                          </a>
                        ) : (
                          '—'
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        <PhoneCell phone={member.phone} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Sub-committees</h2>
            <p className="text-center text-gray-600 mb-8 text-sm">
              Committee-wise member lists (Athlete, Ethics, Technical, and others)
            </p>
            <div className="space-y-12">
          {committeeSections.map((section) => (
            <div key={section.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <h2
                className="text-lg md:text-xl font-bold text-white px-6 py-4"
                style={{ backgroundColor: '#017cc2' }}
              >
                {section.title}
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                        S.No
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                        Name
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                        Designation
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                        District
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                        Contact No.
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {section.rows.map((row, index) => (
                      <tr key={`${section.id}-${index}`} className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">{row.designation}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">{row.district}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          <PhoneCell phone={row.phone} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Members
