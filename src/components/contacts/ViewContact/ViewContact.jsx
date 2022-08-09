import React from "react";
import { Link } from "react-router-dom";

let ViewContact = () => {
  return (
    <React.Fragment>
      <section className="view-contact-intro p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-warning fw-bold">Informações do contato</p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate magnam nulla error rerum recusandae, obcaecati unde
                consequatur id consectetur perferendis at itaque dicta nemo
                possimus quis tempora nisi quas vel!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="view-contact mt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <img
                src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                alt=""
                className="contact-img"
              />
            </div>
            <div className="col-md-8">
              <ul className="list-group">
                <li className="list-group-item list-group-item-action">
                  Name:
                  <span className="fw-bold p-2">Sarah</span>
                </li>

                <li className="list-group-item list-group-item-action">
                  Telefone:
                  <span className="fw-bold p-2">+5582987456321</span>
                </li>

                <li className="list-group-item list-group-item-action">
                  E-mail:
                  <span className="fw-bold p-2">sarah@mail.com</span>
                </li>

                <li className="list-group-item list-group-item-action">
                  Empresa:
                  <span className="fw-bold p-2">Nome da empresa</span>
                </li>

                <li className="list-group-item list-group-item-action">
                  Título
                  <span className="fw-bold p-2">Agrupamento</span>
                </li>

                <li className="list-group-item list-group-item-action">
                  CEP:
                  <span className="fw-bold p-2">57000-000</span>
                </li>

                <li className="list-group-item list-group-item-action">
                  Logradouro:
                  <span className="fw-bold p-2">Rua C, 124</span>
                </li>

                <li className="list-group-item list-group-item-action">
                  Bairro:
                  <span className="fw-bold p-2">Biu Bentes</span>
                </li>

                <li className="list-group-item list-group-item-action">
                  Cidade:
                  <span className="fw-bold p-2">Maceió</span>
                </li>

                <li className="list-group-item list-group-item-action">
                  Estado:
                  <span className="fw-bold p-2">AL</span>
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="col">
                <Link to={"/contacts/list"} className="btn btn-warning">
                  Voltar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ViewContact;
