// src/pages/maps.js

import React from 'react';
import Layout from '../components/Layout';
import Map from '../components/Map/Map';

const MapsPage = () => {
  return (
    <Layout pageTitle="Interactive Maps Demo">
      <h2>Interactive Maps Demo</h2>
      <p>Explore the key features of our interactive maps.</p>

      {/* Feature Section 1: Intuitive Integration */}
      <section>
        <h3>2.1. Intuitive Integration</h3>
        <p>The practical execution begins with a smooth integration of Leaflet, ensuring an intuitive experience for users.</p>

        {/* Example of Leaflet Integration */}
        <div>
          <h4>Example:</h4>
          <p>Below is an interactive map demonstrating the seamless integration of Leaflet:</p>

          {/* Map Component using Leaflet */}
          <Map />
        </div>
      </section>

      {/* Feature Section 2: Customization and Style */}
      <section>
        <h3>2.2. Customization and Style</h3>
        <p>We've implemented visual customizations and styles aligned with the client's brand identity, providing a seamless integration into the website design.</p>
      </section>

      {/* Feature Section 3: Marking and Contextual Information */}
      <section>
        <h3>2.3. Marking and Contextual Information</h3>
        <p>Markers and contextual information are strategically added, providing relevant details and enhancing the map's utility.</p>
      </section>

      {/* Feature Section 4: Responsiveness and Performance */}
      <section>
        <h3>2.4. Responsiveness and Performance</h3>
        <p>The practical execution includes optimizations to ensure the map is responsive on different devices while maintaining exceptional performance.</p>
      </section>

      {/* Feature Section 5: Intuitive Navigation */}
      <section>
        <h3>3.1. Intuitive Navigation</h3>
        <p>The practical execution results in more intuitive map navigation, allowing users to easily find crucial information.</p>
      </section>

      {/* Feature Section 6: Increased Dwell Time */}
      <section>
        <h3>3.2. Increased Dwell Time</h3>
        <p>Well-implemented maps contribute to increased dwell time on the site, indicating deeper engagement.</p>
      </section>

      {/* Feature Section 7: Easy Sharing */}
      <section>
        <h3>3.3. Easy Sharing</h3>
        <p>Sharing features are integrated, allowing users to share specific locations and promoting organic dissemination.</p>
      </section>

      {/* Additional Features Section */}
      <section>
        <h2>Additional Features</h2>

        {/* Feature 1: Zooming */}
        <h3>Zooming</h3>
        <p>Users can zoom in and out of the map using standard zoom controls, providing a seamless exploration experience.</p>

        {/* Feature 2: Panning */}
        <h3>Panning</h3>
        <p>Effortlessly pan across the map to explore different areas, ensuring a smooth and responsive navigation experience.</p>

        {/* Feature 3: Custom Markers */}
        <h3>Custom Markers</h3>
        <p>Utilize custom markers to highlight specific locations on the map, adding a personalized touch to your map.</p>

        {/* Feature 4: Information Boxes */}
        <h3>Information Boxes</h3>
        <p>Enhance user engagement by providing information boxes associated with markers, offering additional details about specific locations.</p>

        {/* Feature 5: Responsive Design */}
        <h3>Responsive Design</h3>
        <p>The map is optimized for responsiveness, ensuring a consistent and enjoyable experience across various devices, including desktops, tablets, and mobile phones.</p>
      </section>

      {/* Conclusion */}
      <section>
        <h2>Conclusion</h2>
        <p>Feel free to explore the interactive features demonstrated on this page. For more information, refer to the project's README.</p>
      </section>

      {/* Map Component */}
      <Map />

    </Layout>
  );
};

export default MapsPage;
