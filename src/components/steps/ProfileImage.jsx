import React, { useState, useRef } from "react";
import { Header } from "@/components/layer/Header";
import { ErrorMessage } from "../ui/ErrorMeassage";

export const ProfileImage = ({ handleChange, formValues, formErrors }) => {
  const inputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(formValues.profileImage || "");
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = () => inputRef.current?.click();

  const handleFiles = (files) => {
    const file = files[0];
    if (!file || !file.type.startsWith("image/")) return;

    setImageUrl(URL.createObjectURL(file));
    handleChange({
      target: { name: "profileImage", value: file },
    });
  };

  const handleChangeFile = (e) => handleFiles(e.target.files);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const removeImage = (e) => {
    e.stopPropagation();
    setImageUrl("");
    handleChange({
      target: { name: "profileImage", value: null },
    });

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="w-[416px] flex flex-col gap-4">
      <Header />
      <p>Date of birth * </p>
      <input
        type="date"
        name="birthday"
        value={formValues.birthday || ""}
        error={formErrors.birthday}
        onChange={handleChange}
        min="1970-01-01"
        max="Date.now"
        className={`border rounded-md p-2 ${formErrors.birthday ? "border-red-500" : ""}`}
      />
      <ErrorMessage message={formErrors.birthday} />
      <div>Profile Image </div>

      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative flex items-center justify-center w-full h-48 bg-gray-200 rounded-md
          ${isDragging ? "border-2 border-dashed border-black" : ""}`}
      >
        {!imageUrl && <p>Browse or Drop Image</p>}

        <input
          type="file"
          ref={inputRef}
          accept="image/*"
          hidden
          onChange={handleChangeFile}
        />

        {imageUrl && (
          <>
            <img
              src={imageUrl}
              alt="profile"
              className="w-full h-full object-cover"
            />

            <button
              type="button"
              name="button"
              onClick={removeImage}
              className="absolute top-2 right-2 w-8 h-8 rounded-full text-white flex items-center justify-center bg-black"
            >
              ✕
            </button>
          </>
        )}
      </div>

      <ErrorMessage message={formErrors.profileImage} />
    </div>
  );
};
