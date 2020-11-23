document.addEventListener("DOMContentLoaded", event => {

	const app = firebase.app();
	console.log(app);

	const db = firebase.firestore();

	const myPost = db.collection('posts').doc('firstpost');

	// Ajax call to firebase
	// myPost.get()
	// 			.then(doc => {
	// 				const data = doc.data();
	// 				document.write( data.title + `<br>`)
	// 				document.write( data.createdAt )
	// 			})

	// Realtime updates from firebase
	myPost.onSnapshot(doc => {

		const data = doc.data();
		document.getElementById('title').innerHTML = data.title;
	})

})

function updatePost(e) {
	const db = firebase.firestore();
	const myPost = db.collection('posts').doc('firstpost');

	myPost.update({ title: e.target.value })
}

function googleLogin() {
	const provider = new firebase.auth.GoogleAuthProvider();

	firebase.auth().signInWithPopup(provider)
					.then(result => {
						const user = result.user;
						document.write(`Hello ${user.displayName}`);
						console.log(user)
					})
					.catch(console.log)
}