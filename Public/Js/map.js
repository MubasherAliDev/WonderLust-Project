document.addEventListener('DOMContentLoaded', function () {
    if (listingGeometry && listingGeometry.coordinates) {

        const [lng, lat] = listingGeometry.coordinates;
        const map = L.map('map').setView([lat, lng], 10);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        const customIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="
                background-color:red;
                width: 20px;
                height: 20px;
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                border: 2px solid white;
                box-shadow: 0 2px 5px rgba(0,0,0,0.3);
            "></div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 20],
            popupAnchor: [0, -20]
        });

        const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);

        marker.bindPopup(`
            <div style="font-family: sans-serif; max-width: 220px;">
                <h3 style="margin: 0 0 5px 0; font-size: 16px; font-weight: 600;">
                    ${listing.title}
                </h3>
                <p style="margin: 0 0 8px 0; font-size: 13px; color: #666;">
                    ${listing.location}, ${listing.country}
                </p>
                <p style="margin: 0; font-size: 12px; color: #888;">
                    Exact location will be provided after booking.
                </p>
            </div>
        `);

    } else {
        document.getElementById('map').innerHTML = "<p>Location not available for this listing.</p>";
    }
});