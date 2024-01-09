## React Form Google Place Library

A React component library for handling Google Places suggestions with ease.

### Features

- **Dynamic Google Places Suggestions**: Render Google Places suggestions based on user input.
- **Custom Styling**: Easily customize the appearance of the suggestion input and suggestions list.
- **Form Integration**: Integrated with `react-hook-form` for seamless form state management and validation.
- **Debounced Suggestions**: Utilizes a debounce mechanism for fetching suggestions, providing a smoother user experience.
- **Accessibility**: Basic ARIA attributes are applied for accessibility, and further customization is supported.

### Components

#### GoogleLocationSuggest

The main component for rendering the Google Places suggestions. It includes the following props:

- **fieldProps**: An object containing configuration options for the suggestion input.
  - **onResultClick**: A callback function triggered when a suggestion is clicked.
  - **suggestionsTypes**: An array of Google Place suggestion types.
  - **onSubmit**: An optional callback function triggered when the form is submitted.

### How to Install

1. Install the `your-google-location-suggest-library` package:

   ```bash
   npm install your-google-location-suggest-library
   ```

2. Include the Google Maps JavaScript API in your HTML file. Ensure you have a valid API key.

   ```html
   <!-- Add this script to your HTML file, replacing 'YOUR_API_KEY' with your actual API key -->
   <script
     async
     src="https://maps.googleapis.com/maps/api/js?&libraries=places&key=YOUR_API_KEY"
   ></script>
   ```

   Make sure to replace `'YOUR_API_KEY'` in the Google Maps script with your actual API key. Users need to obtain their own API key for using Google Maps services.

3. Install the TypeScript types for Google Maps:

   ```bash
   npm install @types/googlemaps
   ```

4. In your `tsconfig.json`, add the following line under `compilerOptions` to include the `googlemaps` types:

   ```json
   {
     "compilerOptions": {
       "types": ["googlemaps"]
       // ... other options
     }
   }
   ```

   This step ensures that TypeScript recognizes the types provided by the `@types/googlemaps` package.

### Example Usage

```jsx
import React from "react";
import { useForm } from "react-hook-form";
import { GoogleLocationSuggest } from "your-google-location-suggest-library";

const YourFormComponent = () => {
  const { handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
    // Your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GoogleLocationSuggest
        fieldProps={{
          onResultClick: (item) => {
            console.log({ item });
          },
          suggestionsTypes: ["(cities)"],
          onSubmit: handleSubmit(onSubmit),
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
```

## Issues and Pull Requests

Contributions are always welcome! If you encounter any issues or would like to contribute, please file an issue or submit a PR:

Issues: GitHub Issues
Pull Requests: GitHub Pull Requests
