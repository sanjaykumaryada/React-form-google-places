/**
    
        DOCS: https://developers.google.com/maps/documentation/javascript/places#find_place_from_query

        'google' namespace is came from script added to index.html
        1. <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=&libraries=places"></script>
        2. Installing @types/googlemaps
        3. adding "types": ["googlemaps"] in compilerOptions in tsconfig.json
 */
import { TGooglePlaceSuggestCategories } from "../GoogleLocationSuggest/@types";
export declare const GoogleUtils: {
    geoAddressFields: string[];
    placeSuggest: (input: string, types: TGooglePlaceSuggestCategories[]) => Promise<unknown>;
};
