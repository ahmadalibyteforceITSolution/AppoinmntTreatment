import { useState } from "react";
import { Clock, DollarSign, Activity, Heart, UserRound, Baby, Calendar } from "lucide-react";
import Swal from "sweetalert2";

const treatments = [
  {
    name: "General Consultation",
    time: "20-30 Mins",
    charges: "2,000",
    specialist: "Dr. Faiza Hafeez",
    icon: UserRound
  },
  {
    name: "Cardiac ECG & Stress Test",
    time: "45-60 Mins",
    charges: "5,500",
    specialist: "Cardiology Dept",
    icon: Activity
  },
  {
    name: "Prenatal Ultrasound",
    time: "30 Mins",
    charges: "3,500",
    specialist: "Gynecology Dept",
    icon: Baby
  },
  {
    name: "Heart Rhythm Monitoring",
    time: "24 Hours (Device)",
    charges: "8,000",
    specialist: "Cardiology Dept",
    icon: Heart
  },
  {
    name: "Detailed Health Screening",
    time: "90 Mins",
    charges: "12,500",
    specialist: "Executive Clinic",
    icon: Heart
  },
  {
    name: "Nursing Home Visit",
    time: "Flexible",
    charges: "4,000 / visit",
    specialist: "Nursing Team",
    icon: Clock
  }
];

const BookingListing = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleBook = (treatmentName: string) => {
    if (!selectedDate) {
      Swal.fire({
        icon: 'warning',
        title: 'Select a Date',
        text: 'Please select your preferred date before booking.',
        confirmButtonColor: '#0ea5e9'
      });
      return;
    }

    const whatsappNumber = "923344280522";
    const text = `Hello Dr. Faiza, I would like to book a treatment:\n\n*Treatment:* ${treatmentName}\n*Preferred Date:* ${selectedDate}\n\nPlease confirm my appointment.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Treatment Menu</h2>
          <p className="text-4xl md:text-5xl font-serif font-bold text-slate-950 mb-6">Booking & Charges</p>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10">
            A comprehensive list of our medical treatments, estimated session times, and transparent pricing.
          </p>

          <div className="max-w-xs mx-auto space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Select Preferred Date First</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
              <input 
                type="date" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-primary/20 outline-none transition-all font-bold text-slate-900"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {treatments.map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all group text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                <item.icon size={28} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-950 text-lg">{item.name}</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{item.specialist}</p>
                <div className="flex justify-center sm:justify-start gap-4 mt-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-600">
                    <Clock size={14} className="text-primary" />
                    {item.time}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-600">
                    <DollarSign size={14} className="text-primary" />
                    PKR {item.charges}
                  </div>
                </div>
              </div>
              <button 
                onClick={() => handleBook(item.name)}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-slate-950 p-10 rounded-[40px] text-white flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <h4 className="text-2xl font-serif font-bold mb-2">Need a custom treatment plan?</h4>
            <p className="text-slate-400">Our specialists can design a package tailored to your specific health needs.</p>
          </div>
          <a href="https://wa.me/923344280522" target="_blank" className="px-10 py-4 bg-secondary text-slate-950 rounded-full font-bold hover:bg-white transition-all whitespace-nowrap">
            Consult via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingListing;
