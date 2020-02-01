import * as firebase from "firebase/app";
import "firebase/firestore";

export default class Service {
    db;
    storage;
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

        // Initialize Firebase
        this.firebase.initializeApp(firebaseConfig);
        this.db = this.firebase.firestore();
    }

    addVideo() {
        this.db.collection('videos').add({
            title: 'test',
            videoLink: '',
            created_at: Date.now()
        });
    }

    _storeVideo() {}
}