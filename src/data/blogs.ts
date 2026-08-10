export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export const blogs: BlogPost[] = [
  {
    id: 1,
    title: "Essential Prenatal & Antenatal Care Guide for Expectant Mothers",
    slug: "essential-prenatal-antenatal-care-guide",
    excerpt: "Comprehensive advice from Dr. Faiza Hafeez on maternal health, nutritional supplements, anomaly ultrasounds, and tracking your baby's growth week-by-week.",
    category: "Gynecology",
    date: "April 28, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=800",
    content: "Full guide on prenatal care..."
  },
  {
    id: 2,
    title: "Understanding PCOS & PCOD: Root Causes, Symptoms & Natural Solutions",
    slug: "understanding-pcos-pcod-symptoms-solutions",
    excerpt: "Polycystic Ovary Syndrome affects millions of women. Discover how to balance hormones, restore regular menstrual cycles, and improve fertility naturally.",
    category: "Gynecology",
    date: "April 24, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1584982751601-3e4b77ceb770?auto=format&fit=crop&q=80&w=800",
    content: "Detailed insights on PCOS management..."
  },
  {
    id: 3,
    title: "High-Risk Pregnancy Supervision: What Every Mother Needs to Know",
    slug: "high-risk-pregnancy-supervision-guide",
    excerpt: "Managing hypertension, gestational diabetes, twin pregnancies, and previous C-sections with expert care at Dr. Faiza Hafeez Clinic.",
    category: "Gynecology",
    date: "April 20, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800",
    content: "Expert advice on high-risk pregnancy..."
  },
  {
    id: 4,
    title: "Infertility Assessment & Fertility Solutions: Your Path to Conception",
    slug: "infertility-assessment-fertility-solutions",
    excerpt: "Understanding ovulation tracking, follicular monitoring, hormonal screening, and modern assisted reproduction guidance in Lahore.",
    category: "Gynecology",
    date: "April 15, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    content: "Comprehensive fertility guide..."
  },
  {
    id: 5,
    title: "The Role of 3D & 4D Ultrasound Scans in Early Fetal Anomaly Detection",
    slug: "role-of-3d-4d-ultrasound-in-fetal-detection",
    excerpt: "Why timing your anomaly scan between 18 to 22 weeks is crucial for screening heart, spine, and organ development in your baby.",
    category: "Gynecology",
    date: "April 11, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    content: "3D/4D ultrasound scan breakdown..."
  },
  {
    id: 6,
    title: "Cervical Health & Pap Smears: Prevention Against Cervical Cancer",
    slug: "cervical-health-pap-smears-prevention",
    excerpt: "Why annual cervical screening and Pap smear tests save lives. Key guidelines for women aged 21 to 65 by consultant gynecologists.",
    category: "Gynecology",
    date: "April 06, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800",
    content: "Pap smear guide for women..."
  },
  {
    id: 7,
    title: "Postpartum Physical & Emotional Recovery: The Fourth Trimester",
    slug: "postpartum-physical-emotional-recovery",
    excerpt: "Nurturing the mother after childbirth — pelvic floor strengthening, lactation guidance, and post-delivery healing.",
    category: "Gynecology",
    date: "April 02, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800",
    content: "Postpartum care guide..."
  },
  {
    id: 8,
    title: "Navigating Menopause & Hormonal Transition Gracefully",
    slug: "navigating-menopause-hormonal-transition",
    excerpt: "Symptoms of perimenopause, bone density protection, mood regulation, and safe hormone replacement options.",
    category: "Gynecology",
    date: "March 27, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    content: "Menopause management insights..."
  }
];
