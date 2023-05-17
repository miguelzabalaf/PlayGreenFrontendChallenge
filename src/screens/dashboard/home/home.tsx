import useFirebaseAuth from "../../../common/controllers/firebase/useFirebaseAuth";

function Home(): JSX.Element {
    const { handleLogOut } = useFirebaseAuth();
    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleLogOut}>Logout</button>
        </div>
    );
}

export default Home;
