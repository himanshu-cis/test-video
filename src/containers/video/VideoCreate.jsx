import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  FileInput,
  ImageField,
  required
} from "react-admin";

export default props => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="title" validate={required()} />
        <FileInput source="files" label="Video files" accept="video/*" placeholder={<p>Drop your videos here</p>}>
          <ImageField source="src" title="title"  />
        </FileInput>
      </SimpleForm>
    </Create>
  );
};
