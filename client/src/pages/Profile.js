// Rod: Profile component will render in root page (home)

import { useState, useEffect } from "react";
import { getCurrentUserProfile } from "../spotify";
import { catchErrors } from "../utils";
import Playlists from "./Playlists";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getCurrentUserProfile();
      setProfile(data);
    };

    catchErrors(fetchData());
  }, []);

  return (
    <>
      {profile && (
        <div>
          <h1>{profile.display_name}</h1>
          <p>{profile.followers.total} Followers</p>
          <p>{profile.email}</p>
          {profile.images.length && profile.images[0].url && (
            <img src={profile.images[0].url} alt="Avatar" />
          )}
        </div>
      )}
    </>
  );
};

export default Profile;
