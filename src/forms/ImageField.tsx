import { useFormikContext } from "formik";
import React, { ChangeEvent, useState } from "react";

export default function ImageField(props: imageFieldProps) {
  const { values } = useFormikContext<any>();

  const [imageBase, setImageBase] = useState("");
  const [imageURL, setImageURL] = useState(props.imageURL);
  const divStyle = { marginTop: "10px" };
  const imgStyle = { width: "450px" };
  const handleOnChange = (eventArgs: ChangeEvent<HTMLInputElement>) => {
    if (eventArgs.currentTarget.files) {
      const file = eventArgs.currentTarget.files[0];
      if (file) {
        //   Convert the file to base64 for displaying on Screen
        toBase64(file)
          .then((base64Representation: string) => {
            setImageBase(base64Representation);
            setImageURL("");
            values[props.field] = file; // updating values in formikContext
          })
          .catch((error) => console.error(error));
      } // when user tries to select the file but then cancels
      else {
        setImageBase("");
      }
    }
  };

  const toBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };
  return (
    <div>
      <label htmlFor=''>{props.displayName}</label>
      <div className='mb-3'>
        <input type='file' accept='.jpg,.jpeg,.png' onChange={handleOnChange} />
      </div>
      {imageBase ? (
        <div>
          <div style={divStyle}>
            <img style={imgStyle} src={imageBase} alt='selected ' />
          </div>
        </div>
      ) : null}
      {imageURL ? (
        <div>
          <div style={divStyle}>
            <img style={imgStyle} src={imageURL} alt='selected ' />
          </div>
        </div>
      ) : null}
    </div>
  );
}

interface imageFieldProps {
  displayName: string;
  imageURL: string; // when editing image
  field: string;
}

ImageField.defaultProps = {
  imageURL: "",
};
