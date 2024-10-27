type ActiveTab = "Contact" | "Company" | "Socials";

interface ContactCardProps {
  name: string;
  phone: string;
  email: string;
  website: string;
  location: string;
  imageSrc: string;
  company: string;
  company_website: string;
  position: string;
  company_location: string;
  socials?: { name: string; url: string }[];
}

export type { ContactCardProps, ActiveTab };
