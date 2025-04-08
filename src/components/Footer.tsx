import React from "react";
import { IonIcon } from "@ionic/react";
import { call, location, mail, chevronForwardOutline } from "ionicons/icons";

const Footer: React.FC = () => {
  return (
    <footer className="w-full dark:bg-gray-900 text-white">
      <div className="w-full mx-auto sm:px-10 px-4 pb-10">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 justify-items-start pt-12">
          {/* Column 1 - Contact */}
          <div className="mt-4">
            <h1 className="text-4xl font-display mb-8">Get In Touch</h1>
            <ul className="text-lg text-gray-300 font-semibold flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <IonIcon icon={location} className="text-2xl" />
                <p>Sarbet, Addis Ababa, Ethiopia</p>
              </li>
              <li className="flex items-center gap-2">
                <IonIcon icon={call} className="text-2xl" />
                <p>(+251) 913 4***30</p>
              </li>
              <li className="flex items-center gap-2">
                <IonIcon icon={mail} className="text-2xl" />
                <p>sammytg66@gmail.com</p>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-2 items-center text-white mt-6">
              {["facebook", "instagram", "linkedin", "youtube"].map(
                (network) => (
                  <a
                    key={network}
                    href="#"
                    className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center"
                  >
                    <img
                      src={`/icons/${network}.svg`}
                      alt={`${network} icon`}
                      className="w-5 h-5"
                    />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Column 2 - Links */}
          <div className="mt-4">
            <h2 className="text-4xl font-display mb-8">Quick Links</h2>
            <ul className="mt-4 text-lg font-semibold text-gray-300">
              {[
                "About Us",
                "Contact Us",
                "Our Services",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((text) => (
                <li key={text} className="flex items-center text-xl mt-2">
                  <IonIcon icon={chevronForwardOutline} className="mr-1" />
                  <a href="#" className="hover:underline">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Gallery */}
          <div className="mt-4 col-span-2 lg:col-span-1">
            <h2 className="text-4xl font-display mb-8">Photo Gallery</h2>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1",
                "https://images.unsplash.com/photo-1616161560417-66d4db5892ec",
                "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
              ].map((url, index) => (
                <img
                  key={index}
                  src={`${url}?auto=format&fit=crop&w=300&q=80`}
                  alt="Gallery"
                  className="rounded-sm outline outline-[4px] object-cover w-full h-24"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
