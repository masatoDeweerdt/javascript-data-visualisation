document.getElementById("table1").insertAdjacentHTML("beforebegin", '<canvas id="canvas1" height="400" width="400"></canvas>'); //placing canvas1
document.getElementById("table2").insertAdjacentHTML("beforebegin", '<canvas id="canvas2" height="300" width="400"></canvas>'); //placing canvas2
document.getElementById("firstHeading").insertAdjacentHTML("beforebegin", '<canvas id="canvas3" height="300" width="400"></canvas>');
let canvas1 = document.getElementById("canvas1");
let canvas2 = document.getElementById("canvas2");
let canvas3 = document.getElementById("canvas3");

// Extraction des données du tableau 1

let table = document.getElementById('table1');

function tableJson(table) {
    let data = [];
    for(i = 1; i < table.rows.length; i++) {
        let tableRow = table.rows[i];
        let rowData = [];
        for (j = 1; j < tableRow.cells.length; j++) {
            rowData.push(tableRow.cells[j].innerHTML);
        }
        data.push(rowData);
    }
    return data;
}

table = tableJson(table);
table2 = tableJson(table2);

console.log(table);
console.log(table2);

//Supprimer l'index 0

const arrayWithoutElementAtIndex = function(arr, index) {
    let ret = arr.slice(); //make a copy
    ret.splice(index, 1); //remove the item from given index
    return ret; //return the copy
  }

// Pour transformer l'array de string à float

function arrayStringToFloat(table) {
    data = [];
    for (i = 0; i < table.length; i++) {
      table[i] = table[i].replace(',','.');
      data.push(table[i]);
    }
    return data;
  }

// Fonction pour couleurs random

function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let rgb = 'rgb(' + red + ',' + green + ',' + blue + ')';
    return rgb
  }

console.log(randomColor());

    //insertion du graph1
    
    let myChart1 = new Chart(canvas1, {
    
    type: 'line',

    // le Data pour le Datasets
    data: {
      labels: arrayWithoutElementAtIndex(table[0], 0),
      datasets: [{ 
          data: arrayStringToFloat(arrayWithoutElementAtIndex(table[1], 0)),
          label: table[1][0],
          borderColor: randomColor(),
          fill: false
        },
        { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[2], 0)),
            label: table[2][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[3], 0)),
            label: table[3][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[4], 0)),
            label: table[4][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[5], 0)),
            label: table[5][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[6], 0)),
            label: table[6][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[7], 0)),
            label: table[7][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[8], 0)),
            label: table[8][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[9], 0)),
            label: table[9][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[10], 0)),
            label: table[10][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[11], 0)),
            label: table[11][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[12], 0)),
            label: table[12][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[13], 0)),
            label: table[13][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[14], 0)),
            label: table[14][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[15], 0)),
            label: table[15][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[16], 0)),
            label: table[16][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[17], 0)),
            label: table[17][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[18], 0)),
            label: table[18][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[19], 0)),
            label: table[19][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[20], 0)),
            label: table[20][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[21], 0)),
            label: table[21][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[22], 0)),
            label: table[22][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[23], 0)),
            label: table[23][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[24], 0)),
            label: table[24][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[25], 0)),
            label: table[26][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[26], 0)),
            label: table[26][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[27], 0)),
            label: table[27][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[28], 0)),
            label: table[28][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[29], 0)),
            label: table[29][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[30], 0)),
            label: table[30][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[31], 0)),
            label: table[31][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[32], 0)),
            label: table[32][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[33], 0)),
            label: table[33][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[34], 0)),
            label: table[34][0],
            borderColor: randomColor(),
            fill: false
          },
          { 
            data: arrayStringToFloat(arrayWithoutElementAtIndex(table[35], 0)),
            label: table[35][0],
            borderColor: randomColor(),
            fill: false
          },
      ]
    },
    // option de config du graph
    options: {
      title: {
        display: true,
        text: 'World population per region (in millions)'
      }
    }
});

// Création de 3 fonctions pour diviser le json du table 2 en 3 arrays

function arrayCountries(arr) {
  let data = [];
  for(i = 0; i < arr.length ; i++) {
    data[i] = arr[i][0];
  }
  data[7] = "England and Wales(UK)"
  return data;
}

function tableDataOne(arr) {
  let data = [];
  for(i = 0 ; i < arr.length; i++) {
    data[i] = arr[i][1];
  }
  return data;
}

function tableDataTwo(arr) {
  let data = [];
  for(i = 0; i < arr.length; i++) {
    data[i] = arr[i][2];
  }
  return data;
}

//insertion du graph 2

let chart2 = new Chart(canvas2, {
  type: 'bar',
  data: {
    labels: arrayCountries(table2), // Array pays
    datasets: [
      {
        label: "2007-2009",
        backgroundColor: "#3e95cd",
        data: tableDataOne(table2) // Array data1
      }, {
        label: "2010-2012",
        backgroundColor: "#8e5ea2",
        data: tableDataTwo(table2) // Array data2
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Prison population, average per year, 2007-09 and 2010-12 (per 100,000 inhabitants)'
    }
  }
});

const data_url = "https://canvasjs.com/services/data/datapoints.php";

const xxs = []; // création array vide pour stocker le data pour l'axe x
const yys = []; // création array vide pour stocker le data pour l'axe Y

async function getData() {
  const response = await fetch(data_url); // récupération des datapoints de l'URL
  const data = await response.json();

  console.log(data);

  const xs = data.map(function (e) {
    return parseInt(e["0"]);
  });

  console.log(xs); // récupération du data pour l'axe x (index 0 de l'array data)

  for (u = 0; u < 10; u++) {
    xxs.push(xs[u]);
  }
  const ys = data.map(function (e) {
    return parseInt(e["1"]);
  });

  console.log(ys); // récupération du data pour l'axe y (index 1 de l'array data)

  for (u = 0; u < 10; u++) {
    yys.push(ys[u]);
  }
}

console.log(yys);

getData();

let timerData1 = setInterval(() => getData(), 1000); // ajout d'interval en ms pour simuler le real-time

let chart = new Chart(canvas3, { // ajout du graphique en line
  type: "line",
  data: {
    labels: xxs,
    datasets: [
      {
        data: yys,
        label: "dataPoints",
        borderColor: "#3e95cd",
        fill: false,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Random",
    },
  },
});

function addData() {
  chart.data.datasets[0].data = yys;
  chart.update();
}
let timerData2 = setInterval(() => addData(), 1000);