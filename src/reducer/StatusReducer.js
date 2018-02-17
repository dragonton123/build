const StatusReducer = (state =  {
    status : {
        run1:"1",
        run2:'1',
        run3:'1',
        run4:'1',
        run5:'1',
        run6:'1',
        run7:'1',
        run8:'1'},
    resultstatus : {
        running1:"0",
        running2:'0',
        running3:'0',
        running4:'0',
        running5:'0',
        running6:'0',
        running7:'0',
        running8:'0'},
    results : [],
    counter : {
        count1:0,
        count2:0,
        count3:0,
        count4:0,
        count5:0,
        count6:0,
        count7:0,
        count8:0}
}, action ) => {
    switch(action.type) {
        case "FETCH_STATUS":
            state={
                ...state,
                results : action.payload
            };
         case "FETCH_STATUS_FULFILLED":
        //     console.log("this is payload : "+action.payload.running1)
             state={
                ...state,
                 results : action.payload
             };
        //     if(state.status.run1 !==  action.payload.running1 ){
        //     console.log("ok");
        //     state.status.run1 = action.payload.running1;
        //     state.resultstatus.running1 = "1";
        //     console.log("this is running1 : "+state.resultstatus.running1);
        //     state.counter.count1 = 0;
        //
        //     }else if(state.status.run1 ===  action.payload.running1 ){
        //
        //
        //         state.counter.count1 = state.counter.count1+1;
        //         if(state.counter.count1 > 2){
        //             state.resultstatus.running1 = "0";
        //             console.log("Fuck"  + state.counter.count1);
        //         }
        //     }
        //
        //     if(state.status.run2 !==  action.payload.running2 ){
        //         console.log("ok");
        //         state.status.run2 = action.payload.running2;
        //         state.resultstatus.running2 = "1";
        //         state.counter.count2 = 0;
        //
        //     }else if(state.status.run2 ===  action.payload.running2 ){
        //
        //
        //         state.counter.count2 = state.counter.count2+1;
        //         if(state.counter.count2 > 2){
        //             state.resultstatus.running2 = "0";
        //         }
        //     }
        //
        //     if(state.status.run3 !==  action.payload.running3 ){
        //         console.log("ok");
        //         state.status.run3 = action.payload.running3;
        //         state.resultstatus.running3 = "1";
        //         state.counter.count3 = 0;
        //
        //     }else if(state.status.run3 ===  action.payload.running3 ){
        //
        //
        //         state.counter.count3 = state.counter.count3+1;
        //         if(state.counter.count3 > 2){
        //             state.resultstatus.running3 = "0";
        //         }
        //     }
        //
        //
        //     if(state.status.run4 !==  action.payload.running4 ){
        //         console.log("ok");
        //         state.status.run4 = action.payload.running4;
        //         state.resultstatus.running4 = "1";
        //         state.counter.count4 = 0;
        //
        //     }else if(state.status.run4 ===  action.payload.running4 ){
        //
        //
        //         state.counter.count4 = state.counter.count4+1;
        //         if(state.counter.count4 > 2){
        //             state.resultstatus.running4 = "0";
        //         }
        //     }
        //
        //
        //     if(state.status.run5 !==  action.payload.running5 ){
        //         console.log("ok");
        //         state.status.run5 = action.payload.running5;
        //         state.resultstatus.running5 = "1";
        //         state.counter.count5 = 0;
        //
        //     }else if(state.status.run5 ===  action.payload.running5 ){
        //
        //
        //         state.counter.count5 = state.counter.count5+1;
        //         if(state.counter.count5 > 2){
        //             state.resultstatus.running5 = "0";
        //         }
        //     }
        //
        //
        //     if(state.status.run6 !==  action.payload.running6 ){
        //         console.log("ok");
        //         state.status.run6 = action.payload.running6;
        //         state.resultstatus.running6 = "1";
        //         state.counter.count6 = 0;
        //
        //     }else if(state.status.run6 ===  action.payload.running6 ){
        //
        //
        //         state.counter.count6 = state.counter.count6+1;
        //         if(state.counter.count6 > 2){
        //             state.resultstatus.running6 = "0";
        //         }
        //     }
        //
        //
        //     if(state.status.run7 !==  action.payload.running7 ){
        //         console.log("ok");
        //         state.status.run7 = action.payload.running7;
        //         state.resultstatus.running7 = "1";
        //         state.counter.count7 = 0;
        //
        //     }else if(state.status.run7 ===  action.payload.running7 ){
        //
        //
        //         state.counter.count7 = state.counter.count7+1;
        //         if(state.counter.count7 > 2){
        //             state.resultstatus.running7 = "0";
        //         }
        //     }
        //
        //
        //     if(state.status.run8 !==  action.payload.running8 ){
        //         console.log("ok");
        //         state.status.run8 = action.payload.running8;
        //         state.resultstatus.running8 = "1";
        //         state.counter.count8 = 0;
        //
        //     }else if(state.status.run8 ===  action.payload.running8 ){
        //
        //
        //         state.counter.count8 = state.counter.count8+1;
        //         if(state.counter.count8 > 2){
        //             state.resultstatus.running8 = "0";
        //         }
        //     }
        //

            break;
        default:
            break;
    }
    return state;
};
export default StatusReducer;