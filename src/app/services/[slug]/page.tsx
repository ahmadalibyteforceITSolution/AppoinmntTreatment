import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  Calendar, 
  ShieldCheck, 
  ExternalLink, 
  Clock, 
  MapPin, 
  Activity, 
  Heart,
  ChevronRight,
  BookOpen
} from "lucide-react";
import { notFound } from "next/navigation";

interface ServiceData {
  title: string;
  tagline: string;
  category: string;
  image: string;
  description: string;
  overview: string[];
  indications: string[];
  advantages: { title: string; desc: string }[];
  steps: { step: string; title: string; desc: string }[];
  recoveryTips: string[];
  features: string[];
  relatedBlogs: { title: string; slug: string }[];
  clinicalGuidelines: { title: string; source: string; url: string }[];
}

const servicesData: Record<string, ServiceData> = {
  "laparoscopic-surgery": {
    title: "Laparoscopic & Minimally Invasive Gynecological Surgery",
    tagline: "Advanced keyhole surgery ensuring minimal incisions, reduced pain, and rapid recovery in Lahore.",
    category: "Minimally Invasive Surgery",
    image: "/template/images/services/middle/img4.webp",
    description: "Dr. Faiza Hafeez provides cutting-edge laparoscopic and hysteroscopic surgical solutions in Lahore. Through miniature 5mm keyhole incisions and ultra-high-definition optical guidance, complex pelvic conditions such as ovarian cysts, uterine fibroids, and endometriosis are treated with surgical precision, minimal tissue disruption, and rapid hospital discharge.",
    overview: [
      "Laparoscopic gynecology represents modern surgical excellence. Instead of traditional open laparotomy incisions measuring 10-15 cm, laparoscopy utilizes specialized optical trocars measuring just 5 to 10 mm.",
      "A miniature surgical telescope (laparoscope) connected to a high-definition monitor transmits an illuminated, magnified view of the pelvic organs. This allows meticulous dissection, delicate tissue preservation, and significantly reduced postoperative discomfort.",
      "Surgeries are conducted under expert general anesthesia with dedicated post-anesthesia care at Ittefaq Hospital (Trust), ensuring highest safety benchmarks and quick return to regular lifestyle routines."
    ],
    indications: [
      "Ovarian Cysts & Endometriomas (Cystectomy or drainage)",
      "Uterine Fibroids (Laparoscopic Myomectomy with fertility preservation)",
      "Severe Endometriosis & Chronic Pelvic Pain Excision",
      "Ectopic Pregnancy Emergency Management (Salpingostomy / Salpingectomy)",
      "Diagnostic Laparoscopy & Chromopertubation for Infertility",
      "Removal of Pelvic Adhesions (Adhesiolysis)",
      "Diagnostic & Operative Hysteroscopy for Polyps & Septum"
    ],
    advantages: [
      {
        title: "Tiny Keyhole Incisions",
        desc: "Miniature 5-10mm ports eliminate large unsightly surgical scars, providing cosmetically superior healing."
      },
      {
        title: "85% Less Post-Operative Pain",
        desc: "Gentle tissue handling and minimal abdominal muscle disruption drastically reduce the requirement for heavy analgesics."
      },
      {
        title: "Same-Day or 24-Hour Discharge",
        desc: "Most patients walk comfortably within hours of surgery and return home within 24 to 36 hours."
      },
      {
        title: "Swift Return to Work (7-10 Days)",
        desc: "Unlike open surgery requiring 6 to 8 weeks bed rest, keyhole procedures enable resume of light work in 7 to 10 days."
      }
    ],
    steps: [
      {
        step: "01",
        title: "Pre-Operative Evaluation",
        desc: "High-resolution pelvic ultrasound, baseline blood panel, and personalized clinical counseling with Dr. Faiza Hafeez."
      },
      {
        step: "02",
        title: "Minimally Invasive Entry",
        desc: "Under general anesthesia, miniature 5mm ports are placed through natural umbilical contours for zero visible scarring."
      },
      {
        step: "03",
        title: "High-Definition Surgical Excision",
        desc: "Magnified optical visualization enables microscopic preservation of healthy ovarian reserve and delicate uterine architecture."
      },
      {
        step: "04",
        title: "Rapid Recovery & Mobilization",
        desc: "Early oral diet resumption, gentle walking within 4 hours, and supportive same-day or next-day hospital discharge."
      }
    ],
    recoveryTips: [
      "Rest comfortably for the first 48 hours; gentle indoor walking is encouraged to prevent gas discomfort.",
      "Keep keyhole port dressings clean and dry for 5 to 7 days.",
      "Avoid heavy weightlifting (>5 kg) and vigorous strenuous workouts for 3 weeks.",
      "Attend the scheduled post-operative suture and healing review at Ittefaq Hospital at 7-10 days."
    ],
    features: [
      "Laparoscopic Ovarian Cystectomy",
      "Keyhole Fibroid Removal (Myomectomy)",
      "Diagnostic & Operative Hysteroscopy",
      "Endometriosis Pelvic Clearance",
      "Tubal Patency Testing",
      "Minimal Scarring Guarantee"
    ],
    relatedBlogs: [
      { title: "Understanding Ovarian Cysts: Types, Symptoms & Surgical Removal", slug: "ovarian-cysts-symptoms-treatment" },
      { title: "Endometriosis & Pelvic Pain: Why Keyhole Laparoscopy is the Gold Standard", slug: "endometriosis-pelvic-pain-management" },
      { title: "What to Expect During Your Gynecological Surgery Recovery", slug: "post-surgery-recovery-guide" }
    ],
    clinicalGuidelines: [
      { title: "AAGL Practice Guidelines for Minimally Invasive Gynecologic Surgery", source: "American Association of Gynecologic Laparoscopists", url: "https://www.aagl.org/" },
      { title: "RCOG Laparoscopy in Gynecology Clinical Standards", source: "Royal College of Obstetricians and Gynaecologists", url: "https://www.rcog.org.uk/" },
      { title: "WHO Surgical Safety Guidelines", source: "World Health Organization", url: "https://www.who.int/teams/integrated-health-services/patient-safety" }
    ]
  },
  "high-risk-pregnancy": {
    title: "High-Risk Pregnancy & Maternal Care",
    tagline: "Dedicated clinical vigilance for complex pregnancies, hypertension, and pre-term risk in Lahore.",
    category: "Maternal Fetal Medicine",
    image: "/template/images/services/middle/img2.webp",
    description: "Every mother deserves safety and reassurance. Dr. Faiza Hafeez provides specialized maternal-fetal care for pregnancies complicated by gestational diabetes, pre-eclampsia, multiple gestations, recurrent miscarriages, and maternal medical conditions.",
    overview: [
      "A high-risk pregnancy requires close clinical companionship and proactive management rather than reactive treatments.",
      "With modern fetal Doppler ultrasound, continuous cardiotocography (CTG), and multidisciplinary hospital backing at Ittefaq Hospital Trust, we safely navigate every week of gestation.",
      "Our focus is achieving full-term maturity and celebrating the arrival of a healthy, thriving baby."
    ],
    indications: [
      "Gestational Diabetes Mellitus (GDM)",
      "Pregnancy-Induced Hypertension & Pre-eclampsia",
      "Multiple Gestations (Twin / Triplet Pregnancy)",
      "Previous Recurrent Pregnancy Losses or Stillbirth",
      "Placenta Previa & Low-Lying Placenta",
      "Advanced Maternal Age (>35 Years)",
      "Fetal Growth Restriction (IUGR)"
    ],
    advantages: [
      { title: "Individualized Antenatal Protocol", desc: "Frequent Doppler flow studies and customized blood sugar and pressure control charts." },
      { title: "24/7 Hospital Admission", desc: "Direct access to Ittefaq Hospital Trust Lahore labor triage and neonatology intensive care unit (NICU)." },
      { title: "VBAC & Normal Delivery Focus", desc: "Careful anatomical pelvis evaluation supporting safe natural birth wherever medically sound." },
      { title: "Emergency Delivery Team", desc: "Dedicated surgical and anesthesia standby for immediate response if labor emergencies arise." }
    ],
    steps: [
      { step: "01", title: "Comprehensive Risk Profiling", desc: "Detailed maternal history, previous obstetric review, and baseline biochemical lab panel." },
      { step: "02", title: "Targeted Ultrasound Surveillance", desc: "Serial bi-weekly or monthly scans monitoring amniotic fluid index and umbilical artery blood flow." },
      { step: "03", title: "Preventive Interventions", desc: "Aspirin prophylaxis for pre-eclampsia, insulin/metformin titration, and progesterone support." },
      { step: "04", title: "Planned Safe Delivery", desc: "Formulation of a customized birth plan with continuous fetal heart monitoring." }
    ],
    recoveryTips: [
      "Monitor blood pressure and blood glucose daily using a home digital log.",
      "Report immediately if there is sudden facial swelling, severe headaches, or reduced fetal kicks.",
      "Maintain hydration with 8-10 glasses of water daily and rest in the left lateral position."
    ],
    features: [
      "Fetal Wellbeing Doppler Scans",
      "Pre-eclampsia Prevention",
      "Gestational Diabetes Control",
      "24/7 NICU Hospital Support",
      "Emergency Delivery Readiness",
      "Dedicated Birth Planning"
    ],
    relatedBlogs: [
      { title: "High-Risk Pregnancy Symptoms: When to Call Your Doctor Immediately", slug: "high-risk-pregnancy-symptoms" },
      { title: "Gestational Diabetes Diet & Management Guide for Mothers", slug: "gestational-diabetes-guide" }
    ],
    clinicalGuidelines: [
      { title: "ACOG Practice Bulletin: High-Risk Obstetrics", source: "American College of Obstetricians and Gynecologists", url: "https://www.acog.org/" },
      { title: "WHO Maternal & Perinatal Health Standards", source: "World Health Organization", url: "https://www.who.int/" }
    ]
  },
  "gynecology": {
    title: "Gynecology & Pelvic Health",
    tagline: "Comprehensive pelvic wellness, menstrual disorder therapy, and fibroid care in Lahore.",
    category: "General Gynecology",
    image: "/template/images/services/middle/img1.webp",
    description: "Personalized pelvic and reproductive health consultations for women across every phase of adulthood. From irregular cycles and heavy bleeding to fibroids, infections, and preventative pelvic exams.",
    overview: [
      "Pelvic symptoms such as heavy bleeding, dysmenorrhea, or discomfort should never be ignored or accepted as routine.",
      "Dr. Faiza Hafeez provides a confidential, reassuring consultation environment with rapid in-clinic ultrasound diagnostics.",
      "We prioritize conservative medical therapy first, recommending surgical options only when strictly necessary."
    ],
    indications: [
      "Menorrhagia (Heavy Menstrual Bleeding)",
      "Irregular or Absent Menstrual Cycles (Oligomenorrhea / Amenorrhea)",
      "Uterine Fibroids & Adenomyosis",
      "Chronic Pelvic Pain & Dyspareunia",
      "Recurrent Vaginal Infections & Candidiasis",
      "Pelvic Organ Prolapse & Urinary Incontinence",
      "Routine Annual Well-Woman Health Checks"
    ],
    advantages: [
      { title: "Confidential Consultation", desc: "Empathetic, non-judgmental discussions addressing sensitive female reproductive health questions." },
      { title: "On-Site Ultrasound Evaluation", desc: "Immediate pelvis ultrasound confirmation of uterine thickness, fibroid location, and ovarian health." },
      { title: "Hormonal & Non-Hormonal Options", desc: "Access to modern cycle regulators, tranexamic acid, progesterone therapy, and hormonal IUDs." },
      { title: "Long-Term Pelvic Wellness", desc: "Proactive screening to prevent chronic complications and protect future fertility." }
    ],
    steps: [
      { step: "01", title: "In-Depth Consultation", desc: "Detailed discussion of your menstrual pattern, pain diary, and prior treatments." },
      { step: "02", title: "Diagnostic Ultrasound", desc: "Non-invasive pelvic ultrasound assessment of the endometrium and myometrium." },
      { step: "03", title: "Evidence-Based Prescription", desc: "Targeted medical management tailored to your age, symptoms, and pregnancy plans." },
      { step: "04", title: "Follow-Up & Healing", desc: "Scheduled 3-month review to verify symptom resolution and ultrasound improvement." }
    ],
    recoveryTips: [
      "Keep a digital period and symptom diary to track bleed volume and cycle regularity.",
      "Avoid unverified hormonal supplements or self-medication without ultrasound guidance."
    ],
    features: [
      "Heavy Bleeding Treatment",
      "Pelvic Pain Management",
      "Uterine Fibroid Care",
      "Hormonal IUD Placement",
      "Vaginal Health Clinic",
      "Annual Pelvic Screening"
    ],
    relatedBlogs: [
      { title: "Heavy Periods (Menorrhagia): Causes, Warning Signs & Modern Treatments", slug: "heavy-periods-causes-treatment" },
      { title: "Fibroids vs Cysts: How to Tell the Difference and When to Treat", slug: "fibroids-vs-cysts" }
    ],
    clinicalGuidelines: [
      { title: "RCOG Women's Pelvic Health Guidance", source: "Royal College of Obstetricians and Gynaecologists", url: "https://www.rcog.org.uk/" }
    ]
  },
  "infertility-treatment": {
    title: "Infertility & Reproductive Wellness",
    tagline: "Holistic fertility evaluations, ovulation induction, and conception roadmaps in Lahore.",
    category: "Reproductive Endocrinology",
    image: "/template/images/services/middle/img3.webp",
    description: "Overcoming fertility hurdles requires patience, precision, and heartfelt support. Dr. Faiza Hafeez offers thorough couple evaluations, hormonal profiling, follicular ultrasound tracking, and assisted conception counseling.",
    overview: [
      "Infertility affects approximately 1 in 6 couples, but modern reproductive medicine offers unprecedented success rates.",
      "We identify the exact physiological factor—whether ovulatory, tubal, uterine, or male factor—to tailor the most direct pathway to conception.",
      "Many couples achieve pregnancy through simple lifestyle optimization and low-intervention ovulation induction."
    ],
    indications: [
      "Inability to conceive after 12 months of unprotected intercourse (or 6 months if age >35)",
      "Irregular or Anovulatory Menstrual Cycles",
      "PCOS-Related Infertility",
      "Suspected Fallopian Tubal Blockage",
      "Low Ovarian Reserve (Low AMH)",
      "Unexplained Infertility in Couples"
    ],
    advantages: [
      { title: "Couples-Centered Evaluation", desc: "Joint consultation addressing both maternal and paternal reproductive health concurrently." },
      { title: "Follicular Tracking Ultrasound", desc: "Accurate ultrasound monitoring of dominant follicle growth and optimal timing of conception." },
      { title: "Gentle Ovulation Induction", desc: "Carefully monitored letrozole or clomiphene protocols minimizing the risk of hyperstimulation." },
      { title: "IVF & IUI Roadmap", desc: "Transparent, honest guidance regarding when assisted reproductive technologies are warranted." }
    ],
    steps: [
      { step: "01", title: "Comprehensive Fertility Assessment", desc: "AMH, day-2 hormone profile, semen analysis review, and pelvic ultrasound." },
      { step: "02", title: "Tubal Patency Verification", desc: "Hysterosalpingography (HSG) or laparoscopy to ensure clear fallopian pathways." },
      { step: "03", title: "Cycle-Timed Ovulation Protocol", desc: "Serial ultrasound scans pinpointing the exact 24-hour fertile ovulation window." },
      { step: "04", title: "Luteal Phase Support", desc: "Progesterone supplementation to support successful embryo implantation." }
    ],
    recoveryTips: [
      "Start folic acid (5 mg daily) and vitamin D3 at least 3 months prior to planned conception.",
      "Maintain a balanced diet rich in antioxidants, leafy greens, and lean proteins."
    ],
    features: [
      "Ovarian Reserve (AMH) Testing",
      "Follicular Tracking Scans",
      "Ovulation Induction Protocols",
      "PCOS Fertility Optimization",
      "Tubal Health Evaluation",
      "Couple Conception Guidance"
    ],
    relatedBlogs: [
      { title: "How to Calculate Your Fertile Window: Essential Ovulation Tracking Tips", slug: "ovulation-tracking-guide" },
      { title: "PCOS and Getting Pregnant: 5 Evidence-Based Steps to Boost Fertility", slug: "pcos-pregnancy-guide" }
    ],
    clinicalGuidelines: [
      { title: "ASRM Practice Guidelines: Diagnostic Evaluation of Infertility", source: "American Society for Reproductive Medicine", url: "https://www.reproductivefacts.org/" }
    ]
  },
  "3d-4d-ultrasound": {
    title: "3D / 4D Fetal Anomaly Ultrasound",
    tagline: "High-definition diagnostic obstetric imaging and live 4D baby visualization in Lahore.",
    category: "Diagnostic Ultrasound",
    image: "/template/images/services/middle/img5.webp",
    description: "Experience the magic of seeing your baby in breathtaking high definition. Dr. Faiza Hafeez conducts specialized 3D/4D fetal anomaly scans at Ittefaq Hospital Trust Lahore, providing meticulous organ screening and precious keepsake images for parents.",
    overview: [
      "Obstetric ultrasound is not just a keepsake; it is the cornerstone of modern prenatal diagnostics.",
      "Our detailed 18-22 week anomaly scan systematically evaluates the fetal intracranial anatomy, facial profile, heart four-chamber view, spine, kidneys, and extremities.",
      "Uterine artery and umbilical artery Doppler studies evaluate placental blood flow to forecast pre-eclampsia risk."
    ],
    indications: [
      "Routine 18-22 Weeks Detailed Fetal Anomaly Screening",
      "First Trimester Viability & Nuchal Translucency (NT) Scan",
      "Third Trimester Fetal Growth & Weight Estimation",
      "Color Doppler Flow Studies for High-Risk Pregnancies",
      "Placental Location & Amniotic Fluid Index (AFI)",
      "4D Live Facial Expression & Motion Imaging"
    ],
    advantages: [
      { title: "High-Resolution Diagnostic Clarity", desc: "State-of-the-art ultrasound hardware providing crisp sub-millimeter visualization." },
      { title: "Detailed Anatomical Checklist", desc: "Exhaustive evaluation of over 30 anatomical structures following ISUOG international standards." },
      { title: "Live Baby Motion (4D)", desc: "Parents can observe baby yawns, thumb-sucking, and facial smiles in real time." },
      { title: "Immediate Digital & Print Report", desc: "Full medical report with high-gloss photographic prints provided immediately." }
    ],
    steps: [
      { step: "01", title: "Scan Preparation", desc: "Drink 2-3 glasses of water 30 minutes before the scan for optimal acoustic window." },
      { step: "02", title: "Systematic Organ Screening", desc: "Careful biometry measurements of head, abdomen, femur, and internal organ structures." },
      { step: "03", title: "Doppler Flow Assessment", desc: "Evaluation of blood velocity crossing the umbilical cord and maternal uterine arteries." },
      { step: "04", title: "Parent Counseling", desc: "Doctor explains findings directly to parents, answering questions and reviewing photos." }
    ],
    recoveryTips: [
      "Ultrasound uses safe sound waves with zero radiation; it is completely safe for both mother and baby.",
      "Schedule your anomaly scan between 18 and 22 weeks for optimal anatomical clarity."
    ],
    features: [
      "18-22 Weeks Anomaly Scan",
      "Live 4D Fetal Face Imaging",
      "Fetal Doppler Flow Studies",
      "Nuchal Translucency (NT) Scan",
      "Amniotic Fluid Evaluation",
      "High-Gloss Photo Prints"
    ],
    relatedBlogs: [
      { title: "Why the 20-Week Anomaly Ultrasound is the Most Critical Pregnancy Scan", slug: "anomaly-scan-guide" },
      { title: "3D vs 4D Ultrasound: Differences, Benefits & Best Weeks to Book", slug: "3d-4d-ultrasound-differences" }
    ],
    clinicalGuidelines: [
      { title: "ISUOG Practice Guidelines for Mid-Trimester Anomaly Scan", source: "International Society of Ultrasound in Obstetrics and Gynecology", url: "https://www.isuog.org/" }
    ]
  },
  "pcos-management": {
    title: "PCOS / PCOD & Hormonal Management",
    tagline: "Personalized medical and dietary solutions to reverse PCOS symptoms and restore regularity.",
    category: "Metabolic & Hormonal Health",
    image: "/template/images/services/middle/img6.webp",
    description: "Polycystic Ovary Syndrome (PCOS) affects metabolism, skin, and cycles. Dr. Faiza Hafeez provides a personalized, multi-targeted clinical strategy addressing insulin resistance, hormonal acne, hair loss, and weight balance in Lahore.",
    overview: [
      "PCOS is a metabolic and endocrine condition that requires more than a simple contraceptive pill prescription.",
      "By identifying your specific PCOS phenotype (insulin-resistant, inflammatory, or post-pill), we create sustainable results.",
      "Our treatment restores natural ovulation, regulates menstrual timing, clears stubborn hormonal acne, and optimizes fertility."
    ],
    indications: [
      "Irregular, Infrequent, or Skipped Menstrual Periods",
      "Hormonal Acne & Oily Skin along Jawline and Chin",
      "Hirsutism (Excessive Facial or Body Hair Growth)",
      "Difficulty Losing Weight Despite Dieting",
      "Multiple Small Ovarian Follicles seen on Ultrasound",
      "Fertility Difficulties or Recurrent Early Miscarriages"
    ],
    advantages: [
      { title: "Root-Cause Metabolic Targeting", desc: "Treating underlying insulin resistance and chronic low-grade inflammation." },
      { title: "Non-Surgical Hormonal Balance", desc: "Customized protocols utilizing inositol, metformin, cycle regulators, and anti-androgens." },
      { title: "Medical Nutrition Plan", desc: "Tailored low-glycemic dietary advice tailored to Pakistani cultural food choices." },
      { title: "Fertility Restoration", desc: "Specialized ovulation induction for couples seeking to achieve a healthy pregnancy." }
    ],
    steps: [
      { step: "01", title: "Comprehensive Hormone Panel", desc: "Fasting insulin, lipid profile, LH/FSH ratio, total testosterone, and DHEAS." },
      { step: "02", title: "Pelvic Ultrasound Mapping", desc: "Accurate assessment of ovarian volume and characteristic 'string-of-pearls' follicles." },
      { step: "03", title: "Customized Medical Regimen", desc: "Prescription of targeted medications matched to your symptoms and pregnancy goals." },
      { step: "04", title: "Quarterly Monitoring", desc: "Tracking cycle consistency, skin improvements, and insulin levels over 3 to 6 months." }
    ],
    recoveryTips: [
      "Incorporate 30 minutes of moderate exercise daily to improve cellular insulin sensitivity.",
      "Prioritize high-protein, fiber-rich breakfasts to stabilize daytime blood glucose."
    ],
    features: [
      "Insulin Resistance Therapy",
      "Cycle Regularity Restoration",
      "Hormonal Acne Treatment",
      "Hirsutism Management",
      "PCOS Weight Management",
      "PCOS Fertility Induction"
    ],
    relatedBlogs: [
      { title: "The Ultimate PCOS Diet Guide: What to Eat & What to Avoid in Pakistan", slug: "pcos-diet-guide-pakistan" },
      { title: "Can PCOS be Cured? Managing Symptoms for Long-Term Wellness", slug: "can-pcos-be-cured" }
    ],
    clinicalGuidelines: [
      { title: "International Evidence-Based Guideline for the Assessment & Management of PCOS", source: "Monash University & Endocrine Society", url: "https://www.monash.edu/" }
    ]
  },
  "cervical-screening": {
    title: "Cervical Screening & Pap Smear Clinic",
    tagline: "Preventive oncology, liquid-based Pap cytology, and HPV DNA screening in Lahore.",
    category: "Preventive Oncology",
    image: "/template/images/services/middle/img1.webp",
    description: "Cervical cancer is almost completely preventable with regular screening. Dr. Faiza Hafeez provides gentle, confidential liquid-based Pap smears, high-risk HPV testing, and early management of cervical cell abnormalities in Lahore.",
    overview: [
      "Routine cervical screening can detect microscopic cellular changes years before they ever become cancerous.",
      "The test takes less than two minutes and is performed with utmost sensitivity, gentle instruments, and strict hygiene.",
      "All specimens are analyzed by accredited histopathology laboratories with comprehensive doctor follow-up."
    ],
    indications: [
      "Routine 3-Year Screening for Women Aged 21 to 65",
      "Post-Coital or Intermenstrual Vaginal Spotting",
      "Persistent Abnormal Vaginal Discharge",
      "High-Risk HPV Infection History",
      "Follow-Up for Previously Abnormal Pap Smear (ASCUS / LSIL / HSIL)",
      "Pre-Marital or Well-Woman Gynecological Screening"
    ],
    advantages: [
      { title: "Quick & Painless Procedure", desc: "Gentle plastic speculum examination completed comfortably in under 2 minutes." },
      { title: "High-Sensitivity Liquid Cytology", desc: "Advanced liquid-based prep reduces false negatives compared to old slide smears." },
      { title: "Concurrent HPV DNA Testing", desc: "Screens for high-risk HPV types 16 and 18 for complete peace of mind." },
      { title: "Confidential Doctor Review", desc: "Dr. Faiza personally reviews and discusses every laboratory result with the patient." }
    ],
    steps: [
      { step: "01", title: "Pre-Exam Discussion", desc: "Review of menstrual dates, previous screening history, and gentle procedure explanation." },
      { step: "02", title: "Gentle Cytological Sample", desc: "A soft microscopic brush gently collects superficial cervical surface cells." },
      { step: "03", title: "Accredited Lab Pathology", desc: "Automated liquid cytology and molecular HPV DNA analysis." },
      { step: "04", title: "Personalized Results Call", desc: "Clear explanation of results and guidance on whether repeat is needed in 3 or 5 years." }
    ],
    recoveryTips: [
      "Schedule your Pap test when you are not actively menstruating (mid-cycle is ideal).",
      "Avoid intercourse, vaginal washes, or lubricants for 24-48 hours before the test."
    ],
    features: [
      "Liquid-Based Pap Cytology",
      "High-Risk HPV DNA Screening",
      "Gentle 2-Minute Procedure",
      "Early Dysplasia Detection",
      "Colposcopy Guidance",
      "Confidential Results Review"
    ],
    relatedBlogs: [
      { title: "Everything You Need to Know About Your First Pap Smear: Simple & Painless", slug: "first-pap-smear-guide" }
    ],
    clinicalGuidelines: [
      { title: "WHO Cervical Cancer Elimination Initiative", source: "World Health Organization", url: "https://www.who.int/" }
    ]
  },
  "postnatal-care": {
    title: "Postnatal Care & Lactation Support",
    tagline: "Dedicated recovery, incision healing, and newborn feeding support in Lahore.",
    category: "Postpartum Care",
    image: "/template/images/services/middle/img6.webp",
    description: "The 'fourth trimester' is just as vital as pregnancy. Dr. Faiza Hafeez provides compassionate postpartum consultations focusing on C-section and perineal wound healing, pelvic floor recovery, breastfeeding support, and maternal emotional wellness in Lahore.",
    overview: [
      "After birth, maternal recovery deserves attentive clinical care. Hormonal shifts, sleep deficit, and surgical healing require expert support.",
      "We examine healing surgical incisions, evaluate pelvic floor muscle tone, and screen for postpartum depression or anxiety.",
      "Lactation counseling helps new mothers establish confident breastfeeding without pain or distress."
    ],
    indications: [
      "Routine 1-Week and 6-Week Post-Delivery Clinical Checkup",
      "C-Section Incision Review, Redness, or Pain Assessment",
      "Perineal Episiotomy Tear Healing Evaluation",
      "Breastfeeding Difficulties, Sore Nipples, or Low Milk Supply",
      "Postpartum Blues, Fatigue, or Mood Changes",
      "Post-Pregnancy Contraception & Family Planning"
    ],
    advantages: [
      { title: "Comprehensive Physical Exam", desc: "Thorough inspection of uterus involution, wound integrity, and pelvic tone." },
      { title: "Hands-On Latching Guidance", desc: "Correct positioning techniques to avoid sore nipples, engorgement, or mastitis." },
      { title: "Compassionate Mental Health", desc: "Safe, supportive discussions addressing postpartum anxiety and emotional adjustments." },
      { title: "Safe Contraception Advice", desc: "Selection of breastfeeding-safe birth control methods tailored to your plans." }
    ],
    steps: [
      { step: "01", title: "Early Wound Check (Day 7-10)", desc: "Assessment of surgical stitches, dressings removal, and mobility guidance." },
      { step: "02", title: "Comprehensive 6-Week Visit", desc: "Full pelvic examination, iron level check, and clearance for gentle physical activities." },
      { step: "03", title: "Lactation Optimization", desc: "Nutritional recommendations and practical pumping advice for working mothers." },
      { step: "04", title: "Long-Term Pelvic Fitness", desc: "Guidance on pelvic floor exercises (Kegels) and safe core re-strengthening." }
    ],
    recoveryTips: [
      "Rest whenever baby rests; prioritize protein and warm fluid hydration to aid tissue repair.",
      "Never hesitate to reach out if you notice fever, foul-smelling lochia discharge, or severe pain."
    ],
    features: [
      "C-Section Incision Assessment",
      "Perineal Healing Review",
      "Hands-On Latching Guidance",
      "Postpartum Emotional Support",
      "Breastfeeding-Safe Contraception",
      "Pelvic Floor Recovery"
    ],
    relatedBlogs: [
      { title: "C-Section Recovery Timeline: Week-by-Week Care & Healing Tips", slug: "c-section-recovery-timeline" }
    ],
    clinicalGuidelines: [
      { title: "WHO Recommendations on Maternal and Newborn Care for a Positive Postnatal Experience", source: "World Health Organization", url: "https://www.who.int/" }
    ]
  }
};

