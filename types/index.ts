interface IUserDefault {
    displayName: string,
    email: string,
    password?: string,
    photoURL?: string | null
}
interface IUser {
    displayName: string,
    email: string,
    password: string,
    photoURL: string | null;
}
interface IUserResponse {
    id?: string
    displayName: string,
    email: string,
    photoURL?: string
}

interface ILoginData {
    email: string,
    password: string
}