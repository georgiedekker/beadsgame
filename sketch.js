let offSetX = 50;
let offSetY = 25;
function setup() {
  // createCanvas(400, 400);

  let height = document.getElementById('theWidth').offsetHeight;
  let width = document.getElementById('theWidth').offsetWidth;
  let myCanvas = createCanvas(width, 400);
    myCanvas.parent("idnameofdiv");
  // line(0,100,width,100);
 //  for(i=1;i<6;i++){
 //  line(75+width/6*i,0,75+width/6*i,400)
 //  line(85+width/6*i,0,85+width/6*i,400)
	// };
  // let rn = parseInt(random(200,400));
  
  // console.log(rn)
}

function draw() {
  background(250);
  let vtr = createVector(100, 400, 50);
  // console.log(app.station1, app.station2, app.station3, app.station4, app.station5)
  // let stations = [app.station1, app.station2, app.station3, app.station4, app.station5]
  let elSize = 25;
  let yHeight = height+elSize;
  let cycleCount = app.cycleCount;
  let stationIn = createVector(vtr.x+width/36-20, yHeight, elSize);
  let station1 = createVector(vtr.x+width/6-20, yHeight, elSize);
  let station2 = createVector(vtr.x+width/3-20, yHeight, elSize);
  let station3 = createVector(vtr.x+width/2-20, yHeight, elSize);
  let station4 = createVector(vtr.x+width/1.5-20, yHeight, elSize);
  let station5 = createVector(vtr.x+5*width/6-20, yHeight, elSize);
  let stationOut = createVector(vtr.x+width-160, yHeight, elSize);
  let stationVList = [station1, station2, station3, station4, station5];

  
  let divFour = createVector(0,15,0);
  let modFour = createVector(0,35,0);
  for(i=1;i<6;i++){
  line(5+width/6.55,100*i,width-72,100*i)
  };
  // line(width-92,0,width-92,400)
  // line(width-102,0,width-102,400)
  // for(i=1;i<6;i++){
  // line(width/6.43*i+i,0,width/6.43*i+i,400)
  // line(10+width/6.43*i+i,0,10+width/6.43*i+i,400)
  // line(15+width/6*i,0,15+width/8*i,400)
  // };
  // ellipse(width-20, 225, stationOut.z);
  
  drawGame()
  // console.log(stations)
  function drawGame(){
    line(stationOut.x-10, 0, stationOut.x-10, 400)
    line(stationOut.x, 0, stationOut.x, 400)
      for(i=0;i<5;i++){
        line(stationVList[i].x-80-(i*11), 0, stationVList[i].x-80-(i*11), 400)
        line(stationVList[i].x-90-(i*11), 0, stationVList[i].x-90-(i*11), 400)
    
    }
  };
  if(cycleCount==1){
    app.cycle()
  }
  if(app.beadsOutput>99){
    app.beadsOutput = 0
  }
  initedBeads = initBeads(stationIn, app.beadNew, 0, 0);
  initBeads(stationOut.add(50,0,0), app.beadsOutput, 0, 0);
  initBeads(station1, parseInt(app.station1.out), 0, 0);
  initBeads(station2, parseInt(app.station2.out), 0, 0);
  initBeads(station3, parseInt(app.station3.out), 0, 0);
  initBeads(station4, parseInt(app.station4.out), 0, 0);
  initBeads(station5, parseInt(app.station5.out), 0, 0);
  initBeads(station1, parseInt(app.station1.wip), offSetX, offSetY);
  initBeads(station2, parseInt(app.station2.wip), offSetX, offSetY);
  initBeads(station3, parseInt(app.station3.wip), offSetX, offSetY);
  initBeads(station4, parseInt(app.station4.wip), offSetX, offSetY);
  initBeads(station5, parseInt(app.station5.wip), offSetX, offSetY);

  // for(i=0;i<stations.length;i++){
  //   if(cycleCount>0){
  //       if(stations[i]){
  //       initBeads(stationVList[i], parseInt(stations[i].win-stations[i].wip), 0, 0);
  //       initBeads(stationVList[i], parseInt(stations[i].wip), offSetX, offSetY);
  //     }
  //     // fifo(initedBeads, cycleCount, parseInt(stations[i].win), parseInt(stations[i].wip), parseInt(stations[i].capacity), stations[i].out)
  //     }
  //   }
  // fifo(beadList, cycleCount?cycleCount?:0, wip?wip:0, capacity?capacity:0)
  
  function initBeads(stationVector, amount, xOffSet, yOffSet){
    let beadList = [];
    let col = color(2,204,14);
    // console.log('origCol: '+col)
    fill(col);
    if(amount>=4){
      for(j=0;j<(amount-(amount%4))/4;j++){
            stationVector.add(divFour)
          for(i=0;i<4;i++){
            x = parseInt(stationVector.x-i*(elSize/2)-parseInt(xOffSet));
            y = parseInt(stationVector.y-400+i*(elSize/16)+parseInt(yOffSet));
            ellipse(x, y, stationVector.z)
            // vec = {"x":x, "y":y, "z":stationVector.z, "col":col, "cycleCount":cycleCount}
            // beadList.push(vec)
            // console.log('updateCol: '+vec.col)
          }
      }
            stationVector.add(modFour)
      for(h=0;h<amount%4;h++){
            x = parseInt(stationVector.x-h*(elSize/2)-parseInt(xOffSet));
            y = parseInt(stationVector.y-400+h*(elSize/16)+parseInt(yOffSet));
            ellipse(x, y, stationVector.z)
            // vec = {"x":x, "y":y, "z":stationVector.z, "col":col, "cycleCount":cycleCount}
            // beadList.push(vec)
          }
    }
    if(amount<4){
            stationVector.add(modFour)
      for(k=0;k<amount;k++){
            x = parseInt(stationVector.x-k*(elSize/2)-parseInt(xOffSet));
            y = parseInt(stationVector.y-400+k*(elSize/16)+parseInt(yOffSet));
            ellipse(x, y, stationVector.z)
            // vec = {"x":x,"y":y,"z":stationVector.z, "col":col, "cycleCount":cycleCount}
            // beadList.push(vec)
          }
    }
    // console.log(beadList)
    // beadsInit = {"beadList":beadList,"col":col,"beadCount":amount};
    // return beadsInit;
  };

  // function fifo(initedBeads, cycleCount, beadsIn, wip, capacity, out){
  //   let beadList = initedBeads.beadList
  //   if(beadList!=''){
  //     if(cycleCount>0){
  //       if(capacity>0){
  //         beadList.forEach(function (element, i) {
  //           // beadList[i] = moveElement(element, i, cycleCount, beadsIn, wip, capacity, out)})
  //           if(beadList[i].x>width-102){
  //             beadList.remove(beadList[i])
  //           }
  //           else{
  //             if(beadList[i].cycleCount<cycleCount){
  //           beadList[i].x = beadList[i].x+100*beadList[i].cycleCount
  //           beadList[i].cycleCount = cycleCount
  //           ellipse(beadList[i].x, beadList[i].y, beadList[i].z)
  //           return beadList[i]
  //         }
  //           else{return beadList[i]}}
  //         })
  //         // for(i=0;i<parseInt(wip);i++){

  //         // }


  //       // console.log(cycleCount)
  //       // console.log('capacity '+capacity)
  //       // for(i=0;i<capacity){
  //       //   ellipse(beadList[i].x,beadList[i].y,beadList[i].z)
  //       // }
  //         // elOut = wip<capacity?wip:capacity;
  //         // console.log(elOut)
  //         // for(i=0;i<elOut;i++){
  //           // console.log(beadList[i])
  //           // ellipse(beadList[i].x+170*cycleCount, beadList[i].y, beadList[i].z))
  //         // }
  //         // beadList.forEach(element => ellipse(element.x+170*cycleCount, element.y, element.z))
  //         // beadList.forEach(element => ellipse(element.x+170*cycleCount, element.y, element.z))
  //     // xLocation = x
  //     // console.log(xLocation.x)
  //       }
  //     }
  //   }

  //   // console.log(x)
    
  //     // ellipse(initedBeads.beadList[0].x+200, initedBeads.beadList[0].y, initedBeads.beadList[0].z)
  //   // )
  //   // console.log(wip)
  //   //move all beads from left to right and retain their color

  //   //if they are at the end, remove them
  // };
  // function moveElement(element, i, cycleCount, beadsIn, wip, capacity, out){
  //   // let newX = element.x;
  //   let count = i;
  //   let newX = element.x+100;
  //   count++;
  //   // console.log(element, i);
  //   fill(element.col)
  //   // if(i<beadsIn-1){
  //   //   ellipse(element.x, element.y, element.z)
  //   // };
  //   if(i>=beadsIn-1){
  //   ellipse(parseInt(element.x)+200, element.y, element.z)
  //   };
  //   let vec = {"x":newX,"y":element.y,"z":element.z, "col":element.col, "cycleCount":element.cycleCount};
  //   return vec;
  // }
};























