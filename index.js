// console.log("start");
// const time1=Date.now();
// while(Date.now()-time1<3000){

// }
// // setTimeout(()=>{console.log("Hello Word")}3000);
// console.log("end");
function greed(){
    console.log(`hello word ${name}here`);
}
setInterval(greed,3000,"raj")
const eventEmitter=requir('events');
const emitter=new eventEmitter();
mitter.emit