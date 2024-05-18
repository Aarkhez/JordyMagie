import ContactFormContainer from "../components/ContactFormContainer";
import { AboutPage } from "../utils/utils.ts";

function Contact() {
  AboutPage("Contactez-nous");

  return <ContactFormContainer />;
}
export default Contact;
