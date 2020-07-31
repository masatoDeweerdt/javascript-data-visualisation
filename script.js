document.getElementById("table1").insertAdjacentHTML("beforebegin", '<canvas id="canvas1" height="400" width="400"></canvas>');
let canvas1 = document.getElementById ("canvas1");

// Extraction de donnée table

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

console.log(table);

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

// var ctx = document.getElementById('canvas1').getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',

//     // The data for our dataset
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45]
//         }]
//     },

//     // Configuration options go here
//     options: {}
// });
    
    let myChart1 = new Chart(canvas1, {
    //The type of chart we want to create
    type: 'line',

    // The data for our dataset
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
        //   { 
        //     data: arrayStringToFloat(arrayWithoutElementAtIndex(table[36], 0)),
        //     label: table[36][0],
        //     borderColor: randomColor(),
        //     fill: false
        //   },
      ]
    },

    // Configuration options go here
    options: {
      title: {
        display: true,
        text: 'World population per region (in millions)'
      }
    }
});    