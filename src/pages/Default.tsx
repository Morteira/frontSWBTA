

const Default = (props: { token: string | null }) => {
  return (
    props.token && <>
      Default: {props.token}
    </>
  );
};

export default Default;
