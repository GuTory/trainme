
export interface UserInterface {
    email: string;
    password: string;
    surName: string;
    lastName: string;
    isTrainer: boolean;
    trainees?: UserInterface[];
}