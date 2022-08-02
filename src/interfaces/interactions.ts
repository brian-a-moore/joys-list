export interface IPropsButton {
    type?: 'AFFIRMATIVE' | 'DESTRUCTIVE';
    disabled?: boolean;
}

export interface IPropsLink extends IPropsButton {}

export interface IPropsIcon extends IPropsButton {
    path: string;
    size: string;
}
