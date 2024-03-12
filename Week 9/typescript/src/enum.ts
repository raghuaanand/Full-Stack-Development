type keyInput = "up" | "down" | "right" | "left";

  // more redable than type
//   virtual concept in typescript
enum Direction{
    Up, 
    Down,
    Right,
    Left
}


function doSomething(keyPressed: Direction){
    // do something
    if(keyPressed == Direction.Up){

    }
}

// doSomething("up");
// doSomething("random")  // this will give error as the type has only four option to choose from

doSomething(Direction.Up);