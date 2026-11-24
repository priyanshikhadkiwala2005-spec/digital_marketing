import { photos } from './site'

export const services = [
  {
    id: 'social',
    icon: 'social',
    title: 'Social Media Management',
    short: 'Consistent posting, engagement and growth on Instagram & Facebook — without the stress.',
    includes: ['Content calendar', 'Publishing', 'Captions & hashtags', 'Monitoring', 'Monthly report'],
    from: '₹4,000 / account / month',
    image: photos.social,
  },
  {
    id: 'design',
    icon: 'design',
    title: 'Content & Creative Design',
    short: 'Scroll-stopping posts, carousels, stories and festival creatives that build attention and trust.',
    includes: ['Static posts', 'Carousels', 'Stories', 'Festival creatives', 'Branding'],
    from: '₹350 / design',
    image: photos.product,
  },
  {
    id: 'video',
    icon: 'video',
    title: 'Reels & Video Production',
    short: 'Reels, promotional videos and cinematic films — shot, edited and ready to post.',
    includes: ['Reel editing', 'Shoot + edit', 'Promo videos', 'Corporate films', 'Motion graphics'],
    from: '₹400 / reel edit',
    image: photos.camera,
  },
  {
    id: 'photo',
    icon: 'photo',
    title: 'Photography & Drone',
    short: 'Product, food, interior, event and aerial shoots across Bharuch & Ankleshwar.',
    includes: ['Product shoots', 'Food shoots', 'Brand shoots', 'Drone aerials', 'Events'],
    from: '₹2,000 / session',
    image: photos.drone,
  },
  {
    id: 'whatsapp',
    icon: 'whatsapp',
    title: 'WhatsApp Business',
    short: 'Profile, catalogue, quick replies and status creatives that turn followers into enquiries.',
    includes: ['Profile setup', 'Catalogue', 'Quick replies', 'Labels', 'Click-to-WhatsApp'],
    from: 'Included in packages',
    image: photos.phoneHand,
  },
  {
    id: 'gbp',
    icon: 'google',
    title: 'Google Business Profile',
    short: 'Get found by local customers on Google Search and Maps with an optimised, active profile.',
    includes: ['Setup', 'Verification help', 'Weekly posts', 'Review replies', 'Local SEO'],
    from: '₹1,200 / location',
    image: photos.restaurant,
  },
  {
    id: 'ads',
    icon: 'ads',
    title: 'Paid Ads (Meta & Google)',
    short: 'Turn views into revenue with targeted Facebook, Instagram and Google ad campaigns.',
    includes: ['Campaign setup', 'Targeting', 'Keyword planning', 'Optimisation', 'Reporting'],
    from: 'Flat ₹500 / ad',
    image: photos.analytics,
  },
  {
    id: 'influencer',
    icon: 'influencer',
    title: 'Influencer & Telegram',
    short: 'Local creator collaborations, city-page features and Telegram community promotions.',
    includes: ['Creator research', 'Outreach', 'Campaign planning', 'Telegram promos', 'Reporting'],
    from: '₹800 / collaboration',
    image: photos.people[4],
  },
]

export const platforms = [
  'Instagram', 'Facebook', 'WhatsApp Business', 'Google Business', 'YouTube', 'Telegram', 'LinkedIn', 'Meta Ads', 'Google Ads',
]

export const industries = [
  { tag: 'Food & Hospitality', title: 'Restaurants & Cafés', text: 'Food photography, menu design, festival offers and reels that bring walk-ins and table bookings.', image: photos.food },
  { tag: 'Retail', title: 'Fashion & Retail Stores', text: 'Product shoots, offer creatives and WhatsApp catalogues that turn browsing into orders.', image: photos.retail },
  { tag: 'Fitness', title: 'Gyms & Fitness Studios', text: 'Gym photography, trainer reels and community-driven content that attracts new members.', image: photos.gym },
  { tag: 'Real Estate', title: 'Builders & Property', text: 'Drone aerials, walkthrough videos and lead-generation campaigns for every new project.', image: photos.realEstate },
  { tag: 'Healthcare', title: 'Clinics & Healthcare', text: 'Trust-building content, Google Business Profile management and review response support.', image: photos.clinic },
  { tag: 'Education', title: 'Schools & Coaching', text: 'Admission campaigns, result creatives and YouTube videos that reach parents and students.', image: photos.education },
]

