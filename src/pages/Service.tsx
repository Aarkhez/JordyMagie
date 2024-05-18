import ServiceDetail from "../components/ServiceDetail";
import { AboutPage, getServiceId } from "../utils/utils";

function Service() {
  AboutPage(getServiceId()?.title || "Service");
  return (
    <div>
      <ServiceDetail />
    </div>
  );
}
export default Service;
