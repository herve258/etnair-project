export class ValidateUsers extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidateUsers';
    }
}

export const errorMap: { [key: string]: number} = {
    ValidateUsers: 400,
    default: 500
}
