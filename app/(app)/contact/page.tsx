import ContactForm from "@/components/contact-form";
import PageHeader from "@/components/page-header";

export default function Page() {
  return (
    <>
      <PageHeader
        heading="Contact Me"
        description="I will get back to you as soon as possible."
      />
      <Map />
      <ContactForm />
    </>
  );
}

function Map() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14293.480577752242!2d80.37614625816798!3d26.411529281188262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c41234f1207df%3A0xc85f58343be1a71c!2sRamadevi%2C%20Lal%20Bungalow%2C%20Jajmau%20Sub%20Metro%20City%2C%20Kanpur%2C%20Uttar%20Pradesh%20208007!5e0!3m2!1sen!2sin!4v1763446151289!5m2!1sen!2sin"
      className="h-[500px] w-full rounded-md filter grayscale contrast-75 mb-10"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
