import React from "react";
import { Link } from "react-router-dom";

let EditContact = () => {
  return (
    <React.Fragment>
      <section className="add-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-primary fw-bold">Editar contato</p>
              <p className="fst-italic">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                earum minima dicta similique amet totam quae quia tempora porro,
                eum deleniti error ratione perspiciatis fugiat obcaecati magni?
                Itaque, quas vel.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-4">
              <form>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nome"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="URL da foto"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Número de telefone"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="E-mail"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Empresa"
                  />
                </div>
                <div className="mb-2">
                  <input className="form-control" placeholder="Título" />
                </div>
                <div className="mb-2">
                  <select className="form-control">
                    <option value="">Selecione</option>
                    <option value="friends">Amigos</option>
                    <option value="family">Família</option>
                    <option value="work">Trabalho</option>
                  </select>
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="CEP"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Logradouro"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Bairro"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cidade"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Estado"
                  />
                </div>

                <div className="mb-2">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Atualizar"
                  />
                  <Link to={"/contacts/list"} className="btn btn-dark ms-2">
                    Cancelar
                  </Link>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <img
                src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                alt=""
                className="contact-img"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default EditContact;
