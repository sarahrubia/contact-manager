import React from "react";
import { Link } from "react-router-dom";

let ContactList = () => {
  return (
    <React.Fragment>
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-bold">
                  Agenda de Contatos
                  <Link to={"/contacts/add"} className="btn btn-success ms-2">
                    <i className="fa fa-plus-circle me-2"></i>Novo
                  </Link>
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                  nobis? Porro dolorum omnis delectus non quis animi soluta
                  ullam? Praesentium, itaque tempore libero eos delectus quia
                  culpa magni dolor ipsa!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Pesquisa"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-outline-dark"
                        value="busca"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-list">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center dflex justify-content-around">
                    <div className="col-md-4">
                      <img
                        src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                        alt="user"
                        className="contact-img"
                      />
                    </div>
                    <div className="col-md-7">
                      <ul className="list-group">
                        <li className="list-group-item list-group-item-action">
                          Name: <span className="fw-bold p-2">Sarah</span>
                        </li>

                        <li className="list-group-item list-group-item-action">
                          Telefone:
                          <span className="fw-bold p-2">+5582987456321</span>
                        </li>

                        <li className="list-group-item list-group-item-action">
                          E-mail:
                          <span className="fw-bold p-2">sarah@mail.com</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-1 d-flex flex-column align-items-center">
                      <Link
                        to={"/contacts/view/:contactId"}
                        className="btn btn-warning my-1"
                      >
                        <i className="fa fa-eye"></i>
                      </Link>
                      <Link
                        to={"/contacts/edit/:contactId"}
                        className="btn btn-primary my-1"
                      >
                        <i className="fa fa-pen"></i>
                      </Link>
                      <button
                        to={"/contacts/view/:contactId"}
                        className="btn btn-danger my-1"
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </div>
                  </div>

                  <div className="col-md-1"></div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center dflex justify-content-around">
                    <div className="col-md-4">
                      <img
                        src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                        alt="user"
                        className="contact-img"
                      />
                    </div>
                    <div className="col-md-7">
                      <ul className="list-group">
                        <li className="list-group-item list-group-item-action">
                          Name: <span className="fw-bold p-2">Sarah</span>
                        </li>

                        <li className="list-group-item list-group-item-action">
                          Telefone:
                          <span className="fw-bold p-2">+5582987456321</span>
                        </li>

                        <li className="list-group-item list-group-item-action">
                          E-mail:
                          <span className="fw-bold p-2">sarah@mail.com</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-1 d-flex flex-column align-items-center">
                      <Link
                        to={"/contacts/view/:contactId"}
                        className="btn btn-warning my-1"
                      >
                        <i className="fa fa-eye"></i>
                      </Link>
                      <Link
                        to={"/contacts/edit/:contactId"}
                        className="btn btn-primary my-1"
                      >
                        <i className="fa fa-pen"></i>
                      </Link>
                      <button
                        to={"/contacts/view/:contactId"}
                        className="btn btn-danger my-1"
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </div>
                  </div>

                  <div className="col-md-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactList;
