import { useState } from "react";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [emailError, setEmailError] = useState("");
  const [telError, setTelError] = useState("");
  const [submitError, setSubmitError] = useState("");

  const validateEmail = (value: any) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) {
      setEmailError(
        "Adresse e-mail invalide. Veuillez saisir une adresse e-mail valide."
      );
    } else {
      setEmailError("");
    }
  };

  const validateTel = (value: any) => {
    const telRegex = /^\+?[0-9]+([ \s-.][0-9]+)*$/;
    if (!telRegex.test(value)) {
      setTelError(
        "Numéro de téléphone invalide. Veuillez saisir un numéro de téléphone valide."
      );
    } else {
      setTelError("");
    }
  };

  const handleEmailBlur = (event: any) => {
    validateEmail(event.target.value);
    setEmail(event.target.value);
  };

  const handleTelBlur = (event: any) => {
    validateTel(event.target.value);
    setTel(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    validateEmail(email);
    validateTel(tel);

    if (!emailError && !telError) {
      console.log("Formulaire soumis avec succès !");
    } else {
      setSubmitError(
        "Veuillez corriger les erreurs avant de soumettre le formulaire."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Prénom
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Thierry"
            required
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Nom
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Dupont"
            required
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Téléphone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          onBlur={handleTelBlur}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="01 23 45 67 89"
          required
        />
        {telError && <p className="text-red-500 text-sm">{telError}</p>}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onBlur={handleEmailBlur}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="name@mail.com"
          required
        />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Votre message
        </label>
        <textarea
          id="message"
          name="message"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Laissez un commentaire..."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Envoyer
      </button>
      {submitError && <p className="text-red-500 text-sm">{submitError}</p>}
    </form>
  );
}
export default ContactForm;
