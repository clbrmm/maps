# Customization

The Next.js Map project allows for extensive customization to tailor the maps to your specific design and branding requirements. Here's a breakdown of key customization aspects:

## Styling

### Map Styles

The map styles are defined in `src/styles/map.module.css`. You can modify this file to change the appearance of the map, including background colors, marker styles, and other visual elements.

### Layout Styles

For broader layout customization, check the `src/styles/Layout.module.css` file. This includes styles for headers, navigation, main content, and footer. Adjust these styles to ensure a cohesive design across your entire application.

## Components

### Map Components

Inside the `src/components/Map` directory, you'll find three main components:

1. **Map.js:** This component handles the overall rendering of the map.

2. **Marker.js:** Manages the appearance and behavior of markers on the map.

3. **InfoBox.js:** Controls the display of information boxes associated with markers.

Each of these components can be customized to match your desired look and functionality.

## Content

### Text Content

Text content, such as headings and paragraphs, can be customized by editing the Markdown files in the `src/content/sections` directory. Specifically, the `customization.md` file is where you can provide details about map customization.

## Images

Custom marker icons or any other images used in the project should be placed in the `public/images` directory. Refer to these images in your styling or component files as needed.

## Next Steps

Feel free to explore the provided files and customize the project to meet your specific needs. Don't hesitate to refer to the `README.md` for general information and usage instructions.

For more in-depth guidance on customization, consider checking the documentation for the libraries used, such as Leaflet for maps and Next.js for the overall project structure.
