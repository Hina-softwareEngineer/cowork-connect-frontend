import dayjs from 'dayjs';

const desks = {
  duration: '',
  price: '',
  available: true,
};

export const privateOffices = {
  desks: '',
  price: '',
  duration: 'month',
  similar: '',
};

export const floorData = {
  exec_rooms: '',
  meeting_rooms: '',
  desks: '',
  duration: 'month',
  price: '',
  similar: ''
};

export const amenities = {
  classic_basics: {
    label: 'Classic Basics',
    facilities: [
      { name: 'high-speed-wifi', label: 'High-Speed WIFI' },
      { name: 'heating', label: 'Heating' },
      { name: 'air-conditioning', label: 'Air Conditioning' },
    ],
  },
  seating: {
    label: 'Seating',
    facilities: [
      { name: 'standing-desks', label: 'Standing Desks' },
      { name: 'beanbags', label: 'Beanbags' },
      { name: 'ergonomic-chairs', label: 'Ergonomic Chairs' },
      { name: 'hammocks', label: 'Hammocks' },
      { name: 'bosu-ball-chairs', label: 'Bosu Ball Chairs' },
    ],
  },
  community: {
    label: 'Community',
    facilities: [
      { name: 'events', label: 'Events' },
      { name: 'workshops', label: 'Workshops' },
      { name: 'community-lunches', label: 'Community Lunches' },
      { name: 'facebook-group-for-members', label: 'Facebook Group for Members' },
      { name: 'slack-channel-for-members', label: 'Slack Channel For Members' },
      { name: 'community-drinks', label: 'Community Drinks' },
      { name: 'mentorship-programs', label: 'Mentorship Programs' },
      { name: 'community-app', label: 'Community App' },
      { name: 'pitching-events', label: 'Pitching events' },
      { name: 'incubator-programs', label: 'Incubator programs' },
      { name: 'accelerator-programs', label: 'Accelerator programs' },
      { name: 'organized-sports-team', label: 'Organized Sports Team' },
      { name: 'toastmasters', label: 'Toastmasters' },
    ],
  },
  equipment: {
    label: 'Equipment',
    facilities: [
      { name: 'dual-single-monitors', label: 'Dual/Single Monitors' },
      { name: 'sound-recording-equipment', label: 'Sound Recording Equipment' },
      { name: 'video-recording-equipment', label: 'Video Recording Equipment' },
      { name: 'printer', label: 'Printer' },
      { name: 'scanner', label: 'Scanner' },
      { name: 'photocopier', label: 'Photocopier' },
      { name: '3d-printer', label: '3D Printer' },
      { name: 'computers-pcs', label: 'Computers (PCs)' },
      { name: 'computers-macs', label: 'Computers (Macs)' },
      { name: 'projector', label: 'Projector' },
      { name: 'apple-tv', label: 'Apple TV' },
      { name: 'chromecast', label: 'Chromecast' },
      { name: 'microphone', label: 'Microphone' },
      { name: 'photo-studio', label: 'Photo Studio' },
      { name: 'greenscreen', label: 'Greenscreen' },
      { name: 'recording-studio', label: 'Recording Studio' },
      { name: 'professional-lighting-equipment', label: 'Professional Lighting Equipment' },
      { name: 'drone', label: 'Drone' },
      { name: 'ar-equipment', label: 'AR Equipment' },
      { name: 'screen-printer', label: 'Screen Printer' },
    ],
  },
  relax_zones: {
    label: 'Relax Zones',
    facilities: [
      { name: 'outdoor-terrace', label: 'Outdoor Terrace' },
      { name: 'swimming-pool', label: 'Swimming Pool' },
      { name: 'lounge-chill-out-area', label: 'Lounge/Chill-out Area' },
      { name: 'nap-room', label: 'Nap Room' },
      { name: 'yoga-studio', label: 'Yoga Studio' },
      { name: 'meditation-room', label: 'Meditation Room' },
    ],
  },
  facilities: {
    label: 'Facilities',
    facilities: [
      { name: 'kitchen', label: 'Kitchen' },
      { name: 'podcasting-room', label: 'Podcasting Room' },
      { name: 'co-living-accommodation', label: 'Co-Living Accommodation' },
      { name: 'childcare', label: 'Childcare' },
      { name: 'makerspace', label: 'Makerspace' },
      { name: 'personal-lockers', label: 'Personal Lockers' },
      { name: 'showers', label: 'Showers' },
      { name: 'phone-booths', label: 'Phone Booths' },
      { name: 'event-space-for-rent', label: 'Event Space For Rent' },
      { name: 'nearby-airbnb', label: 'Nearby Airbnb' },
      { name: 'onsite-airbnb', label: 'Onsite Airbnb' },
      { name: 'retail-space', label: 'Retail Space' },
    ],
  },
  cool_stuff: {
    label: 'Cool Stuff',
    facilities: [
      { name: 'pool-table', label: 'Pool Table' },
      { name: 'table-football-fooshall', label: 'Table Football/Fooshall' },
      { name: 'trampoline', label: 'Trampoline' },
      { name: 'mini-golf-course', label: 'Mini Golf Course' },
      { name: 'free-bear', label: 'Free Beer' },
      { name: 'pet-friendly', label: 'Pet-Friendly' },
      { name: 'gym', label: 'Gym' },
      { name: 'free-wine', label: 'Free Wine' },
      { name: 'board-games', label: 'Board Games' },
      { name: 'bocce-ball', label: 'Bocce Ball' },
      { name: 'shuffleboard', label: 'Shuffleboard' },
      { name: 'darts', label: 'Darts' },
      { name: 'art-gallery', label: 'Art Gallery' },
      { name: 'karaoke', label: 'Karaoke' },
      { name: 'arcade-games', label: 'Arcade Games' },
      { name: 'volleyball-court', label: 'Volleyball Court' },
      { name: 'laundry-service', label: 'Laundry Service' },
      { name: 'massages', label: 'Massages' },
    ],
  },
  transportation: {
    label: 'Transportation',
    facilities: [
      { name: 'parking', label: 'Parking' },
      { name: 'bike-parking', label: 'Bike Parking' },
      { name: 'car-share', label: 'Car Share' },
      { name: '5-minute-walk-from-public-transit', label: '5 Minute Walk From Public Transit' },
      { name: '10-minute-walk-from-public-transit', label: '10 Minute Walk From Public Transit' },
      { name: 'plug-in-for-electric-cars', label: 'Plug in For Electric Cars' },
    ],
  },
  accessibility: {
    label: 'Accessibility',
    facilities: [
      { name: 'wheelchair-accessibility', label: 'Wheelchair Accessibility' },
      { name: '24hr-member-access', label: '24hr Member Access' },
    ],
  },
  catering: {
    label: 'Catering',
    facilities: [
      { name: 'free-drinking-water', label: 'Free Drinking Water' },
      { name: 'alcohol-available-for-purchase', label: 'Alcohol Available For Purchase' },
      { name: 'free-snacks', label: 'Free Snacks' },
      { name: 'catering-kitchen', label: 'Catering Kitchen' },
      { name: 'snacks-available-for-purchase', label: 'Snacks Available For Purchase' },
      { name: 'onsite-restaurant', label: 'Onsite Restaurant' },
    ],
  },
  caffeine_fix: {
    label: 'Caffeine Fix',
    facilities: [
      { name: 'free-tea', label: 'Free Tea' },
      { name: 'free-coffee', label: 'Free Coffee' },
      { name: 'onsite-cafe', label: 'Onsite Cafe' },
      { name: 'onsite-barista', label: 'Onsite Barista' },
      { name: 'coffee-for-purchase', label: 'Coffee For Purchase' },
    ],
  },
};


