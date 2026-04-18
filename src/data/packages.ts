import chardhamImg from "@/assets/pkg-chardham.jpg";
import kedarnathImg from "@/assets/pkg-kedarnath.jpg";
import badrinathImg from "@/assets/pkg-badrinath.jpg";
import gangotriImg from "@/assets/pkg-gangotri.jpg";
import yamunotriImg from "@/assets/pkg-yamunotri.jpg";
import dodhamKbImg from "@/assets/pkg-dodham-kb.jpg";
import dodhamYgImg from "@/assets/pkg-dodham-yg.jpg";
import aartiImg from "@/assets/scene-aarti.jpg";
import trekImg from "@/assets/scene-trek.jpg";
import manaImg from "@/assets/scene-mana.jpg";
import rishikeshImg from "@/assets/scene-rishikesh.jpg";

export type Category = "char-dham" | "do-dham" | "single-dham";

export interface ItineraryDay {
  day: number;
  icon: string;
  title: string;
  distance: string;
  meals: string;
  description: string;
  highlights: string[];
}

export interface PackageData {
  slug: string;
  name: string;
  subtitle?: string;
  emoji: string;
  category: Category;
  duration: string;
  nights: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  startPoint: string;
  groupSize: string;
  popular?: boolean;
  heroImage: string;
  cardImage: string;
  routeDots: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  gallery: string[];
}

const baseInclusions = [
  "Delhi pickup & drop by private cab",
  "All hotels (double/triple sharing)",
  "Breakfast + Dinner daily",
  "Private cab throughout journey",
  "Expert local guide",
  "All temple permits & entry fees",
  "First aid & medical support",
];

const baseExclusions = [
  "Lunch & personal snacks",
  "Personal expenses & shopping",
  "Tips & porter charges",
  "Travel insurance",
  "Pony/Doli/Palanquin charges",
  "Any item not in inclusions",
];

