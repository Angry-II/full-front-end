const container = document.getElementById('container');
const rowsPerGroup = 2;
const colsPerGroup = 4;
const seatsPerGroup = rowsPerGroup * colsPerGroup; 
const totalSeats = 56;

function generateSeat() {
  for (let i = 0; i < totalSeats; i += seatsPerGroup) {
    const group = document.createElement('div');
    group.classList.add('seat-group');
  
    for (let r = 0; r < rowsPerGroup; r++) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('seat-row'); 
  
      for (let c = 0; c < colsPerGroup; c++) {
        const seatNumber = c * rowsPerGroup + r + 1 + i;
        if (seatNumber > totalSeats) break;
  
        const seat = document.createElement('button');
        seat.type = 'button';
        seat.classList.add(`seat-num${seatNumber}`, 'seat-outline');
        seat.innerText = seatNumber;
        rowDiv.append(seat);
        
        seat.addEventListener('click', () => {
          seat.classList.toggle('seat-selected');
          if (seat.innerText === seatNumber.toString()) {
          seat.innerText = '';
        } else {
          seat.innerText = seatNumber;
        }
        });
      }
  
      group.append(rowDiv);
    }
  
    container.append(group);
    
  }
}
generateSeat();