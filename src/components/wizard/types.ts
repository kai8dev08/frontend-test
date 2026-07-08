export type FormData = {
  lastName: string;
  firstName: string;
  birthDate: string;
};

export type Step = "name" | "birthDate" | "confirm" | "complete";
