const layoutConfig = {
  A: { type: "Window", direction: 0 },
  B: { type: "Aisle", direction: 0 },
  C: { type: "Aisle", direction: 0 },
  D: { type: "Window", direction: 0 }
};

function renderSeatMapWithRowAisle(columns) {
  const rowLabels = Object.keys(layoutConfig);
  const seatMap = [];

  for (let colIndex = 0; colIndex < columns; colIndex++) {
    const columnSeats = [];

    rowLabels.forEach((rowLabel, rowIndex) => {
      const config = layoutConfig[rowLabel];
      
      // Direction cho các cột đặc biệt
      const direction = (colIndex === 3 || colIndex === 11) ? 180 : config.direction;

      const seat = {
        id: `${rowLabel}${colIndex + 1}`,
        type: config.type,
        rowIndex,
        colIndex,
        direction
      };

      columnSeats.push(seat);

      // Chèn null sau row B (index 1) để tạo aisle giữa B và C
      if (rowIndex === 1) {
        columnSeats.push(null);
      }
    });

    seatMap.push(columnSeats);
  }

  return seatMap;
}

export { renderSeatMapWithRowAisle, layoutConfig };