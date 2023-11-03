import type {Application} from "./application"

export interface User {
    id: string,
    email: string,
    application: Application | null
}