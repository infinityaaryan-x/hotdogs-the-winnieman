// Single source of business facts — replace here once the owner confirms details.
export const BUSINESS = {
  name: "Hotdogs the Winnieman",
  address: "15244 Vanowen St, Van Nuys, CA 91405, United States",
  addressLines: ["15244 Vanowen St", "Van Nuys, CA 91405", "United States"],
  instagramHandle: "@hotdog_the_winnieman_22",
  instagramUrl: "https://www.instagram.com/hotdog_the_winnieman_22/",
  bio: "Algo bien y fresh todos los Dias",
};

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address)}`;
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.address)}&output=embed`;
