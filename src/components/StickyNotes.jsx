import { statNotes } from "../utility/data";

// Responsive statistics shown as sticky notes or a compact row.
export default function StickyNotes() {
  return (
    <>
      <div className="stickyNoteStack">
        {statNotes.map((note, index) => (
        <div
          className="stickyNote"
          key={index}
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
      </div>

      <div className="statRow">
        {statNotes.map((note, index) => (
          <div className="statItem" key={index}>
            <span className="statNumber">{note.number}</span>
            <span className="statLabel">{note.label}</span>
          </div>
        ))}
      </div>
    </>
  );
}