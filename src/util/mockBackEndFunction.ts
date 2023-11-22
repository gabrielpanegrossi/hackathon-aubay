const mockResponses = {
  "Where can I open my bank account?":
    "We recommend you to open your account on Millenium bcp, please call this number: 915 915 915.",
  "Qual o endereço da aubay em lisboa?":
    "A aubay possui um escritório em Lisboa neste endereço, Av. Duque de Ávila 46, 1050-083 Lisboa.",
  "Quel est l'e-mail légal ?":
    "L'adresse email du représentant légal est legal@aubay.pt.",
  "Where could I have a beer in Lisbon?":
    "You could have a beer at lx factory, it’s a great place to drink a beer and have fun.",
} as {
  [key: string]: string | number;
};

export const mock = (text: string) => {
  if (mockResponses[text] && text) return mockResponses[text] as string;

  return `Desculpe, não consegui encontrar uma resposta. Sorry, I was not able to find a good answer. Désolé, je n'ai pas trouvé de réponse.`;
};
