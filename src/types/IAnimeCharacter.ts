interface IName {
  first: string;
  last: string | null;
  full: string;
  native?: string | null;
  userPreferred?: string;
}

interface IVoiceActor {
  id: number;
  language: string;
  name: IName;
  image: string;
}

export interface ICharacter {
  id: number;
  role: string;
  name: IName;
  image: string;
  voiceActors: IVoiceActor[];
}
