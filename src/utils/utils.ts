import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SERVICES from "../models/mock-services";
import service from "../models/service";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export function AboutPage(title: string) {
  useEffect(() => {
    document.title = "JordyMagie - " + title;
  }, []);
}
export function getServiceId() {
  const { id } = useParams<{ id: string }>();

  // Convertir l'ID en un nombre entier
  const serviceId = Number(id);

  // Rechercher le service correspondant à l'ID dans la liste SERVICES
  const service = SERVICES.find((service) => service.id === serviceId);
  return service as service;
}
export function sendEmail(formData: any) {
  emailjs
    .send(
      "service_4poxq9o", // Remplacez par votre service ID
      "template_l52u6k8", // Remplacez par votre template ID
      formData,
      "lLTO7YALsApZK3jla" // Remplacez par votre user ID
    )
    .then((response: any) => {
      console.log("Email envoyé avec succès!", response.status, response.text);
      toast.success("Formulaire soumis avec succès !");
    })
    .catch((error: any) => {
      console.error("Erreur lors de l'envoi de l'email:", error);
      toast.error("Une erreur s'est produite lors de l'envoi du formulaire.");
    });
}
