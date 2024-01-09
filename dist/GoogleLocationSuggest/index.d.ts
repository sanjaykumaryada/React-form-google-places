import { FC } from "react";
import { SuggestiveInputProps } from "@mithya-team/suggestive-input-plugin";
import { TGooglePlaceSuggestCategories } from "./@types";
export interface GoogleLocationSuggestProps extends Omit<SuggestiveInputProps, "fetchSuggestions" | "onSelection"> {
    onResultClick: (result: any) => void;
    suggestionsTypes?: TGooglePlaceSuggestCategories[];
    onSubmit?: (data: Record<string, unknown>) => void | Promise<void>;
}
export interface GoogleLocationProps {
    fieldProps: GoogleLocationSuggestProps;
}
export declare const GoogleLocationSuggest: FC<GoogleLocationProps>;
