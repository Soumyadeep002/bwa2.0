const athlete = (name, category, medal) => ({ name, category, medal })

/**
 * Medal list transcribed from the association’s session sheets.
 * Two blocks had no championship heading on the source page:
 * - "Jiti results" (six bronze) sits in session 2023-24, before the Macau entry.
 * - "Medal results" (Kumar Anand, Ravi Kumar) sits in session 2024-25, before Batumi.
 * Both are kept so the printed session totals still match.
 */
export const medalSessions = [
  {
    id: '2022-23',
    label: 'Session: 2022-23',
    summary: 'Gold: 3 | Silver: 3 | Bronze: 15 | Total Medals: 21',
    events: [
      {
        id: '21st-sub-junior-kanyakumari',
        title:
          '21st Sub Junior National Wushu Championship, Kanyakumari, Tamil Nadu (March 2022)',
        level: 'National',
        athletes: [
          athlete('Anandi Ray', 'UD 48 KG', 'Bronze'),
          athlete('Moon Star', 'Taijiquan', 'Bronze'),
          athlete('Abhishek Kumar', 'Changquan', 'Bronze'),
        ],
      },
      {
        id: '22nd-sub-junior-mandi',
        title:
          '22nd Sub Junior National Wushu Championship, Mandi, Himachal Pradesh (July 2022)',
        level: 'National',
        athletes: [
          athlete('Rahul Kumar', 'UD 48 KG', 'Silver'),
          athlete('Abhishek Kumar', 'Changquan', 'Bronze'),
        ],
      },
      {
        id: '21st-junior-kozikode',
        title: '21st Junior National Wushu Championship, Kozikode, Kerala (September 2022)',
        level: 'National',
        athletes: [
          athlete('Shagun Singh', 'Wingchun / Taijiquan', '1 Gold, 1 Bronze'),
          athlete('Aditya Kumar', 'Taijiquan', 'Silver'),
          athlete('Aprajeeta Mishra', 'Nanquan', 'Bronze'),
          athlete('Ayushi Kumari', 'UD 52 KG', 'Bronze'),
          athlete('Diksha Kumari', 'UD 48 KG', 'Bronze'),
          athlete('Arpita Dash', 'Changquan', 'Bronze'),
        ],
      },
      {
        id: '31st-senior-srinagar',
        title: '31st Senior National Wushu Championship, Srinagar, J & K (Oct–Nov 2022)',
        level: 'National',
        athletes: [
          athlete('Isha Mishra', 'Bhagwazhang', 'Bronze'),
          athlete('Geshu Kumari', 'Taijiquan', 'Bronze'),
          athlete('Sapna Kumari', 'Nanquan', 'Bronze'),
          athlete('Kumar Anand', 'Nandao', 'Bronze'),
          athlete('Yamini Sakshi', 'Wingchun', 'Silver'),
        ],
      },
      {
        id: '6th-federation-cup-punjab',
        title: '6th Federation Cup, Punjab (March 2023)',
        level: 'National',
        athletes: [
          athlete('Anshu Kumari', 'UD 45 KG', 'Gold'),
          athlete('Pankaj Kr Singh', 'Nanquan / Nandao', '1 Gold, 1 Bronze'),
        ],
      },
      {
        id: 'khelo-sub-junior-jk-2023',
        title: "Khelo India Sub-Junior Women's Wushu League, J&K (March 2023)",
        level: 'National',
        athletes: [athlete('Moon Star', 'Taijiquan', 'Bronze')],
      },
    ],
  },
  {
    id: '2023-24',
    label: 'Session: 2023-24',
    summary: 'Gold: 9 | Silver: 6 | Bronze: 41 | Total Medals: 56',
    events: [
      {
        id: '32nd-senior-pune',
        title: '32nd Senior National Wushu Championship, Pune (June–July 2023)',
        level: 'National',
        athletes: [
          athlete('Isha Mishra', 'Bhaguazhang / Dual Event', '1 Gold, 1 Bronze'),
          athlete('Sonali Kumari', 'Dual Event', '1 Bronze'),
          athlete('Amisha Kumari', 'UD 48 KG', '1 Bronze'),
        ],
      },
      {
        id: '22nd-junior-patna',
        title: '22nd Junior National Wushu Championship, Patna (August 2023)',
        level: 'National',
        athletes: [
          athlete('Aprajeeta Mishra', 'Nanquan / Single Weapon', '1 Gold, 1 Silver'),
          athlete('Kritika Anand', 'Nanquan / Flexible Weapon', '1 Bronze, 1 Silver'),
          athlete('Arpita Dash', 'Changquan, Jianshu / Qiangshu', '2 Gold, 1 Bronze'),
          athlete('Aditya Kumar', 'Taijjian', '1 Silver'),
          athlete('Shagun Singh', 'Wingchun Single Weapon', '1 Gold, 1 Bronze'),
          athlete('Amrit Kumar', 'UD 80 KG', 'Gold'),
          athlete('Priyanshu Kumari', 'UD 40 KG', 'Bronze'),
          athlete('Shubham Kumar', 'UD 70 KG', 'Bronze'),
          athlete('Aprajeeta Mishra', 'Jiti', 'Bronze'),
          athlete('Arpita Dash', 'Jiti', 'Bronze'),
          athlete('Aditya Kumar', 'Jiti', 'Bronze'),
          athlete('Shagun Singh', 'Jiti', 'Bronze'),
          athlete('Jiya Kumari', 'Jiti', 'Bronze'),
        ],
      },
      {
        id: '2023-24-jiti-results',
        title: 'Jiti results',
        note: 'These six bronze medals are on the medal sheet without a championship heading. They are listed in the 2023-24 session.',
        level: 'National',
        athletes: [
          athlete('Kritika Anand', 'Jiti', 'Bronze'),
          athlete('Pranav Vedanti', 'Jiti', 'Bronze'),
          athlete('Rubab Rabbani', 'Jiti', 'Bronze'),
          athlete('Rishav Kumar', 'Jiti', 'Bronze'),
          athlete('Kunal Kumar', 'Jiti', 'Bronze'),
          athlete('Priya Soni', 'Jiti', 'Bronze'),
        ],
      },
      {
        id: '11th-junior-asian-macau',
        title: '11th Junior Asian Wushu Championship 2023, Macau, China',
        level: 'International',
        athletes: [athlete('Rahul Kumar', 'UD 48 KG', 'Silver')],
      },
      {
        id: '37th-national-games-goa',
        title: '37th National Games, Goa, 2023',
        level: 'National',
        athletes: [
          athlete('Isha Mishra', 'Jianshu', 'Bronze'),
          athlete('Ashish Kumar', 'UD 48 KG', 'Bronze'),
        ],
      },
      {
        id: '67th-nsg-u17',
        title: '67th National School Games, Jharkhand (U-17) (Jan 2024)',
        level: 'National',
        athletes: [
          athlete('Puja Kumari', 'UD 40 KG', 'Bronze'),
          athlete('Ridhimma Kumari', 'UD 60 KG', 'Bronze'),
          athlete('Anandi Rai', 'UD 48 KG', 'Silver'),
          athlete('Dheeran Kumar', 'UD 48 KG', 'Bronze'),
          athlete('Abhi Kumar', 'UD 56 KG', 'Bronze'),
          athlete('Rushtam Singh', 'UD 65 KG', 'Bronze'),
        ],
      },
      {
        id: '67th-nsg-u19',
        title: '67th National School Games, Jharkhand (U-19) (Jan 2024)',
        level: 'National',
        athletes: [
          athlete('Vaishnavi Kumari', 'UD 45 KG', 'Bronze'),
          athlete('Priyanshu Kumari', 'UD 48 KG', 'Silver'),
          athlete('Naina Kumari', 'UD 56 KG', 'Bronze'),
          athlete('Vishal Kumar', 'UD 48 KG', 'Bronze'),
        ],
      },
      {
        id: 'aiu-jk-2024',
        title: 'All India Inter University, J&K (Feb 2024)',
        level: 'National',
        athletes: [
          athlete('Aprajeeta Mishra', 'Nanquan, Nandao, Jiti', '2 Gold, 1 Bronze'),
          athlete('Isha Mishra', 'Bhaguazhang', 'Bronze'),
        ],
      },
      {
        id: '7th-federation-cup',
        title: '7th Federation Cup, Jharkhand (Feb 2024)',
        level: 'National',
        athletes: [
          athlete('Nutan Kumari', 'UD 70 KG', 'Gold'),
          athlete('Golu Kumar', 'UD 52 KG', 'Bronze'),
          athlete('Aman Shree', 'UD 90 KG', 'Bronze'),
        ],
      },
      {
        id: 'khelo-asmita-2024',
        title: 'Khelo India Asmita Womens League, Jharkhand (Feb 2024)',
        level: 'National',
        athletes: [
          athlete('Ayushi Astuti', 'UD 60 KG', 'Bronze'),
          athlete('Arti Kumari', 'UD 65 KG', 'Bronze'),
          athlete('Anamika Kumari', 'UD 75 KG', 'Bronze'),
        ],
      },
      {
        id: '23rd-sub-junior-2024',
        title: '23rd Sub Junior National Wushu Championship (March 2024)',
        level: 'National',
        athletes: [
          athlete('Arshad Khan', 'UD 36 KG', 'Bronze'),
          athlete('Rahul Kumar', 'UD 48 KG', 'Bronze'),
          athlete('Anandi Rai', 'UD 48 KG', 'Bronze'),
          athlete('Adya', 'Wingchun', 'Bronze'),
          athlete('Krishna Kumari', 'Soft Weapon', 'Bronze'),
        ],
      },
    ],
  },
  {
    id: '2024-25',
    label: 'Session: 2024-25',
    summary: 'Gold: 4 | Silver: 8 | Bronze: 21 | Total Medals: 33',
    events: [
      {
        id: '32nd-senior-uttarakhand',
        title: '32nd Senior National Wushu Championship, Uttarakhand (Sept 2024)',
        level: 'National',
        athletes: [
          athlete('Isha Mishra', 'Bhaguazhang', 'Gold'),
          athlete('Sonali Kumari', 'Nanquan', 'Gold'),
          athlete('Anshu Kumari', 'UD 45 KG', 'Silver'),
          athlete('Shagun Singh', 'Wingchun', 'Silver'),
          athlete('Shubham Kumar', 'UD 70 KG', 'Silver'),
        ],
      },
      {
        id: '2024-25-cropped-results',
        title: 'Medal results',
        note: 'Kumar Anand and Ravi Kumar appear on the medal sheet directly above the Batumi championship. The event heading was not in the image.',
        level: 'National',
        athletes: [
          athlete('Kumar Anand', 'Nanquan', 'Silver'),
          athlete('Ravi Kumar', 'Flexible Weapon', 'Bronze'),
        ],
      },
      {
        id: 'batumi-2024',
        title: 'Batumi International Wushu Championship, Georgia (Oct 2024)',
        level: 'International',
        athletes: [
          athlete('Aprajeeta Mishra', 'Nanquan, Nandao', '1 Gold, 1 Bronze'),
          athlete('Diksha Kumari', 'UD 52 KG', '1 Gold'),
          athlete('Rahul Kumar', 'UD 48 KG', 'Silver'),
        ],
      },
      {
        id: '68th-nsg-jk',
        title: '68th National School Games, J&K 2024',
        level: 'National',
        athletes: [
          athlete('Pankaj Nayan', 'UD 40 KG', 'Silver'),
          athlete('Rahul Kumar', 'UD 52 KG', 'Bronze'),
          athlete('Abhi Kumar', 'UD 56 KG', 'Bronze'),
        ],
      },
      {
        id: '24th-sub-junior-punjab',
        title: '24th Sub Junior National Wushu Championship, Punjab (Dec 2024)',
        level: 'National',
        athletes: [
          athlete('Ishant Thakur', 'Single Weapon', 'Silver'),
          athlete('Visheshmani Singh', 'Changquan', 'Bronze'),
          athlete('Moon Star', 'Taijiquan', 'Bronze'),
          athlete('Anandi Rai', 'UD 48 KG', 'Bronze'),
          athlete('Abhishek Kumar', 'Changquan', 'Bronze'),
          athlete('Dhananjay Kumar', 'UD 48 KG', 'Bronze'),
        ],
      },
      {
        id: '68th-nsg-delhi',
        title: '68th National School Games, New Delhi 2024',
        level: 'National',
        athletes: [
          athlete('Aash Pahuja', 'UD 65 KG', 'Silver'),
          athlete('Kumkum Kumari', 'UD 40 KG', 'Bronze'),
          athlete('Priyanshu Kumari', 'UD 48 KG', 'Bronze'),
        ],
      },
      {
        id: '38th-national-games',
        title: '38th National Games, Uttarakhand',
        level: 'National',
        athletes: [athlete('Aprajeeta Mishra', 'Nanquan', 'Bronze')],
      },
      {
        id: 'aiu-chandigarh-2025',
        title: 'All India Inter University, Chandigarh University (Feb 2025)',
        level: 'National',
        athletes: [
          athlete('Aprajeeta Mishra', 'Nanquan, Nandao', '2 Bronze'),
          athlete('Shivam Kumar', 'Wingchun', 'Bronze'),
          athlete('Kiran Kumari', 'Double Weapon', 'Bronze'),
          athlete('Nikita Kumari', 'UD 56 KG', 'Bronze'),
          athlete('Nibha Kumari', 'UD 75 KG', 'Bronze'),
        ],
      },
      {
        id: 'khelo-senior-chhattisgarh',
        title: 'Khelo India Womens League Senior, Chhattisgarh (March 2025)',
        level: 'National',
        athletes: [
          athlete('Aprajeeta Mishra', 'Nanquan', 'Bronze'),
          athlete('Isha Mishra', 'Baguazhang', 'Bronze'),
          athlete('Nisha Kumari', 'Taijiquan', 'Bronze'),
        ],
      },
    ],
  },
  {
    id: '2025-26',
    label: 'Session: 2025-26',
    summary: 'Gold: 12 | Silver: 9 | Bronze: 26 | Total Medals: 47',
    events: [
      {
        id: 'khelo-junior-gujarat',
        title: 'Khelo India Womens League Junior, Gujarat (April 2025)',
        level: 'National',
        athletes: [
          athlete('Arpita Dash', 'Changquan', 'Gold'),
          athlete('Jiya Kumari', 'Taijiquan', 'Bronze'),
        ],
      },
      {
        id: '25th-subjunior-tamil-nadu',
        title: '25th Sub Junior National Wushu Championship, Tamil Nadu (May 2025)',
        level: 'National',
        athletes: [
          athlete('Arshad Khan', 'UD 42 KG', 'Bronze'),
          athlete('Shashi Kant Uadav', 'UD 32 KG', 'Bronze'),
          athlete('Aditya Raj', 'Wingchun', 'Bronze'),
          athlete('Vishes Mani Singh', 'Changquan', 'Bronze'),
        ],
      },
      {
        id: '34th-senior-jaipur',
        title: '34th Senior National Wushu Championship, Jaipur (June 2025)',
        level: 'National',
        athletes: [
          athlete('Shagun Singh', 'Wingchun', 'Gold'),
          athlete('Sapna Kumari', 'Nanquan / Jiti', '1 Silver, 1 Bronze'),
          athlete('Kritika Anand', 'Flexible Weapon', 'Silver'),
          athlete('Isha Mishra', 'Bhaguazhang, Jiti', '2 Bronze'),
          athlete('Puja Kumari', 'Shuanjian', 'Bronze'),
          athlete('Geshu Kumari', 'Single Weapon, Jiti', '2 Bronze'),
          athlete('Kumar Anand', 'Jiti', 'Bronze'),
          athlete('Rubab Rabbani', 'Jiti', 'Bronze'),
          athlete('Raja Kumar', 'Jiti', 'Bronze'),
        ],
      },
      {
        id: '24th-junior-hyderabad',
        title: '24th Junior National Wushu Championship, Hyderabad (July 2025)',
        level: 'National',
        athletes: [
          athlete('Arpita Dash', 'Changquan / Jianshu / Qiangshu', '3 Gold'),
          athlete('Aditya Kumar', 'Taijiquan / Taijjian', '2 Gold'),
          athlete('Jiya Kumari', 'Taijiquan', 'Silver'),
          athlete('Krishna Kumari', 'Wingchun', 'Bronze'),
          athlete('Pranshu Raj', 'UD 80 KG', 'Bronze'),
          athlete('Raj Kumar', 'UD 70 KG', 'Bronze'),
          athlete('Pankaj Nayan', 'UD 48 KG', 'Bronze'),
        ],
      },
      {
        id: '69th-nsg-srinagar',
        title: '69th National School Games, Srinagar',
        level: 'National',
        athletes: [
          athlete('Pankaj Nayan', 'UD 45 KG', 'Silver'),
          athlete('Raj Kumar', 'UD 70 KG', 'Silver'),
          athlete('Anandi Rai', 'UD 48 KG', 'Bronze'),
          athlete('Rushtan Singh', 'UD 65 KG', 'Bronze'),
        ],
      },
      {
        id: '69th-nsg-imphal',
        title: '69th National School Games, Imphal, Manipur 2025',
        level: 'National',
        athletes: [
          athlete('Basant Kumar', 'UD 56 KG', 'Bronze'),
          athlete('Abhi Kumar', 'UD 65 KG', 'Silver'),
        ],
      },
      {
        id: '10th-world-kungfu',
        title: '10th World Kungfu Championship, China (Oct 2025)',
        level: 'International',
        athletes: [athlete('Isha Mishra', 'Bhaguazhang', 'Bronze')],
      },
      {
        id: '9th-federation-cup',
        title: '9th Federation Cup, Chhattisgarh (Dec 2025)',
        level: 'National',
        athletes: [
          athlete('Arpita Dash', 'Changquan / Jianshu', '2 Gold'),
          athlete('Aditya Kumar', 'Taijiquan / Taijjian', '2 Gold'),
          athlete('Pallavi Kumari', 'Taijiquan', 'Gold'),
          athlete('Preet Raj', 'Nanquan', 'Silver'),
          athlete('Kritika Anand', 'Flexible Weapon', 'Silver'),
          athlete('Anandi Rai', 'UD 48 KG', 'Silver'),
          athlete('Krishna Kumari', 'Wingchung', 'Bronze'),
          athlete('Pranshu Raj', 'UD 80 KG', 'Bronze'),
          athlete('Pankaj Nayan', 'UD 48 KG', 'Bronze'),
          athlete('Prabhu Raj', 'UD 85 KG', 'Bronze'),
        ],
      },
    ],
  },
]
