import { useEffect, useState } from "react";
import { getDocs, doc } from "firebase/firestore";
import { auth,db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection } from "firebase/firestore";

function RightSection() {
  const [user] = useAuthState(auth);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const uniqueNames = new Set();
        querySnapshot.forEach(doc => {
          const userData = doc.data();
          uniqueNames.add(userData.name);
        });
        setUsers(Array.from(uniqueNames));
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className='h-full flex flex-col gap-2'>
        <div className='bg-gray-50 h-[50%] rounded-2xl flex flex-col'>
            <div className="flex justify-center">
              {user && user.photoURL? (
                <img className="h-32 w-32 rounded-full mt-4" src={user.photoURL} alt="Profile Image" />
              ):(
                <img className="h-32 w-32 rounded-full mt-4" src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg" alt="Profile Image" />
              )}
            </div>
            <div className="text-center text-xl mt-2 font-medium">
              {user && user.displayName?(
                user.displayName
              ):(
                "Anonymous"
              )}
            </div>
        </div>
        <div className='bg-gray-50 h-[50%] rounded-2xl flex flex-col items-center overflow-y-auto'>
            <div className="flex justify-center font-medium text-2xl mt-2">
              Group Info
            </div>
            <div className="bg-gray-900 h-0.5 w-32 mt-1"></div>
            <div className="flex flex-col gap-4 mt-8 text-lg items-center">
            {users.map((name, index) => (
              <div key={index}>{name}</div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default RightSection