export const facts = [
  { n: 12, suffix: '', l: 'Posts every month in Social Premium' },
  { n: 4, suffix: '', l: 'Videos a month — reels + promo videos' },
  { n: 500, prefix: '₹', l: 'Flat management fee per ad' },
  { n: 130, suffix: '+', l: 'Individual services on our rate card' },
]

export const whyUs = [
  { t: 'One team for everything', d: 'Social media, WhatsApp Business, design, video, shoots, Google Business Profile and strategy — all managed by one team.', img: photos.teamMeeting },
  { t: 'Transparent, fixed pricing', d: 'Fixed monthly packages, a published rate card with 130+ services and a flat ₹500 per ad fee. No hidden surprises.', img: photos.dashboard },
  { t: 'Local shoots, real content', d: 'Our team shoots on location across Bharuch, Ankleshwar and nearby — products, food, interiors, events and drone aerials.', img: photos.camera },
  { t: 'Clear direction every month', d: 'Competitor analysis, analytics reports and an improvement plan so every month gets better than the last.', img: photos.analytics },
]

export const process = [
  { n: '01', t: 'Brief & Audit', d: 'We understand your business, audit your current accounts and study up to 3 competitors.' },
  { n: '02', t: 'Strategy & Calendar', d: 'Content pillars, tone, posting rhythm and a monthly calendar — shared by the 25th of the preceding month.' },
  { n: '03', t: 'Create & Shoot', d: 'Designs, reels, AI creatives and on-location shoots, each with two revision rounds.' },
  { n: '04', t: 'Approve & Publish', d: 'Nothing goes live without your approval. We schedule, publish and monitor every post.' },
  { n: '05', t: 'Report & Improve', d: 'Monthly analytics with reach, engagement and top content — plus what we will improve next.' },
]

export const faqs = [
  { q: 'How long is each package?', a: 'All three packages run for one month. You can continue month to month or upgrade whenever your business needs more.' },
  { q: 'Is the ad budget included in the package price?', a: 'No. In every package the Meta Ads and Google Ads budget is decided and paid by you directly to the platform. Our management fee is a flat ₹500 per ad, calculated separately for Meta and Google.' },
  { q: 'Are prices inclusive of GST?', a: 'All package prices and individual service rates are exclusive of applicable GST.' },
  { q: 'How do payments work?', a: '100% advance payment is required for packages, add-ons and individual services. Work starts once the full payment is received.' },
  { q: 'How many revisions do I get?', a: 'Each creative includes two revision rounds. Extra rounds are ₹150 (design) or ₹300 (video).' },
  { q: 'Do you come for shoots outside Bharuch?', a: 'Yes. Our standard service area is Bharuch, Ankleshwar and within 25 km of Bharuch. Beyond that, travel is charged at ₹12 per km, and outstation shoots (Vadodara, Surat, Ahmedabad etc.) are quoted with prior approval.' },
  { q: 'Do you guarantee followers or sales?', a: 'No agency can honestly guarantee a specific number of followers, leads or sales. Results depend on your industry, audience, competition and platform algorithms — what we guarantee is consistent, quality work and clear monthly reporting.' },
]

