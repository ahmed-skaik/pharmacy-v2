import type { CourseData } from "../../../types/CoursesTypes";

type Props = {
  notes?: CourseData["courseNotes"];
};

export default function CourseNotes({ notes }: Props) {
  if (!notes || notes.length === 0) return null;

  return (
    <div>
      <p className="oops mt-2 mb-2 ms-2 d-flex flex-column gap-1">
        {notes.map((note, i) => (
          <span key={i} style={{ fontSize: "10px", color: "#f00" }}>
            {note.note}:{" "}
            <a href={note.url} className="id-color id-bold hover">
              {note.urlText}
            </a>
          </span>
        ))}
      </p>
    </div>
  );
}
