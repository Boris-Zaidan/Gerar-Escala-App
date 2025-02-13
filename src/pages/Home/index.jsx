import { Link } from "react-router-dom";
import img from "../../assets/image/LogoTipo.png";
import Button from "../../components/Button";

const Home = () => {
  return (
    <main
      className="flex flex-col w-full h-dvh overflow-hidden items-center justify-between p-2  sm:w-full sm:h-dvh
      md:max-w-full md:h-screen md:flex md:flex-col md:justify-center md:items-center "
    >
      <section className="w-full h-3/6  flex justify-center sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-full sm:h-96 md:w-full md:h-2/4 md:m-0 md:justify-center md:items-center lg:max-w-5xl">
        <img
          src={img}
          alt="Logotipo da igreja IECO"
          className="w-full h-full object-cover rounded-md shadow-md  sm:w-5/6  sm:h-5/6"
        />
      </section>

      <section className="w-full  h-2/5  pt-3 flex flex-col items-center text-center  mt-1 md:w-full  md:mt-5 ">
        <h2 className="text-3xl md:text-5xl font-bold text-textColor  md:font-semibold">
          Ministério
        </h2>
        <ul className="flex gap-3 mt-6 text-textColor md:gap-10">
          <li className="text-base font-medium  md:text-3xl md:font-normal">
            Pr. Oséias Fernandes
          </li>
          <li className="text-base font-medium  md:text-3xl md:font-normal">
            Pra. Marcileia Fernandes
          </li>
        </ul>
        <span className="text-textColor/95 mt-6 md:text-2xl md:font-light">
          Equipe de Pastores e Obreiros
        </span>
      </section>

      <div className="w-full  h-1/6 flex justify-end mr-1 mt-5  sm:w-5/6 md:mb-3  md:w-full md:h-1/4 md:flex md:items-end md:justify-end lg:max-w-5xl lg:flex lg:justify-end lg:p-3 lg:mr-36">
        <Link to="/Welcome" className="contents">
          <Button className="hover:bg-buttonColor/75  py-2.5 px-4 ">
            Avançar
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
