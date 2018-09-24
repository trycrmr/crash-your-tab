console.log('script loaded')

const leakMemory = () => {

  var theThing = null;
  var replaceThing = function () {
    console.log('LEAKING MEMORY AHHHH!!')
    var originalThing = theThing;
    var unused = function () {
      if (originalThing)
        console.log("hi");
    };
    
    // Update longStr with a larger or smaller integer to crash the tab faster or slower.
    theThing = {
      longStr: new Array(10000000).join('*'),
      someMethod: function () {
        console.log(someMessage);
      }
    };
  };
  setInterval(replaceThing, 1000);

}
