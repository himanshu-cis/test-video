// in src/posts.js
import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

import Service from './service';

const add = async () => {
    const service = new Service;
    service.addVideo({
        title: 'test',
        file: 'test'
    })

    service.getAll().then(console.log);
}

export const PostList = (props) => {

    add();

    return <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
}