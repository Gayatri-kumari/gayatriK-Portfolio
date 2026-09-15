import { statNotes } from "../utility/data";

export default function StickyNotes() {
  return (
    <div className="stickyNoteStack">
      {statNotes.map((note, i) => (
        <div
          className="stickyNote"
          key={i}
          style={{
            "--rotate": `${note.rotate}deg`,
            "--tx": note.translateX,
            "--ty": note.translateY,
            "--z": note.z,
            "--note-bg": `var(--note-${note.color})`,
          }}
        >
          <span className="statNumber">{note.number}</span>
          <span className="statLabel">{note.label}</span>
        </div>
      ))}
      {/* <div className="statRow">
  {statNotes.map((note, i) => (
    <div className="statItem" key={i}>
      <span className="statNumber">{note.number}</span>
      <span className="statLabel">{note.label}</span>
    </div>
  ))}
</div> */}
    </div>
  );
}