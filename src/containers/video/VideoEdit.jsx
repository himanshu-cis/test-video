import React from "react";
import { Edit, required, SimpleForm, TextInput } from "react-admin";
// import RichTextInput from "ra-input-rich-text";

export default props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="title" validate={required()} />
    </SimpleForm>
  </Edit>
);
