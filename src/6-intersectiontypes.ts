type Draggable = { // Object that can be dragged on the screen
    drag: () => void
}

type Resizable = {
    resize: () => void
}

// Intersection types, combines both of them into one type
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {
        console.log("I'm dragged");
    },
    resize: () => {
        console.log("I'm resized");
    }
}