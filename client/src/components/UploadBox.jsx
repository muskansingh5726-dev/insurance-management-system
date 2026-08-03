import { useState } from "react";

function UploadBox() {
  const [file, setFile] = useState(null);

  return (
    <div className="border-2 border-dashed rounded-xl p-8 text-center">

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      {file && (
        <p className="mt-4">
          {file.name}
        </p>
      )}

    </div>
  );
}

export default UploadBox;