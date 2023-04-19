fetch("./records.json")
  .then((response) => response.json())
  .then((data) => {
    // loop through the json file
    data.forEach((record) => {
      console.log(empStatus(record));
      document.getElementById("status").innerHTML += empStatus(record) + "<br>";
      console.log(vacation(record));
      document.getElementById("vacation").innerHTML += vacation(record) + "<br>";
      console.log(birthMonth(record));
      document.getElementById("birthday").innerHTML += birthMonth(record) + "<br>";
      console.log(table(record));
      document.getElementById("table").innerHTML += table(record);
    });
  })
  .catch((error) => {
    // catch errors
    console.error(error);
  });

function birthMonth(record) {
  currentMonth = new Date().getMonth();
  difference = new Date(record.birthday).getMonth() - currentMonth;
  if (difference < 0) {
    difference += 12;
  }
  if (currentMonth === new Date(record.birthday).getMonth()) {
    return `${record.firstName}'s birthday is ${record.birthday}, which is this month. `;
  }
  if (difference === 1) {
    return `${record.firstName}'s birthday is ${record.birthday}, which is only ${difference} month away. `;
  } else {
    return `${record.firstName}'s birthday is ${record.birthday}, which is in ${difference} months. `;
  }
}

function empStatus(record) {
  return `${record.firstName} ${record.lastName} works ${record.status}. `;
}

function vacation(record) {
  currentYear = new Date().getFullYear();
  difference = currentYear - new Date(record.startDate).getFullYear();
  if (difference < 5) {
    return `${record.firstName} has been working for ${difference} years, and gets 2 weeks of vacation. `;
  } else if (difference >= 5 && difference < 10) {
    return `${record.firstName} has been working for ${difference} years, and gets 3 weeks of vacation. `;
  } else {
    return `${record.firstName} has been working for ${difference} years, and gets 4 weeks of vacation `;
  }
}

function table(record) {
  return `
  <td>${record.firstName}</td>
  <td>${record.lastName}</td>
  <td>${record.startDate}</td>
  <td>${record.status}</td>
  <td>${record.birthday}</td>
`;
}
