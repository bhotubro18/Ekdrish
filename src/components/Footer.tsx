import { Instagram, Mail, Heart } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-accent">Ek</span>Drish
            </h3>
            <p className="text-primary-foreground/70 text-sm">Drishya vahi, Par kahani har kisi ki apni
          </p>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            <a href="https://instagram.com/bhotu.patell" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors group" aria-label="Parth's Instagram">
              <Instagram className="w-5 h-5 group-hover:text-accent-foreground transition-colors" />
            </a>
            <a href="https://instagram.com/ekdrish" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors group" aria-label="EkDrish Instagram">
              <Instagram className="w-5 h-5 group-hover:text-accent-foreground transition-colors" />
            </a>
            <a href="mailto:ekdrish@gmail.com" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors group" aria-label="Email">
              <Mail className="w-5 h-5 group-hover:text-accent-foreground transition-colors" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/60 text-sm flex items-center justify-center gap-2">
            © {currentYear} EkDrish.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;