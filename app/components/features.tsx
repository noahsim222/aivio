import Image from "next/image";
import AnimationUnderline from "./animationUnderline";

const features = [
  {
    icon: "/AIengine.svg",
    title: "Customizable AI Engine",
    description: "Tailor your outreach cadences to your unique business needs with our AI-powered personalization engine. Upload your training data, define your ideal customer profile, and let AIVIO generate personalized messages that resonate with your prospects."
  },
  {
    icon: "/integration.svg",
    title: "Easy Integration",
    description: "Seamlessly integrate AIVIO with your existing CRM and outreach tools. Our robust APIs ensure real-time data sync, so you can continue using the tools you love while benefiting from AIVIO's advanced features."
  },
  {
    icon: "/robust.svg",
    title: "Robust User Management",
    description: "Manage your team's access and permissions with AIVIO's secure, scalable platform. Create user accounts, assign roles, and monitor acitvity from a centralized dashboard. Keep your data safe with end-to-end encryption and compliance with industry regulations."
  },
  {
    icon: "/analytics.svg",
    title: "Analytics and Reporting",
    description: "Track the performance of your outreach campaigns with AIVIO's comprehensive analytics and reporting tools. Monitor engagement rates, response rates, and conversion metrics to gain insights and optimize your startegies for better results."
  },
]

export default function Features() {
  return (
    <div className="w-full bg-[#f5f9ff] flex justify-center items-center">
      <div className="w-full max-w-6xl justify-center items-center grid gap-5 py-16">
        <div className="p-2.5 text-center">
          <span className="p-2.5 px-5 bg-white text-lg text-zinc-500 font-normal rounded-md">Our Features</span>
          <h1 className="py-2.5 text-gray-950 text-5xl font-bold leading-snug sm:flex justify-center items-center">
            Experience Our&nbsp;
            <div className="relative max-[880px]:inline">
              <AnimationUnderline word="Features" className="w-52" />
            </div>
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-5 p-2.5">
          {
            features.map(f => (
              <div key={f.title} className="bg-white rounded-2xl shadow-2xl p-2.5">
                <div className="p-9 grid gap-1.5">
                  <Image
                    src={f.icon}
                    alt={f.title}
                    width={50}
                    height={50}
                    className="pb-1.5"
                  />
                  <h1 className="text-3xl font-bold mt-2 mb-4">{f.title}</h1>
                  <p className="text-zinc-500">{f.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}