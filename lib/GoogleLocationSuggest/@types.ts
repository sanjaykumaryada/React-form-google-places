/* eslint-disable @typescript-eslint/no-explicit-any */

export type TGooglePlaceSuggestCategories = "(cities)" | "establishment";

export interface TPosition {
  lat: number;
  lng: number;
}

export interface FormattedAddress {
  placeId: string;
  fullAddress: string;
  address1: string;
  state: string;
  city: string;
  locality: string;
  zipCode: string;
  country: string;
  location: { lat: number; lng: number };
  name: string;
  description: any;
  mapLink?: string;
}
