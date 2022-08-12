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