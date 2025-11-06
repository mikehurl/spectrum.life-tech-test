import Heading from "@/components/Heading";
import Logo from "@/components/Logo";
import styles from "@/styles/booking.module.css";
import classNames from "classnames";
import Image from "next/image";

export default function BookingConfirmation() {
  return (
    <div className={classNames(styles.page, styles.confirmation)}>
      <div>
        <Image alt="" height={120} src="/confirmation.png" width={120} />
      </div>
      <Heading content="Booking confirmed!" />
      <p className={styles.info}>
        You should soon receive an email confirming your booking, followed by a
        reminder email 1 hour before your appointment to your registered email
        address.
      </p>
      <p className={styles.info}>
        To attend or cancel your session, go to the booking area by tapping the
        calendar icon on the homeview.
      </p>
      <div className={styles.alert}>
        <div className={styles.header}>
          <Image alt="" height={16} src="/alert.png" width={16} />
          <h2 className={styles.heading}>Important note</h2>
        </div>
        <div>
          <p>
            For both audio appointments and video appointments, you will need to
            return to the app to join your session at the scheduled time.
          </p>
          <br />
          <p>
            Clinicians do not call users directly. Ensure you log in a few
            minutes before your appointment to avoid missing your session.
          </p>
        </div>
      </div>
      <a className={styles.link} href="/">
        Return to Home
      </a>
      <div className={styles.logo}>
        <Logo />
      </div>
    </div>
  );
}