export const mentorship = {
  domain: 0,
  mentors: '',
}

export const initialFormData = {
  description: {
    name: '',
    openingDate: dayjs(),
    description: '',
    email: '',
    phone: '',
    websiteUrl: '',
    image: '',
  },
  location: {
    locationName: '',
    unitNumber: '',
    addressLine1: '',
    addressLine2: '',
    area: '',
    zipCode: '',
    city: '',
    country: '',
  },
  amenities: [],
  meetingRooms: {
    numberOfMeetingRooms: 0,
    roomData: [],
  },
  operationalTimings: {
    openingTime: dayjs(),
    closingTime: dayjs(),
    isSaturdayOpen: false,
    isSundayOpen: false,
  },
  capacity: {
    desks: '',
    size: '',
    privateOffices: '',
    floors: '',
  },
  priceDesks: {
    hotDeskPrices: ['day', 'month', 'year'].map(dur => ({ ...desks, duration: dur })),
    dedicatedDeskPrices: ['month'].map(dur => ({ ...desks, duration: dur })),
  },
  pricePrivateOffices: [{ ...privateOffices }],
  priceFloors: [{ ...floorData }],
  mentorship: [{ ...mentorship }],
};


export const mentorship_fields = [
  "Software Development",
  "Data Science",
  "Product Management",
  "UI/UX Design",
  "Digital Marketing",
  "Project Management",
  "Entrepreneurship",
  "Career Coaching",
  "Cybersecurity",
  "Machine Learning",
  "DevOps",
  "Cloud Computing",
  "Business Analysis",
  "Sales and Business Development",
  "Finance and Accounting",
  "Customer Success",
  "Human Resources",
  "Public Speaking",
  "Leadership Skills",
  "Networking Strategies",
  "Work-Life Balance",
  "Personal Branding",
  "Negotiation Skills",
  "Time Management",
  "Emotional Intelligence",
];