import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyA3Bhx-gnQFgZDbNdnrMa4ow0t0mshW3k8",
    authDomain: "test-video-78f00.firebaseapp.com",
    databaseURL: "https://test-video-78f00.firebaseio.com/",
    projectId: "test-video-78f00",
    storageBucket: "gs://test-video-78f00.appspot.com",
    messagingSenderId: "821737185474",
    appId: "1:821737185474:web:5c367a17f9644023021b5b",
    measurementId: "G-DWTZN1CZ8J"
};

if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database().ref('/videos/');
const storage = firebase.storage();
const root = storage.ref();


const _storeVideo = function (file, title) {
    return root.child(title).put(file);
}

export default {
    getAll: (resource, params) => {
        return db.once('value')
            .then(refernece => {
                let dd = refernece.child("/rows/").val();
                let doc = [];
                for (let a in dd) {
                    doc.push({
                        _id: a,
                        ...dd[a]
                    });
                }

                return {
                    data: doc,
                    total: doc.length
                }
            })

    },
    create: ({
        file, title
    }) => {
        let filePath = 'videos/' + Date.now() + '-' + file.title;
        return _storeVideo(file.rawFile, filePath)
            .then(snapshot => {
                return root.child(filePath).getDownloadURL()
                    .then(file => {
                        let row = db.child('rows').push()
                        let create = {
                            id: Date.now(),
                            title,
                            file: file,
                            created_at: Date.now()
                        };
                        row.set(create);

                        return create;
                    })
            })
            .catch((error) => {
                throw new Error({ message: error.message_, status: 401 })
            });

    },
    getOne: (id) => {
        return db.child('rows').limitToLast(100)
    },
    update: (id, data) => {
        let updated = db.child('rows/'+id).set(data);
        console.log("TCL: data", updated);
        return {
            data: updated
        }
    },
}
