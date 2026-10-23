/**
 * ─── GLOBAL CONFIGURATION ───────────────────────────────────────────────────
 * All site-wide settings live here.
 */

// Audio — if the file is missing the music button is hidden gracefully
export const MUSIC_SRC = '/audio/bg_song.mp3';

// Groom & Bride individual portrait photos
export const COUPLE_PHOTOS = {
  groom: '/images/shubham_solo.jpeg',
  bride: '/images/parul_solo.jpeg',
};

// Host details & Residence
export const HOST_FAMILY = {
  invitationFrom: 'Mrs. & Mr. Sudhir Kumar Sharma',
  invitationFromHi: 'श्रीमती एवं श्री सुधीर कुमार शर्मा',
  address: 'H.No. 5, Gali No. 1, Prem Nagar Colony, Near Manoj Steel, Banna Devi, Aligarh',
  addressHi: 'मकान नं. 5, गली नं. 1, प्रेम नगर कॉलोनी, मनोज स्टील के पास, बन्नादेवी, अलीगढ़',
  phones: ['9456404490', '9412733977', '8532954590', '9999751920'],
};

// Primary RSVP WhatsApp (E.164 format, no spaces)
export const RSVP_PHONE = '919456404490';
export const RSVP_PHONES = ['9456404490', '9412733977', '8532954590', '9999751920'];

// Wedding hashtag
export const HASHTAG = '#ShubhamWedParul';

// Main wedding date-time (ISO, IST = UTC+5:30)
// Starts with Ghudchadi at 12:00 PM on 20 November 2026
export const WEDDING_DATE = new Date('2026-11-20T12:00:00+05:30');

// Reception date-time (ISO, IST = UTC+5:30)
// 21 November 2026, 4:00 PM
export const RECEPTION_DATE = new Date('2026-11-21T16:00:00+05:30');

// Google Maps links for venues
export const VENUE_SWARNBHOOMI = {
  name: 'Swarnbhoomi',
  nameHi: 'स्वर्णभूमि',
  address: '7th milestone, Near khareswar mandir, khair road, Aligarh, Uttar Pradesh 202140',
  addressHi: '7वाँ मील का पत्थर, खेरेश्वर मंदिर के पास, खैर रोड, अलीगढ़, उ.प्र. 202140',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Swarnbhoomi+7th+milestone+Near+khareswar+mandir+khair+road+Aligarh+Uttar+Pradesh+202140',
};

export const VENUE_MANGAL_DHAM = {
  name: 'Mangal Dham',
  nameHi: 'मंगल धाम',
  address: 'Mangal Vihar Colony, Kamakhaya Mandir Road, Bannadevi, Aligarh',
  addressHi: 'मंगल विहार कॉलोनी, कामाख्या मंदिर रोड, बन्नादेवी, अलीगढ़',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Mangal+Dham+Mangal+Vihar+Colony+Kamakhaya+Mandir+Road+Bannadevi+Aligarh',
};

// Default map link pointing to Shaadi venue
export const MAP_LINK = VENUE_SWARNBHOOMI.mapLink;

// OG / Social preview image
export const OG_IMAGE = '/images/couple/couple-09.jpg';

// Feature flags
export const FEATURES = {
  music: true,
  cursor: true,
  threeJs: true,
  countdown: true,
  rsvp: true,
  gallery: true,
  addToCalendar: true,
};

