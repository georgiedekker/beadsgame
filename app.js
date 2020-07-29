const app = new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: {
    title: 'Beads Game',
    cycleCount:0,
    beadsOutput: 0,
    wipCount:'',
    beadNew: '',
    stationCapacity:'',
    stations:[],
    station1:{
      capacity:'',
      win:0,
      out:0,
      wip:0
    },
    station2:{
      capacity:'',
      win:0,
      out:0,
      wip:0
    },
    station3:{
      capacity:'',
      win:0,
      out:0,
      wip:0
    },
    station4:{
      capacity:'',
      win:0,
      out:0,
      wip:0
    },
    station5:{
      capacity:'',
      win:0,
      out:0,
      wip:0
    },
    newBead:{
      id: '',
      stage: '',
      done:false
    },
    beads: []
  },
  methods: {
    addBead() {
      this.beads.push({
        id: this.newBead,
        stage: 1,
        done: false
      });
        // console.log(beads)
      this.beads = beads;
    },
    clear(){
      this.beadsOutput = 0,
      this.cycleCount = 0,
      this.beadNew = '',
      this.station1 = {
        capacity:'',
        win:0,
        wip:0,
        outOld:0,
        out:0
      },
      this.station2 = {
        capacity:'',
        win:0,
        wip:0,
        outOld:0,
        out:0
      },
      this.station3 = {
        capacity:'',
        win:0,
        wip:0,
        outOld:0,
        out:0
      },
      this.station4 = {
        capacity:'',
        win:0,
        wip:0,
        outOld:0,
        out:0
      },
      this.station5 = {
        capacity:'',
        win:0,
        wip:0,
        outOld:0,
        out:0
      }
    },
    cycle(){
      const marketDemand = parseInt(isNaN(this.beadNew)|| typeof parseInt(this.beadNew) === 'string' || this.beadNew == ''?0:this.beadNew)
      const station1Capacity = (!/^\d+(\.\d+)?/.exec(this.station1.capacity))?0:parseInt(this.station1.capacity)
       // || typeof parseInt(this.station1.capacity) === 'string' || this.station1.capacity == ''?0:this.station1.capacity)
      const station2Capacity = (!/^\d+(\.\d+)?/.exec(this.station2.capacity))?0:parseInt(this.station2.capacity)
      const station3Capacity = (!/^\d+(\.\d+)?/.exec(this.station3.capacity))?0:parseInt(this.station3.capacity)
      const station4Capacity = (!/^\d+(\.\d+)?/.exec(this.station4.capacity))?0:parseInt(this.station4.capacity)
      const station5Capacity = (!/^\d+(\.\d+)?/.exec(this.station5.capacity))?0:parseInt(this.station5.capacity)
      
      //1: demand into station1  && station1 starts work at current capacity + existing wip
      //2: amount of 1 + existing wip or capacity got worked on and is done
      //3: amount of 1 reduced by capacity at 1 turns into wip + existing wip
      const station1Win = marketDemand;
      // const tempStation1Wip = parseInt(this.station1.wip) + parseInt(this.station1.win);
      const station1Out = parseInt(this.station1.wip) + parseInt(this.station1.win)>= parseInt(this.station1.capacity) ? parseInt(this.station1.capacity) : parseInt(this.station1.win) + parseInt(this.station1.wip);
      // const station1Wip = parseInt(this.station1.win) >= parseInt(this.station1.capacity) ? parseInt(this.station1.win) - parseInt(this.station1.capacity) + parseInt(this.station1.wip) : parseInt(this.station1.wip) - parseInt(this.station1.out) > 0?parseInt(this.station1.wip) - parseInt(this.station1.out) + parseInt(this.station1.win):0;
      // const station1Wip = station1Win >= parseInt(this.station1.capacity) ? station1Win - parseInt(this.station1.capacity) + parseInt(this.station1.wip) : parseInt(this.station1.wip) - parseInt(this.station1.out) > 0?parseInt(this.station1.wip) - parseInt(this.station1.out) + station1Win:0;
      const station1Wip = parseInt(this.station1.win) >= parseInt(this.station1.capacity) ? parseInt(this.station1.win) - parseInt(this.station1.capacity) + parseInt(this.station1.wip) : parseInt(this.station1.wip) - station1Out > 0?parseInt(this.station1.wip) - station1Out + parseInt(this.station1.win):0;

      const station2Win = station1Out;
      // console.log('this.station2.wip: '+this.station2.wip+' this.station2.win: '+ this.station2.win+ ' this.station2.capacity: '+parseInt(this.station2.capacity))
      // const station2Out = parseInt(this.station2.wip) + parseInt(this.station2.win)>= parseInt(this.station2.capacity) ? parseInt(this.station2.capacity) >= station2Win? parseInt(this.station2.capacity):  parseInt(this.station2.win) + parseInt(this.station2.wip) : parseInt(this.station2.win) + parseInt(this.station2.wip);
      const station2Out = parseInt(this.station2.wip) + parseInt(this.station2.win)>= parseInt(this.station2.capacity) ? parseInt(this.station2.capacity) : parseInt(this.station2.win) + parseInt(this.station2.wip);
      // const station2Wip = station2Win >= parseInt(this.station2.capacity) ? station2Win - parseInt(this.station2.capacity) + parseInt(this.station2.wip) : parseInt(this.station2.wip) - parseInt(this.station2.out) > 0?parseInt(this.station2.wip) - parseInt(this.station2.out) + station2Win:0;
      const station2Wip = parseInt(this.station2.win) >= parseInt(this.station2.capacity) ? parseInt(this.station2.win) - parseInt(this.station2.capacity) + parseInt(this.station2.wip) : parseInt(this.station2.wip) - parseInt(this.station2.out) > 0?parseInt(this.station2.wip) - station2Out + parseInt(this.station2.win):0;

      const station3Win = station2Out;
      const station3Out = parseInt(this.station3.wip) + parseInt(this.station3.win)>= parseInt(this.station3.capacity) ? parseInt(this.station3.capacity) : parseInt(this.station3.win) + parseInt(this.station3.wip);
      const station3Wip = parseInt(this.station3.win) >= parseInt(this.station3.capacity) ? parseInt(this.station3.win) - parseInt(this.station3.capacity) + parseInt(this.station3.wip) : parseInt(this.station3.wip) - parseInt(this.station3.out) > 0?parseInt(this.station3.wip) - station3Out + parseInt(this.station3.win):0;

      const station4Win = station3Out;
      const station4Out = parseInt(this.station4.wip) + parseInt(this.station4.win)>= parseInt(this.station4.capacity) ? parseInt(this.station4.capacity) : parseInt(this.station4.win) + parseInt(this.station4.wip);
      const station4Wip = parseInt(this.station4.win) >= parseInt(this.station4.capacity) ? parseInt(this.station4.win) - parseInt(this.station4.capacity) + parseInt(this.station4.wip) : parseInt(this.station4.wip) - parseInt(this.station4.out) > 0?parseInt(this.station4.wip) - station4Out + parseInt(this.station4.win):0;

      const station5Win = station4Out;
      const station5Out = parseInt(this.station5.wip) + parseInt(this.station5.win)>= parseInt(this.station5.capacity) ? parseInt(this.station5.capacity) : parseInt(this.station5.win) + parseInt(this.station5.wip);
      const station5Wip = parseInt(this.station5.win) >= parseInt(this.station5.capacity) ? parseInt(this.station5.win) - parseInt(this.station5.capacity) + parseInt(this.station5.wip) : parseInt(this.station5.wip) - parseInt(this.station5.out) > 0?parseInt(this.station5.wip) - parseInt(this.station5.win) + station5Win:0;;
      // const station5Win = 3
      // const station5Wip = parseInt(this.station5.wip) + parseInt(station4Out) - (parseInt(station4Out) < station5Capacity ? station4Out: station5Capacity);
      // const station5Out = this.cycleCount>4 ? station4Out <= station5Capacity ? station4Out : station5Capacity : 0;

      this.beadsOutput = parseInt(station5Out?station5Out:this.station5.out) + this.beadsOutput;
      this.cycleCount = parseInt(this.cycleCount)+1
      this.station1.win = parseInt(station1Win);
      this.station1.outOld = parseInt(this.station1.out);
      this.station1.wip = parseInt(station1Wip);
      this.station1.out = parseInt(station1Out);
      this.station1.capacity = parseInt(station1Capacity);
      this.station2.win = parseInt(station2Win);
      this.station2.outOld = parseInt(this.station2.out);
      this.station2.wip = parseInt(station2Wip);
      this.station2.out = parseInt(station2Out);
      this.station2.capacity = parseInt(station2Capacity);
      this.station3.win = parseInt(station3Win);
      this.station3.outOld = parseInt(this.station3.out);
      this.station3.wip = parseInt(station3Wip);
      this.station3.out = parseInt(station3Out);
      this.station3.capacity = parseInt(station3Capacity);
      this.station4.win = parseInt(station4Win);
      this.station4.outOld = parseInt(this.station4.out);
      this.station4.wip = parseInt(station4Wip);
      this.station4.out = parseInt(station4Out);
      this.station4.capacity = parseInt(station4Capacity);
      this.station5.win = parseInt(station5Win);
      this.station5.outOld = parseInt(this.station5.out);
      this.station5.wip = parseInt(station5Wip);
      this.station5.out = parseInt(station5Out);
      this.station5.capacity = parseInt(station5Capacity);
      // console.log('wip',station1Wip, station2Wip, station3Wip, station4Wip, station5Wip);
      // console.log('out',station1Out, station2Out, station3Out, station4Out, station5Out);
    }

    // removeTodo(todo) {
    //   const beadIndex = this.beads.indexOf(bead);
    //   this.beads.splice(beadIndex, 1);
    // },
    // allDone() {
    //   this.beads.forEach(bead => {
    //     bead.done = true;
    //   });
    // }
  }
});