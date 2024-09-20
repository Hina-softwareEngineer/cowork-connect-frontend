const fieldMapping = {
  'duration': 'duration',
  'price': 'price',
  'available': 'available',
  'desks': 'desks',
  'similar': 'similar',
  'exec_rooms': 'exec_rooms',
  'meeting_rooms': 'meeting_rooms',
  'name': 'name',
  'openingDate': 'opening_date',
  'description': 'description',
  'email': 'email',
  'phone': 'phone',
  'websiteUrl': 'website_url',
  'image': 'image',
  'locationName': 'location_name',
  'unitNumber': 'unit_number',
  'addressLine1': 'address_line1',
  'addressLine2': 'address_line2',
  'area': 'area',
  'zipCode': 'zip_code',
  'city': 'city',
  'country': 'country',
  'numberOfMeetingRooms': 'number_of_meeting_rooms',
  'roomData': 'room_data',
  'openingTime': 'opening_time',
  'closingTime': 'closing_time',
  'isSaturdayOpen': 'is_saturday_open',
  'isSundayOpen': 'is_sunday_open',
  'size': 'size',
  'privateOffices': 'private_offices',
  'floors': 'floors',
  'hotDeskPrices': 'hot_desks',
  'dedicatedDeskPrices': 'dedicated_desks',
  'priceDesks': 'price_desks',
  'pricePrivateOffices': 'price_private_offices',
  'priceFloors': 'price_floors',
  'mentorship': 'mentorship',
  'domain': 'domain',
  'mentors': 'mentors',

  'amenity': 'name',
  'room_name': 'name',
  'operationalTimings': 'operational_timings'

};

export function convertJsToPython(jsData) {
  function transformObject(obj, mapping) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        mapping[key] || key,
        transformNested(value, mapping),
      ])
    );
  }

  function transformNested(data, mapping) {
    if (Array.isArray(data)) {
      return data.map(item => transformNested(item, mapping));
    } else if (typeof data === 'object' && data !== null) {
      return transformObject(data, mapping);
    }
    return data;
  }

  return transformNested(jsData, fieldMapping);
}


export function convertToFormData(obj, form = new FormData(), parentKey = '') {
  if (obj && typeof obj === 'object' && !Array.isArray(obj) && !(obj instanceof File)) {
    Object.keys(obj).forEach(key => {
      const fullKey = parentKey ? `${parentKey}[${key}]` : key;
      convertToFormData(obj[key], form, fullKey);
    });
  } else if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      const fullKey = `${parentKey}[${index}]`;
      convertToFormData(item, form, fullKey);
    });
  } else {
    form.append(parentKey, obj);
  }
  return form;
}