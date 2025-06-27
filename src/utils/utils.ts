import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SERVICES from "../models/mock-services";
import service from "../models/service";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

export function AboutPage(title: string) {
  useEffect(() => {
    document.title = "JordyMagie - " + title;
  }, []);
}
export function getServiceId() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams<{ id: string }>();

  // Convertir l'ID en un nombre entier
  const serviceId = Number(id);

  // Rechercher le service correspondant à l'ID dans la liste SERVICES
  const service = SERVICES.find((service) => service.id === serviceId);
  return service as service;
}
export function sendEmail(formData: any) {
  emailjs.init("250AIW_PwaoPkDoVv"); // Remplacez par votre User ID

  emailjs
    .send(
      "service_4poxq9o", // Remplacez par votre service ID
      "template_l52u6k8", // Remplacez par votre template ID
      formData
    )
    .then(() => {
      toast.success("Votre message a été envoyé avec succès ! Nous vous contacterons bientôt.");
    })
    .catch(() => {
      toast.error("Une erreur s'est produite lors de l'envoi du formulaire. Veuillez notifier l'administrateur du site.");
    });
}
