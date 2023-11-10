
const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",
    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },
      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

const element = document.getElementById("data-athlete");
const fragment = document.createDocumentFragment();

const createHtml = (athlete) => {
  const { firstName, surname, races } = athlete;
  const latestRace = races[races.length - 1];
  const formattedDate = new Date(latestRace.date);
  const raceDate = `${formattedDate.getDate()} ${MONTHS[formattedDate.getMonth()]} ${formattedDate.getFullYear()}`;

  // Fix the typo and calculate totalTime correctly
  const totalTime = latestRace.time.reduce((acc, val) => acc + val, 0);

  // Calculate hours and minutes correctly
  const hours = Math.floor(totalTime / 60);
  const minutes = totalTime % 60;

  // Use backticks for formattedTime
  const formattedTime = `${hours}:${minutes}`;
  const list = document.createElement("dl");

  const innerHTML = `
    <div>
      <h2> ${firstName} ${surname} </h2>
      <p>Total Races: ${races.length}</p>
      <p>Event Date(latest): ${raceDate}</p>
      <p>Total Time(latest): ${formattedTime}</p>
    </div>
  `;
  list.innerHTML = innerHTML;
  fragment.appendChild(list);

  // Output or return the HTML as needed
  console.log(innerHTML);
};

createHtml(data.response.data.NM372);
createHtml(data.response.data.SV782);

element.appendChild(fragment);





  
  