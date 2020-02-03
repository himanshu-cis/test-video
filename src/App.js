import React from "react";
import { Admin, Resource } from "react-admin";

import { VideoList, VideoCreate, VideoEdit } from "./containers/video";
import videos from './dataproviders/videos';

const App = () => (
  <Admin dataProvider={videos}>
    <Resource
      name="posts"
      list={VideoList}
      create={VideoCreate}
      edit={VideoEdit}
    />
  </Admin>
);

export default App;
