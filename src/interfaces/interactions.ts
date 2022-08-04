export enum EButtonType {
    AFFIRMATIVE = 'AFFIRMATIVE',
    DESTRUCTIVE = 'DESTRUCTIVE'
}

export interface PButton {
    type?: EButtonType;
    disabled?: boolean;
    [x: string]: any;
}

export interface PLink extends PButton {}

export interface PIcon extends PButton {
    path: string;
    size?: string;
}
