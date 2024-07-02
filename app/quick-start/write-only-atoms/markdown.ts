export const markdown = `
# Write Only atoms

With the help of writeOnly atoms you can modify the atoms it relies on. It's basically a two-way data binding, changing the derived atom also changes the parent atom and vice-versa, so use these atoms very carefully.

~~~js
const textAtom = atom('write only atoms')
const uppercase = atom(null, (get, set) => {
    set(textAtom, get(textAtom).toUpperCase())
})
~~~

The first value of the callback will always be null and second is the function to modify the atom value. Let's take a more practical use case of write-only atoms.

Here we define a \`dotsAtom\` which is an atom of positions of points we draw on the canvas and a \`drawing\` atom.
~~~js
const dotsAtom = atom([]);
// true when we drawing on canvas
const drawingAtom = atom(false);
~~~

The \`handleMouseDownAtom\` and \`handleMouseUpAtom\` are two write-only atoms that we use to set the value of \`drawing\` atom and \`handleMouseMoveAtom\` is a write-only atom which adds the position of new points to the \`dotsArray\` atom when we drawing on the canvas.

~~~js
const handleMouseMoveAtom = atom(
  null,
  (get, set, update: Point) => {
    if (get(drawingAtom)) {
      set(dotsAtom, (prev) => [...prev, update]);
    }
  }
);
~~~

**Note:** You may be wondering why we are not updating the atoms value directly. Why use a write-only atom to update its value? Well, updating the value using the write-only atom prevents extra rerenders in our app.
`
