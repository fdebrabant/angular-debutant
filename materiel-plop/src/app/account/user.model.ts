export interface Country {
  code: string;
  label: string;
}

export type Gender = 'Mr' | 'Mrs' | 'Ms';
export const GENDER_LIST: Array<Gender> = ['Mr', 'Mrs', 'Ms'];
export const COUNTRY_LIST: Array<Country> = [
  {code: 'US', label: 'États-Unis'},
  {code: 'FR', label: 'France'},
  {code: 'GB', label: 'Royaume-Unis'}
];

export class Address {
  street: string;
  zipCode: string;
  city: string;
  country: string;
}

export class AddressDelivery extends Address {
  isDefault: boolean;
}

export class User {
  gender: Gender;
  firstName: string;
  lastName: string;
  email: string;
  addressInvoice: Address;
  addressesDelivery: Array<AddressDelivery>;

  constructor() {
    this.addressInvoice = new Address();
    this.addressesDelivery = [];
  }

  get fullName() {
    return `${this.gender} ${this.firstName} ${this.lastName}`;
  }

  get defaultDeliveryAddress() {
    return this.addressesDelivery.reduce((selectedAddress: AddressDelivery, address: AddressDelivery) => {
      return (selectedAddress === null || address.isDefault) ? address : selectedAddress;
    }, null);
  }
}