const allServiceList = [
  { slug: "laparoscopic-surgery", title: "Laparoscopic Surgery" },
  { slug: "high-risk-pregnancy", title: "High-Risk Pregnancy" },
  { slug: "gynecology", title: "Gynecology & Pelvic Health" },
  { slug: "infertility-treatment", title: "Infertility & Reproductive" },
  { slug: "3d-4d-ultrasound", title: "3D / 4D Ultrasound" },
  { slug: "pcos-management", title: "PCOS & Hormones" },
  { slug: "cervical-screening", title: "Cervical Screening & Pap" },
  { slug: "postnatal-care", title: "Postnatal & Lactation Care" },
];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};

  const url = `https://faizahafeez-bytely-team.vercel.app/services/${slug}`;
  return {
    title: `${service.title} in Lahore | Dr. Faiza Hafeez FCPS`,
    description: service.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${service.title} | Dr. Faiza Hafeez Gynecologist Lahore`,
      description: service.description,
      url,
      type: "website",
      images: [
        {
          url: `https://faizahafeez-bytely-team.vercel.app${service.image}`,
          width: 800,
          height: 600,
          alt: service.title,
        },
      ],
    },
    keywords: [
      service.title,
      `${service.title} in Lahore`,
      "Dr Faiza Hafeez",
      "Gynecologist Lahore",
      "Obstetrician Lahore",
      "Ittefaq Hospital Lahore",
      ...service.features,
    ].join(", "),
  };
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.description,
    procedureType: "Surgical / Clinical Consultation",
    bodyLocation: "Female Reproductive System",
    provider: {
      "@type": "Physician",
      name: "Dr. Faiza Hafeez",
      jobTitle: "Gynae and Obs Resident",
      hospitalAffiliation: {
        "@type": "Hospital",
        name: "Ittefaq Hospital (Trust), Lahore",
      },
      url: "https://faizahafeez-bytely-team.vercel.app",
      telephone: "+923344280522",
    },
    location: {
      "@type": "MedicalClinic",
      name: "Dr. Faiza Hafeez Clinic",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Medical Square, Gulberg III",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
    },
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* JSON-LD Rich Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ClinicMaster Style Page Banner */}
      <PageBanner
        badge={service.category}
        title={service.title}
        description={service.tagline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Main Content Area: 2-Column Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            {/* Left Column (8 cols): In-depth Clinical Content & SEO */}
            <div className="lg:col-span-8 space-y-12">
              {/* Featured Treatment Banner Image */}
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-[#ecf5fb]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Comprehensive Overview */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ccf2f9] text-[#00a1be] text-xs font-bold uppercase tracking-wider">
                  <Activity size={14} className="text-[#00BDE0]" />
                  Clinical Overview & Practice Standards
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#031B4E]">
                  About {service.title}
                </h2>
                {service.overview.map((para, i) => (
                  <p key={i} className="text-[#566593] text-base leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Indications: When is this treatment recommended? */}
              <div className="bg-[#ecf5fb]/60 rounded-3xl p-8 border border-[#00BDE0]/20 space-y-4">
                <h3 className="text-xl font-bold text-[#031B4E]">
                  Common Clinical Indications
                </h3>
                <p className="text-sm text-[#566593]">
                  Dr. Faiza Hafeez recommends this clinical approach for patients experiencing:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.indications.map((ind, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={18} className="text-[#00BDE0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-[#031B4E]">{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Surgical / Clinical Advantages */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#031B4E]">
                  Key Advantages & Patient Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.advantages.map((adv, i) => (
                    <div
                      key={i}
                      className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-2"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#ccf2f9] text-[#00BDE0] flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </div>
                      <h4 className="text-base font-bold text-[#031B4E]">
                        {adv.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#566593] leading-relaxed">
                        {adv.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-Step Procedure Workflow */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#031B4E]">
                  What to Expect: Treatment Journey
                </h3>
                <div className="space-y-4">
                  {service.steps.map((st, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-5 p-6 rounded-3xl bg-[#ecf5fb]/40 border border-slate-100"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#00BDE0] text-white flex items-center justify-center font-extrabold text-lg flex-shrink-0 shadow-md">
                        {st.step}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-[#031B4E]">
                          {st.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#566593] leading-relaxed">
                          {st.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Post-Op Care & Recovery Tips */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-[#031B4E] flex items-center gap-2">
                  <ShieldCheck size={22} className="text-emerald-500" />
                  Post-Care & Recovery Guidance
                </h3>
                <ul className="space-y-2.5 pt-1">
                  {service.recoveryTips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#566593]">
                      <span className="text-[#00BDE0] font-bold mt-0.5">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clinical Guidelines & References */}
              {service.clinicalGuidelines.length > 0 && (
                <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#031B4E]">
                    <ShieldCheck size={18} className="text-[#00BDE0]" />
                    Evidence-Based Clinical Guidelines & International Standards
                  </div>
                  <ul className="space-y-2 pt-1 text-xs">
                    {service.clinicalGuidelines.map((guide, i) => (
                      <li key={i}>
                        <a
                          href={guide.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#0A3366] hover:text-[#00BDE0] font-semibold transition-colors"
                        >
                          <ExternalLink size={13} className="text-[#00BDE0]" />
                          <span>{guide.title}</span>
                          <span className="text-[#566593] font-normal">({guide.source})</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Bottom Consultation CTA Banner */}
              <div className="bg-[#0A3366] text-white rounded-[36px] p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00BDE0]/20 rounded-full blur-3xl pointer-events-none" />
                <h3 className="text-2xl sm:text-3xl font-bold relative z-10">
                  Ready to consult Dr. Faiza Hafeez for {service.title}?
                </h3>
                <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto leading-relaxed relative z-10">
                  Our clinical practice at Ittefaq Hospital Trust Lahore is fully equipped with advanced laparoscopy and diagnostic facilities. Book your slot online or connect instantly on WhatsApp.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-2 relative z-10">
                  <Link
                    href="/appointments"
                    className="btn btn-primary btn-lg shadow-xl"
                  >
                    Book In-Person Consultation
                  </Link>
                  <a
                    href="https://wa.me/923344280522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-emerald-500 hover:bg-emerald-600 text-white btn-lg"
                  >
                    WhatsApp Helpline
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column (4 cols): Sticky Sidebar with Rich Internal Linking */}
            <div className="lg:col-span-4 space-y-8">
              {/* Widget 1: All Services Navigation (Internal Linking) */}
              <div className="bg-[#ecf5fb] rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-4">
                <h4 className="text-lg font-bold text-[#031B4E] border-b border-slate-200/80 pb-3">
                  All Gynecology Specialties
                </h4>
                <ul className="space-y-2">
                  {allServiceList.map((item) => {
                    const isCurrent = item.slug === slug;
                    return (
                      <li key={item.slug}>
                        <Link
                          href={`/services/${item.slug}`}
                          className={`flex items-center justify-between p-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                            isCurrent
                              ? "bg-[#00BDE0] text-white shadow-md shadow-[#00BDE0]/30"
                              : "bg-white text-[#031B4E] hover:bg-slate-100 hover:text-[#00BDE0]"
                          }`}
                        >
                          <span>{item.title}</span>
                          <ChevronRight size={14} className={isCurrent ? "text-white" : "text-[#00BDE0]"} />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Widget 2: Doctor Profile Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xl space-y-4 text-center">
                <div className="w-20 h-20 rounded-full mx-auto border-4 border-[#00BDE0] bg-[#ecf5fb] flex items-center justify-center text-[#00BDE0] shadow-md">
                  <ShieldCheck size={36} className="text-[#00BDE0]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#031B4E]">
                    Dr. Faiza Hafeez
                  </h4>
                  <p className="text-xs font-semibold text-[#00a1be] uppercase tracking-wider mt-0.5">
                    Gynae & Obs Resident (FCPS)
                  </p>
                  <p className="text-xs text-[#566593] mt-2">
                    Ittefaq Hospital (Trust), Lahore
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/appointments"
                    className="btn btn-primary w-full py-3 text-xs font-bold"
                  >
                    Schedule Appointment
                  </Link>
                </div>
              </div>

              {/* Widget 3: Related Health Blogs (Internal Linking) */}
              {service.relatedBlogs.length > 0 && (
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-4">
                  <h4 className="text-base font-bold text-[#031B4E] flex items-center gap-2 border-b border-slate-100 pb-3">
                    <BookOpen size={16} className="text-[#00BDE0]" />
                    Related Health Articles
                  </h4>
                  <ul className="space-y-3">
                    {service.relatedBlogs.map((b, i) => (
                      <li key={i}>
                        <Link
                          href={`/blogs/${b.slug}`}
                          className="text-xs font-semibold text-[#0A3366] hover:text-[#00BDE0] transition-colors leading-snug block"
                        >
                          • {b.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <Link
                      href="/blogs"
                      className="text-xs font-bold text-[#00BDE0] hover:underline flex items-center gap-1"
                    >
                      <span>View All 50+ Articles</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              )}

              {/* Widget 4: Quick Clinic Helpline */}
              <div className="bg-[#0A3366] text-white rounded-3xl p-6 sm:p-7 shadow-lg space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#00BDE0] text-white flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <h4 className="text-lg font-bold">Have Questions?</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Call or WhatsApp our hospital triage reception for appointment availability and pre-op fasting instructions.
                </p>
                <div className="space-y-2 pt-2">
                  <a
                    href="tel:+923344280522"
                    className="block text-center py-2.5 px-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors"
                  >
                    Call: +92 334 4280522
                  </a>
                  <a
                    href="https://wa.me/923344280522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-2.5 px-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-colors"
                  >
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
