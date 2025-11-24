import { FaGithub, FaEnvelope } from "react-icons/fa";

export function SocialLinks() {
  const socials = [
    { icon: FaGithub, href: "https://github.com/Pavel-glitch-ui", label: "GitHub" },
    { icon: FaEnvelope, href: "https://my.mail.ru/mail/pavelsatete/", label: "Email" },
  ];

  return (
    <div>
      <h2 className="text-gray-400 uppercase text-sm tracking-wider mb-4">Connect</h2>
      <div className="flex gap-4">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
            target="_blank"
              key={index}
              href={social.href}
              aria-label={social.label}
              className="w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-white hover:bg-gray-700/50 transition-colors"
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </div>
  );
}

