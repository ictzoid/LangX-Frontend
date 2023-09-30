export const SignUpButton = ({ icon, text }) => (
  <button className="text-[13px] font-regular border border-primaryColor py-[8px] rounded-[7px] text-primaryColor flex items-center justify-center gap-2">
    <img src={icon} alt={`${text} icon`} />
    {text}
  </button>
);