export const posts = [
  {
    slug: 'ad-budget-vs-management-fee',
    title: 'Ad Budget vs Management Fee: How Paid Ads Are Really Billed',
    excerpt: 'Two separate parts, one simple rule. Here is exactly where your advertising money goes.',
    date: 'Nov 18, 2026',
    read: '4 min read',
    tag: 'Paid Ads',
    image: photos.analytics,
    body: [
      { h: 'Two separate parts', p: 'Every paid campaign has two costs that should never be mixed up. The first is the advertising budget — the money Meta or Google actually spends to show your ad. The second is the management fee — what an agency charges to plan, set up, monitor and report on that ad.' },
      { h: 'Your budget stays in your control', p: 'At Exotic Infotech the ad budget is decided by you and paid by you, directly on the ad platform. It is never part of a package price, so you can raise or pause spending at any time without renegotiating anything with us.' },
      { h: 'A flat fee per ad', p: 'Our management fee is a flat ₹500 per ad, whatever the budget. It covers setup, management and reporting, and is calculated separately for Meta and Google. For example, 3 Meta ads with a ₹20,000 budget means a management fee of ₹1,500 — and 4 Google ads with a ₹30,000 budget means ₹2,000.' },
      { h: 'Why this matters', p: 'Percentage-of-spend pricing quietly grows as your budget grows. A flat fee keeps the incentive simple: we focus on making each ad work, not on pushing you to spend more.' },
    ],
  },
  {
    slug: 'instagram-to-whatsapp-enquiries',
    title: 'Turning Instagram Followers into WhatsApp Enquiries',
    excerpt: 'Likes are nice. Enquiries pay the bills. Connect your feed to your WhatsApp Business inbox.',
    date: 'Nov 10, 2026',
    read: '5 min read',
    tag: 'WhatsApp',
    image: photos.phoneHand,
    body: [
      { h: 'Make WhatsApp the next step', p: 'Most local customers would rather send a quick WhatsApp message than fill out a form. Add click-to-WhatsApp links on your Instagram, Facebook and Google Business Profile so every post has an obvious next step.' },
      { h: 'Set up the basics properly', p: 'A complete WhatsApp Business profile — description, hours, address and website link — builds instant trust. Greeting and away messages make sure nobody is left waiting without a reply.' },
      { h: 'Use the catalogue', p: 'A WhatsApp catalogue lets customers browse your products or services without leaving the chat. Keep it updated every month along with your social content.' },
      { h: 'Reply faster with quick replies and labels', p: 'Quick replies answer common questions in one tap, and labels help you organise new enquiries, follow-ups and confirmed orders so no lead slips through.' },
    ],
  },
  {
    slug: 'google-business-profile-local-customers',
    title: 'Google Business Profile: The Free Listing Local Customers Check First',
    excerpt: 'Before they visit, they search. Make sure what they find on Google is accurate and active.',
    date: 'Nov 02, 2026',
    read: '4 min read',
    tag: 'Local SEO',
    image: photos.restaurant,
    body: [
      { h: 'Your first impression is on Google', p: 'When someone searches for a café, clinic or store nearby, your Google Business Profile often appears before your website or social pages. Hours, photos, reviews and directions all live here.' },
      { h: 'Accuracy builds trust', p: 'Wrong hours or an old phone number cost real customers. Keep your categories, services, holiday timings and contact details up to date.' },
      { h: 'Stay active', p: 'Weekly posts, fresh photos and offer updates signal an active business. Replying to every review — positive or negative — shows customers that you care.' },
      { h: 'Verification takes patience', p: 'Google decides verification approval and timing. We guide you through each step so your profile goes live as smoothly as possible.' },
    ],
  },
  {
    slug: 'reels-vs-static-posts',
    title: 'Reels vs Static Posts: What Should Your Business Post Each Month?',
    excerpt: 'The right mix of reels, carousels and stories for a busy local business.',
    date: 'Oct 25, 2026',
    read: '5 min read',
    tag: 'Content',
    image: photos.camera,
    body: [
      { h: 'Reels for reach', p: 'Short videos are the fastest way to reach people who do not follow you yet. Even one or two good reels a month can introduce your brand to new local audiences.' },
      { h: 'Static posts and carousels for trust', p: 'Offers, product details, prices and testimonials work best as clean static posts or swipeable carousels. They are easy to save and share.' },
      { h: 'Stories for everyday connection', p: 'Stories keep you visible to existing followers — new arrivals, behind-the-scenes moments and reminders for ongoing offers.' },
      { h: 'A simple monthly mix', p: 'A growing business can start with 9 posts, 2 reels and 8 stories a month. Brands ready to scale can move to 12 posts, 4 videos and 12 stories, with shoots and campaigns built in.' },
    ],
  },
]
