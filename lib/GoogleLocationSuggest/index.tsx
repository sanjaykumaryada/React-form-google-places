/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { GoogleUtils } from "../Google";
import { useForm, Controller } from "react-hook-form";
import {
  SuggestiveInput,
  SuggestiveInputProps,
} from "@mithya-team/suggestive-input-plugin";
import { TGooglePlaceSuggestCategories } from "./@types";

export interface GoogleLocationSuggestProps
  extends Omit<SuggestiveInputProps, "fetchSuggestions" | "onSelection"> {
  onResultClick: (result: any) => void;
  suggestionsTypes?: TGooglePlaceSuggestCategories[];
  onSubmit?: (data: Record<string, unknown>) => void | Promise<void>;
}

export interface GoogleLocationProps {
  fieldProps: GoogleLocationSuggestProps;
}

export const GoogleLocationSuggest: FC<GoogleLocationProps> = ({
  fieldProps,
}) => {
  const {
    onResultClick,
    suggestionsTypes = ["(cities)"],
    onSubmit,
  } = fieldProps;

  const getSuggestions = async (input: string) => {
    const res = (await GoogleUtils.placeSuggest(
      input,
      suggestionsTypes
    )) as any[];
    if (res) {
      // Map the response to an array of descriptions
      const descriptions = res.map((item) => item?.description);
      return descriptions;
    }

    return [];
  };

  const { control, handleSubmit } = useForm({
    defaultValues: {
      "place-suggestion": "",
    },
  });

  const onFormSubmit = () => {
    if (onSubmit) handleSubmit(onSubmit);
    else return;
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Controller
        name="place-suggestion"
        control={control}
        render={({ field }) => (
          <SuggestiveInput
            fetchSuggestions={getSuggestions}
            onSelection={onResultClick}
            debounceTime={300}
            defaultValue={field.value}
          />
        )}
      />
    </form>
  );
};
