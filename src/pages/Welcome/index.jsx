import Button from "../../components/Button";
import Logo from "../../assets/Logo/LogoHeader.png";

const Welcome = () => {
  return (
    <div className="w-screen h-dvh p-3  flex flex-col justify-between md:max-w-5xl md:h-4/5   md:p-6 md:flex md:justify-between">
      <header className="w-full h-2/5 flex justify-end items-start mr-3">
        <img
          src={Logo}
          alt="Logo da igreja IECO"
          className="w-20 h-20 object-cover"
        />
      </header>
      <main className="w-full h-full p-3 flex flex-col justify-between mt-11 items-center">
        <section className="text-center">
          <h1 className="text-textColor flex-wrap text-3xl md:text-5xl">
            Jesus Cristo é o mesmo ontem, hoje e eternamente
          </h1>
        </section>
        <section className="w-full flex justify-end ">
          <Button className="hover:bg-buttonColor/75  py-2.5 px-4">
            Avançar
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Welcome;
