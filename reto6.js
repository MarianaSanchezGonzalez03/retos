function createCube(size) {
let f1 = [];
    let f2=[];
    for (let a=1; a<=size; a++){
        f1.push(" ".repeat(size-a)+ "/\\".repeat(a)+"_\\".repeat(size));
        f2.push(" ".repeat(a-1)+ "\\/".repeat(size-(a-1))+ "_/".repeat(size));

    }
    
    return[...f1, ...f2].join("\n");
    

  }
  
  const cube = createCube(2);
  console.log(createCube(2));