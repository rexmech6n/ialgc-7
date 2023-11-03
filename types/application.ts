export enum ApplicationPosition {
    DELEGATE = "Delege",
    ADMIN = "Gözlemci",
    PRESS = "Basın",
    CHAIR = "Divan"
}

export enum ApplicationState {
    APPROVED = 1,
    DELAYED = 0.5,
    NEUTRAL = 0,
    DECLINED = -1,
}

export interface Application {
    position: ApplicationPosition,
    state: ApplicationState
    form: object
}