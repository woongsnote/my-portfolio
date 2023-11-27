type ContactLinkProps = {
  link: string;
  icon: React.ReactNode;
  text: string;
};

const ContactLink = ({ link, icon, text }: ContactLinkProps) => {
  return (
    <a href={link} className='flex items-center gap-x-2' target='_blank'>
      <span className='text-primary'>{icon}</span>
      <span>{text}</span>
    </a>
  );
};

export default ContactLink;
