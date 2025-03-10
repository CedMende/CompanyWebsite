import React, { useEffect, useState, useRef } from "react";
import { Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { TEAM_AVATARS } from "../../src/constants/images";

const teamMembers = [{
  name: "Vernon Pranilla",
  role: "CEO & Founder",
  image: TEAM_AVATARS.vernon,
  category: "leadership"
}, {
  name: "Carl Jance Mende",
  role: "Associate Consultant",
  image: TEAM_AVATARS.carl,
  category: "leadership"
}, {
  name: "John Cedric Mende",
  role: "Associate Consultant",
  image: TEAM_AVATARS.john,
  category: "leadership"
}, {
  name: "Princess Jan Mende",
  role: "Supervisor",
  image: TEAM_AVATARS.cess,
  category: "leadership"
}, {
  name: "Heaven Gave Tadifa",
  role: "Sales Executive / Account Manager",
  image: TEAM_AVATARS.heaven,
  category: "leadership"
}, {
  name: "Danielle Ramirez",
  role: "Onboarding Marketing managers",
  image: TEAM_AVATARS.danielle,
  category: "leadership"
}, {
  name: "Erlin Lara Domingo",
  role: "Onboarding Marketing managers",
  image: TEAM_AVATARS.lars,
  category: "leadership"
}, {
  name: "Yuchuan Licdan Lo",
  role: "Onboarding Marketing managers",
  image: TEAM_AVATARS.yuchuan,
  category: "leadership"
}, {
  name: "Elmira Sol Saul Rosales",
  role: "Onboarding Marketing managers",
  image: TEAM_AVATARS.elmira,
  category: "leadership"
}, {
  name: "Jesser Galapon",
  role: "Senior Developer",
  image: TEAM_AVATARS.jesser,
  category: "developers"
}, {
  name: "Rodel Agustin",
  role: "Senior Developer",
  image: TEAM_AVATARS.rodel,
  category: "developers"
}, {
  name: "Glen Ibraheem Lacorte",
  role: "Senior Developer",
  image: TEAM_AVATARS.glen,
  category: "developers"
}, {
  name: "Mauro Acapuyan",
  role: "Junior Developer",
  image: TEAM_AVATARS.mauro,
  category: "developers"
}, {
  name: "Joshua Agustin Fedelis",
  role: "Entry Level Developer",
  image: TEAM_AVATARS.joshua,
  category: "developers"
}, {
  name: "Meiggan Circa",
  role: "Entry Level Developer",
  image: TEAM_AVATARS.meiggan,
  category: "developers"
}, {
  name: "John Joseph Manuel",
  role: "Entry Level Developer",
  image: TEAM_AVATARS.joseph,
  category: "developers"
}, {
  name: "John Joel Aguilar Aberilla",
  role: "Entry Level Developer",
  image: TEAM_AVATARS.joel,
  category: "developers"
}, {
  name: "Christian Dave Ablaza",
  role: "Entry Level Developer",
  image: TEAM_AVATARS.christian,
  category: "developers"
}, {
  name: "Azter Velazco",
  role: "Entry Level Developer",
  image: TEAM_AVATARS.azter,
  category: "developers"
}, {
  name: "Jhon Jaime S. Ladines",
  role: "Entry Level Developer",
  image: TEAM_AVATARS.jhon,
  category: "developers"
}, {
  name: "Mark Gerald I. Garcia",
  role: "Entry Level Developer",
  image: TEAM_AVATARS.jaypee,
  category: "developers"
}, {
  name: "Daniel Brian Lee Hagunos",
  role: "Entry Level Developer",
  image: TEAM_AVATARS.daniel,
  category: "developers"
}, {
  name: "Jaypee Alsisto",
  role: "Entry Level Developer",
  image: TEAM_AVATARS.mark,
  category: "developers"
}];
const TeamSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [category, setCategory] = useState("leadership");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const filteredTeam = teamMembers.filter(member => member.category === category);
  const slidesPerView = 4;
  const totalSlides = Math.ceil(filteredTeam.length / slidesPerView);
  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (!paused && !isTransitioning) {
      interval = setInterval(() => {
        if (currentSlide < totalSlides - 1) {
          handleNext();
        } else {
          setIsTransitioning(true);
          setCurrentSlide(0);
          setTimeout(() => setIsTransitioning(false), 500);
        }
      }, 5000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [paused, isTransitioning, currentSlide, totalSlides]);
  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => Math.max(0, prev - 1));
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };
  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => Math.min(totalSlides - 1, prev + 1));
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };
  const handleDotClick = (index: number) => {
    if (isTransitioning || currentSlide === index) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };
  return <section className="w-full bg-white dark:bg-gray-900 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-violet-50/50 to-transparent dark:from-violet-900/10 dark:to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-200/20 dark:bg-orange-900/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-200/50 to-orange-200/50 dark:from-violet-800/30 dark:to-orange-700/30 rounded-full blur-md transform scale-110"></div>
            <div className="relative w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
              <Users className="w-8 h-8 text-violet-700 dark:text-violet-400" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Though we're a young company, our team brings passion, expertise,
            and a fresh perspective to every project we undertake.
          </p>
          <div className="flex justify-center gap-4 mt-8 mb-10">
            <button onClick={() => {
            setCategory("leadership");
            setCurrentSlide(0);
          }} className={`px-6 py-2 rounded-full transition-colors ${category === "leadership" ? "bg-violet-600 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`}>
              Executive Officers
            </button>
            <button onClick={() => {
            setCategory("developers");
            setCurrentSlide(0);
          }} className={`px-6 py-2 rounded-full transition-colors ${category === "developers" ? "bg-orange-500 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`}>
              Developers
            </button>
          </div>
        </div>
        <div className="relative">
          {filteredTeam.length > slidesPerView && <>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 z-20">
                <button onClick={handlePrev} disabled={isTransitioning || currentSlide === 0} className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50" aria-label="Previous slide">
                  <ChevronLeft className="w-6 h-6" />
                </button>
              </div>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 z-20">
                <button onClick={handleNext} disabled={isTransitioning || currentSlide >= totalSlides - 1} className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50" aria-label="Next slide">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </>}
            <div className="overflow-hidden px-4" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} ref={carouselRef}>
            <div className="flex transition-transform duration-500 ease-in-out py-6" style={{
            transform: `translateX(-${currentSlide * 100}%)`
            }}>
              {Array.from({
              length: totalSlides
            }).map((_, slideIndex) => <div key={slideIndex} className="w-full flex-shrink-0 flex">
                  {filteredTeam.slice(slideIndex * slidesPerView, (slideIndex + 1) * slidesPerView).map((member, memberIndex) => <div key={`${slideIndex}-${memberIndex}`} className="w-1/4 px-2">
                        <div className="group text-center">
                          <div className="relative inline-block mb-4 transition-transform duration-300 group-hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-orange-400/20 dark:from-violet-500/30 dark:to-orange-500/30 rounded-full blur-xl transform scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-gray-200 bg-black dark:bg-gray-950">
                              {member.image ? <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" /> : <div className="w-full h-full flex items-center justify-center text-white dark:text-gray-200 text-2xl font-bold">
                                  {member.name.split(" ").map(n => n[0]).join("")}
                                </div>}
                            </div>
                          </div>
                          <div className="relative">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors">
                              {member.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              {member.role}
                            </p>
                            <div className="h-0.5 w-0 bg-gradient-to-r from-violet-500 to-orange-500 mx-auto mt-2 group-hover:w-16 transition-all duration-300"></div>
                          </div>
                        </div>
                      </div>)}
                </div>)}
            </div>
          </div>
          {totalSlides > 1 && <div className="flex justify-center gap-2 mt-8">
              {[...Array(totalSlides)].map((_, i) => <button key={i} onClick={() => handleDotClick(i)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === i ? "bg-violet-700 dark:bg-violet-500 scale-125" : "bg-gray-300 dark:bg-gray-600"}`} aria-label={`Go to slide ${i + 1}`} disabled={isTransitioning} />)}
            </div>}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-block relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-orange-500 rounded-lg blur-sm group-hover:blur-md transition-all duration-200"></div>
            <Link to="/careers" className="relative block px-6 py-3 bg-white dark:bg-gray-900 rounded-md text-gray-900 dark:text-white hover:bg-opacity-95 dark:hover:bg-opacity-95 transition-all border border-transparent">
              Join Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>;
};
export default TeamSection;