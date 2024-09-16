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
    hotDeskPrices: ['Day', 'Month', 'Year'].map(dur => ({ ...desks, duration: dur })),
    dedicatedDeskPrices: ['Month'].map(dur => ({ ...desks, duration: dur })),
  },
  pricePrivateOffices: [{ ...privateOffices }],
  priceFloors: [{ ...floorData }],
  mentorship: [{ ...mentorship }],
};