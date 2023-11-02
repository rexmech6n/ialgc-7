import type {Application} from "./application"

export interface User {
    uid: string,
    email: string,
    application: Application | null
}