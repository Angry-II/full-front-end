const container = document.getElementById('container');
const rowsPerGroup = 2;
const colsPerGroup = 4;
const seatsPerGroup = rowsPerGroup * colsPerGroup; 
const totalSeats = 40;
const map = ["seatContainer","corridor","seatContainer"];
let adjustNumber = 0;

function generateSeat() {
  const seatContainer = document.createElement('div');
  seatContainer.classList.add('seat-container');
  const numGroups = totalSeats / seatsPerGroup;

  for (let i = 0; i < totalSeats; i += seatsPerGroup) {
    const group = document.createElement('div');
    group.classList.add('seat-group');
  
    for (let r = 0; r < rowsPerGroup; r++) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('seat-row'); 
  
      for (let c = 0; c < colsPerGroup; c++) {
        const seatNumber = i + r * colsPerGroup + c + 1 + adjustNumber;
        if (seatNumber > i + seatsPerGroup + adjustNumber) break;
  
        const seat = document.createElement('button');
        seat.type = 'button';
        seat.classList.add(`seat-num${seatNumber}`, 'seat-outline');
        seat.innerText = seatNumber;
        rowDiv.append(seat);
        
        seat.addEventListener('click', () => {
          seat.classList.toggle('seat-selected');
        });
      }
  
      group.append(rowDiv);
    }
    seatContainer.append(group);
    //chèn table
    if ((i / seatsPerGroup) % 2 !== 1 && i !== (numGroups - 1) * seatsPerGroup) {
      seatContainer.append(generateTable());
    }
  }
  return seatContainer;
}

function generateCorridor() {
  const seatCorridor = document.createElement('div');
  seatCorridor.classList.add('seat-corridor');
  return seatCorridor;
}

function generateTable(){
  const seatTable = document.createElement('div');
  seatTable.classList.add('table');
  return seatTable
}
map.forEach(item => {
  if (item === "seatContainer") {
    container.append(generateSeat());
    adjustNumber += totalSeats;
  } else if (item === "corridor") {
    container.append(generateCorridor());
  }
});
