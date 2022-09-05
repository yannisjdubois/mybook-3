import firestore from '@react-native-firebase/firestore';

class Firebase {
    firestore ;

    constructor(){
        this.firestore = firestore() ; 
    }

    getCategories = () => this.firestore.collection("CategoriesYannis")
}

export default Firebase ;
