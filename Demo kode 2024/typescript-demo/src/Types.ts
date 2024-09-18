export interface OtherPersonDetailsType {
    age: number;
    address?: string;
}

export interface PersonType extends OtherPersonDetailsType {
    name: string | number;
}