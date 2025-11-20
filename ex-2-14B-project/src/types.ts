interface Dog {
    id: number;
    message: string;
    status: string
}
type NewDog = Omit<Dog, "id">;
interface DogContext {
    
  dogs: Dog[];
  setDogs: (dogs: Dog[]) => void;
  actionToBePerformed: boolean;
  setActionToBePerformed: (actionToBePerformed: boolean) => void;
  clearActionToBePerformed: () => void;
  addDog: (newDog: Dog) => void;


}

export type {Dog, DogContext, NewDog}