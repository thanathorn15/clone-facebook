import { useRef, useState } from "react";
import FormButton from "./FormButton";

export default function PictureForm({ title, children, initialSrc, onSave }) {
  const inputEl = useRef();
  const [file, setFile] = useState(null);
  return (
    <div>
      <input
        type="file"
        className="hidden"
        ref={inputEl}
        onChange={(e) => {
          if (e.target.files[0]) {
            setFile(e.target.files[0]);
          }
        }}
      />
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold">{title}</h5>
        <div>
          {file && (
            <>
              <FormButton
                onClick={async () => {
                  await onSave(file);
                  setFile(null);
                  inputEl.current.value = "";
                }}
              >
                Save
              </FormButton>
              <FormButton
                onClick={() => {
                  setFile(null);
                  inputEl.current.value = "";
                }}
              >
                Cancel
              </FormButton>
            </>
          )}
          <FormButton onClick={() => inputEl.current.click()}>Edit</FormButton>
        </div>
      </div>
      {children(file ? URL.createObjectURL(file) : initialSrc)}
    </div>
  );
}
