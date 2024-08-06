const Homepage = () => {
  return (
    <div>
      <h1>Homepagee</h1>
      <p>{process.env.SAMCO ? process.env.SAMCO : "yokk"}</p>
    </div>
  );
};

export default Homepage;
