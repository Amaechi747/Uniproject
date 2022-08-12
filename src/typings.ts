
interface IUser {
    firstName: string,  
    lastName: string,
    email: string,      
    imageUrl?: String,
    phone: number,
    address: string,
    password: string,
    role?: string,
    passwordConfirm?: string,
    createdAt?: string,
    passwordChangedAt?: string,
    passwordResetToken?: string,
    passwordResetExpires?: string,
    active: boolean,
}
interface IUserLogin {
    email: string,
    password: string

interface AgentReg {
    _id?: string;
    name: string;
    email: string;
    contactAddress: string;
    phoneNumber: string;
    password: string;
    role: string;
    property?: string;
}

interface output<R, E> {
    result: R | null;
    error: E;

}