// ellipse(parseInt(app.beadsOutput),parseInt(app.beadsOutput),parseInt(app.beadsOutput),parseInt(app.beadsOutput));

  // if(app.beadNew>=4){
  //   for(j=0;j<(app.beadNew-(app.beadNew%4))/4;j++){
  //         stationIn.add(divFour)
        
  //       for(i=0;i<4;i++){
  //         ellipse(stationIn.x-i*elSize/2, stationIn.y-400+i*(elSize/16), stationIn.z)
  //       }
  //   }
  //         stationIn.add(modFour)
  //   for(h=0;h<app.beadNew%4;h++){
  //         ellipse(stationIn.x-h*elSize/2, stationIn.y-400+h*(elSize/16), stationIn.z)
  //       }
  // }
  // if(app.beadNew<4){
  //         stationIn.add(modFour)
  //   for(k=0;k<app.beadNew;k++){
  //         ellipse(stationIn.x-k*elSize/2, stationIn.y-400+k*(elSize/16), stationIn.z)
  //       }
  // }
    // let calc = (app.beadNew-(app.beadNew%4))/4>=1 ? (app.beadNew-(app.beadNew%4) : 1
  
  // for(j=0;j<(app.beadNew-(app.beadNew%4))/4;j++){
  //   let divFour = createVector(0,25,0)
  //   if((app.beadNew-(app.beadNew%4))/4)>=1){
  //     for(i=0;i<4;i++){
  //       stationIn.add(divFour)
  //       ellipse(stationIn.x-i*elSize/2, stationIn.y-400+i*(elSize/8), stationIn.z)
  //     }
  //   }
  //   else{
  //     for(i=0;i<app.beadNew%4;i++){
  //       stationIn.add(divFour)
  //       ellipse(stationIn.x-i*elSize/2, stationIn.y-400+i*(elSize/8), stationIn.z)
  //     }
  //   }
  // }
  // let stationInEllipse = ellipse(stationIn);
  // let station1Ellipse = ellipse(station1);
  // let station2Ellipse = ellipse(station2);
  // let station3Ellipse = ellipse(station3);
  // let station4Ellipse = ellipse(station4);
  // let station5Ellipse = ellipse(station5);
  // let stationOutEllipse = ellipse(stationOut);
  // for(j=5;j>0;j--){ellipse(vtr.x, vtr.y-(j*100),50)
  //  for(k=0;k<10;k++){ellipse(vtr.x+(k*100), vtr.y-(j*100),50)}};
  // for(i=1;i<6;i++){
 //  line(50+125*i,0,50+125*i,600)
  // };
  // for(i=0;i<7;i++){
 //  line(80+width/6*i,0,80+width/6*i,600)
  // };
