/* eslint-disable @typescript-eslint/no-explicit-any */
/**
    
        DOCS: https://developers.google.com/maps/documentation/javascript/places#find_place_from_query

        'google' namespace is came from script added to index.html
        1. <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=&libraries=places"></script>
        2. Installing @types/googlemaps
        3. adding "types": ["googlemaps"] in compilerOptions in tsconfig.json
 */

import { TGooglePlaceSuggestCategories } from "../GoogleLocationSuggest/@types";

export const GoogleUtils = {
  geoAddressFields: [
    "street_number",
    "route",
    "postal_code",
    "country",
    "administrative_area_level_1",
    "administrative_area_level_2",
    "locality",
    "sublocality_level_1",
    "sublocality_level_2",
    "route",
    "street_number",
    "opening_hours",
    "price_level",
  ],

  /* utils functions */
  placeSuggest: (input: string, types: TGooglePlaceSuggestCategories[]) => {
    return new Promise((resolve) => {
      if (google) {
        const request: google.maps.places.AutocompletionRequest = {
          input,
          types,
        };
        const service = new google.maps.places.AutocompleteService();
        service.getPlacePredictions(request, (results: any) => {
          resolve(results);
        });
      }
    });
  },
};
