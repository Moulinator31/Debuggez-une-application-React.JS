import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    // to implement
  });

  it("a list of people is displayed", async () => {
    render(<Home />);

    await screen.findByText("Une équipe d’experts dédiés à l’ogranisation de vos événements");
    await screen.findByText("Samira");
  });

  it("a footer is displayed", () => {
    render(< Home/>);

    /**
     * Utilisation de screen.getByText pour vérifier que le texte "Contactez-nous" est présent dans le document.
     * Cela vérifie que la section de contact est bien rendue dans le Footer.
     */
    expect(screen.getByText("Contactez-nous")).toBeInTheDocument();
    expect(screen.getByText("Notre derniére prestation")).toBeInTheDocument();
  });

  it("an event card, with the last event, is displayed", () => {
    // to implement
  });
});
