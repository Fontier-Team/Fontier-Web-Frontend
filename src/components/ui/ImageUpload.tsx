import React from "react";
import {useDropzone} from "react-dropzone";
import Image from "next/image";

interface ImageUploadZoneProps {
  image: File | null
  onUpload: (image: File) => void
}

export const ImageUploadZone: React.FC<ImageUploadZoneProps> = ({ onUpload, image }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      onUpload(acceptedFiles[0])
    }
  })

  return (
    <div
      {...getRootProps()}
      className="card bg-primary-orange relative h-full w-full flex flex-col items-center justify-center text-primary-gray cursor-pointer font-light gap-6"
    >
      <input {...getInputProps()} />
      <Image src="/camera.svg" alt="Upload Icon" width={50} height={50} />
      {isDragActive ? (
        <>Drop image here</>
      ) : image ? (
        <Image src={URL.createObjectURL(image)} alt="Uploaded Image" layout="fill" objectFit="contain" />
      ) : (
        <>Click or drag and drop to upload</>
      )}
    </div>
  )
}