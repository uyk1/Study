function Error(statusCode: any) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} accurred on server`
        : "An error occured on client"}
    </p>
  );
}

Error.getInitialProps = (res: any, err: any) => {
  const statusCode = res ? res.statusCode : err ? err.statuCode : 404;
  return { statusCode };
};

export default Error;
