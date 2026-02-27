import { useEffect } from "react";

export default function useDocumentTitle() {
  useEffect(() => {
    document.title = `I'm a Good Title`;
  }, []);
}
