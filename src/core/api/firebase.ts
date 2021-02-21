import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAHIJbb0S1A1v2bcMM_XSn2WHhyacUNBRM',
  authDomain: 'adooone-52c8a.firebaseapp.com',
  databaseURL: 'https://adooone-52c8a.firebaseio.com',
  projectId: 'adooone-52c8a',
  storageBucket: 'adooone-52c8a.appspot.com',
  messagingSenderId: '991658511192',
  appId: '1:991658511192:web:27916cf262db6102e6f32d',
  measurementId: 'G-FKGLJP3Z9C',
};

interface FirebaseApi {
  init: () => void;
  update: <T>(data: T) => Promise<void>;
  incrementButtonClicks: (count: number) => Promise<void>;
  getButtonClicks: () => Promise<number>;
}

function firebaseApi(): FirebaseApi {
  function init(): void {
    firebase.initializeApp(firebaseConfig);
  }

  async function update<T>(data: T): Promise<void> {
    const db = firebase.firestore();
    await db.collection('personal').doc('button_clicks').update(data);
  }

  async function incrementButtonClicks(count: number): Promise<void> {
    await update({ count: firebase.firestore.FieldValue.increment(count) });
  }

  async function getButtonClicks(): Promise<number> {
    const db = firebase.firestore();
    const doc = await db.collection('personal').doc('button_clicks').get();
    const data = doc.data();
    if (!data) return 0;
    const { count } = data;
    return count;
  }

  return {
    init,
    update,
    incrementButtonClicks,
    getButtonClicks,
  };
}

export default firebaseApi();
