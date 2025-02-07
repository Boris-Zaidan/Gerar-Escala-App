import img from "../../assets/image/LogoTipo.png";
import Button from "../../components/Button";

const Home = () => {
  return (
    <main className="flex flex-col w-screen h-screen items-center justify-between p-2">
      <section className="w-full flex justify-center">
        <img
          src={img}
          alt="Logotipo da igreja IECO"
          className="w-full max-w-md object-cover rounded-md shadow-md"
        />
      </section>

      <section className="w-full flex flex-col items-center text-center mt-1">
        <h2 className="text-3xl md:text-3xl font-bold text-textColor">
          Ministério
        </h2>
        <ul className="flex gap-5 mt-6 text-textColor">
          <li className="text-base font-medium">Pr. Oséias Fernandes</li>
          <li className="text-base font-medium">Pra. Marcileia Fernandes</li>
        </ul>
        <span className="text-textColor/95 mt-6">
          Equipe de Pastores e Obreiros
        </span>
      </section>

      <div className="w-full flex justify-end mr-3 mt-6">
        <Button>Avançar</Button>
      </div>
    </main>
  );
};

export default Home;
