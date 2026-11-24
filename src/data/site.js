// ─────────────────────────────────────────────────────────────
//  SITE SETTINGS — edit this one file to update contact details
// ─────────────────────────────────────────────────────────────
export const site = {
  name: 'Exotic Infotech',
  tagline: 'Social Media & Digital Marketing',
  // TODO: replace with your real contact details
  phone: '+91 00000 00000',
  whatsapp: '910000000000', // digits only, with country code (used for wa.me links)
  email: 'hello@yourdomain.com',
  address: 'Bharuch, Gujarat, India',
  serviceArea: 'Bharuch, Ankleshwar & within 25 km of Bharuch',
  hours: 'Mon – Sat, 10:00 AM – 7:00 PM',
  socials: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    youtube: 'https://youtube.com/',
    linkedin: 'https://linkedin.com/',
  },
}

export const waLink = (text = 'Hi Exotic Infotech, I would like to know more about your digital marketing packages.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`

// Unsplash photo helper (free-to-use images). Replace with your own photos any time.
export const img = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`

export const photos = {
  people: [
    '1494790108377-be9c29b29330',
    '1506794778202-cad84cf45f1d',
    '1534528741775-53994a69daeb',
    '1500648767791-00dcc994a43e',
    '1524504388940-b1c1722653e1',
    '1539571696357-5a69c17a67c6',
    '1531123897727-8f129e1688ce',
    '1507003211169-0a1dd7228f2d',
    '1544005313-94ddf0286df2',
    '1517841905240-472988babdf9',
    '1529626455594-4ff0802cfb7e',
    '1438761681033-6461ffad8d80',
  ],
  social: '1611162617474-5b21e879e113',
  analytics: '1460925895917-afdab827c52f',
  dashboard: '1551288049-bebda4e38f71',
  team: '1522202176988-66273c2fd55f',
  teamMeeting: '1552664730-d307ca884978',
  office: '1556761175-5973dc0f32e7',
  camera: '1516035069371-29a1b244cc32',
  drone: '1473968512647-3e447244af8f',
  food: '1504674900247-0877df9cc836',
  restaurant: '1517248135467-4c7edcad34c4',
  retail: '1441986300917-64674bd600d8',
  product: '1523275335684-37898b6baf30',
  headphones: '1505740420928-5e560c06d30e',
  shoe: '1542291026-7eec264c27ff',
  gym: '1534438327276-14e5300c3a48',
  realEstate: '1600596542815-ffad4c1539a9',
  clinic: '1576091160399-112ba8d25d1d',
  education: '1523050854058-8df90110c9f1',
  phoneHand: '1512941937669-90a1b58e7e9c',
}
