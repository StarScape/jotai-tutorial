export const markdown = `
# Read Write atoms

These atoms are a combination of both read-only and write-only atoms.

~~~js
const count = atom(1);
export const readWriteAtom = atom((get) => get(count),
  (get, set) => {
    set(count, get(count) + 1);
  },
);
~~~

The first parameter is for reading and the second is for modifying the atom value.
Since the \`readWriteAtom\` is able to read and set the original atom value, so we export just the \`readWriteAtom\` atom and can hide the original atom in a smaller scope. This way we have to deal with fewer atoms in our app.

See how we use just \`handleMouseMoveAtom\` to read and update both the \`dotsArray\` in our app.
`
