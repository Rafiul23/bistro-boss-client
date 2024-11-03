import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const {user} = useAuth();

    return (
        <div>
            <h2 className="text-3xl font-bold">Hi! Welcome back {user?.displayName}</h2> 
        </div>
    );
};

export default UserHome;