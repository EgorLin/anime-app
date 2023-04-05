import { ReactElement } from "react";
import ProfileSettings from "../../components/ProfileSettings/ProfileSettings";
import styles from "./Profile.module.scss";

function ProfileItem(): ReactElement {
  return (
    <div>
      <h1 className={[styles.title, "wrapperM"].join(" ")}>Profile</h1>
      <ProfileSettings />
      {/* <Catalog */}
      {/*   elements={[ */}
      {/*     <VideoCard className={styles.card} />, */}
      {/*     <VideoCard className={styles.card} />, */}
      {/*     <VideoCard className={styles.card} />, */}
      {/*     <VideoCard className={styles.card} />, */}
      {/*     <VideoCard className={styles.card} />, */}
      {/*     <VideoCard className={styles.card} />, */}
      {/*     <VideoCard className={styles.card} />, */}
      {/*   ]} */}
      {/* /> */}
    </div>
  );
}

export default ProfileItem;
