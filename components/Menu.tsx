import { useUser } from "@auth0/nextjs-auth0";
import styled from "styled-components";

const NavbarStyled = styled.nav`
  margin-bottom: 40px;
`;

const BloqueStyled = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
`;

const BloqueStyled2 = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  width: 100%;
  margin: 0;
`;

const OptionStyled = styled.a`
  margin: 5px 10px;
`;

const ImgStyled = styled.img`
  margin-right: 50px;
`;

const IconStyled = styled.img`
  margin: 5px 10px;
`;

const NameStyled = styled.p`
  margin: 5px 10px;
`;

export const Menu = () => {
  const { user, error, isLoading } = useUser();
  return (
    <NavbarStyled className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-md ">
        <div
          className="collapse navbar-collapse sticky-top"
          id="navbarSupportedContent"
        >
          <BloqueStyled>
            <ImgStyled
              src="https://www.grupomaxsym.es/_files/200003192-8795287953/450/WhatsApp%20Image%202021-04-01%20at%2010.28.45-7.jpeg"
              alt="SpacioScooterLogo"
              height="50px"
            />
            <OptionStyled
              className="nav-link active text-warning"
              aria-current="page"
              href="/"
            >
              INICIO
            </OptionStyled>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDarkDropdown"
              aria-controls="navbarNavDarkDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarNavDarkDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <OptionStyled
                    className="nav-link dropdown-toggle text-warning"
                    href="#"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    AREA PRIVADA
                  </OptionStyled>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <a
                        className="dropdown-item text-warning"
                        href="/hacerse-socio"
                      >
                        HACERSE SOCIO
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-warning"
                        href="/concursos"
                      >
                        CONCURSOS
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-warning"
                        href="comunicaciones"
                      >
                        COMUNICACIONES
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-warning" href="/venta">
                        VENTAS
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <OptionStyled
                    className="nav-link dropdown-toggle text-warning"
                    href="#"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    RUTAS
                  </OptionStyled>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item text-warning" href="/rutas">
                        RUTAS
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-warning" href="/viajes">
                        VIAJES
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-warning"
                        href="/proximas-salidas"
                      >
                        PROXIMAS SALIDAS
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <OptionStyled
                    className="nav-link dropdown-toggle text-warning"
                    href="#"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    EVENTOS
                  </OptionStyled>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item text-warning" href="/eventos">
                        PROXIMOS EVENTOS
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-warning"
                        href="/momentos"
                      >
                        REMEMORANDO MOMENTOS
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <OptionStyled
                    className="nav-link dropdown-toggle text-warning"
                    href="#"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MAS
                  </OptionStyled>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <a
                        className="dropdown-item text-warning"
                        href="/quienes-somos"
                      >
                        QUIENES SOMOS
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-warning"
                        href="/redes-sociales"
                      >
                        REDES SOCIALES
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-warning"
                        href="/contacto"
                      >
                        CONTACTO
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </BloqueStyled>
          <div>
            {!user && (
              <BloqueStyled2>
                <a href="/api/auth/login" className="btn btn-warning">
                  Login
                </a>
              </BloqueStyled2>
            )}
          </div>
          <div>
            {user && (
              <BloqueStyled2>
                <NameStyled className="text-warning">{user.name}</NameStyled>
                <IconStyled
                  src={user.picture}
                  width="33"
                  className="rounded"
                />{" "}
                <a href="/api/auth/logout" className="btn btn-warning">
                  Logout
                </a>
              </BloqueStyled2>
            )}
          </div>
        </div>
      </div>
    </NavbarStyled>
  );
};
