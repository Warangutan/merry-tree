import config from "./config.json" assert { type: "json" };

firebase.initializeApp({
    apiKey: config.apiKey,
    projectId: config.projectID,
    databaseURL: config.URL,
});

const db = firebase.database()

export default class Utils {
    static async getData(path) {
        let data;
        await db.ref(path)
            .once('value')
            .catch(e => console.log(e))
            .then(snapshot => {
                data = snapshot.val();
            });
        return data;
    }
    static setData(path, data) {
        db.ref(path)
            .set(data)
            .catch(e => console.log(e));
    }
    static removeData(path) {
        db.ref(path)
            .remove()
            .catch(e => console.log(e));
    }
};