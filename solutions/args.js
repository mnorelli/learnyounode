//  Why do we start with arg[2]?  beacuase the first is the 
// full path to the node executable and the second is the
// full path of the script being run.  After that, are all
// the arguments the user passes.
//  This is a convention established in C programs.
for (i=0;i<process.argv.length;i++){
  console.log(process.argv[i])
}