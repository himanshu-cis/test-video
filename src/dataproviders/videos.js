import Service from '../service';

const dataProvider = {
    getList: (resource, params) => {
        return Service.getAll();
    },
    getOne: (resource, params) => new Promise(function (resolve, reject) {
        return Service.getOne(params.id);
    }),
    getMany: (resource, params) => new Promise(function (resolve, reject) {
        resolve({})
    }),
    getManyReference: (resource, params) => new Promise(function (resolve, reject) {
        resolve({})
    }),
    create: (resource, params) => {
        const { data: { files, title } } = params;
        return Service.create({
            title,
            file: files
        }).then((json) => {
            return {
                data: json
            };
        })
    },
    update: (resource, params) => new Promise(function (resolve, reject) {
        resolve(Service.update(params.data._id, params.data))
    }),
    updateMany: (resource, params) => new Promise(function (resolve, reject) {
        resolve({})
    }),
    delete: (resource, params) => new Promise(function (resolve, reject) {
        resolve({})
    }),
    deleteMany: (resource, params) => new Promise(function (resolve, reject) {
        resolve({})
    }),
}

export default dataProvider