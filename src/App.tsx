import ContactCard from "./_components/contact-card.tsx";

export default function App() {
  return (
    <section className="flex justify-center items-center md:min-h-screen bg-gray-100">
      {/*Card*/}
      <ContactCard
        name="Small God"
        phone="+233 559 237 619"
        email="smallgod@email.com"
        website="www.example.com"
        location="Some street, 12345, New York, NY, United States"
        company="AmaliTech Ghana Ltd"
        position="Software Engineer"
        company_website="https://amalitech.org"
        company_location="Oasis of Love St Opp. Absa Bank, Ahodow Kumasi Ghana"
        imageSrc="https://images.pexels.com/photos/27893233/pexels-photo-27893233/free-photo-of-woman-in-shirt-photographing-with-digital-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with actual image URL
      />
    </section>
  );
}
