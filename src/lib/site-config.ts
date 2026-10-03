// Central, editable source of truth for all Patrizio site content.
// Update copy, contact details, hours, services, prices and testimonials here —
// components should not hard-code business content.

export type DayHours = {
  label: string;
  hours: string;
  closed?: boolean;
};

export type Service = {
  name: string;
  description: string;
};

export type TeamMember = {
  name: string;
  role: string;
};

export type ProductGroup = {
  title: string;
  items: string[];
};

export type PriceListItem = {
  name: string;
  price: string;
};

export type Testimonial = {
  quote: string;
  author: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type LocalShop = {
  name: string;
  url: string;
};

export const siteConfig = {
  business: {
    name: "Patrizio Gentlemen's Barber Shop",
    shortName: "Patrizio",
    tagline: "Classic barbering, done properly.",
    establishedLabel: "Est. 1991",
    locationLabel: "Redland, Bristol. Established 1991.",
  },

  address: {
    line1: "23 Lower Redland Road",
    area: "Redland",
    city: "Bristol",
    postcode: "BS6 6TB",
    full: "23 Lower Redland Road, Redland, Bristol, BS6 6TB",
  },

  contact: {
    phoneDisplay: "0117 923 9220",
    phoneHref: "tel:+441179239220",
    // TODO: no confirmed public email address exists yet — add one before launch.
    email: null as string | null,
  },

  // TODO: replace "#" with the real online booking URL before launch.
  // Every "Book" button in the site must reference this single value.
  bookingUrl: "#",

  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("23 Lower Redland Road, Redland, Bristol, BS6 6TB"),

  nav: [
    { label: "Gallery", href: "#gallery" },
    { label: "Visit", href: "#visit" },
    { label: "Services", href: "#services" },
  ],

  hero: {
    label: "Redland · Bristol · Est. 1991",
    title: "Patrizio",
    subtitle: "Gentlemen's Barber Shop",
    body: "A family-run barber with a classic 1930s spirit. Traditional cuts, beard grooming and shaping, done properly.",
    primaryCta: "Book an appointment",
    secondaryCta: "Get directions",
    walkInNotice: "Walk-ins welcome",
  },

  hours: [
    { label: "Monday – Friday", hours: "9:00am – 6:00pm" },
    { label: "Saturday", hours: "9:00am – 5:30pm" },
    { label: "Sunday & bank holidays", hours: "Closed", closed: true },
  ] satisfies DayHours[],

  // Verbatim from the existing patriziobarbershop.co.uk homepage copy.
  about: {
    heading: "Patrizio Gentlemen's Barber Shop",
    body: "Patrizio Gentlemens Barber Shop in Bristol is a family run business that has a classic 1930's theme. We are located in Redland, Bristol, BS6 and have been established for over 25 years. All our barbers have extensive knowledge and experience in cutting men's hair. We offer a range of different styles from classic men's barbering and men's haircuts based on your requirements. We also offer beard grooming and beard shaping. No appointments needed! If you have any questions then call us on 0117 923 9220.",
  },

  // Verbatim "Travel by Train" / "Travel by Car" copy from the existing site.
  travel: {
    train:
      "We are just a 10 minute walk from the Clifton Down Train Station, we are just off Whiteladies Road at the bottom of Blackboy Hill in Redland. You will see Tesco on the corner as you turn right.",
    car: "Pay & display parking is now available past the Electric Bike shop on Lower Redland Road with 30 mins free parking. There is also pay & display parking near Wild Oats and Tesco and on Exeter Buildings with 30 minutes free parking. Please obtain a ticket from the machines for the 30 minutes free parking. There's limited parking is on Whiteladies Rd, Blackboy Hill and surrounding areas.",
  },

  walkInNotice:
    "No appointments needed! If you have any questions then call us on 0117 923 9220.",

  services: [
    {
      name: "Haircuts",
      description:
        "Classic and contemporary men's haircuts, cut with care and finished properly.",
    },
    {
      name: "Beard grooming",
      description:
        "Beard trims and conditioning to keep things neat between visits.",
    },
    {
      name: "Beard shaping",
      description:
        "Precise shaping around the lines that suit your face and style.",
    },
  ] satisfies Service[],

  // "Meet the Bristol Barbers" — verbatim roles from the existing site.
  team: [
    { name: "Sergio", role: "Barber" },
    { name: "Patrizio", role: "The Owner" },
    { name: "Marco", role: "Barber" },
  ] satisfies TeamMember[],

  // Verbatim product names from the existing site's "Products" section.
  productGroups: [
    {
      title: "Hair products",
      items: [
        "Black and White",
        "American Bay Rum",
        "Sweet Georgia Brown",
        "Red Dax",
        "Blue Dax",
        "Purple Dax",
        "Black and White Formula",
      ],
    },
    {
      title: "Beard & shaving products",
      items: [
        "Italian Proraso Shaving Cream",
        "German Merkur Razors",
        "Styptic Pencil for treating small cuts",
        "Cyril R Salter Shaving Tablets",
        "Cut Throat Focus Razors and Blades",
      ],
    },
  ] satisfies ProductGroup[],

  // Prices are not yet confirmed by the shop — every entry must stay a
  // placeholder until the owner supplies real, published prices.
  priceList: [
    { name: "Haircut", price: "Price to be confirmed" },
    { name: "Beard grooming", price: "Price to be confirmed" },
    { name: "Beard shaping", price: "Price to be confirmed" },
    { name: "Haircut & beard combo", price: "Price to be confirmed" },
  ] satisfies PriceListItem[],

  // Verbatim testimonials copied from the existing site.
  testimonials: [
    {
      quote:
        "Pat and his lads are always friendly and provide great conversion whilst getting my hair cut. They always cut it based on my requirements but are always willing to provide suggestions on changes to modern styles.",
      author: "Mike, Redland",
    },
    {
      quote:
        "I have been going to Patrizio for over 4 years now. Excellent barber shop with a old italian interior design, always friendly banter and the family who run it always provide a good quality hair cut.",
      author: "Phil, Bristol",
    },
  ] satisfies Testimonial[],

  // Temporary pitch photos sourced from the existing live site — see
  // docs/source-assets.md and docs/asset-rights.md.
  galleryImages: [
    {
      src: "/assets/source/team-panorama.jpg",
      alt: "Sergio, Patrizio and Marco stood together inside the Patrizio barbershop",
    },
    {
      src: "/assets/source/interior-shop-IMGP8899.jpg",
      alt: "Inside the Patrizio barbershop, showing the classic barber chairs and mirrors",
    },
    {
      src: "/assets/source/product-red-dax-IMGP8868.jpg",
      alt: "Red Dax hair product on display in the shop",
    },
    {
      src: "/assets/source/product-sweet-georgia-brown-IMGP8878.jpg",
      alt: "Sweet Georgia Brown hair product on display in the shop",
    },
    {
      src: "/assets/source/product-blue-dax-IMGP8869.jpg",
      alt: "Blue Dax hair product on display in the shop",
    },
    {
      src: "/assets/source/product-purple-dax-IMGP8867.jpg",
      alt: "Purple Dax hair product on display in the shop",
    },
  ] satisfies GalleryImage[],

  localShops: [
    { name: "Wild Oats Natural Foods", url: "http://woats.co.uk/" },
    {
      name: "Redland Treatment Rooms",
      url: "http://redlandtreatmentrooms.co.uk/",
    },
  ] satisfies LocalShop[],

  footer: {
    copyright: `© ${new Date().getFullYear()} Patrizio Gentlemen's Barber Shop. All rights reserved.`,
  },
} as const;

export type SiteConfig = typeof siteConfig;
