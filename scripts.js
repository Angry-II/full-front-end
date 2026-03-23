// ============== Render ghế ==================
const seatSVG = () => `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="seat-svg">
  <g transform="translate(-32.5 -18.5) scale(5.25) rotate(-90 16.5 11.5)">
    <path d="M9.3 6 Q9 3 15 3 Q21 3 20.7 6 L21 13.5 A0.3 0.3 0 0 0 21.3 13.5 L21.6 9.6 A0.45 0.45 0 0 1 24 9.6 V15.6 Q24 18 21 18 Q21 19.5 19.5 19.5 H10.5 Q9 19.5 9 18 Q6 18 6 15 V9.6 A0.45 0.45 0 0 1 8.4 9.6 L8.7 13.5 A0.3 0.3 0 0 0 9 13.5 Z" stroke="" stroke-width="0" fill="#24b5c9"/>
  </g>
</svg>
`;

function renderSeatMapUI(columns) {
  const seatMap = renderSeatMapWithRowAisle(columns);
  const container = document.getElementById('container');
  container.innerHTML = ''; 

  const fragment = document.createDocumentFragment();

  seatMap.forEach(columnSeats => {
    const colDiv = document.createElement('div');
    colDiv.classList.add('column');

    columnSeats.forEach(seat => {
      if (seat === null) {
        const spacer = document.createElement('div');
        spacer.style.height = '40px';
        colDiv.appendChild(spacer);
        return;
      }

      const seatWrapper = document.createElement('div');
      seatWrapper.classList.add('seat-wrapper');
      if (seat.type === 'Aisle') seatWrapper.classList.add('aisle');

      // Thêm span inline text seat
      seatWrapper.innerHTML = `
        <span class="seat-text">${seat.id}</span>
        ${seatSVG()}
      `;

      const svgElement = seatWrapper.querySelector('svg');
      const pathElement = svgElement.querySelector('path');
      const spanText = seatWrapper.querySelector('.seat-text');
      spanText.classList.add('visible');

      // Toggle màu khi click
      svgElement.addEventListener('click', () => {
        const currentFill = pathElement.getAttribute('fill');
        const selectedColor = '#408335';
        const defaultColor = '#24b5c9';
        pathElement.setAttribute('fill', currentFill === selectedColor ? defaultColor : selectedColor);
        spanText.classList.toggle('visible');
      });

      colDiv.appendChild(seatWrapper);
    });

    fragment.appendChild(colDiv);
  });

  container.appendChild(fragment);
}
// Render 20 cột
renderSeatMapUI(20);
