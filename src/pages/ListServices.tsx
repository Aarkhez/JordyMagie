import ServicesContainer from "../components/ServicesContainer.tsx";
import { AboutPage } from "../utils/utils.ts";

function ListServices() {
  AboutPage("Services");
  return (
    <div>
      <ServicesContainer />
    </div>
  );
}
export default ListServices;
