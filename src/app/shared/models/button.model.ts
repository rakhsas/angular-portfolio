
export interface ButtonModel {
    background?: string;
    hoverBackground?: string;
    color?: string;
    hoverColor?: string;
    rounded?: string;
    text: {
        content: string;
        size?: string;
        weight?: string;
    }
    icon?: string;
}