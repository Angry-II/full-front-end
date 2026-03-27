const coachContainer = document.getElementById('coach-container');
const totalSeat = 40;
const seatRow = 2;
const seatCol = 2;
const seatPerGroup = seatRow * seatCol;
const seatMap = ["seatArea","Aisle","seatArea"];
let seatCount = 0;

function seatGenerate() {
  const seatArea = document.createElement('div');
  seatArea.classList.add('seatArea');
  
  for (let i = 0; i < totalSeat; i+=seatPerGroup){
    const newGroup = document.createElement('div');
    newGroup.classList.add('seat-group');
    
    for (let c = 0; c < seatCol; c++){
      const newCol = document.createElement('div');
      newCol.classList.add('seat-col');
      
      for (let r = 0; r < seatRow; r++){
        const seat = document.createElement('button');
        seat.classList.add('seat');
        
        
        const seatLabel = document.createElement('span');
        seatLabel.classList.add('seat-number');
        seatLabel.textContent = seatCount + 1;
        seatCount++;
        
        seat.append(seatLabel);
        newCol.append(seat);
      }
      newGroup.append(newCol);
    }
    seatArea.append(newGroup);
  }
  coachContainer.append(seatArea);
}
function GenerateAisle () {
  const aisle = document.createElement('div');
  aisle.classList.add('aisle');
  coachContainer.append(aisle);
}

seatMap.forEach( (seatIndex) => {
  if (seatIndex === "seatArea") {
    seatGenerate();
  } else {
    GenerateAisle();
  }
}
  
);
