import React from "react";
import MailItem from "./MailItem";

const MailList = (props) => {
  return (
    <>
      {props.mails.map((mail) => (
        <MailItem
          key={mail.id}
          id={mail.id}
          subject={mail.subject}
          body={mail.body}
          tag={mail.tag}
        />
      ))}
    </>
  );
};

export default MailList;