export const packages: PackageData[] = [
  {
    slug: "char-dham",
    name: "Char Dham Yatra",
    emoji: "🔱",
    subtitle: "Yamunotri 🌊 + Gangotri 🏔️ + Kedarnath 🔱 + Badrinath 🪷",
    category: "char-dham",
    duration: "12 Days",
    nights: "11 Nights",
    price: 27999,
    originalPrice: 34999,
    discount: 20,
    rating: 4.9,
    startPoint: "Delhi",
    groupSize: "8–25",
    popular: true,
    heroImage: chardhamImg,
    cardImage: chardhamImg,
    routeDots: ["Delhi", "Haridwar", "Barkot", "Yamunotri", "Uttarkashi", "Gangotri", "Guptkashi", "Kedarnath", "Badrinath", "Joshimath", "Rudraprayag", "Rishikesh", "Haridwar", "Delhi"],
    inclusions: baseInclusions,
    exclusions: baseExclusions,
    gallery: [chardhamImg, aartiImg, kedarnathImg, badrinathImg, gangotriImg, yamunotriImg, manaImg, rishikeshImg, trekImg],
    itinerary: [
      { day: 1, icon: "🚗", title: "Delhi to Haridwar", distance: "200 km", meals: "🍽️ Dinner",
        description: "Depart Delhi by private cab. Arrive Haridwar. Check into hotel. Evening attend divine 🪔 Ganga Aarti at Har Ki Pauri. Dinner and overnight stay.",
        highlights: ["Har Ki Pauri", "🪔 Ganga Aarti", "Haridwar Market"] },
      { day: 2, icon: "🚗", title: "Haridwar to Barkot", distance: "176 km", meals: "🍽️ Breakfast + Dinner",
        description: "After breakfast drive by private cab via Mussoorie, Kempty Falls to Barkot. Scenic Himalayan views. Overnight stay.",
        highlights: ["Mussoorie", "Kempty Falls", "Himalayan Views"] },
      { day: 3, icon: "🌊", title: "Barkot to Yamunotri & Back", distance: "100 km", meals: "🍽️ Breakfast + Dinner",
        description: "Drive to Janki Chatti. Trek 6km to Yamunotri 🌊 temple (3,293m). Darshan of Goddess Yamuna. Cook rice in Surya Kund hot spring as prasad 🙏. Return to Barkot overnight.",
        highlights: ["🌊 Yamunotri Temple", "Surya Kund Hot Spring", "6km Trek"] },
      { day: 4, icon: "🚗", title: "Barkot to Uttarkashi", distance: "90 km", meals: "🍽️ Breakfast + Dinner",
        description: "Drive by private cab along Bhagirathi river. Visit 🔱 Vishwanath temple. Overnight stay.",
        highlights: ["Bhagirathi River", "🔱 Vishwanath Temple"] },
      { day: 5, icon: "🏔️", title: "Uttarkashi → Gangotri → Uttarkashi", distance: "200 km", meals: "🍽️ Breakfast + Dinner",
        description: "Drive to Gangotri 🏔️ (3,048m). Temple darshan. Holy dip in Bhagirathi. 🪔 Evening aarti. Return to Uttarkashi overnight.",
        highlights: ["🏔️ Gangotri Temple", "Holy Dip", "🪔 Evening Aarti"] },
      { day: 6, icon: "🚗", title: "Uttarkashi to Guptkashi", distance: "200 km", meals: "🍽️ Breakfast + Dinner",
        description: "Scenic drive through Himalayan valleys. Visit 🔱 Ardhnareeshwar temple. Overnight stay.",
        highlights: ["Himalayan Valley", "🔱 Ardhnareeshwar Temple"] },
      { day: 7, icon: "🔱", title: "Guptkashi to Kedarnath", distance: "45 km + trek", meals: "🍽️ Breakfast + Dinner",
        description: "Drive to Sonprayag, jeep to Gaurikund. Trek to Kedarnath 🔱 (3,583m). Evening darshan and 🪔 aarti. Overnight near temple.",
        highlights: ["🔱 Kedarnath Temple", "Trek", "🪔 Evening Aarti"] },
      { day: 8, icon: "🔱", title: "Kedarnath to Guptkashi", distance: "45 km + trek", meals: "🍽️ Breakfast + Dinner",
        description: "Early morning Rudrabhishek 🔱. Full darshan. Return trek. Drive to Guptkashi overnight.",
        highlights: ["🔱 Rudrabhishek", "Early Morning Darshan"] },
      { day: 9, icon: "🪷", title: "Guptkashi to Badrinath", distance: "193 km", meals: "🍽️ Breakfast + Dinner",
        description: "Drive by private cab via Joshimath to Badrinath 🪷 (3,133m). Evening darshan and 🪔 aarti. Overnight.",
        highlights: ["🪷 Badrinath Temple", "🪔 Evening Aarti"] },
      { day: 10, icon: "🚗", title: "Badrinath to Joshimath to Rudraprayag", distance: "160 km", meals: "🍽️ Breakfast + Dinner",
        description: "Morning Abhishek 🪷. Visit Mana village, Vyas Gufa 📖, Bhim Pul, Saraswati river. Drive to Rudraprayag overnight.",
        highlights: ["🪷 Abhishek", "Mana Village", "Vyas Gufa", "Saraswati River"] },
      { day: 11, icon: "🚗", title: "Rudraprayag to Rishikesh to Haridwar", distance: "140 km", meals: "🍽️ Breakfast + Dinner",
        description: "Drive to Rishikesh. Visit Ram Jhula 🌉, Triveni Ghat 🕉️. 🪔 Ganga Aarti. Continue to Haridwar overnight.",
        highlights: ["🕉️ Triveni Ghat", "Ram Jhula", "🪔 Ganga Aarti"] },
      { day: 12, icon: "🚗", title: "Haridwar to Delhi Drop", distance: "250 km", meals: "🍽️ Breakfast",
        description: "Private cab drop to Delhi. Trip ends with divine blessings 🙏.",
        highlights: ["Delhi Drop", "🙏 Trip Ends"] },
    ],
  },
  {
    slug: "do-dham-kedarnath-badrinath",
    name: "Do Dham Yatra (Kedarnath + Badrinath)",
    emoji: "🔱🪷",
    category: "do-dham",
    duration: "8 Days",
    nights: "7 Nights",
    price: 12999,
    originalPrice: 14999,
    discount: 20,
    rating: 4.8,
    startPoint: "Delhi",
    groupSize: "8–25",
    heroImage: dodhamKbImg,
    cardImage: dodhamKbImg,
    routeDots: ["Delhi", "Haridwar", "Guptkashi", "Kedarnath", "Guptkashi", "Badrinath", "Rudraprayag", "Haridwar", "Delhi"],
    inclusions: baseInclusions,
    exclusions: baseExclusions,
    gallery: [dodhamKbImg, kedarnathImg, badrinathImg, aartiImg, manaImg, rishikeshImg, trekImg],
    itinerary: [
      { day: 1, icon: "🚗", title: "Delhi to Haridwar", distance: "200 km", meals: "🍽️ Dinner",
        description: "Depart Delhi by private cab. Arrive Haridwar. Check in. 🪔 Ganga Aarti at Har Ki Pauri. Overnight.",
        highlights: ["Har Ki Pauri", "🪔 Ganga Aarti"] },
      { day: 2, icon: "🚗", title: "Haridwar to Guptkashi", distance: "220 km", meals: "🍽️ Breakfast + Dinner",
        description: "Drive by private cab via Devprayag, Rudraprayag to Guptkashi. Visit 🔱 Ardhnareeshwar temple. Overnight.",
        highlights: ["Devprayag Sangam", "🔱 Ardhnareeshwar Temple"] },
      { day: 3, icon: "🔱", title: "Guptkashi to Kedarnath", distance: "16 km trek", meals: "🍽️ Breakfast + Dinner",
        description: "Drive to Gaurikund. Trek 16km to Kedarnath 🔱 (3,583m). Evening darshan and 🪔 aarti. Overnight.",
        highlights: ["🔱 Kedarnath Temple", "16km Trek", "🪔 Aarti"] },
      { day: 4, icon: "🔱", title: "Kedarnath to Guptkashi", distance: "30 km", meals: "🍽️ Breakfast + Dinner",
        description: "Early morning Rudrabhishek 🔱. Full darshan. Return trek. Drive to Guptkashi. Overnight.",
        highlights: ["🔱 Rudrabhishek", "Early Morning Darshan"] },
      { day: 5, icon: "🪷", title: "Guptkashi to Badrinath", distance: "160 km", meals: "🍽️ Breakfast + Dinner",
        description: "Drive by private cab via Joshimath to Badrinath 🪷. Evening darshan and 🪔 aarti. Overnight.",
        highlights: ["🪷 Badrinath Temple", "🪔 Evening Aarti"] },
      { day: 6, icon: "🚗", title: "Badrinath to Rudraprayag", distance: "160 km", meals: "🍽️ Breakfast + Dinner",
        description: "Morning Abhishek 🪷. Mana village, Vyas Gufa 📖, Saraswati river. Drive to Rudraprayag overnight.",
        highlights: ["🪷 Abhishek", "Mana Village", "Vyas Gufa"] },
      { day: 7, icon: "🚗", title: "Rudraprayag to Haridwar", distance: "160 km", meals: "🍽️ Breakfast + Dinner",
        description: "Drive by private cab to Haridwar. Evening 🪔 Ganga Aarti. Overnight.",
        highlights: ["Har Ki Pauri", "🪔 Ganga Aarti"] },
      { day: 8, icon: "🚗", title: "Haridwar to Delhi Drop", distance: "250 km", meals: "🍽️ Breakfast",
        description: "Private cab drop to Delhi. Trip ends 🙏.",
        highlights: ["Delhi Drop", "🙏 Trip Ends"] },
    ],
  },
  {
    slug: "do-dham-yamunotri-gangotri",
    name: "Do Dham Yatra (Yamunotri + Gangotri)",
    emoji: "🌊🏔️",
    category: "do-dham",
    duration: "7 Days",
    nights: "6 Nights",
    price: 10999,
    originalPrice: 12999,
    discount: 17,
    rating: 4.7,
    startPoint: "Delhi",
    groupSize: "8–25",
    heroImage: dodhamYgImg,
    cardImage: dodhamYgImg,
    routeDots: ["Delhi", "Haridwar", "Barkot", "Yamunotri", "Uttarkashi", "Gangotri", "Haridwar", "Delhi"],
    inclusions: baseInclusions,
    exclusions: baseExclusions,
    gallery: [dodhamYgImg, yamunotriImg, gangotriImg, aartiImg, trekImg, rishikeshImg],
    itinerary: [
      { day: 1, icon: "🚗", title: "Delhi to Haridwar", distance: "200 km", meals: "🍽️ Dinner",
        description: "Depart Delhi by private cab. Arrive Haridwar. 🪔 Ganga Aarti. Overnight.",
        highlights: ["Har Ki Pauri", "🪔 Ganga Aarti"] },
      { day: 2, icon: "🚗", title: "Haridwar to Barkot", distance: "180 km", meals: "🍽️ Breakfast + Dinner",
        description: "Drive by private cab via Mussoorie, Kempty Falls to Barkot. Overnight.",
        highlights: ["Mussoorie", "Kempty Falls"] },
      { day: 3, icon: "🌊", title: "Yamunotri Darshan", distance: "7 km trek", meals: "🍽️ Breakfast + Dinner",
        description: "Drive to Janki Chatti. Trek 6km to Yamunotri 🌊 (3,293m). Darshan of Goddess Yamuna. Surya Kund hot spring prasad 🙏. Return to Barkot.",
        highlights: ["🌊 Yamunotri Temple", "Surya Kund Hot Spring"] },
      { day: 4, icon: "🚗", title: "Barkot to Uttarkashi", distance: "Local", meals: "🍽️ Breakfast + Dinner",
        description: "Drive along Bhagirathi river. Visit 🔱 Vishwanath temple. Overnight.",
        highlights: ["🔱 Vishwanath Temple", "Bhagirathi River"] },
      { day: 5, icon: "🏔️", title: "Gangotri Darshan", distance: "100 km", meals: "🍽️ Breakfast + Dinner",
        description: "Drive to Gangotri 🏔️ (3,048m). Temple darshan. Holy dip. 🪔 Evening aarti. Return to Uttarkashi overnight.",
        highlights: ["🏔️ Gangotri Temple", "Holy Dip", "🪔 Evening Aarti"] },
      { day: 6, icon: "🚗", title: "Uttarkashi to Haridwar", distance: "210 km", meals: "🍽️ Breakfast + Dinner",
        description: "Morning puja 🙏. Drive by private cab to Haridwar. Overnight.",
        highlights: ["Bhagirathi River", "Haridwar"] },
      { day: 7, icon: "🚗", title: "Haridwar to Delhi Drop", distance: "250 km", meals: "🍽️ Breakfast",
        description: "Private cab drop to Delhi. Trip ends 🙏.",
        highlights: ["Delhi Drop", "🙏 Trip Ends"] },
    ],
  },
  {
    slug: "kedarnath",
    name: "Delhi to Kedarnath Yatra",
    emoji: "🔱",
    category: "single-dham",
    duration: "6 Days",
    nights: "5 Nights",
    price: 9999,
    originalPrice: 11999,
    discount: 25,
    rating: 4.8,
    startPoint: "Delhi",
    groupSize: "8–25",
    heroImage: kedarnathImg,
    cardImage: kedarnathImg,
    routeDots: ["Delhi", "Haridwar", "Guptkashi", "Kedarnath", "Guptkashi", "Haridwar", "Delhi"],
    inclusions: baseInclusions,
    exclusions: baseExclusions,
    gallery: [kedarnathImg, trekImg, aartiImg, rishikeshImg],
    itinerary: [
      { day: 1, icon: "🚗", title: "Delhi to Haridwar", distance: "200 km", meals: "🍽️ Dinner",
        description: "Depart Delhi by private cab. Arrive Haridwar. 🪔 Ganga Aarti. Overnight.",
        highlights: ["Har Ki Pauri", "🪔 Ganga Aarti"] },
      { day: 2, icon: "🚗", title: "Haridwar to Guptkashi", distance: "220 km", meals: "🍽️ Breakfast + Dinner",
        description: "Drive by private cab via Devprayag, Rudraprayag to Guptkashi. Overnight.",
        highlights: ["Devprayag Sangam", "Rudraprayag"] },
      { day: 3, icon: "🔱", title: "Guptkashi to Kedarnath", distance: "16 km trek", meals: "🍽️ Breakfast + Dinner",
        description: "Drive to Gaurikund. Trek 16km to Kedarnath 🔱 (3,583m). Evening darshan and 🪔 aarti. Overnight near temple.",
        highlights: ["🔱 Kedarnath Temple", "16km Trek", "🪔 Aarti"] },
      { day: 4, icon: "🔱", title: "Kedarnath Darshan & Return", distance: "30 km", meals: "🍽️ Breakfast + Dinner",
        description: "Early morning Rudrabhishek 🔱. Full darshan. Return trek. Drive to Guptkashi. Overnight.",
        highlights: ["🔱 Rudrabhishek", "Gaurikund"] },
      { day: 5, icon: "🚗", title: "Guptkashi to Haridwar", distance: "220 km", meals: "🍽️ Breakfast + Dinner",
        description: "Drive by private cab back to Haridwar. Evening 🪔 Ganga Aarti. Overnight.",
        highlights: ["Devprayag", "🪔 Ganga Aarti"] },
      { day: 6, icon: "🚗", title: "Haridwar to Delhi Drop", distance: "250 km", meals: "🍽️ Breakfast",
        description: "Private cab drop to Delhi. Trip ends 🙏.",
        highlights: ["Delhi Drop", "🙏 Trip Ends"] },
    ],
  },
  {
    slug: "badrinath",
    name: "Delhi to Badrinath Yatra",
    emoji: "🪷",
    category: "single-dham",
    duration: "6 Days",
    nights: "5 Nights",
    price: 9999,
    originalPrice: 11999,
    discount: 25,
    rating: 4.8,
    startPoint: "Delhi",
    groupSize: "8–25",
    heroImage: badrinathImg,
    cardImage: badrinathImg,
    routeDots: ["Delhi", "Haridwar", "Joshimath", "Badrinath", "Rudraprayag", "Haridwar", "Delhi"],
    inclusions: baseInclusions,
    exclusions: baseExclusions,
    gallery: [badrinathImg, manaImg, aartiImg, rishikeshImg],
    itinerary: [
      { day: 1, icon: "🚗", title: "Delhi to Haridwar", distance: "200 km", meals: "🍽️ Dinner",
        description: "Depart Delhi by private cab. Arrive Haridwar. 🪔 Ganga Aarti. Overnight.",
        highlights: ["Har Ki Pauri", "🪔 Ganga Aarti"] },
      { day: 2, icon: "🚗", title: "Haridwar to Joshimath", distance: "270 km", meals: "🍽️ Breakfast + Dinner",
        description: "Drive by private cab via Devprayag, Chamoli to Joshimath. Overnight.",
        highlights: ["Devprayag", "Chamoli Valley"] },
      { day: 3, icon: "🪷", title: "Joshimath to Badrinath", distance: "45 km", meals: "🍽️ Breakfast + Dinner",
        description: "Drive to Badrinath 🪷 (3,133m). Evening darshan and 🪔 aarti. Overnight.",
        highlights: ["🪷 Badrinath Temple", "🪔 Evening Aarti"] },
      { day: 4, icon: "🪷", title: "Badrinath Full Day to Rudraprayag", distance: "160 km", meals: "🍽️ Breakfast + Dinner",
        description: "Morning Abhishek 🪷. Mana village, Vyas Gufa 📖, Bhim Pul, Saraswati river. Drive to Rudraprayag overnight.",
        highlights: ["🪷 Abhishek", "Mana Village", "Vyas Gufa", "Saraswati River"] },
      { day: 5, icon: "🚗", title: "Rudraprayag to Haridwar", distance: "160 km", meals: "🍽️ Breakfast + Dinner",
        description: "Drive by private cab to Haridwar. Evening 🪔 Ganga Aarti. Overnight.",
        highlights: ["🪔 Ganga Aarti", "Haridwar"] },
      { day: 6, icon: "🚗", title: "Haridwar to Delhi Drop", distance: "250 km", meals: "🍽️ Breakfast",
        description: "Private cab drop to Delhi. Trip ends 🙏.",
        highlights: ["Delhi Drop", "🙏 Trip Ends"] },
    ],
  },
  {
    slug: "gangotri",
    name: "Delhi to Gangotri Yatra",
    emoji: "🏔️",
    category: "single-dham",
    duration: "5 Days",
    nights: "4 Nights",
    price: 8999,
    originalPrice: 10999,
    discount: 20,
    rating: 4.7,
    startPoint: "Delhi",
    groupSize: "8–25",
    heroImage: gangotriImg,
    cardImage: gangotriImg,
    routeDots: ["Delhi", "Haridwar", "Uttarkashi", "Gangotri", "Uttarkashi", "Haridwar", "Delhi"],
    inclusions: baseInclusions,
    exclusions: baseExclusions,
    gallery: [gangotriImg, aartiImg, trekImg, rishikeshImg],
    itinerary: [
      { day: 1, icon: "🚗", title: "Delhi to Haridwar", distance: "200 km", meals: "🍽️ Dinner",
        description: "Depart Delhi by private cab. Arrive Haridwar. 🪔 Ganga Aarti at Har Ki Pauri. Overnight.",
        highlights: ["Har Ki Pauri", "🪔 Ganga Aarti"] },
      { day: 2, icon: "🚗", title: "Haridwar to Uttarkashi", distance: "170 km", meals: "🍽️ Breakfast + Dinner",
        description: "Drive by private cab along Bhagirathi river. Visit 🔱 Vishwanath and Shakti temples. Overnight.",
        highlights: ["Bhagirathi River", "🔱 Vishwanath Temple"] },
      { day: 3, icon: "🏔️", title: "Uttarkashi to Gangotri & Back", distance: "200 km", meals: "🍽️ Breakfast + Dinner",
        description: "Drive to Gangotri 🏔️ (3,048m). Temple darshan. Holy dip in Bhagirathi. 🪔 Evening aarti. Return to Uttarkashi overnight.",
        highlights: ["🏔️ Gangotri Temple", "Holy Dip", "🪔 Evening Aarti"] },
      { day: 4, icon: "🚗", title: "Uttarkashi to Haridwar", distance: "170 km", meals: "🍽️ Breakfast + Dinner",
        description: "Morning puja 🙏. Drive by private cab to Haridwar. Overnight.",
        highlights: ["Bhagirathi River", "Haridwar"] },
      { day: 5, icon: "🚗", title: "Haridwar to Delhi Drop", distance: "250 km", meals: "🍽️ Breakfast",
        description: "Private cab drop to Delhi. Trip ends 🙏.",
        highlights: ["Delhi Drop", "🙏 Trip Ends"] },
    ],
  },
  {
    slug: "yamunotri",
    name: "Delhi to Yamunotri Yatra",
    emoji: "🌊",
    category: "single-dham",
    duration: "5 Days",
    nights: "4 Nights",
    price: 8999,
    originalPrice: 10999,
    discount: 20,
    rating: 4.7,
    startPoint: "Delhi",
    groupSize: "8–25",
    heroImage: yamunotriImg,
    cardImage: yamunotriImg,
    routeDots: ["Delhi", "Haridwar", "Barkot", "Yamunotri", "Barkot", "Haridwar", "Delhi"],
    inclusions: baseInclusions,
    exclusions: baseExclusions,
    gallery: [yamunotriImg, trekImg, aartiImg, rishikeshImg],
    itinerary: [
      { day: 1, icon: "🚗", title: "Delhi to Haridwar", distance: "200 km", meals: "🍽️ Dinner",
        description: "Depart Delhi by private cab. Arrive Haridwar. 🪔 Ganga Aarti at Har Ki Pauri. Overnight.",
        highlights: ["Har Ki Pauri", "🪔 Ganga Aarti"] },
      { day: 2, icon: "🚗", title: "Haridwar to Barkot", distance: "180 km", meals: "🍽️ Breakfast + Dinner",
        description: "Drive by private cab via Mussoorie, Kempty Falls to Barkot. Overnight.",
        highlights: ["Mussoorie", "Kempty Falls"] },
      { day: 3, icon: "🌊", title: "Yamunotri Darshan & Back", distance: "7 km trek", meals: "🍽️ Breakfast + Dinner",
        description: "Drive to Janki Chatti. Trek 6km to Yamunotri 🌊 (3,293m). Darshan of Goddess Yamuna. Cook rice in Surya Kund hot spring as prasad 🙏. Return trek. Drive back to Barkot.",
        highlights: ["🌊 Yamunotri Temple", "Surya Kund Hot Spring", "6km Trek"] },
      { day: 4, icon: "🚗", title: "Barkot to Haridwar", distance: "180 km", meals: "🍽️ Breakfast + Dinner",
        description: "Drive by private cab to Haridwar. Evening shopping and 🪔 Ganga Aarti. Overnight.",
        highlights: ["Haridwar Market", "🪔 Ganga Aarti"] },
      { day: 5, icon: "🚗", title: "Haridwar to Delhi Drop", distance: "250 km", meals: "🍽️ Breakfast",
        description: "Private cab drop to Delhi. Trip ends with divine blessings 🙏.",
        highlights: ["Delhi Drop", "🙏 Trip Ends"] },
    ],
  },
];

export const findPackage = (slug: string) => packages.find((p) => p.slug === slug);

export const PHONE = "+91-93116-02436";
export const PHONE_TEL = "+919311602436";
export const WHATSAPP = "https://wa.me/919311602436";
export const EMAIL = "info@arora.in";
