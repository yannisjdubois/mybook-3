import firestore from '@react-native-firebase/firestore';

class Firebase {
    firestore ;

    constructor(){
        this.firestore = firestore() ; 
    }

    getCategories = () => this.firestore.collection("CategoriesYannis").get()

    getArticles = () => this.firestore.collection("ArticlesYannis").get()

    // Récupère les documents d'un articles précis
    getArticleById = (id) => this.firestore.collection("ArticlesYannis").doc(id).get()
}

export default Firebase ;
