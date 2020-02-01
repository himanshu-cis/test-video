import * as firebase from "firebase/app";
import "firebase/firestore";

export default class Service {
    db;
    storage;

    constructor() {
        this.init();
    }

    init() {
        const firebaseConfig = {
            apiKey: "AIzaSyA3Bhx-gnQFgZDbNdnrMa4ow0t0mshW3k8",
            authDomain: "test-video-78f00.firebaseapp.com",
            databaseURL: "https://test-video-78f00.firebaseio.com",
            projectId: "test-video-78f00",
            storageBucket: "test-video-78f00.appspot.com",
            messagingSenderId: "821737185474",
            appId: "1:821737185474:web:5c367a17f9644023021b5b",
            measurementId: "G-DWTZN1CZ8J"
        };

        if (!firebase.apps.length) {
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
        }
        this.db = firebase.firestore();
        // this.storage = firebase.storage().ref();
    }

    async addVideo({
        file, title
    }) {
        return this.db.collection('videos').add({
            title,
            file,
            created_at: Date.now()
        })
        .then(doc => {
            if(doc.id) {
                return doc
            } else {
                return {}
            }
        })
        .catch(console.log)
    }

    getAll() {
        return this.db.collection("videos")
            .get()
            .then((querySnapshot) => {
                let docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push({
                        ...doc.data(),
                        id: doc.id
                    })
                });

                return docs;
            })
            .catch(console.log)
    }


    _storeVideo(file) {
        return this.storage.put(file)
            .then(function (snapshot) {
                return snapshot;
            })
            .catch(console.log)
    }
}